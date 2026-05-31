import type { PerfumeVariant } from '../types';

export const perfumes: PerfumeVariant[] = [
  {
    id: 'fresh-bloom',
    name: 'Fresh Bloom',
    character: ['fresh', 'clean', 'citrus', 'aquatic'],
    suitableFor: 'Aktivitas harian, kuliah, dan kegiatan outdoor.',
    impression: 'Ceria, energik, dan bersih.',
    description:
      'Aroma ringan yang terasa segar sejak semprotan pertama, cocok untuk tampil aktif tanpa terasa berlebihan.',
  },
  {
    id: 'elegant-night',
    name: 'Elegant Night',
    character: ['woody', 'amber', 'premium'],
    suitableFor: 'Acara formal, meeting, dinner, dan momen spesial.',
    impression: 'Elegan, dewasa, dan mewah.',
    description:
      'Komposisi hangat dengan kesan premium untuk tampilan yang lebih matang, rapi, dan berkelas.',
  },
  {
    id: 'sweet-charm',
    name: 'Sweet Charm',
    character: ['vanilla', 'fruity', 'sweet'],
    suitableFor: 'Hangout, date, dan kegiatan santai bersama teman.',
    impression: 'Ramah, romantis, dan menyenangkan.',
    description:
      'Aroma manis yang tetap lembut, memberi nuansa friendly dan playful untuk momen dekat dengan orang lain.',
  },
  {
    id: 'bold-essence',
    name: 'Bold Essence',
    character: ['spicy', 'musky', 'strong'],
    suitableFor: 'Orang yang percaya diri, aktif, dan suka tampil.',
    impression: 'Berani, tegas, dan powerful.',
    description:
      'Karakter aroma yang kuat dan ekspresif untuk membantu membangun presence yang mudah diingat.',
  },
  {
    id: 'soft-aura',
    name: 'Soft Aura',
    character: ['floral', 'powdery', 'soft'],
    suitableFor: 'Penyuka aroma lembut, nyaman, dan tidak menyengat.',
    impression: 'Calm, clean, dan comforting.',
    description:
      'Aroma halus dengan sentuhan floral powdery yang terasa tenang, bersih, dan mudah dipakai setiap hari.',
  },
];

export const perfumePriority = perfumes.map((perfume) => perfume.id);
