import { Category } from './categories';

export interface HistoricalThread {
  id: string;
  title: string;
  category: Category;
  source: string; // node ID
  target: string; // node ID
  waypoints?: [number, number][]; // intermediate [lng, lat] for curved routes
  startYear: number;
  endYear: number;
  summary: string;
  longSummary: string;
  modernLegacy?: string;
  importance: 1 | 2 | 3;
  bidirectional: boolean;
}
