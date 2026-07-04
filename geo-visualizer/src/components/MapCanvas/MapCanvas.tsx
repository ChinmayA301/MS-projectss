import { useCallback, useMemo, useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl/maplibre';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer, PathLayer } from '@deck.gl/layers';
import { MapViewState } from '@deck.gl/core';
import 'maplibre-gl/dist/maplibre-gl.css';

import { useAppStore } from '../../store/useAppStore';
import { NODES } from '../../data/nodes';
import { THREADS } from '../../data/threads';
import { CATEGORY_MAP } from '../../data/categories';
import { NODE_MAP } from '../../data/nodes';
import { useFilteredData, VisibleNode, VisibleThread } from '../../hooks/useFilteredData';
import { useAnimationFrame } from '../../hooks/useAnimationFrame';
import { TIME_RANGE } from '../../data/eras';
import { MapTooltip } from './MapTooltip';
import './MapCanvas.css';

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: 75.0,
  latitude: 23.0,
  zoom: 4.0,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  'https://tiles.openfreemap.org/styles/dark';

export function MapCanvas() {
  const [viewState, setViewState] = useState<MapViewState>(INITIAL_VIEW_STATE);
  const [tooltipInfo, setTooltipInfo] = useState<{
    x: number;
    y: number;
    text: string;
    subtext?: string;
  } | null>(null);

  const currentYear = useAppStore((s) => s.currentYear);
  const setCurrentYear = useAppStore((s) => s.setCurrentYear);
  const activeCategories = useAppStore((s) => s.activeCategories);
  const isPlaying = useAppStore((s) => s.isPlaying);
  const playbackSpeed = useAppStore((s) => s.playbackSpeed);
  const selectNode = useAppStore((s) => s.selectNode);
  const selectThread = useAppStore((s) => s.selectThread);
  const setPlaying = useAppStore((s) => s.setPlaying);
  const hoveredNodeId = useAppStore((s) => s.hoveredNodeId);
  const setHoveredNodeId = useAppStore((s) => s.setHoveredNodeId);
  const setHoveredThreadId = useAppStore((s) => s.setHoveredThreadId);

  const { visibleNodes, visibleThreads } = useFilteredData(
    NODES,
    THREADS,
    currentYear,
    activeCategories
  );

  // ─── Playback loop ─────────────────────────────────────────
  useAnimationFrame(
    (deltaMs: number) => {
      const deltaYears = (deltaMs / 1000) * playbackSpeed;
      const next = currentYear + deltaYears;
      if (next > TIME_RANGE.max) {
        setCurrentYear(TIME_RANGE.min);
        setPlaying(false);
      } else {
        setCurrentYear(next);
      }
    },
    isPlaying
  );

  // ─── Build path data for threads ──────────────────────────
  const threadPaths = useMemo(() => {
    return visibleThreads.map((thread: VisibleThread) => {
      const sourceNode = NODE_MAP.get(thread.source);
      const targetNode = NODE_MAP.get(thread.target);
      if (!sourceNode || !targetNode) return null;

      const path: [number, number][] = [
        sourceNode.coordinates,
        ...(thread.waypoints || []),
        targetNode.coordinates,
      ];

      return {
        ...thread,
        path,
      };
    }).filter(Boolean) as (VisibleThread & { path: [number, number][] })[];
  }, [visibleThreads]);

  // ─── Deck.gl layers ───────────────────────────────────────
  const layers = useMemo(() => {
    // Glow layer (wider, less opaque) behind routes
    const threadGlowLayer = new PathLayer({
      id: 'thread-glow-layer',
      data: threadPaths,
      getPath: (d) => d.path,
      getColor: (d) => {
        const meta = CATEGORY_MAP.get(d.category);
        const rgb = meta?.rgbColor || [255, 255, 255];
        return [...rgb, Math.floor(d.opacity * 50)] as [number, number, number, number];
      },
      getWidth: (d) => (d.importance * 6 + 8),
      widthUnits: 'pixels' as const,
      capRounded: true,
      jointRounded: true,
      updateTriggers: {
        getColor: [currentYear],
        getWidth: [currentYear],
      },
    });

    // Main route lines
    const threadLayer = new PathLayer({
      id: 'thread-layer',
      data: threadPaths,
      getPath: (d) => d.path,
      getColor: (d) => {
        const meta = CATEGORY_MAP.get(d.category);
        const rgb = meta?.rgbColor || [255, 255, 255];
        return [...rgb, Math.floor(d.opacity * 200)] as [number, number, number, number];
      },
      getWidth: (d) => (d.importance * 2 + 1),
      widthUnits: 'pixels' as const,
      capRounded: true,
      jointRounded: true,
      pickable: true,
      autoHighlight: true,
      highlightColor: [255, 255, 255, 80],
      updateTriggers: {
        getColor: [currentYear],
      },
      onClick: ({ object }) => {
        if (object) selectThread(object);
      },
      onHover: ({ object, x, y }) => {
        if (object) {
          setTooltipInfo({
            x,
            y,
            text: object.title,
            subtext: `${formatYear(object.startYear)} — ${formatYear(object.endYear)}`,
          });
          setHoveredThreadId(object.id);
        } else {
          setTooltipInfo(null);
          setHoveredThreadId(null);
        }
      },
    });

    // Node glow layer (outer pulse)
    const nodeGlowLayer = new ScatterplotLayer<VisibleNode>({
      id: 'node-glow-layer',
      data: visibleNodes,
      getPosition: (d) => d.coordinates,
      getRadius: (d) => {
        const base = d.importance * 5 + 6;
        return d.id === hoveredNodeId ? base + 6 : base + 3;
      },
      getFillColor: (d) => {
        return [255, 220, 150, Math.floor(d.opacity * 40)] as [number, number, number, number];
      },
      radiusUnits: 'pixels' as const,
      updateTriggers: {
        getRadius: [hoveredNodeId, currentYear],
        getFillColor: [currentYear],
      },
    });

    // Node layer
    const nodeLayer = new ScatterplotLayer<VisibleNode>({
      id: 'node-layer',
      data: visibleNodes,
      getPosition: (d) => d.coordinates,
      getRadius: (d) => {
        const base = d.importance * 3 + 3;
        return d.id === hoveredNodeId ? base + 2 : base;
      },
      getFillColor: (d) => {
        const alpha = Math.floor(d.opacity * 240);
        if (d.type === 'monastery') return [163, 107, 214, alpha];
        if (d.type === 'port') return [46, 156, 224, alpha];
        if (d.type === 'trade_hub') return [235, 172, 35, alpha];
        if (d.type === 'kingdom') return [215, 59, 59, alpha];
        return [230, 210, 180, alpha]; // default warm
      },
      radiusUnits: 'pixels' as const,
      pickable: true,
      autoHighlight: true,
      highlightColor: [255, 255, 255, 80],
      updateTriggers: {
        getRadius: [hoveredNodeId, currentYear],
        getFillColor: [currentYear],
      },
      onClick: ({ object }) => {
        if (object) selectNode(object);
      },
      onHover: ({ object, x, y }) => {
        if (object) {
          setTooltipInfo({
            x,
            y,
            text: object.name,
            subtext: `${object.type} · ${formatYear(object.startYear)} — ${formatYear(object.endYear)}`,
          });
          setHoveredNodeId(object.id);
        } else {
          setTooltipInfo(null);
          setHoveredNodeId(null);
        }
      },
    });

    return [threadGlowLayer, threadLayer, nodeGlowLayer, nodeLayer];
  }, [
    threadPaths,
    visibleNodes,
    currentYear,
    hoveredNodeId,
    selectNode,
    selectThread,
    setHoveredNodeId,
    setHoveredThreadId,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onViewStateChange = useCallback(
    (params: any) => {
      setViewState(params.viewState as MapViewState);
    },
    []
  );

  return (
    <div className="map-canvas">
      <DeckGL
        viewState={viewState}
        onViewStateChange={onViewStateChange}
        controller={true}
        layers={layers}
        getCursor={({ isHovering }) => (isHovering ? 'pointer' : 'grab')}
      >
        <Map
          mapStyle={MAP_STYLE}
          attributionControl={false}
        >
          <NavigationControl position="top-right" showCompass={false} />
        </Map>
      </DeckGL>
      {tooltipInfo && (
        <MapTooltip
          x={tooltipInfo.x}
          y={tooltipInfo.y}
          text={tooltipInfo.text}
          subtext={tooltipInfo.subtext}
        />
      )}
    </div>
  );
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}
