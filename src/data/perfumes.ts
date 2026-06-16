import type { PerfumeId, PerfumeVariant } from '../types';

export const perfumes: PerfumeVariant[] = [
  {
    id: 'swim-beach',
    name: 'Sky Rush',
    character: ['fresh citrus', 'clean', 'mewah', 'seger'],
    description:
      'Kamu memiliki jiwa bebas dan aktif. Karakter fresh citrus yang bersih dan mewah dari Sky Rush akan memberikan kesan segar seperti liburan di tepi pantai.',
  },
  {
    id: 'free-spirit',
    name: 'Dark Prestige',
    character: ['manis elegan', 'sedikit fresh dan clean', 'floral mewah'],
    description:
      'Kamu memiliki karakter yang ekspresif, feminin, dan suka menjadi pusat perhatian. Kombinasi aroma manis, floral, dan sentuhan fresh dari Dark Prestige akan mencerminkan energi positif sekaligus kesan elegan yang mudah diingat.',
  },
  {
    id: 'tuberose-sedona',
    name: 'Moon Petals',
    character: ['creamy floral', 'classy', 'niche vibes'],
    description:
      'Kamu menyukai kesan sophisticated dan berbeda dari kebanyakan orang. Moon Petals menghadirkan creamy floral yang classy dengan nuansa niche yang terasa eksklusif dan berkelas.',
  },
  {
    id: 'musk-powder',
    name: 'Rose Whisper',
    character: ['soft', 'calming', 'clean musk'],
    description:
      'Kamu menghargai kesederhanaan dan kenyamanan. Rose Whisper menawarkan aroma clean musk yang lembut, menenangkan, dan sangat mudah dipakai setiap hari tanpa terasa berlebihan.',
  },
  {
    id: 'eros-desire',
    name: 'Calm Breeze',
    character: ['fresh', 'woody', 'sweet'],
    description:
      'Kamu memiliki karakter berani dan penuh percaya diri. Perpaduan fresh, woody, dan sweet pada Calm Breeze memberikan aura maskulin yang menarik dan cocok untuk meninggalkan kesan kuat.',
  },
];

export const perfumePriority: PerfumeId[] = [
  'swim-beach',
  'musk-powder',
  'free-spirit',
  'tuberose-sedona',
  'eros-desire',
];
