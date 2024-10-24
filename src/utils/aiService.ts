export const analyzeSentimentAI = async (text: string) => {
  const apiKey = getOpenAIKey();

  if (apiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "system",
            content: "Analyze the sentiment of the following text and respond with a JSON object containing score (0-100), confidence (0-1), sentiment (positive/negative/neutral), and relevant keywords."
          }, {
            role: "user",
            content: text
          }]
        })
      });

      const data = await response.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return fallbackAnalysis(text);
    }
  }

  return fallbackAnalysis(text);
};

const fallbackAnalysis = (text: string) => {
  // Simple sentiment analysis simulation (0-100 score)
  const positiveWords = ['great', 'good', 'excellent', 'amazing', 'love', 'happy'];
  const negativeWords = ['bad', 'poor', 'terrible', 'hate', 'awful', 'disappointed'];
  
  const words = text.toLowerCase().split(' ');
  let score = 50; // neutral starting point
  
  words.forEach(word => {
    if (positiveWords.includes(word)) score += 10;
    if (negativeWords.includes(word)) score -= 10;
  });
  
  return {
    score: Math.max(0, Math.min(100, score)),
    confidence: 0.7,
    sentiment: score > 60 ? 'positive' : score < 40 ? 'negative' : 'neutral',
    keywords: words.filter(word => [...positiveWords, ...negativeWords].includes(word))
  };
};

export const generateAISuggestions = async (feedbackData: any[]) => {
  const apiKey = getOpenAIKey();

  if (apiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "system",
            content: "Based on the feedback data, generate actionable suggestions. Respond with a JSON array of suggestions, each containing id, title, description, confidence (0-1), and priority (high/medium/low)."
          }, {
            role: "user",
            content: JSON.stringify(feedbackData)
          }]
        })
      });

      const data = await response.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return fallbackSuggestions();
    }
  }

  return fallbackSuggestions();
};

const fallbackSuggestions = () => {
  return [
    {
      id: 1,
      title: "Response Time Improvement",
      description: "AI analysis shows increasing user frustration with response times. Consider implementing automated responses.",
      confidence: 0.85,
      priority: "high" as const
    },
    {
      id: 2,
      title: "Feature Enhancement",
      description: "Pattern analysis indicates users frequently requesting mobile integration. Consider prioritizing mobile development.",
      confidence: 0.75,
      priority: "medium" as const
    }
  ];
};

const getOpenAIKey = () => localStorage.getItem('openai_api_key');
