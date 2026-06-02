import { useMemo, useState } from 'react';
import LoadingAnalysis from './components/LoadingAnalysis';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import WelcomePage from './components/WelcomePage';
import { getRecommendation } from './utils/recommendation';
import type { CustomerData, QuizAnswer } from './types';

type Step = 'welcome' | 'quiz' | 'loading' | 'result';

const emptyCustomer: CustomerData = {
  name: '',
  age: '',
};

function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [customer, setCustomer] = useState<CustomerData>(emptyCustomer);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  const handleReset = () => {
    setCustomer(emptyCustomer);
    setAnswers([]);
    setStep('welcome');
  };

  return (
    <main className="min-h-screen overflow-hidden bg-pearl text-ink">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(145deg,#fffaf3_0%,#f4eadc_50%,#efe0cc_100%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-6 sm:px-6 lg:px-8">
        {step === 'welcome' && <WelcomePage onStart={() => setStep('quiz')} />}
        {step === 'quiz' && (
          <QuizPage
            initialCustomer={customer}
            initialAnswers={answers}
            onBackToWelcome={() => setStep('welcome')}
            onFinish={(nextCustomer, nextAnswers) => {
              setCustomer(nextCustomer);
              setAnswers(nextAnswers);
              setStep('loading');
            }}
          />
        )}
        {step === 'loading' && <LoadingAnalysis onComplete={() => setStep('result')} />}
        {step === 'result' && (
          <ResultPage
            customer={customer}
            result={recommendation}
            onReset={handleReset}
            onShowToBooth={() => window.print()}
          />
        )}
      </div>
    </main>
  );
}

export default App;
