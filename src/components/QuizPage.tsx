import { useState } from 'react';
import { questions } from '../data/questions';
import type { AnswerOption, CustomerData, QuizAnswer } from '../types';

interface QuizPageProps {
  initialCustomer: CustomerData;
  initialAnswers: QuizAnswer[];
  onBackToWelcome: () => void;
  onFinish: (customer: CustomerData, answers: QuizAnswer[]) => void;
}

const genderOptions = ['Cowo', 'Cewe', 'Lainnya', 'Tidak ingin menyebutkan'];

function QuizPage({ initialCustomer, initialAnswers, onBackToWelcome, onFinish }: QuizPageProps) {
  const [customer, setCustomer] = useState<CustomerData>(initialCustomer);
  const [answers, setAnswers] = useState<QuizAnswer[]>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const isFormStep = currentIndex === -1;
  const question = isFormStep ? undefined : questions[currentIndex];
  const selectedAnswer = question ? answers.find((answer) => answer.questionId === question.id) : undefined;
  const isCustomerValid = customer.name.trim() !== '' && customer.age.trim() !== '' && customer.gender.trim() !== '';
  const totalSteps = questions.length + 1;
  const currentStep = currentIndex + 2;
  const progress = isFormStep ? 8 : (currentStep / totalSteps) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const updateCustomer = (field: keyof CustomerData, value: string) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const chooseAnswer = (option: AnswerOption) => {
    if (!question) {
      return;
    }

    const nextAnswer: QuizAnswer = {
      questionId: question.id,
      optionId: option.id,
      scores: option.scores,
    };

    setAnswers((current) => [
      ...current.filter((answer) => answer.questionId !== question.id),
      nextAnswer,
    ]);
  };

  const goPrevious = () => {
    if (isFormStep) {
      onBackToWelcome();
      return;
    }

    setCurrentIndex((index) => index - 1);
  };

  const goNext = () => {
    if (isFormStep) {
      if (isCustomerValid) {
        setCurrentIndex(0);
      }
      return;
    }

    if (!selectedAnswer) {
      return;
    }

    if (isLastQuestion) {
      onFinish(
        {
          name: customer.name.trim(),
          age: customer.age.trim(),
          gender: customer.gender,
        },
        answers,
      );
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/75 p-5 shadow-premium backdrop-blur sm:p-8">
        <div className="mb-7">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.16em] text-ink/52">
            <span>{isFormStep ? 'Data diri' : `Pertanyaan ${currentIndex + 1} dari ${questions.length}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-champagne">
            <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {isFormStep ? (
          <div className="space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Vibemist Profile</p>
              <h2 className="font-display text-4xl font-bold text-ink">Isi data kamu</h2>
            </div>

            <div className="space-y-4">
              <label className="block space-y-2">
                <span className="text-sm font-bold text-ink/70">Nama</span>
                <input
                  value={customer.name}
                  onChange={(event) => updateCustomer('name', event.target.value)}
                  className="min-h-14 w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  placeholder="Masukkan nama"
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-bold text-ink/70">Umur</span>
                <input
                  value={customer.age}
                  onChange={(event) => updateCustomer('age', event.target.value)}
                  className="min-h-14 w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  inputMode="numeric"
                  min="1"
                  placeholder="Contoh: 21"
                  required
                  type="number"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-bold text-ink/70">Gender</span>
                <select
                  value={customer.gender}
                  onChange={(event) => updateCustomer('gender', event.target.value)}
                  className="min-h-14 w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  required
                >
                  <option value="">Pilih gender</option>
                  {genderOptions.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        ) : (
          question && (
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{question.text}</h2>
              <div className="grid gap-3">
                {question.options.map((option) => {
                  const isSelected = selectedAnswer?.optionId === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => chooseAnswer(option)}
                      className={`flex min-h-16 items-center gap-4 rounded-2xl border p-4 text-left shadow-sm transition ${
                        isSelected
                          ? 'border-gold bg-gold/12 ring-4 ring-gold/15'
                          : 'border-ink/10 bg-pearl hover:border-gold/45 hover:bg-white'
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${
                          isSelected ? 'bg-ink text-pearl' : 'bg-champagne text-ink/70'
                        }`}
                      >
                        {option.id}
                      </span>
                      <span className="font-semibold leading-6 text-ink/78">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrevious}
            className="min-h-12 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink/72 transition hover:border-ink/35 hover:bg-white"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isFormStep ? !isCustomerValid : !selectedAnswer}
            className="min-h-12 rounded-full bg-ink px-7 py-3 text-sm font-bold text-pearl shadow-soft transition hover:bg-black disabled:cursor-not-allowed disabled:bg-ink/30"
          >
            {isFormStep ? 'Mulai Quiz' : isLastQuestion ? 'Lihat Rekomendasi' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuizPage;
