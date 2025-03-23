import React, { useState } from 'react';
import { Heart, Send, X } from 'lucide-react';
import { FloatingElements } from './components/FloatingElements';
import { PhotoGallery } from './components/PhotoGallery';
import { SpecialReasons } from './components/SpecialReasons';
import { ApologyForm } from './components/ApologyForm';
import { ApologyMessage } from './components/ApologyMessage';
import { Tour } from './components/Tour';

function App() {
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      <FloatingElements />
      
      {/* Tour Component */}
      <Tour />
      
      {/* Audio Control */}
      <button 
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
        data-tour="music-toggle"
      >
        {isPlaying ? <X className="w-6 h-6 text-pink-500" /> : <Send className="w-6 h-6 text-pink-500" />}
      </button>
      
      <audio id="bgMusic" loop className="hidden">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2dde668d05.mp3" type="audio/mpeg" />
      </audio>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl md:text-6xl text-center font-serif mb-8 text-pink-600">
          I'm Sorry subhu ❤️
        </h1>

        {/* Animated Apology Message */}
        <ApologyMessage />

        {/* Photo Gallery */}
        <div data-tour="photo-gallery">
          <PhotoGallery />
        </div>

        {/* Special Reasons */}
        <div data-tour="special-reasons">
          <SpecialReasons />
        </div>

        {/* Forgive Me Button */}
        <div className="text-center mt-12 mb-16">
          <button
            onClick={() => setShowSpecialMessage(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg transform transition-all hover:scale-105 flex items-center mx-auto"
            data-tour="forgive-button"
          >
            <Heart className="w-5 h-5 mr-2" />
            Forgive Me?
          </button>

          {showSpecialMessage && (
            <div className="mt-8 animate-fade-in text-pink-600 text-xl font-serif">
              You mean the world to me. I'll spend every day making you smile again. ❤️
            </div>
          )}
        </div>

        {/* Response Form */}
        <div data-tour="response-form">
          <ApologyForm />
        </div>
      </main>
    </div>
  );
}

export default App;