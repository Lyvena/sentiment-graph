import React from 'react';
import { User } from 'lucide-react';

const feedbackData = [
  { id: 1, user: 'Alice', comment: 'Great initiative! Looking forward to more updates.', sentiment: 'positive' },
  { id: 2, user: 'Bob', comment: 'The application process could be more streamlined.', sentiment: 'neutral' },
  { id: 3, user: 'Charlie', comment: 'I\'m having trouble understanding the eligibility criteria.', sentiment: 'negative' },
];

const FeedbackList = () => {
  return (
    <ul className="space-y-4">
      {feedbackData.map((feedback) => (
        <li key={feedback.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
          <User className="h-10 w-10 text-gray-400" />
          <div>
            <p className="font-semibold">{feedback.user}</p>
            <p className="text-gray-600">{feedback.comment}</p>
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
              feedback.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
              feedback.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {feedback.sentiment}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;