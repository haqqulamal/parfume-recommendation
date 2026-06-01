import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Apakah kamu cowo / cewe?',
    options: [
      { id: 'A', label: 'Cowo', scores: { 'eros-desire': 1 } },
      { id: 'B', label: 'Cewe', scores: { 'free-spirit': 1 } },
    ],
  },
  {
    id: 2,
    text: 'Aktivitas harian kamu kurang lebih seperti apa?',
    options: [
      { id: 'A', label: 'Sebagian besar di kantor / kampus (dominan indoor)', scores: { 'musk-powder': 1 } },
      { id: 'B', label: 'Aktif di luar ruangan (outdoor)', scores: { 'swim-beach': 1 } },
      { id: 'C', label: 'Sering ada acara formal', scores: { 'tuberose-sedona': 1, 'eros-desire': 1 } },
      { id: 'D', label: 'Lebih sering di tempat yang santai/informal', scores: { 'free-spirit': 1 } },
    ],
  },
  {
    id: 3,
    text: 'Bagaimana biasanya orang lain menggambarkan kepribadian kamu?',
    options: [
      { id: 'A', label: 'Tenang dan elegan', scores: { 'tuberose-sedona': 1, 'musk-powder': 1 } },
      { id: 'B', label: 'Ceria dan energik', scores: { 'swim-beach': 1, 'free-spirit': 1 } },
      { id: 'C', label: 'Percaya diri dan berani', scores: { 'eros-desire': 1 } },
      { id: 'D', label: 'Hangat dan ramah', scores: { 'free-spirit': 1, 'musk-powder': 1 } },
    ],
  },
  {
    id: 4,
    text: 'Aroma seperti apa yang biasanya kamu suka?',
    options: [
      { id: 'A', label: 'Segar (citrus, aquatic, green)', scores: { 'swim-beach': 1 } },
      { id: 'B', label: 'Manis (vanilla, caramel, fruity)', scores: { 'free-spirit': 1 } },
      { id: 'C', label: 'Floral (mawar, melati, lavender)', scores: { 'free-spirit': 1, 'tuberose-sedona': 1, 'musk-powder': 1 } },
      { id: 'D', label: 'Woody & spicy (sandalwood, oud, pepper)', scores: { 'eros-desire': 1 } },
    ],
  },
  {
    id: 5,
    text: 'Kapan anda paling sering menggunakan parfum?',
    options: [
      { id: 'A', label: 'Aktivitas sehari-hari', scores: { 'swim-beach': 1, 'musk-powder': 1 } },
      { id: 'B', label: 'Bekerja atau kuliah', scores: { 'musk-powder': 1 } },
      { id: 'C', label: 'Acara formal atau pesta', scores: { 'tuberose-sedona': 1, 'eros-desire': 1 } },
      { id: 'D', label: 'Kencan atau momen special', scores: { 'free-spirit': 1, 'eros-desire': 1 } },
    ],
  },
  {
    id: 6,
    text: 'Gaya berpakaian seperti apa yang paling menggambarkan kamu?',
    options: [
      { id: 'A', label: 'Minimalis dan rapi', scores: { 'musk-powder': 1 } },
      { id: 'B', label: 'Kasual dan nyaman', scores: { 'swim-beach': 1 } },
      { id: 'C', label: 'Trendy dan fashionable', scores: { 'free-spirit': 1, 'eros-desire': 1 } },
      { id: 'D', label: 'Klasik dan elegan', scores: { 'tuberose-sedona': 1, 'eros-desire': 1 } },
    ],
  },
  {
    id: 7,
    text: 'Jika parfum adalah sebuah karakter, kamu ingin parfum kamu terasa seperti...',
    options: [
      { id: 'A', label: 'Angin pagi yang menyegarkan', scores: { 'swim-beach': 1 } },
      { id: 'B', label: 'Taman bunga yang romantis', scores: { 'free-spirit': 1 } },
      { id: 'C', label: 'Sosok yang misterius dan berkarisma', scores: { 'eros-desire': 1, 'tuberose-sedona': 1 } },
      { id: 'D', label: 'Kehangatan yang membuat orang nyaman', scores: { 'musk-powder': 1, 'free-spirit': 1 } },
    ],
  },
];
