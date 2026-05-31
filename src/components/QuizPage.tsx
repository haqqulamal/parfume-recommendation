import { useState } from 'react';
import { questions } from '../data/questions';
import type { AnswerOption, QuizAnswer } from '../types';

interface QuizPageProps {
  answers: QuizAnswer[];
  onBackToForm: () => void;
  onChangeAnswers: (answers: QuizAnswer[]) => void;
  onFinish: () => void;
}

function QuizPage({ answers, onBackToForm, onChangeAnswers, onFinish }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const question = questions[currentIndex];
  const selectedAnswer = answers.find((answer) => answer.questionId === question.id);
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const chooseAnswer = (option: AnswerOption) => {
    const nextAnswer: QuizAnswer = {
      questionId: question.id,
      optionId: option.id,
      perfumeId: option.perfumeId,
    };

    onChangeAnswers([...answers.filter((answer) => answer.questionId !== question.id), nextAnswer]);
  };

  const goPrevious = () => {
    if (currentIndex === 0) {
      onBackToForm();
      return;
    }

    setCurrentIndex((index) => index - 1);
  };

  const goNext = () => {
    if (!selectedAnswer) {
      return;
    }

    if (isLastQuestion) {
      onFinish();
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/75 p-5 shadow-premium backdrop-blur sm:p-8">
        <div className="mb-7">
          <div className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold text-ink/62">
            <span>
              Pertanyaan {currentIndex + 1} dari {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-champagne">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold via-blush to-sage transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{question.text}</h2>
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
                  <span className="font-medium text-ink/78">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrevious}
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/72 transition hover:border-ink/35 hover:bg-white"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!selectedAnswer}
            className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-pearl shadow-soft transition hover:bg-black disabled:cursor-not-allowed disabled:bg-ink/30"
          >
            {isLastQuestion ? 'Selesai' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuizPage;
