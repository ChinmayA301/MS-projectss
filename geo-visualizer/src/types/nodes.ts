export type NodeType =
  | 'city'
  | 'port'
  | 'kingdom'
  | 'monastery'
  | 'trade_hub'
  | 'cultural_center'
  | 'region';

export interface HistoricalNode {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: NodeType;
  startYear: number; // negative for BCE
  endYear: number;
  description: string;
  associatedEras: string[];
  associatedCultures: string[];
  importance: 1 | 2 | 3;
  modernName?: string;
  modernLegacy?: string;
}
