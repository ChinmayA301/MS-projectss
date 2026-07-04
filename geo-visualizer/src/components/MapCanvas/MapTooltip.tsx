import './MapTooltip.css';

interface MapTooltipProps {
  x: number;
  y: number;
  text: string;
  subtext?: string;
}

export function MapTooltip({ x, y, text, subtext }: MapTooltipProps) {
  return (
    <div
      className="map-tooltip"
      style={{
        left: x + 12,
        top: y - 12,
      }}
    >
      <div className="map-tooltip__text">{text}</div>
      {subtext && <div className="map-tooltip__subtext">{subtext}</div>}
    </div>
  );
}
