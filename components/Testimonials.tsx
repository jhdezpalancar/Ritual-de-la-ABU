import React from 'react';
import { IMAGES } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
          Personas reales que ya están transformando su vida
        </h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto" />
      </div>

      {/* Grid Layout for Desktop */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {IMAGES.testimonials.map((src, index) => (
                <div 
                    key={index} 
                    className={`
                        relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300
                        ${index % 3 === 0 ? 'md:row-span-2' : 'md:row-span-1'}
                    `}
                >
                    <img 
                        src={src} 
                        alt={`Testimonio ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;