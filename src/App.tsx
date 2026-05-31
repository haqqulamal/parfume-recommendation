import { useMemo, useState } from 'react';
import CustomerForm from './components/CustomerForm';
import LandingPage from './components/LandingPage';
import LoadingAnalysis from './components/LoadingAnalysis';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { getRecommendation } from './utils/recommendation';
import type { CustomerData, QuizAnswer } from './types';

type Step = 'landing' | 'customer' | 'quiz' | 'loading' | 'result';

const emptyCustomer: CustomerData = {
  name: '',
  age: '',
  gender: '',
};

function App() {
  const [step, setStep] = useState<Step>('landing');
  const [customer, setCustomer] = useState<CustomerData>(emptyCustomer);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  const handleReset = () => {
    setCustomer(emptyCustomer);
    setAnswers([]);
    setStep('landing');
  };

  return (
    <main className="min-h-screen overflow-hidden bg-pearl text-ink">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(233,199,193,0.45),transparent_34%),linear-gradient(145deg,#fffaf3_0%,#f4eadc_52%,#f7f1e8_100%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-6 sm:px-6 lg:px-8">
        {step === 'landing' && <LandingPage onStart={() => setStep('customer')} />}
        {step === 'customer' && (
          <CustomerForm
            initialData={customer}
            onBack={() => setStep('landing')}
            onSubmit={(data) => {
              setCustomer(data);
              setStep('quiz');
            }}
          />
        )}
        {step === 'quiz' && (
          <QuizPage
            answers={answers}
            onBackToForm={() => setStep('customer')}
            onChangeAnswers={setAnswers}
            onFinish={() => setStep('loading')}
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
