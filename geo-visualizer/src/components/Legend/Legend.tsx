import { useState } from 'react';
import './Legend.css';

const NODE_TYPES = [
  { color: '#e6d2b4', label: 'City / Cultural Center' },
  { color: '#2e9ce0', label: 'Port' },
  { color: '#ebac23', label: 'Trade Hub' },
  { color: '#d73b3b', label: 'Kingdom Capital' },
  { color: '#a36bd6', label: 'Monastery / Learning' },
];

export function Legend() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`legend ${collapsed ? 'legend--collapsed' : ''}`} id="map-legend">
      <button
        className="legend__toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" style={{ opacity: 0.7 }}>
          <circle cx="3" cy="3" r="2" />
          <circle cx="11" cy="3" r="2" />
          <circle cx="3" cy="11" r="2" />
          <circle cx="11" cy="11" r="2" />
        </svg>
        <span>Legend</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          className={`legend__chevron ${collapsed ? '' : 'legend__chevron--open'}`}
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>

      {!collapsed && (
        <div className="legend__body">
          <div className="legend__section-title">Node Types</div>
          {NODE_TYPES.map((nt) => (
            <div key={nt.label} className="legend__item">
              <span
                className="legend__dot"
                style={{ backgroundColor: nt.color }}
              />
              <span className="legend__item-label">{nt.label}</span>
            </div>
          ))}
          <div className="legend__section-title" style={{ marginTop: 8 }}>Routes</div>
          <div className="legend__item">
            <span className="legend__line" />
            <span className="legend__item-label">Width = importance</span>
          </div>
          <div className="legend__item">
            <span className="legend__line legend__line--glow" />
            <span className="legend__item-label">Glow = category color</span>
          </div>
        </div>
      )}
    </div>
  );
}
