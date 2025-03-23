import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
  "Your smile lights up my entire world",
  "Your kindness inspires me to be a better person",
  "The way you always know how to make me laugh",
  "Your strength and determination in everything you do",
  "How you support my dreams, no matter how crazy they seem"
];

export const SpecialReasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <div className="max-w-2xl mx-auto my-12">
      <h2 className="text-2xl text-center font-serif text-pink-600 mb-6">Why You're Special to Me</h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 flex items-center">
        <button
          onClick={prev}
          className="p-2 hover:bg-pink-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-pink-500" />
        </button>
        
        <p className="flex-1 text-center text-gray-700 text-lg px-4">
          {reasons[currentIndex]}
        </p>

        <button
          onClick={next}
          className="p-2 hover:bg-pink-100 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-pink-500" />
        </button>
      </div>
    </div>
  );
};