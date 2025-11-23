import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const ProductDetails: React.FC = () => {
  return (
    <>
      {/* SECCIÓN 7: QUÉ INCLUYE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src={IMAGES.bookCover} 
                alt="Libro Merezco la vida de mis sueños" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            
            {/* List */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">
                ¿Qué descubrirás en estas páginas?
              </h2>
              <ul className="space-y-4">
                {[
                  "Cómo alinearte energéticamente en solo 10 minutos al día.",
                  "Técnicas para reprogramar creencias limitantes sin lucha.",
                  "Cómo manifestar desde la claridad y no desde la carencia.",
                  "Secretos para elevar tu frecuencia emocional al instante.",
                  "Pasos para romper ciclos negativos generacionales.",
                  "Ejercicios prácticos guiados para los 21 días.",
                  "Visualizaciones fáciles para quienes 'no saben imaginar'."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: BONOS */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-stone-900 mb-4">
            Regalos Exclusivos
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto">
            Herramientas adicionales diseñadas para potenciar tus resultados durante y después de los 21 días.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {/* Bono 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-gold-400 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
                <img src={IMAGES.bonuses.one} alt="Bono 1" className="w-full h-full object-cover" />
              </div>
              <span className="text-gold-600 font-bold tracking-wider text-xs uppercase mb-2 block">Bono #1</span>
              <h3 className="font-serif text-2xl font-bold mb-3">Mi Diario de Manifestación</h3>
              <p className="text-stone-600 text-sm">El compañero perfecto para registrar tus avances, señales y victorias diarias.</p>
            </div>

            {/* Bono 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-gold-400 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
                <img src={IMAGES.bonuses.two} alt="Bono 2" className="w-full h-full object-cover" />
              </div>
              <span className="text-gold-600 font-bold tracking-wider text-xs uppercase mb-2 block">Bono #2</span>
              <h3 className="font-serif text-2xl font-bold mb-3">Secretos de los Sonidos Mágicos</h3>
              <p className="text-stone-600 text-sm">Frecuencias y audios para sintonizar tu mente con la abundancia mientras duermes.</p>
            </div>

            {/* Bono 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-gold-400 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
                <img src={IMAGES.bonuses.three} alt="Bono 3" className="w-full h-full object-cover" />
              </div>
              <span className="text-gold-600 font-bold tracking-wider text-xs uppercase mb-2 block">Bono #3</span>
              <h3 className="font-serif text-2xl font-bold mb-3">Números Mágicos para una Vida Abundante</h3>
              <p className="text-stone-600 text-sm">La guía de numerología sagrada aplicada a tu prosperidad diaria.</p>
            </div>
          </div>

          {/* Banner */}
          <div className="max-w-4xl mx-auto mb-16 shadow-2xl rounded-xl overflow-hidden">
            <img src={IMAGES.banner} alt="Colección completa" className="w-full h-auto" />
          </div>

          <div className="text-center">
            <Button pulse>Quiero Obtener el Libro y los 3 Bonos</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;