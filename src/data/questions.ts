import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Kamu ingin parfum yang memberi kesan apa?',
    options: [
      { id: 'A', label: 'Fresh dan bersih', perfumeId: 'fresh-bloom' },
      { id: 'B', label: 'Elegan dan mewah', perfumeId: 'elegant-night' },
      { id: 'C', label: 'Manis dan romantis', perfumeId: 'sweet-charm' },
      { id: 'D', label: 'Berani dan percaya diri', perfumeId: 'bold-essence' },
      { id: 'E', label: 'Lembut dan menenangkan', perfumeId: 'soft-aura' },
    ],
  },
  {
    id: 2,
    text: 'Aktivitas kamu sehari-hari lebih sering seperti apa?',
    options: [
      { id: 'A', label: 'Kuliah dan kegiatan outdoor', perfumeId: 'fresh-bloom' },
      { id: 'B', label: 'Meeting atau acara formal', perfumeId: 'elegant-night' },
      { id: 'C', label: 'Hangout bersama teman', perfumeId: 'sweet-charm' },
      { id: 'D', label: 'Aktif dan suka tampil', perfumeId: 'bold-essence' },
      { id: 'E', label: 'Santai dan tidak suka aroma menyengat', perfumeId: 'soft-aura' },
    ],
  },
  {
    id: 3,
    text: 'Aroma yang paling kamu suka?',
    options: [
      { id: 'A', label: 'Citrus / aquatic', perfumeId: 'fresh-bloom' },
      { id: 'B', label: 'Woody / amber', perfumeId: 'elegant-night' },
      { id: 'C', label: 'Vanilla / fruity', perfumeId: 'sweet-charm' },
      { id: 'D', label: 'Spicy / musky', perfumeId: 'bold-essence' },
      { id: 'E', label: 'Floral / powdery', perfumeId: 'soft-aura' },
    ],
  },
  {
    id: 4,
    text: 'Kepribadian kamu lebih dekat dengan?',
    options: [
      { id: 'A', label: 'Ceria dan energik', perfumeId: 'fresh-bloom' },
      { id: 'B', label: 'Dewasa dan classy', perfumeId: 'elegant-night' },
      { id: 'C', label: 'Sweet dan friendly', perfumeId: 'sweet-charm' },
      { id: 'D', label: 'Bold dan ekspresif', perfumeId: 'bold-essence' },
      { id: 'E', label: 'Tenang dan kalem', perfumeId: 'soft-aura' },
    ],
  },
  {
    id: 5,
    text: 'Parfum biasanya kamu pakai untuk?',
    options: [
      { id: 'A', label: 'Harian', perfumeId: 'fresh-bloom' },
      { id: 'B', label: 'Acara formal', perfumeId: 'elegant-night' },
      { id: 'C', label: 'Date atau hangout', perfumeId: 'sweet-charm' },
      { id: 'D', label: 'Meningkatkan kepercayaan diri', perfumeId: 'bold-essence' },
      { id: 'E', label: 'Aktivitas santai', perfumeId: 'soft-aura' },
    ],
  },
];
