# Find Your Signature Scent

Starter project website rekomendasi parfum untuk kebutuhan pameran kampus. Customer mengisi data singkat, menjawab quiz pilihan ganda, lalu mendapatkan rekomendasi varian parfum yang cocok.

## Tech Stack

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Frontend only

## Cara Install

```bash
npm install
```

## Cara Menjalankan Project

```bash
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal.

## Cara Kerja Rekomendasi

Rekomendasi saat ini menggunakan rule-based scoring di frontend. Setiap jawaban menambah skor ke salah satu varian parfum:

- A: Fresh Bloom
- B: Elegant Night
- C: Sweet Charm
- D: Bold Essence
- E: Soft Aura

Varian dengan skor tertinggi menjadi hasil rekomendasi. Jika terjadi seri, sistem memakai prioritas: Fresh Bloom, Elegant Night, Sweet Charm, Bold Essence, lalu Soft Aura.

## Catatan AI Analysis

Tampilan loading dibuat seperti proses AI analysis agar menarik saat dipakai di booth pameran. Tidak ada API AI, Gemini API, backend, database, login, dashboard admin, export data, atau deployment pada starter ini.
