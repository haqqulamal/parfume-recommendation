export type PerfumeId = 'fresh-bloom' | 'elegant-night' | 'sweet-charm' | 'bold-essence' | 'soft-aura';

export interface CustomerData {
  name: string;
  age: string;
  gender: string;
}

export interface PerfumeVariant {
  id: PerfumeId;
  name: string;
  character: string[];
  suitableFor: string;
  impression: string;
  description: string;
}

export interface AnswerOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  label: string;
  perfumeId: PerfumeId;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
}

export interface QuizAnswer {
  questionId: number;
  optionId: AnswerOption['id'];
  perfumeId: PerfumeId;
}

export interface RecommendationResult {
  perfume: PerfumeVariant;
  scores: Record<PerfumeId, number>;
  reason: string;
}
