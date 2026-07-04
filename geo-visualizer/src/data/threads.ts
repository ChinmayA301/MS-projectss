import { HistoricalThread } from '../types/threads';

export const THREADS: HistoricalThread[] = [
  // ─── TRADE ───────────────────────────────────────────────────
  {
    id: 'indus-mesopotamia-trade',
    title: 'Indus–Mesopotamia Maritime Trade',
    category: 'trade',
    source: 'lothal',
    target: 'hormuz',
    waypoints: [
      [66.0, 24.5],
      [58.5, 25.0],
    ],
    startYear: -2600,
    endYear: -1900,
    summary:
      'Maritime trade route connecting Indus Valley ports to Mesopotamia via the Persian Gulf.',
    longSummary:
      'The Indus Valley Civilization maintained a sophisticated maritime trade network with Mesopotamia (modern Iraq). Ships from ports like Lothal carried carnelian beads, shell artifacts, weights, and textiles westward through the Persian Gulf. Mesopotamian texts refer to a land called "Meluhha" — widely identified as the Indus region. This trade relationship, spanning roughly 700 years, represents one of the earliest documented long-distance maritime exchange systems in human history.',
    modernLegacy:
      'The standardized weights and measures developed for this trade may have influenced later commercial systems. Gujarat\'s continued role as a maritime trade hub echoes this ancient tradition.',
    importance: 3,
    bidirectional: true,
  },
  {
    id: 'silk-road-taxila',
    title: 'Silk Road — Central Asia to Taxila',
    category: 'trade',
    source: 'samarkand',
    target: 'taxila',
    waypoints: [
      [68.5, 37.0],
      [69.5, 35.5],
    ],
    startYear: -200,
    endYear: 1400,
    summary:
      'The southern branch of the Silk Road connecting Central Asia to the Indian subcontinent through the Khyber Pass.',
    longSummary:
      'The Silk Road\'s southern branch connected Samarkand and other Central Asian cities to the Indian subcontinent via the mountain passes of the Hindu Kush and Karakoram. Taxila served as the primary receiving point. Goods flowing south included silk, jade, horses, and lapis lazuli; northward went spices, cotton, gemstones, and ivory. Beyond trade goods, this route carried ideas — Greek philosophy, Buddhist art, Persian administrative systems, and Indian mathematics all traveled this corridor.',
    modernLegacy:
      'The Karakoram Highway (China-Pakistan) roughly follows this ancient route. The cultural fusion visible in Gandharan Buddhist art — Greek bodies with Indian spiritual expressions — is a direct product of this exchange.',
    importance: 3,
    bidirectional: true,
  },
  {
    id: 'spice-route-calicut-aden',
    title: 'Indian Ocean Spice Route',
    category: 'trade',
    source: 'calicut',
    target: 'aden',
    waypoints: [
      [72.0, 10.0],
      [55.0, 12.0],
    ],
    startYear: 800,
    endYear: 1800,
    summary:
      'Maritime spice trade connecting the Malabar Coast to Arabia, East Africa, and beyond.',
    longSummary:
      'The Malabar Coast of Kerala, centered on Calicut, was the world\'s primary source of black pepper, cardamom, and other spices for over a millennium. Arab, Persian, Chinese, and later European traders sailed monsoon-driven routes across the Indian Ocean. The Zamorin rulers of Calicut encouraged this cosmopolitan trade. When Vasco da Gama arrived in 1498, he disrupted but did not destroy this network — it adapted and persisted for centuries.',
    modernLegacy:
      'Kerala\'s cosmopolitan identity — its Christian, Muslim, Hindu, and Jewish communities — is a direct legacy of centuries of Indian Ocean trade. The word "calico" derives from Calicut.',
    importance: 3,
    bidirectional: true,
  },
  {
    id: 'surat-hormuz-trade',
    title: 'Surat–Persian Gulf Trade',
    category: 'trade',
    source: 'surat',
    target: 'hormuz',
    startYear: 1500,
    endYear: 1750,
    summary:
      'Major Mughal-era trade route connecting Gujarat\'s premier port to the Persian Gulf.',
    longSummary:
      'Surat rose to become the Mughal Empire\'s most important port in the 16th century. Its merchants traded textiles, indigo, and spices through Hormuz to Persian and Ottoman markets. The port\'s wealth attracted the British and Dutch East India Companies. At its peak, Surat handled more trade volume than any port in the Indian Ocean, and its merchants were among the richest in the world.',
    modernLegacy:
      'Surat\'s entrepreneurial culture persists — it remains a global center of diamond cutting and textile production. The Parsi community, which arrived from Persia, has profoundly shaped modern Indian industry.',
    importance: 2,
    bidirectional: true,
  },
  {
    id: 'pallava-southeast-asia',
    title: 'Pallava Maritime Expansion to Southeast Asia',
    category: 'trade',
    source: 'mamallapuram',
    target: 'malacca',
    waypoints: [
      [85.0, 8.0],
      [95.0, 5.0],
    ],
    startYear: 300,
    endYear: 900,
    summary:
      'Pallava-era maritime trade and cultural expansion from South India to Southeast Asia.',
    longSummary:
      'The Pallava dynasty of Kanchipuram used Mamallapuram as their primary port for Southeast Asian trade. Beyond goods, this route carried Hindu and Buddhist religious ideas, Sanskrit language, Indian art and architecture, and administrative systems to the Malay Peninsula, Java, Sumatra, and Cambodia. The Dravidian architectural style of Mamallapuram directly influenced temples at Angkor Wat, Borobudur, and Prambanan.',
    modernLegacy:
      'The Hindu temples of Angkor, the Buddhist Borobudur in Java, and the Sanskrit elements in Thai, Khmer, and Malay languages are all legacies of this cultural transmission.',
    importance: 3,
    bidirectional: false,
  },

  // ─── RELIGION ────────────────────────────────────────────────
  {
    id: 'buddhism-to-sri-lanka',
    title: 'Ashoka\'s Buddhist Mission to Sri Lanka',
    category: 'religion',
    source: 'pataliputra',
    target: 'anuradhapura',
    waypoints: [
      [82.0, 20.0],
      [80.5, 13.0],
    ],
    startYear: -250,
    endYear: -200,
    summary:
      'Ashoka sent his son Mahinda to bring Theravada Buddhism to Sri Lanka, where it took permanent root.',
    longSummary:
      'Around 250 BCE, Emperor Ashoka dispatched his son Mahinda and daughter Sanghamitta to the court of King Devanampiya Tissa in Anuradhapura. They brought not only Buddhist teachings but also a sapling from the original Bodhi Tree. This mission established Theravada Buddhism as Sri Lanka\'s dominant faith — a tradition that has continued unbroken for over 2,200 years, making it the longest-surviving Buddhist lineage in the world.',
    modernLegacy:
      'Sri Lanka remains the heartland of Theravada Buddhism. The Bodhi Tree sapling brought by Sanghamitta, the Sri Maha Bodhi, is the oldest verified human-planted tree in the world.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'buddhism-gandhara-bamiyan',
    title: 'Buddhist Expansion Along the Silk Road',
    category: 'religion',
    source: 'taxila',
    target: 'bamiyan',
    startYear: -200,
    endYear: 600,
    summary:
      'Buddhism spread from Gandhara northward through the Hindu Kush to Central Asia via the Silk Road.',
    longSummary:
      'The Gandhara region around Taxila became a crucible of Buddhist art and theology. From here, Buddhist monks and merchants carried the faith along Silk Road routes through Bamiyan, where colossal Buddha statues were carved into sandstone cliffs. The Gandharan style — blending Greek, Persian, and Indian artistic traditions — created the first human representations of the Buddha. This artistic and philosophical tradition continued northward into Central Asia, China, Korea, and Japan.',
    modernLegacy:
      'The image of the Buddha that most of the world recognizes — seated, serene, with robed figure — originated in Gandharan workshops. This style traveled east to become the dominant Buddhist iconographic tradition.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'buddhism-to-tibet',
    title: 'Indian Buddhism to Tibet',
    category: 'religion',
    source: 'vikramashila',
    target: 'lhasa',
    waypoints: [
      [87.5, 27.5],
      [89.0, 28.5],
    ],
    startYear: 700,
    endYear: 1200,
    summary:
      'Indian Buddhist scholars from Nalanda and Vikramashila carried Mahayana and Tantric Buddhism to Tibet.',
    longSummary:
      'The transmission of Buddhism from India to Tibet occurred in two major waves. The first, in the 7th-8th centuries, brought scholars like Padmasambhava and Shantaraksita. The second wave, in the 10th-11th centuries, was led by Atisha from Vikramashila. Tibetan translators worked systematically to render the entire Indian Buddhist canon — philosophy, logic, medicine, astronomy — into Tibetan. When many of these original Sanskrit texts were later destroyed during the Islamic conquests of Bihar, the Tibetan translations became the sole surviving record.',
    modernLegacy:
      'Tibetan Buddhism preserves Indian intellectual traditions that were lost in India itself. The Dalai Lama institution, Tibetan medicine, and Buddhist philosophy all trace directly to these Indian transmissions.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'sufi-spread',
    title: 'Sufi Movement Across the Subcontinent',
    category: 'religion',
    source: 'multan',
    target: 'delhi',
    startYear: 1000,
    endYear: 1500,
    summary:
      'Sufi saints spread a mystical, inclusive Islam across the Indian subcontinent from early centers in Sindh and Multan.',
    longSummary:
      'Sufi orders entered the subcontinent through Sindh and Multan from the 10th century onward. The Chishti order, founded by Moinuddin Chishti in Ajmer, became the most influential, emphasizing music, poetry, and inclusivity. Sufi khanqahs (centers) served as nodes of cultural synthesis — adopting local music traditions, engaging with Hindu yogic practices, and creating a shared devotional culture. Saints like Nizamuddin Auliya in Delhi and Bulleh Shah in Punjab became beloved figures across religious lines.',
    modernLegacy:
      'Qawwali music, the tradition of shrine devotion (dargah culture), and the syncretic Sufi-Bhakti poetry of Kabir, Guru Nanak, and Bulleh Shah all emerge from this tradition and remain vibrant across South Asia.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'buddha-first-sermon',
    title: 'The Buddha\'s First Sermon at Sarnath',
    category: 'religion',
    source: 'bodhgaya',
    target: 'varanasi',
    startYear: -528,
    endYear: -500,
    summary:
      'After attaining enlightenment at Bodh Gaya, the Buddha traveled to Sarnath near Varanasi to deliver his first sermon.',
    longSummary:
      'After his enlightenment under the Bodhi Tree, Siddhartha Gautama walked to the Deer Park at Sarnath near Varanasi, where he delivered the Dhammacakkappavattana Sutta — "Setting the Wheel of Dharma in Motion." This first sermon to his five former companions established the core Buddhist teachings: the Four Noble Truths and the Eightfold Path. From this moment, Buddhism began its spread as an organized religion.',
    modernLegacy:
      'The Ashoka Pillar at Sarnath with its four-lion capital became the national emblem of India. The Dharma Chakra (wheel) from the same pillar is at the center of India\'s national flag.',
    importance: 3,
    bidirectional: false,
  },

  // ─── POLITICAL ───────────────────────────────────────────────
  {
    id: 'mauryan-expansion',
    title: 'Mauryan Imperial Expansion',
    category: 'political',
    source: 'pataliputra',
    target: 'taxila',
    waypoints: [
      [80.0, 27.0],
      [75.0, 30.0],
    ],
    startYear: -322,
    endYear: -185,
    summary:
      'The Mauryan Empire expanded from Pataliputra to control nearly the entire subcontinent.',
    longSummary:
      'Chandragupta Maurya founded the empire in 322 BCE with the strategic guidance of Kautilya (Chanakya). At its zenith under Ashoka, the Mauryan Empire stretched from Afghanistan to Bengal, from the Himalayas to Karnataka — the largest empire in Indian history until the British. Ashoka\'s conversion to Buddhism after the Kalinga War transformed his governance philosophy. His edicts, carved on rocks and pillars across the subcontinent, represent the first recorded articulation of non-violence and religious tolerance as state policy.',
    modernLegacy:
      'Kautilya\'s "Arthashastra" remains studied in political science and international relations. Ashoka\'s symbols — the lion capital and dharma wheel — are India\'s national emblems.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'ghaznavid-raids',
    title: 'Ghaznavid Campaigns into India',
    category: 'political',
    source: 'ghazni',
    target: 'delhi',
    waypoints: [
      [69.0, 34.0],
      [72.0, 31.0],
    ],
    startYear: 1001,
    endYear: 1030,
    summary:
      'Mahmud of Ghazni\'s 17 raids into India brought wealth westward and Persianate culture southward.',
    longSummary:
      'Between 1001 and 1027 CE, Mahmud of Ghazni conducted 17 military campaigns into the Indian subcontinent, raiding wealthy temple cities including Somnath, Mathura, and Kannauj. The immense wealth seized funded Ghazni\'s transformation into a major center of Persian-Islamic culture. Mahmud\'s court attracted scholars like al-Biruni, who wrote the first systematic study of Indian civilization, and Firdausi, author of the Shahnameh. These raids inaugurated a new era of Central Asian–Indian interaction.',
    modernLegacy:
      'Al-Biruni\'s "Kitab al-Hind" remains one of the most perceptive accounts of Indian civilization by an outsider. The Persianate literary and administrative tradition inaugurated by the Ghaznavids shaped the Delhi Sultanate and Mughal court culture.',
    importance: 2,
    bidirectional: false,
  },
  {
    id: 'mughal-founding',
    title: 'Babur\'s Founding of the Mughal Empire',
    category: 'political',
    source: 'kabul',
    target: 'delhi',
    startYear: 1526,
    endYear: 1530,
    summary:
      'Babur marched from Kabul to Delhi, defeating the Lodi Sultanate at Panipat and founding the Mughal dynasty.',
    longSummary:
      'Zahir ud-Din Muhammad Babur, a Timurid prince who had lost his ancestral domains in Central Asia, used Kabul as a base for his invasion of India. At the Battle of Panipat in 1526, his smaller but technologically superior force defeated Ibrahim Lodi\'s army, founding the Mughal Empire that would rule much of the subcontinent for over three centuries. The Mughals brought Persian artistic traditions, administrative innovations, and a cosmopolitan court culture that synthesized Central Asian, Persian, and Indian elements.',
    modernLegacy:
      'Mughal architecture (Taj Mahal, Red Fort), the Urdu language, Mughal miniature painting, and North Indian cuisine (biryani, kebabs) are all direct legacies of this dynasty.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'vijayanagara-empire',
    title: 'Rise of the Vijayanagara Empire',
    category: 'political',
    source: 'hampi',
    target: 'kanchipuram',
    startYear: 1336,
    endYear: 1565,
    summary:
      'The Vijayanagara Empire united much of South India, serving as a bulwark of Hindu culture and Dravidian architecture.',
    longSummary:
      'Founded by Harihara and Bukka, the Vijayanagara Empire at Hampi became the last great Hindu kingdom of peninsular India. At its height under Krishnadevaraya (1509-1529), the empire controlled most of South India. Its capital at Hampi was described by visiting Portuguese and Persian travelers as larger and more prosperous than contemporary Lisbon or Rome. The empire patronized Dravidian temple architecture, Carnatic music, and Sanskrit and Telugu literature.',
    modernLegacy:
      'Carnatic music, Bharatanatyam dance, and the grand temple complexes of South India all flourished under Vijayanagara patronage and continue as living traditions.',
    importance: 2,
    bidirectional: false,
  },

  // ─── MIGRATION ───────────────────────────────────────────────
  {
    id: 'indo-aryan-migration',
    title: 'Indo-Aryan Migration into the Subcontinent',
    category: 'migration',
    source: 'samarkand',
    target: 'hastinapura',
    waypoints: [
      [66.0, 37.0],
      [69.0, 34.5],
      [72.0, 32.0],
    ],
    startYear: -1500,
    endYear: -1000,
    summary:
      'Indo-Aryan-speaking peoples migrated into the Indian subcontinent via Central Asia, bringing Vedic culture.',
    longSummary:
      'Between roughly 1500 and 1000 BCE, groups speaking Indo-Aryan languages migrated from Central Asian steppes into the subcontinent through the Hindu Kush passes. They brought with them Proto-Vedic Sanskrit, horse-drawn chariot technology, pastoral traditions, and the religious hymns that became the Rigveda. This migration was not a single invasion but a gradual process of cultural absorption, intermarriage, and synthesis with existing populations. The fusion of these incoming and indigenous cultures produced the complex Vedic civilization.',
    modernLegacy:
      'Sanskrit and its descendants (Hindi, Bengali, Marathi, Gujarati, etc.) are spoken by over a billion people today. The Vedic hymns composed during this period remain central to Hindu religious practice.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'chola-southeast-asia',
    title: 'Chola Maritime Expansion',
    category: 'migration',
    source: 'kanchipuram',
    target: 'malacca',
    waypoints: [
      [82.0, 8.0],
      [92.0, 6.0],
    ],
    startYear: 1000,
    endYear: 1200,
    summary:
      'The Chola dynasty launched naval expeditions to Southeast Asia, establishing Tamil cultural influence across the region.',
    longSummary:
      'Under Rajendra Chola I, the Chola navy conducted unprecedented maritime expeditions across the Bay of Bengal. In 1025 CE, Rajendra launched a massive naval raid against the Srivijaya Empire in Sumatra and Malaya, the only recorded Indian naval invasion of Southeast Asia. These campaigns extended Tamil commercial and cultural networks throughout the region. Tamil merchant guilds established permanent trading communities in ports across Southeast Asia.',
    modernLegacy:
      'Tamil diaspora communities across Malaysia, Singapore, and Indonesia trace their cultural roots to Chola-era connections. Hindu temple traditions in Bali, Indonesia preserve ancient Tamil ritual practices.',
    importance: 2,
    bidirectional: false,
  },

  // ─── LANGUAGE ────────────────────────────────────────────────
  {
    id: 'sanskrit-spread',
    title: 'Spread of Sanskrit Literary Culture',
    category: 'language',
    source: 'varanasi',
    target: 'kanchipuram',
    startYear: -500,
    endYear: 500,
    summary:
      'Sanskrit spread as the language of learning, liturgy, and literature from the Gangetic plains across all of India.',
    longSummary:
      'Sanskrit evolved from a spoken Vedic language to a refined literary and scholarly lingua franca. The grammarian Panini (c. 500 BCE) codified its rules in the Ashtadhyayi, creating the world\'s first formal grammar. Sanskrit became the language of philosophy (Upanishads), epic poetry (Mahabharata, Ramayana), drama (Kalidasa), science (Aryabhatta), and political theory (Arthashastra). It spread not through conquest but through the prestige of its intellectual traditions, adopted by elites across the entire subcontinent.',
    modernLegacy:
      'Sanskrit\'s grammatical framework influenced modern linguistics. Its descendant languages (Hindi, Bengali, Marathi, etc.) are spoken by over 1 billion people. Its script system (Brahmi → Devanagari) is the ancestor of most South and Southeast Asian writing systems.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'persian-influence',
    title: 'Persian Language Influence in India',
    category: 'language',
    source: 'ghazni',
    target: 'lahore',
    startYear: 1000,
    endYear: 1800,
    summary:
      'Persian became the language of administration, literature, and elite culture across the subcontinent.',
    longSummary:
      'From the Ghaznavid period through the Mughal Empire, Persian served as the lingua franca of administration, diplomacy, and high culture in the subcontinent. The Delhi Sultanate adopted Persian as the official court language. Mughal courts in Delhi, Agra, and Lahore produced masterpieces of Persian poetry and prose. The interaction of Persian with local Prakrit languages eventually gave birth to Urdu — literally "the language of the camp" — a new literary language that synthesized Persian and Hindi vocabularies with Khariboli grammar.',
    modernLegacy:
      'Urdu — spoken by ~230 million people as a first or second language — and its Persianized vocabulary in Hindi are direct products of this linguistic influence. Persian loanwords permeate everyday South Asian languages.',
    importance: 3,
    bidirectional: false,
  },

  // ─── ART & ARCHITECTURE ──────────────────────────────────────
  {
    id: 'gandhara-art',
    title: 'Gandhara Art Tradition',
    category: 'art_architecture',
    source: 'taxila',
    target: 'bamiyan',
    startYear: -100,
    endYear: 500,
    summary:
      'The Gandhara region produced a unique fusion of Greek and Indian artistic traditions that redefined Buddhist iconography.',
    longSummary:
      'Following Alexander\'s campaigns and the establishment of Greek kingdoms in the region, Gandharan workshops created a revolutionary artistic synthesis. Greek sculptural techniques — naturalistic anatomy, draped clothing, classical proportions — were applied to Buddhist subjects. For the first time, the Buddha was depicted in human form rather than through symbols. This Gandharan style, centered in Taxila and extending through the Bamiyan valley, became the template for Buddhist art across all of East Asia.',
    modernLegacy:
      'The seated Buddha image recognizable worldwide — serene expression, monk\'s robes, meditation posture — was first created by Gandharan artists 2,000 years ago.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'mughal-architecture',
    title: 'Mughal Architectural Flourishing',
    category: 'art_architecture',
    source: 'agra',
    target: 'lahore',
    startYear: 1526,
    endYear: 1700,
    summary:
      'The Mughal emperors created a distinctive architectural style blending Persian, Central Asian, and Indian traditions.',
    longSummary:
      'Mughal architecture represents one of the finest architectural traditions in world history. Beginning with Babur\'s Persian-influenced garden tombs and reaching its apex under Shah Jahan with the Taj Mahal (1632-1653), the Mughals developed a distinctive vocabulary: symmetrical gardens, white marble inlaid with semi-precious stones (pietra dura), bulbous domes, and minarets. Each emperor added their own innovations — Akbar\'s syncretic red sandstone at Fatehpur Sikri, Jahangir\'s naturalistic garden designs, and Shah Jahan\'s white marble perfection.',
    modernLegacy:
      'Mughal architectural influence is visible in buildings across the world — from the Taj Mahal replicas to the dome and minaret vocabulary adopted in mosques worldwide. The Red Fort\'s design influenced colonial-era British architecture in India.',
    importance: 3,
    bidirectional: true,
  },
  {
    id: 'dravidian-temple-spread',
    title: 'Dravidian Temple Architecture Diffusion',
    category: 'art_architecture',
    source: 'kanchipuram',
    target: 'mamallapuram',
    startYear: 300,
    endYear: 1300,
    summary:
      'The Dravidian architectural tradition, originating in Tamil Nadu, spread across South India and to Southeast Asia.',
    longSummary:
      'The Pallava dynasty developed the rock-cut and structural temple forms at Kanchipuram and Mamallapuram. The Chola dynasty refined these into the towering gopuram (gateway tower) form. This architectural tradition — with its emphasis on temple-cities, sculptural abundance, and cosmic symbolism — became the dominant religious architecture of South India. Through maritime trade, Pallava and Chola craftsmen exported this tradition to Cambodia (Angkor), Indonesia (Prambanan), and Vietnam (Champa).',
    modernLegacy:
      'The grand temple complexes of Madurai, Thanjavur, and Srirangam continue as living centers of worship. The gopuram form remains the defining feature of South Indian temples worldwide — from Singapore to London.',
    importance: 2,
    bidirectional: false,
  },

  // ─── KNOWLEDGE & SCIENCE ─────────────────────────────────────
  {
    id: 'nalanda-knowledge-network',
    title: 'Nalanda\'s Knowledge Network',
    category: 'knowledge_science',
    source: 'nalanda',
    target: 'taxila',
    startYear: 400,
    endYear: 1100,
    summary:
      'Nalanda and Taxila formed the anchors of an intellectual network spanning the subcontinent and beyond.',
    longSummary:
      'Nalanda University, established around the 5th century CE, became the world\'s preeminent center of learning. Its curriculum encompassed Buddhist philosophy, logic (Nyaya), grammar, medicine (Ayurveda), astronomy, and mathematics. Students and scholars traveled from China (Xuanzang), Korea, Japan, Tibet, Central Asia, and Persia. At its peak, Nalanda housed 10,000 students and 2,000 teachers in a planned campus of monasteries, lecture halls, and libraries. Its intellectual traditions profoundly shaped Buddhist philosophy across East Asia.',
    modernLegacy:
      'Nalanda\'s model of the residential university — with organized faculties, libraries, and interdisciplinary study — prefigured the modern university by over a millennium. UNESCO designated it a World Heritage Site in 2016.',
    importance: 3,
    bidirectional: true,
  },
  {
    id: 'indian-math-to-persia',
    title: 'Indian Mathematics to the Islamic World',
    category: 'knowledge_science',
    source: 'ujjain',
    target: 'samarkand',
    waypoints: [
      [72.0, 28.0],
      [65.0, 33.0],
    ],
    startYear: 500,
    endYear: 1200,
    summary:
      'Indian mathematical innovations — including the decimal system and zero — traveled to the Islamic world and onward to Europe.',
    longSummary:
      'Indian mathematicians and astronomers, particularly Aryabhata (Pataliputra, 476 CE) and Brahmagupta (Ujjain, 628 CE), developed foundational mathematical concepts including the decimal place-value system, the concept of zero as a number, negative numbers, and early algebra. These innovations were transmitted to Baghdad\'s House of Wisdom through Arabic translations during the Abbasid Caliphate. Arab scholars like al-Khwarizmi adopted and extended Indian numerals, which then reached Europe as "Arabic numerals."',
    modernLegacy:
      'The numerals we use worldwide (0-9) are Indian in origin. The decimal system, zero, and the algebraic methods developed at Ujjain and Pataliputra underpin all modern mathematics, computing, and engineering.',
    importance: 3,
    bidirectional: false,
  },
  {
    id: 'persian-indian-science',
    title: 'Al-Biruni\'s Study of India',
    category: 'knowledge_science',
    source: 'ghazni',
    target: 'varanasi',
    waypoints: [
      [72.0, 32.0],
      [78.0, 28.0],
    ],
    startYear: 1017,
    endYear: 1030,
    summary:
      'Al-Biruni traveled across India to write one of the most comprehensive medieval studies of Indian science, philosophy, and culture.',
    longSummary:
      'Abu Rayhan al-Biruni, a polymath from Khwarezm (modern Uzbekistan) who worked at Mahmud of Ghazni\'s court, spent 13 years traveling across the Indian subcontinent. Learning Sanskrit, he wrote "Kitab al-Hind" (c. 1030 CE), a systematic study of Indian philosophy, mathematics, astronomy, geography, and social customs. Unlike other medieval intercultural accounts, al-Biruni approached Indian knowledge with scientific rigor and genuine intellectual curiosity, comparing Indian and Greek philosophical traditions.',
    modernLegacy:
      'Al-Biruni\'s work remains a primary source for understanding medieval Indian civilization. His comparative methodology prefigured modern anthropology and cross-cultural studies.',
    importance: 2,
    bidirectional: false,
  },
];

export const THREAD_MAP = new Map(THREADS.map(t => [t.id, t]));
