import { useEffect, useState } from 'react';

interface LoadingAnalysisProps {
  onComplete: () => void;
}

const messages = [
  'AI sedang menganalisis preferensi aromamu...',
  'Mencocokkan kepribadianmu dengan karakter aroma...',
  'Menyiapkan rekomendasi parfum terbaik untukmu...',
];

function LoadingAnalysis({ onComplete }: LoadingAnalysisProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 850);

    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 12, 100));
    }, 280);

    const finishTimer = window.setTimeout(onComplete, 2700);

    return () => {
      window.clearInterval(messageTimer);
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <section className="mx-auto w-full max-w-xl text-center">
      <div className="animate-glow rounded-[1.75rem] border border-white/75 bg-white/75 p-7 shadow-premium backdrop-blur sm:p-10">
        <div className="mx-auto mb-7 grid h-24 w-24 place-items-center rounded-full border border-gold/25 bg-champagne">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-ink/10 border-t-gold" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">AI style analysis</p>
        <h2 className="min-h-20 font-display text-3xl leading-tight text-ink sm:text-4xl">{messages[messageIndex]}</h2>
        <div className="mt-7 h-3 overflow-hidden rounded-full bg-champagne">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold via-blush to-sage transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="h-2.5 w-2.5 animate-pulse rounded-full bg-gold"
              style={{ animationDelay: `${item * 180}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoadingAnalysis;
