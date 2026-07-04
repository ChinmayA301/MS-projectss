import { useEffect } from 'react';
import { MapCanvas } from './components/MapCanvas/MapCanvas';
import { Timeline } from './components/Timeline/Timeline';
import { FilterRail } from './components/FilterRail/FilterRail';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { Legend } from './components/Legend/Legend';
import { useAppStore } from './store/useAppStore';
import './App.css';

function App() {
  const setCurrentYear = useAppStore((s) => s.setCurrentYear);
  const togglePlayback = useAppStore((s) => s.togglePlayback);
  const currentYear = useAppStore((s) => s.currentYear);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlayback();
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentYear(currentYear + 50);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentYear(currentYear - 50);
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [togglePlayback, setCurrentYear, currentYear]);

  return (
    <div className="app" id="app-root">
      <MapCanvas />
      <FilterRail />
      <DetailPanel />
      <Legend />
      <Timeline />

      {/* App title overlay */}
      <div className="app__title-bar">
        <h1 className="app__title">
          <span className="app__title-geo">Geo</span>Visualizer
        </h1>
        <p className="app__subtitle">Civilizations of the Subcontinent</p>
      </div>
    </div>
  );
}

export default App;
