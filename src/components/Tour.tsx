import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TourStep {
  target: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    target: '[data-tour="music-toggle"]',
    content: "Click here to play some background music while you read",
    position: 'left'
  }
];

export const Tour = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isVisible) return;

    const positionTooltip = () => {
      const target = document.querySelector(tourSteps[currentStep].target);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const { position: tooltipPosition } = tourSteps[currentStep];
      
      let top = 0;
      let left = 0;

      switch (tooltipPosition) {
        case 'top':
          top = rect.top - 80;
          left = rect.left + rect.width / 2 - 150;
          break;
        case 'bottom':
          top = rect.bottom + 20;
          left = rect.left + rect.width / 2 - 150;
          break;
        case 'left':
          top = rect.top + rect.height / 2 - 40;
          left = rect.left - 320;
          break;
        case 'right':
          top = rect.top + rect.height / 2 - 40;
          left = rect.right + 20;
          break;
      }

      setPosition({ top: top + window.scrollY, left });
    };

    positionTooltip();
    window.addEventListener('scroll', positionTooltip);
    window.addEventListener('resize', positionTooltip);

    return () => {
      window.removeEventListener('scroll', positionTooltip);
      window.removeEventListener('resize', positionTooltip);
    };
  }, [currentStep, isVisible]);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-xl p-4 w-[300px]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="text-gray-700 mb-3">
        {tourSteps[currentStep].content}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {tourSteps.length}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center text-pink-500 hover:text-pink-600 font-medium"
        >
          {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};