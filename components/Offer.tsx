import React, { useState } from 'react';
import Button from './Button';
import { ShieldCheck, Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants';

const Offer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SECCIÓN 10: PRECIO Y GARANTÍA */}
      <section id="offer" className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold-100">
            <div className="bg-stone-900 p-6 text-center">
              <span className="text-gold-400 tracking-widest uppercase text-sm font-bold">Oferta Especial Limitada</span>
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <div className="flex justify-center items-end gap-4 mb-6">
                <span className="text-2xl text-stone-400 line-through decoration-red-400 decoration-2">$47 USD</span>
                <span className="text-6xl md:text-7xl font-serif font-bold text-stone-900">$14 <span className="text-2xl text-stone-600 font-sans font-normal">USD</span></span>
              </div>
              
              <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                Acceso inmediato al Libro Digital, los 3 Bonos Exclusivos y la comunidad.
              </p>

              <div className="bg-gold-50 border border-gold-200 p-6 rounded-xl mb-8 flex flex-col md:flex-row items-center gap-4 text-left">
                <ShieldCheck className="w-12 h-12 text-gold-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-800">Garantía Incondicional de 7 Días</h4>
                  <p className="text-sm text-stone-600 mt-1">
                    Tienes 7 días para leerlo, sentirlo y aplicarlo. Si no experimentas un cambio positivo, puedes solicitar un reembolso completo sin preguntas.
                  </p>
                </div>
              </div>

              <a 
                href="https://buy.stripe.com/example" 
                className="block w-full"
                onClick={(e) => e.preventDefault()} // Prevent default for demo
              >
                <Button fullWidth pulse className="text-xl py-6">Comprar con Garantía 100% Segura</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 11: FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-stone-900 mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-4">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                >
                  <span className={`font-medium text-lg transition-colors ${openFaq === index ? 'text-gold-600' : 'text-stone-700 group-hover:text-gold-600'}`}>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gold-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-stone-400 group-hover:text-gold-500" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-stone-600 leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 12: CIERRE */}
      <section className="py-24 bg-stone-900 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight max-w-4xl mx-auto">
            “Tu nueva vida comienza en los próximos 21 días. Solo necesitas dar el primer paso.”
          </h2>
          <div className="flex justify-center">
             <Button className="py-5 px-10 text-xl">Acceder al Ritual Ahora</Button>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-500 py-12 text-center text-sm border-t border-stone-800">
        <div className="container mx-auto px-6">
          <p className="mb-4">© {new Date().getFullYear()} El Ritual de La Abu. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            <span className="hover:text-gold-400 cursor-pointer">Términos y Condiciones</span>
            <span className="hover:text-gold-400 cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Offer;