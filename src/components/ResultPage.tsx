import type { CustomerData, RecommendationResult } from '../types';

interface ResultPageProps {
  customer: CustomerData;
  result: RecommendationResult;
  onReset: () => void;
  onShowToBooth: () => void;
}

function ResultPage({ customer, result, onReset, onShowToBooth }: ResultPageProps) {
  return (
    <section className="mx-auto w-full max-w-xl">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/78 p-6 text-center shadow-premium backdrop-blur sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Halo, {customer.name}</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">Rekomendasi Parfum Kamu</h2>

        <div className="my-8 rounded-[1.5rem] bg-ink p-6 text-pearl shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pearl/58">Vibemist Match</p>
          <h3 className="mt-3 font-display text-4xl font-bold leading-tight">{result.perfume.name}</h3>
          <div className="mx-auto mt-5 inline-flex rounded-full border border-gold/35 bg-gold/15 px-5 py-2 text-sm font-bold text-pearl">
            Kecocokan: {result.matchPercentage}%
          </div>
        </div>

        <div className="space-y-5 text-left">
          <div className="rounded-2xl bg-champagne p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/48">Karakter aroma</p>
            <p className="mt-3 text-base font-bold capitalize leading-7 text-ink/78">
              {result.perfume.character.join(', ')}
            </p>
          </div>

          <div className="rounded-2xl bg-pearl p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/48">Deskripsi hasil</p>
            <p className="mt-3 leading-8 text-ink/72">{result.perfume.description}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          <button
            type="button"
            onClick={onShowToBooth}
            className="min-h-12 rounded-full bg-ink px-6 py-3 text-sm font-bold text-pearl shadow-soft transition hover:bg-black"
          >
            Tunjukkan Hasil ke Booth
          </button>
          <button
            type="button"
            onClick={onReset}
            className="min-h-12 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink/72 transition hover:border-ink/35 hover:bg-white"
          >
            Ulangi Tes
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultPage;
