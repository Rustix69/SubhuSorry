import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ApologyForm = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto my-12">
      <h2 className="text-2xl text-center font-serif text-pink-600 mb-6">Your Response</h2>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts with me..."
            className="w-full h-32 p-4 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
          <button
            type="submit"
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md transform transition-all hover:scale-105 flex items-center mx-auto"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Your Response
          </button>
        </form>
      ) : (
        <div className="text-center text-pink-600 animate-fade-in">
          Thank you for your response. I love you. ❤️
        </div>
      )}
    </div>
  );
};