import { useAppStore } from '../../store/useAppStore';
import { CATEGORY_MAP } from '../../data/categories';
import { NODE_MAP } from '../../data/nodes';
import './DetailPanel.css';

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

const NODE_TYPE_LABELS: Record<string, string> = {
  city: 'Ancient City',
  port: 'Port City',
  kingdom: 'Kingdom / Empire Capital',
  monastery: 'Monastery / Learning Center',
  trade_hub: 'Trade Hub',
  cultural_center: 'Cultural Center',
  region: 'Region',
};

export function DetailPanel() {
  const selectedNode = useAppStore((s) => s.selectedNode);
  const selectedThread = useAppStore((s) => s.selectedThread);
  const detailPanelOpen = useAppStore((s) => s.detailPanelOpen);
  const selectNode = useAppStore((s) => s.selectNode);
  const selectThread = useAppStore((s) => s.selectThread);
  const setDetailPanelOpen = useAppStore((s) => s.setDetailPanelOpen);

  if (!detailPanelOpen || (!selectedNode && !selectedThread)) return null;

  const handleClose = () => {
    selectNode(null);
    selectThread(null);
    setDetailPanelOpen(false);
  };

  return (
    <div className="detail-panel" id="detail-panel">
      <button className="detail-panel__close" onClick={handleClose} aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>

      {selectedNode && <NodeDetail />}
      {selectedThread && <ThreadDetail />}
    </div>
  );
}

function NodeDetail() {
  const node = useAppStore((s) => s.selectedNode);
  if (!node) return null;

  return (
    <div className="detail-panel__content">
      <div className="detail-panel__badge">{NODE_TYPE_LABELS[node.type] || node.type}</div>
      <h2 className="detail-panel__title">{node.name}</h2>
      <div className="detail-panel__period">
        {formatYear(node.startYear)} — {formatYear(node.endYear)}
      </div>

      <p className="detail-panel__description">{node.description}</p>

      {node.associatedCultures.length > 0 && (
        <div className="detail-panel__section">
          <h4 className="detail-panel__section-title">Associated Cultures</h4>
          <div className="detail-panel__tags">
            {node.associatedCultures.map((c) => (
              <span key={c} className="detail-panel__tag">{c}</span>
            ))}
          </div>
        </div>
      )}

      {node.modernName && (
        <div className="detail-panel__section">
          <h4 className="detail-panel__section-title">Modern Name</h4>
          <p className="detail-panel__text">{node.modernName}</p>
        </div>
      )}

      {node.modernLegacy && (
        <div className="detail-panel__section detail-panel__section--legacy">
          <h4 className="detail-panel__section-title">
            <span className="detail-panel__legacy-icon">✦</span>
            Living Legacy
          </h4>
          <p className="detail-panel__text">{node.modernLegacy}</p>
        </div>
      )}
    </div>
  );
}

function ThreadDetail() {
  const thread = useAppStore((s) => s.selectedThread);
  if (!thread) return null;

  const categoryMeta = CATEGORY_MAP.get(thread.category);
  const sourceNode = NODE_MAP.get(thread.source);
  const targetNode = NODE_MAP.get(thread.target);

  return (
    <div className="detail-panel__content">
      {categoryMeta && (
        <div
          className="detail-panel__badge"
          style={{ color: categoryMeta.color, borderColor: categoryMeta.color }}
        >
          {categoryMeta.icon} {categoryMeta.label}
        </div>
      )}
      <h2 className="detail-panel__title">{thread.title}</h2>
      <div className="detail-panel__period">
        {formatYear(thread.startYear)} — {formatYear(thread.endYear)}
      </div>

      {sourceNode && targetNode && (
        <div className="detail-panel__route">
          <span className="detail-panel__route-node">{sourceNode.name}</span>
          <span className="detail-panel__route-arrow">
            {thread.bidirectional ? '⟷' : '→'}
          </span>
          <span className="detail-panel__route-node">{targetNode.name}</span>
        </div>
      )}

      <p className="detail-panel__description">{thread.longSummary}</p>

      {thread.modernLegacy && (
        <div className="detail-panel__section detail-panel__section--legacy">
          <h4 className="detail-panel__section-title">
            <span className="detail-panel__legacy-icon">✦</span>
            Living Legacy
          </h4>
          <p className="detail-panel__text">{thread.modernLegacy}</p>
        </div>
      )}
    </div>
  );
}
