import { perfumePriority, perfumes } from '../data/perfumes';
import { questions } from '../data/questions';
import type { PerfumeId, QuizAnswer, RecommendationResult, ScoreMap } from '../types';

export const createEmptyScores = (): ScoreMap => ({
  'swim-beach': 0,
  'free-spirit': 0,
  'tuberose-sedona': 0,
  'musk-powder': 0,
  'eros-desire': 0,
});

const getMaxPossibleScore = (perfumeId: PerfumeId): number => {
  return questions.reduce((total, question) => {
    const bestOptionScore = Math.max(...question.options.map((option) => option.scores[perfumeId] ?? 0));
    return total + bestOptionScore;
  }, 0);
};

export const getRecommendation = (answers: QuizAnswer[]): RecommendationResult => {
  const scores = createEmptyScores();

  answers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([perfumeId, score]) => {
      scores[perfumeId as PerfumeId] += score ?? 0;
    });
  });

  const winnerId = perfumePriority.reduce<PerfumeId>((currentBest, perfumeId) => {
    return scores[perfumeId] > scores[currentBest] ? perfumeId : currentBest;
  }, perfumePriority[0]);

  const perfume = perfumes.find((item) => item.id === winnerId) ?? perfumes[0];
  const maxPossibleScore = getMaxPossibleScore(winnerId);
  const matchPercentage = maxPossibleScore > 0 ? Math.round((scores[winnerId] / maxPossibleScore) * 100) : 0;

  return {
    perfume,
    scores,
    matchPercentage,
  };
};
