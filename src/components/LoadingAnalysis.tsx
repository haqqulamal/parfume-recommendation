import { useEffect, useState } from 'react';

interface LoadingAnalysisProps {
  onComplete: () => void;
}

const messages = [
  'AI sedang menganalisis preferensi aromamu...',
  'Mencocokkan kepribadianmu dengan karakter parfum Vibemist...',
  'Menyiapkan rekomendasi parfum terbaik untukmu...',
];

function LoadingAnalysis({ onComplete }: LoadingAnalysisProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 850);

    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 13, 100));
    }, 280);

    const finishTimer = window.setTimeout(onComplete, 2600);

    return () => {
      window.clearInterval(messageTimer);
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <section className="mx-auto w-full max-w-md text-center">
      <div className="animate-glow rounded-[1.75rem] border border-white/75 bg-white/78 p-7 shadow-premium backdrop-blur sm:p-10">
        <div className="mx-auto mb-7 grid h-24 w-24 place-items-center rounded-full border border-gold/25 bg-champagne">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-ink/10 border-t-gold" />
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">Vibemist analysis</p>
        <h2 className="min-h-24 font-display text-3xl font-bold leading-tight text-ink">{messages[messageIndex]}</h2>
        <div className="mt-7 h-2 overflow-hidden rounded-full bg-champagne">
          <div className="h-full rounded-full bg-gold transition-all duration-300" style={{ width: `${progress}%` }} />
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
