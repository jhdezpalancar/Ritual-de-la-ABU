import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-12 pb-20 lg:pt-0">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-50/50 rounded-bl-[100px] -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-gold-600 font-medium tracking-wider text-sm uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Manifestación Consciente</span>
          </div>
          
          <h1 className="font-serif text-4xl lg:text-6xl text-stone-900 leading-[1.1]">
            Descubre el Ritual de Manifestación que transforma tu vida en solo <span className="text-gold-500 italic">21 días</span>
          </h1>
          
          <p className="font-sans text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Un método simple, probado y profundo. No necesitas experiencia previa para conectar con la abundancia que mereces.
          </p>
          
          <div className="pt-4 flex justify-center lg:justify-start">
            <Button pulse>Quiero Transformar Mi Vida Ahora</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-3/4 lg:w-full max-w-md">
            <div className="absolute inset-0 bg-gold-200 blur-[60px] opacity-40 rounded-full" />
            <img 
              src={IMAGES.bookCover} 
              alt="Merezco la vida de mis sueños Libro" 
              className="relative z-10 w-full h-auto rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg z-20 hidden lg:block">
              <div className="text-center">
                <p className="text-gold-600 font-bold text-xl font-serif">21</p>
                <p className="text-xs uppercase tracking-widest text-stone-500">Días</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;