import React from 'react';
import Button from './Button';
import { Heart, Sun, Brain, Feather, Star } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <>
      {/* SECCIÓN 4: EL RITUAL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">¿En qué consiste el Ritual?</h2>
            <p className="text-lg text-stone-600">Un camino de 21 días diseñado para reconectar con tu esencia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: Sun, title: "Prácticas Simples", desc: "Ejercicios diarios que no requieren horas de tu tiempo, solo presencia." },
              { icon: Heart, title: "Conexión Emocional", desc: "Alinea lo que sientes con lo que deseas atraer a tu vida." },
              { icon: Feather, title: "Acción Guiada", desc: "Pequeños pasos que crean grandes transformaciones." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-gold-200 transition-colors">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-gold-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-stone-800">{item.title}</h3>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button>Quiero Comenzar los 21 Días</Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: POR QUÉ FUNCIONA */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-gold-300 mb-16">
            Por qué funciona este método donde otros fallaron
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Rompe patrones limitantes arraigados en el subconsciente.",
                "Activa la coherencia entre mente y corazón.",
                "Te ayuda a tomar decisiones desde la claridad, no el miedo.",
                "Funciona incluso si has intentado todo antes sin éxito."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-gold-400 shrink-0 mt-1 fill-current" />
                  <p className="text-lg font-light text-stone-200">{text}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-2xl border border-stone-700 shadow-xl">
              <Brain className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-white">Reprogramación Suave</h3>
              <p className="text-stone-400 leading-relaxed">
                A diferencia de métodos agresivos, este ritual trabaja con la plasticidad de tu mente a través de la repetición consciente y la emoción elevada durante 21 días consecutivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: LA ABU */}
      <section className="py-24 bg-gold-50/30">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
             <div className="w-20 h-20 rounded-full bg-gold-200 flex items-center justify-center opacity-80">
                <span className="font-serif text-4xl text-gold-700">A</span>
             </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">El Legado de La Abu</h2>
          <div className="space-y-6 text-lg md:text-xl text-stone-700 leading-relaxed font-light">
            <p>
              “Este ritual nació hace generaciones. <strong className="font-serif text-gold-700">La Abu</strong>, una mujer sabia y amorosa, creó este método para guiar a quienes buscaban claridad y propósito.”
            </p>
            <p>
              “Lo transmitió como un legado de transformación profunda. Hoy, esa sabiduría llega hasta ti tal como ella la enseñó: simple, humana y llena de amor.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;