# Geo Visualizer: Civilizations of the Subcontinent

Geo Visualizer is an interactive, cinematic map-based visualization that showcases the movement, overlap, and spread of civilizations, cultures, trade routes, religious ideas, and historical influence across the Indian subcontinent and nearby connected regions over 5,000 years.

## Features

- **Interactive Timeline (3300 BCE – 1900 CE):** Scrub through history using a responsive timeline grouped into 5 distinct historical eras.
- **Cinematic Dark Map:** Beautiful, distraction-free map built on MapLibre GL and OpenFreeMap.
- **Dynamic Filtering:** Toggle categories of influence (Trade, Religion, Political, Migration, Language, Art & Architecture, Knowledge & Science).
- **GPU-Accelerated Data Overlays:** High-performance rendering of historical nodes and animated routes powered by `deck.gl`.
- **Rich Historical Context:** Click on any node or route to open a detailed narrative panel, complete with modern legacy insights.
- **Smooth Visual Transitions:** Opacity-based temporal fading ensures a fluid, immersive experience without jarring pop-ins.
- **Keyboard Controls:** Play/Pause using `Space`, scrub time using `Left Arrow` / `Right Arrow`.

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Map Engine:** MapLibre GL JS + `react-map-gl`
- **Visualization:** `deck.gl` (PathLayer, ScatterplotLayer)
- **State Management:** Zustand
- **Styling:** Vanilla CSS with custom design tokens (Glassmorphism UI)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/ChinmayA301/Geo-Visualizer.git
   cd Geo-Visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`.

## Building for Production

To create a production build:
```bash
npm run build
```
The optimized bundle will be available in the `dist` directory.

## Project Structure
- `src/components/MapCanvas/`: The core deck.gl rendering and map layers.
- `src/components/Timeline/`: The custom time-scrubber and playback controls.
- `src/data/`: Static seed data holding Nodes, Threads, Eras, and Categories.
- `src/store/`: Global state management with Zustand.
- `src/hooks/useFilteredData.ts`: Central logic for processing active objects and fade transitions.

## Future Plans (Phase 2)
- **Story Mode:** Curated "auto-played" historical sequences.
- **Modern Legacy Overlays:** Toggle contemporary borders and modern city names.
- **Search & Explore:** Text-based search for specific empires, routes, or nodes.
- **Directional Animations:** Enhanced data flow animations for migration and trade routes.

## License
MIT License
