import React, { useEffect, useState } from 'react';
import { Brain, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateAISuggestions } from '../utils/aiService';
import { useToast } from '../hooks/use-toast';

interface Suggestion {
  id: number;
  title: string;
  description: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
}

const AISuggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const aiSuggestions = await generateAISuggestions([]);
      setSuggestions(aiSuggestions);
      toast({
        title: "AI Suggestions Updated",
        description: "New insights are available",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate AI suggestions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI-Generated Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2">
                  {suggestion.title}
                  <span className={`text-xs px-2 py-1 rounded ${
                    suggestion.priority === 'high' ? 'bg-red-100 text-red-800' :
                    suggestion.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {suggestion.priority} priority
                  </span>
                </h3>
                <p className="text-sm text-gray-600 mt-1">{suggestion.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  Confidence: {(suggestion.confidence * 100).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AISuggestions;