import { perfumePriority, perfumes } from '../data/perfumes';
import type { PerfumeId, QuizAnswer, RecommendationResult } from '../types';

const initialScores = (): Record<PerfumeId, number> => ({
  'fresh-bloom': 0,
  'elegant-night': 0,
  'sweet-charm': 0,
  'bold-essence': 0,
  'soft-aura': 0,
});

export const getRecommendation = (answers: QuizAnswer[]): RecommendationResult => {
  const scores = initialScores();

  answers.forEach((answer) => {
    scores[answer.perfumeId] += 1;
  });

  const winnerId = perfumePriority.reduce<PerfumeId>((currentBest, perfumeId) => {
    return scores[perfumeId] > scores[currentBest] ? perfumeId : currentBest;
  }, perfumePriority[0]);

  const perfume = perfumes.find((item) => item.id === winnerId) ?? perfumes[0];
  const topCharacters = perfume.character.slice(0, 3).join(', ');

  return {
    perfume,
    scores,
    reason: `Berdasarkan pilihanmu, kamu cocok dengan aroma yang ${topCharacters}. ${perfume.name} cocok untuk ${perfume.suitableFor.toLowerCase()} Varian ini memberi kesan ${perfume.impression.toLowerCase()}`,
  };
};
