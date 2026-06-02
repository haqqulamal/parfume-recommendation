export type PerfumeId = 'swim-beach' | 'free-spirit' | 'tuberose-sedona' | 'musk-powder' | 'eros-desire';

export type OptionId = 'A' | 'B' | 'C' | 'D';

export interface CustomerData {
  name: string;
  age: string;
}

export type ScoreMap = Record<PerfumeId, number>;

export interface PerfumeVariant {
  id: PerfumeId;
  name: string;
  character: string[];
  description: string;
}

export interface AnswerOption {
  id: OptionId;
  label: string;
  scores: Partial<ScoreMap>;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
}

export interface QuizAnswer {
  questionId: number;
  optionId: OptionId;
  scores: Partial<ScoreMap>;
}

export interface RecommendationResult {
  perfume: PerfumeVariant;
  scores: ScoreMap;
  matchPercentage: number;
}
