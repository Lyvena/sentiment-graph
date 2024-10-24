import React from 'react';
import { Heart, BarChart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Heart className="h-8 w-8 text-primary" />
        <BarChart className="h-4 w-4 text-primary absolute bottom-0 right-0" />
      </div>
      <span className="font-bold text-xl">Sentiment Sorcerer</span>
    </div>
  );
};

export default Logo;