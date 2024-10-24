import React from 'react';
import { Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Suggestion {
  id: number;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

const suggestions: Suggestion[] = [
  {
    id: 1,
    title: "Improve Response Time",
    description: "AI detected increasing user frustration with response times. Consider implementing automated responses.",
    impact: "high"
  },
  {
    id: 2,
    title: "Feature Request Trend",
    description: "Multiple users requesting mobile app integration. Consider prioritizing mobile development.",
    impact: "medium"
  },
  {
    id: 3,
    title: "Positive Feedback Pattern",
    description: "Users consistently praise the new dashboard layout. Consider similar improvements in other areas.",
    impact: "low"
  }
];

const AISuggestions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI-Generated Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold flex items-center gap-2">
                {suggestion.title}
                <span className={`text-xs px-2 py-1 rounded ${
                  suggestion.impact === 'high' ? 'bg-red-100 text-red-800' :
                  suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {suggestion.impact} impact
                </span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{suggestion.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AISuggestions;