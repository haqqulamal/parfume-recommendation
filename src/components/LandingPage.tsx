interface LandingPageProps {
  onStart: () => void;
}

function LandingPage({ onStart }: LandingPageProps) {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/55 px-4 py-2 text-sm font-medium text-ink/70 shadow-soft backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gold" />
          Personal scent finder
        </div>
        <div className="space-y-5">
          <h1 className="max-w-3xl font-display text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
            Find Your Signature Scent
          </h1>
          <p className="max-w-2xl text-xl font-medium text-ink/72">
            Temukan parfum yang paling cocok dengan kepribadianmu
          </p>
          <p className="max-w-xl text-base leading-8 text-ink/62">
            Jawab beberapa pertanyaan singkat, lalu sistem akan membaca preferensi aromamu dan menampilkan
            rekomendasi parfum yang paling sesuai untuk momen terbaikmu.
          </p>
        </div>
        <button
          type="button"
          onClick={onStart}
          className="rounded-full bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl shadow-premium transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gold/25"
        >
          Mulai Tes Aroma
        </button>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/70 bg-ink shadow-premium sm:max-w-md">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(21,18,15,0.2),rgba(21,18,15,0.82)),url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
        <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/20 bg-white/12 p-5 text-pearl shadow-soft backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.24em] text-pearl/70">Booth ready</p>
          <p className="mt-3 font-display text-3xl">Rule-based, terasa seperti AI.</p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
