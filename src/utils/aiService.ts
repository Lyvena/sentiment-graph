// Simulated AI service (in a real app, this would connect to an AI API)
export const analyzeSentimentAI = async (text: string) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const words = text.toLowerCase().split(' ');
  const positiveWords = ['great', 'good', 'excellent', 'amazing', 'love', 'happy'];
  const negativeWords = ['bad', 'poor', 'terrible', 'hate', 'awful', 'disappointed'];
  
  let score = 50;
  let confidence = 0.7;
  
  words.forEach(word => {
    if (positiveWords.includes(word)) score += 10;
    if (negativeWords.includes(word)) score -= 10;
  });
  
  return {
    score: Math.max(0, Math.min(100, score)),
    confidence,
    sentiment: score > 60 ? 'positive' : score < 40 ? 'negative' : 'neutral',
    keywords: words.filter(word => [...positiveWords, ...negativeWords].includes(word))
  };
};

export const generateAISuggestions = async (feedbackData: any[]) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const suggestions = [
    {
      id: 1,
      title: "Response Time Improvement",
      description: "AI analysis shows increasing user frustration with response times. Consider implementing automated responses.",
      confidence: 0.85,
      priority: "high"
    },
    {
      id: 2,
      title: "Feature Enhancement",
      description: "Pattern analysis indicates users frequently requesting mobile integration. Consider prioritizing mobile development.",
      confidence: 0.75,
      priority: "medium"
    }
  ];
  
  return suggestions;
};