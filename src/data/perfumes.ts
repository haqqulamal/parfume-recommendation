import type { PerfumeId, PerfumeVariant } from '../types';

export const perfumes: PerfumeVariant[] = [
  {
    id: 'swim-beach',
    name: 'SWIM BY THE BEACH',
    character: ['fresh citrus', 'clean', 'mewah', 'seger'],
    description:
      'Kamu memiliki jiwa bebas dan aktif. Karakter fresh citrus yang bersih dan mewah dari Swim by the Beach akan memberikan kesan segar seperti liburan di tepi pantai.',
  },
  {
    id: 'free-spirit',
    name: 'FREE SPIRIT',
    character: ['manis elegan', 'sedikit fresh dan clean', 'floral mewah'],
    description:
      'Kamu memiliki karakter yang ekspresif, feminin, dan suka menjadi pusat perhatian. Kombinasi aroma manis, floral, dan sentuhan fresh pada Free Spirit akan mencerminkan energi positif sekaligus kesan elegan yang mudah diingat.',
  },
  {
    id: 'tuberose-sedona',
    name: 'TUBEROSE SEDONA',
    character: ['creamy floral', 'classy', 'niche vibes'],
    description:
      'Kamu menyukai kesan sophisticated dan berbeda dari kebanyakan orang. Tuberose Sedona menghadirkan creamy floral yang classy dengan nuansa niche yang terasa eksklusif dan berkelas.',
  },
  {
    id: 'musk-powder',
    name: 'MUSK POWDER',
    character: ['soft', 'calming', 'clean musk', 'cocok daily'],
    description:
      'Kamu menghargai kesederhanaan dan kenyamanan. Musk Powder menawarkan aroma clean musk yang lembut, menenangkan, dan sangat mudah dipakai setiap hari tanpa terasa berlebihan.',
  },
  {
    id: 'eros-desire',
    name: 'EROS DESIRE',
    character: ['fresh', 'woody', 'sweet'],
    description:
      'Kamu memiliki karakter berani dan penuh percaya diri. Perpaduan fresh, woody, dan sweet pada Eros Desire memberikan aura maskulin yang menarik dan cocok untuk meninggalkan kesan kuat.',
  },
];

export const perfumePriority: PerfumeId[] = [
  'swim-beach',
  'musk-powder',
  'free-spirit',
  'tuberose-sedona',
  'eros-desire',
];
