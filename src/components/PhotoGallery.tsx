import React, { useState } from 'react';

const photos = [
  {
    url: './public/pic01.jpeg',
    caption: 'Cutie Dress'
  },
  {
    url: './public/pic02.jpeg',
    caption: 'So Gayi Kyu ?'
  },
  {
    url: './public/pic03.jpeg',
    caption: 'So Cute'
  },
  {
    url: './public/pic04.jpeg',
    caption: 'Proud Moments'
  },
];

export const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="my-12">
      <h2 className="text-2xl text-center font-serif text-pink-600 mb-6">Our Beautiful Moments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-xl aspect-square cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:z-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              zIndex: hoveredIndex === index ? 20 : 10,
            }}
          >
            {/* Background blur effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Image */}
            <img
              src={photo.url}
              alt={photo.caption}
              className="object-cover w-full h-full transform transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <p className="text-white text-lg font-serif text-center drop-shadow-lg">
                {photo.caption}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-300" />
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-pink-300/50 transition-all duration-500 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-pink-300/50 transition-all duration-500 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-pink-300/50 transition-all duration-500 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-pink-300/50 transition-all duration-500 rounded-br-lg" />

            {/* Shine effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)',
                transform: hoveredIndex === index ? 'translateX(100%)' : 'translateX(-100%)',
                transition: 'transform 1s',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};