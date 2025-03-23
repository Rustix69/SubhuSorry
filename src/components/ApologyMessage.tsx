import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const messages = [
  {
    text: "My dearest subhu, I want to sincerely apologize for my actions yesterday. I realize now that my words were thoughtless and hurtful.",
    delay: 1000
  },
  {
    text: "In my frustration, I forgot the most important thing - your feelings.",
    delay: 2000
  },
  {
    text: "Seeing the pain in your eyes made me understand how much my behavior affected you. This experience has taught me the importance of patience, understanding, and thinking before speaking.",
    delay: 3000
  },
  {
    text: "I promise to be more mindful of your feelings and to communicate better. You deserve nothing but love, respect, and kindness - all of which I failed to show yesterday.",
    delay: 4000
  }
];

export const ApologyMessage = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
        if (index === messages.length - 1) {
          setTyping(false);
        }
      }, messages[index].delay);
    });
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 max-w-2xl mx-auto">
      <div className="space-y-4">
        {messages.map((message, index) => (
          visibleMessages.includes(index) && (
            <div
              key={index}
              className="flex items-start space-x-4 animate-fade-in"
            >
              <div className="bg-pink-500 rounded-full p-2 flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-pink-50 rounded-lg p-4 inline-block">
                  <p className="text-gray-700 leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          )
        ))}
        
        {typing && (
          <div className="flex items-center space-x-2 ml-14">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};