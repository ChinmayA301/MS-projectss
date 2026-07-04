export type Category =
  | 'trade'
  | 'religion'
  | 'political'
  | 'migration'
  | 'language'
  | 'art_architecture'
  | 'knowledge_science';

export interface CategoryMeta {
  id: Category;
  label: string;
  color: string;
  glowColor: string;
  rgbColor: [number, number, number];
  icon: string;
}
