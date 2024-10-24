import React, { useEffect, useState } from 'react';
import { User, Brain } from 'lucide-react';
import { analyzeSentimentAI } from '../utils/aiService';
import { useToast } from '../hooks/use-toast';

interface Feedback {
  id: number;
  user: string;
  comment: string;
  sentiment: string;
  score?: number;
  confidence?: number;
}

const initialFeedbackData = [
  { id: 1, user: 'Alice', comment: 'Great initiative! Looking forward to more updates.', sentiment: 'positive' },
  { id: 2, user: 'Bob', comment: 'The application process could be more streamlined.', sentiment: 'neutral' },
  { id: 3, user: 'Charlie', comment: 'I\'m having trouble understanding the eligibility criteria.', sentiment: 'negative' },
];

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>(initialFeedbackData);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    analyzeFeedback();
  }, []);

  const analyzeFeedback = async () => {
    setIsAnalyzing(true);
    try {
      const updatedFeedback = await Promise.all(
        feedbackData.map(async (feedback) => {
          const analysis = await analyzeSentimentAI(feedback.comment);
          return {
            ...feedback,
            sentiment: analysis.sentiment,
            score: analysis.score,
            confidence: analysis.confidence
          };
        })
      );
      setFeedbackData(updatedFeedback);
      toast({
        title: "AI Analysis Complete",
        description: "Feedback has been analyzed using AI",
      });
    } catch (error) {
      toast({
        title: "Analysis Error",
        description: "Failed to analyze feedback",
        variant: "destructive",
      });
    }
    setIsAnalyzing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Feedback</h2>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary animate-pulse" />
          {isAnalyzing ? 'Analyzing...' : 'AI-Powered Analysis'}
        </div>
      </div>
      <ul className="space-y-4">
        {feedbackData.map((feedback) => (
          <li key={feedback.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
            <User className="h-10 w-10 text-gray-400" />
            <div className="flex-grow">
              <p className="font-semibold">{feedback.user}</p>
              <p className="text-gray-600">{feedback.comment}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                  feedback.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                  feedback.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {feedback.sentiment}
                </span>
                {feedback.score && (
                  <span className="text-xs text-gray-500">
                    Score: {feedback.score}% (Confidence: {(feedback.confidence! * 100).toFixed(1)}%)
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;