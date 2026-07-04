import { CategoryMeta } from '../types/categories';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'trade',
    label: 'Trade',
    color: 'hsl(38, 90%, 55%)',
    glowColor: 'hsla(38, 90%, 55%, 0.4)',
    rgbColor: [235, 172, 35],
    icon: '🏪',
  },
  {
    id: 'religion',
    label: 'Religion',
    color: 'hsl(270, 70%, 65%)',
    glowColor: 'hsla(270, 70%, 65%, 0.4)',
    rgbColor: [163, 107, 214],
    icon: '🕉️',
  },
  {
    id: 'political',
    label: 'Political',
    color: 'hsl(0, 75%, 55%)',
    glowColor: 'hsla(0, 75%, 55%, 0.4)',
    rgbColor: [215, 59, 59],
    icon: '👑',
  },
  {
    id: 'migration',
    label: 'Migration',
    color: 'hsl(170, 70%, 50%)',
    glowColor: 'hsla(170, 70%, 50%, 0.4)',
    rgbColor: [38, 204, 170],
    icon: '🚶',
  },
  {
    id: 'language',
    label: 'Language',
    color: 'hsl(200, 80%, 55%)',
    glowColor: 'hsla(200, 80%, 55%, 0.4)',
    rgbColor: [46, 156, 224],
    icon: '📜',
  },
  {
    id: 'art_architecture',
    label: 'Art & Architecture',
    color: 'hsl(320, 70%, 60%)',
    glowColor: 'hsla(320, 70%, 60%, 0.4)',
    rgbColor: [214, 82, 163],
    icon: '🏛️',
  },
  {
    id: 'knowledge_science',
    label: 'Knowledge & Science',
    color: 'hsl(50, 85%, 55%)',
    glowColor: 'hsla(50, 85%, 55%, 0.4)',
    rgbColor: [230, 200, 40],
    icon: '🔬',
  },
];

export const CATEGORY_MAP = new Map(CATEGORIES.map(c => [c.id, c]));
