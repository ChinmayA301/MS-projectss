import { Era } from '../types/eras';

export const ERAS: Era[] = [
  {
    id: 'indus-valley',
    name: 'Indus Valley Civilization',
    startYear: -3300,
    endYear: -1300,
    color: 'hsl(30, 60%, 45%)',
    description:
      'One of the world\'s earliest urban civilizations, centered in the Indus and Ghaggar-Hakra river basins. Known for sophisticated urban planning, drainage systems, and trade networks extending to Mesopotamia.',
  },
  {
    id: 'vedic',
    name: 'Vedic Period',
    startYear: -1500,
    endYear: -500,
    color: 'hsl(45, 70%, 50%)',
    description:
      'Period of Indo-Aryan cultural formation. Composition of the Vedas, development of Sanskrit, early Hinduism, the caste system, and the philosophical traditions of the Upanishads.',
  },
  {
    id: 'maurya-gupta',
    name: 'Mauryan & Gupta Empires',
    startYear: -322,
    endYear: 550,
    color: 'hsl(160, 50%, 45%)',
    description:
      'The Mauryan Empire under Ashoka spread Buddhism across Asia. The Gupta period is considered a golden age of Indian science, mathematics, astronomy, art, and literature.',
  },
  {
    id: 'medieval-islamic',
    name: 'Medieval & Islamic Period',
    startYear: 700,
    endYear: 1526,
    color: 'hsl(210, 55%, 50%)',
    description:
      'The rise of Islamic sultanates, the Delhi Sultanate, Silk Road trade intensification, Bhakti and Sufi movements, and the exchange of Persian, Arabic, and Indian cultures.',
  },
  {
    id: 'mughal-maritime',
    name: 'Mughal & Maritime Era',
    startYear: 1526,
    endYear: 1857,
    color: 'hsl(280, 45%, 50%)',
    description:
      'The Mughal Empire\'s architectural and cultural flowering, the expansion of maritime spice trade, arrival of European trading companies, and the eventual transition to colonial rule.',
  },
];

export const ERA_MAP = new Map(ERAS.map(e => [e.id, e]));

export const TIME_RANGE = {
  min: -3300,
  max: 1900,
} as const;
