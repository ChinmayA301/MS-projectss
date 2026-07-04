import { create } from 'zustand';
import { Category, HistoricalNode, HistoricalThread } from '../types';

interface AppState {
  // ─── Time ──────────────────────────────────────────────────
  currentYear: number;
  setCurrentYear: (year: number) => void;

  isPlaying: boolean;
  togglePlayback: () => void;
  setPlaying: (v: boolean) => void;

  playbackSpeed: number; // years per second
  setPlaybackSpeed: (s: number) => void;

  // ─── Filters ───────────────────────────────────────────────
  activeCategories: Set<Category>;
  toggleCategory: (cat: Category) => void;
  setAllCategories: (on: boolean) => void;

  // ─── Selection ─────────────────────────────────────────────
  selectedNode: HistoricalNode | null;
  selectNode: (n: HistoricalNode | null) => void;

  selectedThread: HistoricalThread | null;
  selectThread: (t: HistoricalThread | null) => void;

  // ─── Hover ─────────────────────────────────────────────────
  hoveredNodeId: string | null;
  setHoveredNodeId: (id: string | null) => void;

  hoveredThreadId: string | null;
  setHoveredThreadId: (id: string | null) => void;

  // ─── UI state ──────────────────────────────────────────────
  detailPanelOpen: boolean;
  setDetailPanelOpen: (v: boolean) => void;
}

const ALL_CATEGORIES = new Set<Category>([
  'trade',
  'religion',
  'political',
  'migration',
  'language',
  'art_architecture',
  'knowledge_science',
]);

export const useAppStore = create<AppState>((set) => ({
  // Time
  currentYear: -2500,
  setCurrentYear: (year) => set({ currentYear: year }),

  isPlaying: false,
  togglePlayback: () => set((s) => ({ isPlaying: !s.isPlaying })),
  setPlaying: (v) => set({ isPlaying: v }),

  playbackSpeed: 30,
  setPlaybackSpeed: (s) => set({ playbackSpeed: s }),

  // Filters
  activeCategories: new Set(ALL_CATEGORIES),
  toggleCategory: (cat) =>
    set((s) => {
      const next = new Set(s.activeCategories);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return { activeCategories: next };
    }),
  setAllCategories: (on) =>
    set({ activeCategories: on ? new Set(ALL_CATEGORIES) : new Set() }),

  // Selection
  selectedNode: null,
  selectNode: (n) =>
    set({ selectedNode: n, selectedThread: null, detailPanelOpen: n !== null }),

  selectedThread: null,
  selectThread: (t) =>
    set({ selectedThread: t, selectedNode: null, detailPanelOpen: t !== null }),

  // Hover
  hoveredNodeId: null,
  setHoveredNodeId: (id) => set({ hoveredNodeId: id }),

  hoveredThreadId: null,
  setHoveredThreadId: (id) => set({ hoveredThreadId: id }),

  // UI
  detailPanelOpen: false,
  setDetailPanelOpen: (v) => set({ detailPanelOpen: v }),
}));
