export const analyzeSentiment = (text: string): number => {
  // Simple sentiment analysis simulation (0-100 score)
  const positiveWords = ['great', 'good', 'excellent', 'amazing', 'love', 'happy'];
  const negativeWords = ['bad', 'poor', 'terrible', 'hate', 'awful', 'disappointed'];
  
  const words = text.toLowerCase().split(' ');
  let score = 50; // neutral starting point
  
  words.forEach(word => {
    if (positiveWords.includes(word)) score += 10;
    if (negativeWords.includes(word)) score -= 10;
  });
  
  return Math.max(0, Math.min(100, score));
};