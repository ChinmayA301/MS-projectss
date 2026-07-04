import { useCallback, useRef } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { ERAS, TIME_RANGE } from '../../data/eras';
import './Timeline.css';

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(Math.round(year))} BCE`;
  return `${Math.round(year)} CE`;
}

function getEraForYear(year: number) {
  return ERAS.find((e) => year >= e.startYear && year <= e.endYear);
}

export function Timeline() {
  const currentYear = useAppStore((s) => s.currentYear);
  const setCurrentYear = useAppStore((s) => s.setCurrentYear);
  const isPlaying = useAppStore((s) => s.isPlaying);
  const togglePlayback = useAppStore((s) => s.togglePlayback);
  const playbackSpeed = useAppStore((s) => s.playbackSpeed);
  const setPlaybackSpeed = useAppStore((s) => s.setPlaybackSpeed);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalRange = TIME_RANGE.max - TIME_RANGE.min;
  const progress = ((currentYear - TIME_RANGE.min) / totalRange) * 100;

  const currentEra = getEraForYear(currentYear);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const year = TIME_RANGE.min + pct * totalRange;
      setCurrentYear(Math.round(year));
    },
    [setCurrentYear, totalRange]
  );

  const handleTrackDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.buttons !== 1) return;
      handleTrackClick(e);
    },
    [handleTrackClick]
  );

  const speeds = [10, 30, 60, 120];

  return (
    <div className="timeline" id="timeline-bar">
      {/* Year display */}
      <div className="timeline__year-display">
        <span className="timeline__year">{formatYear(currentYear)}</span>
        {currentEra && (
          <span
            className="timeline__era-label"
            style={{ color: currentEra.color }}
          >
            {currentEra.name}
          </span>
        )}
      </div>

      {/* Controls row */}
      <div className="timeline__controls">
        {/* Play/pause */}
        <button
          className="timeline__play-btn"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          id="play-pause-btn"
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z" />
            </svg>
          )}
        </button>

        {/* Track */}
        <div
          className="timeline__track"
          ref={trackRef}
          onClick={handleTrackClick}
          onMouseMove={handleTrackDrag}
          id="timeline-track"
        >
          {/* Era bands */}
          {ERAS.map((era) => {
            const left =
              ((era.startYear - TIME_RANGE.min) / totalRange) * 100;
            const width =
              ((era.endYear - era.startYear) / totalRange) * 100;
            return (
              <div
                key={era.id}
                className="timeline__era-band"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  backgroundColor: era.color,
                }}
                title={era.name}
              />
            );
          })}

          {/* Progress fill */}
          <div
            className="timeline__progress"
            style={{ width: `${progress}%` }}
          />

          {/* Thumb */}
          <div
            className="timeline__thumb"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Speed selector */}
        <div className="timeline__speed">
          {speeds.map((s) => (
            <button
              key={s}
              className={`timeline__speed-btn ${
                playbackSpeed === s ? 'timeline__speed-btn--active' : ''
              }`}
              onClick={() => setPlaybackSpeed(s)}
            >
              {s < 60 ? `${s}` : `${s / 60}×60`}
            </button>
          ))}
          <span className="timeline__speed-label">yr/s</span>
        </div>
      </div>
    </div>
  );
}
