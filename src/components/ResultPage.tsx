import { perfumes } from '../data/perfumes';
import type { CustomerData, RecommendationResult } from '../types';

interface ResultPageProps {
  customer: CustomerData;
  result: RecommendationResult;
  onReset: () => void;
  onShowToBooth: () => void;
}

function ResultPage({ customer, result, onReset, onShowToBooth }: ResultPageProps) {
  const maxScore = Math.max(...Object.values(result.scores), 1);

  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-white/75 bg-white/78 p-6 shadow-premium backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Halo, {customer.name}</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Rekomendasi Parfum Kamu</h2>

          <div className="mt-8 rounded-[1.5rem] bg-ink p-6 text-pearl shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-pearl/60">Best match</p>
            <h3 className="mt-3 font-display text-5xl">{result.perfume.name}</h3>
            <p className="mt-4 leading-7 text-pearl/72">{result.perfume.description}</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-champagne p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Karakter</p>
              <p className="mt-2 font-semibold capitalize text-ink/78">{result.perfume.character.join(', ')}</p>
            </div>
            <div className="rounded-2xl bg-champagne p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Kesan</p>
              <p className="mt-2 font-semibold text-ink/78">{result.perfume.impression}</p>
            </div>
            <div className="rounded-2xl bg-champagne p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Cocok untuk</p>
              <p className="mt-2 font-semibold text-ink/78">{result.perfume.suitableFor}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/10 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Alasan rekomendasi</p>
            <p className="mt-3 leading-7 text-ink/72">{result.reason}</p>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-white/75 bg-white/70 p-6 shadow-premium backdrop-blur sm:p-8">
          <h3 className="font-display text-3xl text-ink">Ringkasan Skor</h3>
          <div className="mt-6 space-y-4">
            {perfumes.map((perfume) => {
              const score = result.scores[perfume.id];
              const width = (score / maxScore) * 100;

              return (
                <div key={perfume.id}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-semibold text-ink/75">{perfume.name}</span>
                    <span className="rounded-full bg-champagne px-3 py-1 font-bold text-ink/65">{score}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-champagne">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold to-blush transition-all"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-ink/5 p-5 text-sm leading-7 text-ink/62">
            Hasil ini dihitung dari jawaban quiz dengan scoring sederhana. Tampilan analysis dibuat untuk memberi
            pengalaman interaktif saat pameran.
          </div>

          <div className="mt-8 grid gap-3">
            <button
              type="button"
              onClick={onShowToBooth}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-pearl shadow-soft transition hover:bg-black"
            >
              Tunjukkan Hasil ke Booth
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/72 transition hover:border-ink/35 hover:bg-white"
            >
              Ulangi Quiz
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ResultPage;
