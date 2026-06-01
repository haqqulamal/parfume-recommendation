interface WelcomePageProps {
  onStart: () => void;
}

function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col items-center justify-center text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/55 shadow-soft backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-gold" />
        Vibemist
      </div>

      <div className="space-y-5">
        <h1 className="font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
          Welcome to VIBEMIST!
        </h1>
        <p className="mx-auto max-w-sm text-lg leading-8 text-ink/68">Find out our perfume that suits you well</p>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-10 min-h-14 w-full max-w-xs rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-pearl shadow-premium transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gold/25"
      >
        Start now
      </button>
    </section>
  );
}

export default WelcomePage;
