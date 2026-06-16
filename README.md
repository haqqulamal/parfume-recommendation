# Vibemist Perfume Recommendation

Website rekomendasi parfum Vibemist untuk kebutuhan pameran kampus. User mengisi data singkat, menjawab quiz pilihan ganda, lalu mendapatkan rekomendasi varian parfum Vibemist yang paling sesuai.

## Tech Stack

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Frontend only
- Rule-based scoring

## Cara Install

```bash
npm install
```

## Cara Menjalankan Project

```bash
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal.

## Flow Aplikasi

1. Welcome Page
2. Input Data / Quiz Page
3. Result / Recommendation Page

Setelah quiz selesai, aplikasi menampilkan AI-style loading selama beberapa detik sebelum membuka hasil.

## Cara Kerja Rekomendasi

Rekomendasi menggunakan rule-based scoring di frontend. Setiap jawaban dapat menambah skor ke satu atau beberapa varian Vibemist:

- Sky Rush
- Dark Prestige
- Moon Petals
- Rose Whisper
- Calm Breeze

Varian dengan skor tertinggi menjadi rekomendasi. Jika skor seri, sistem memakai prioritas: Sky Rush, Rose Whisper, Dark Prestige, Moon Petals, lalu Calm Breeze.

Kecocokan persen dihitung dari skor varian terpilih dibanding skor maksimum yang mungkin untuk varian tersebut.

## Catatan AI Analysis

Tampilan loading dibuat seperti proses AI analysis agar menarik saat digunakan di booth pameran. Tidak ada API AI, Gemini API, backend, database, login, dashboard admin, export data, atau deployment kompleks pada project ini.
