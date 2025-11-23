import React from 'react';
import Button from './Button';
import { CloudRain, Compass, Repeat, AlertCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* SECCIÓN 2: DOLOR */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-stone-800 mb-16">
            ¿Sientes que algo te impide avanzar?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: CloudRain, text: "Sensación constante de estancamiento, como si la vida pasara sin ti." },
              { icon: Compass, text: "Dudas constantes sobre tu propósito y hacia dónde dirigir tu energía." },
              { icon: Repeat, text: "Ciclos repetitivos en relaciones o finanzas que no logras romper." },
              { icon: AlertCircle, text: "Pensamientos que te frenan justo cuando estás a punto de lograr algo." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <item.icon className="w-8 h-8 text-gold-500 shrink-0 mt-1" />
                <p className="text-stone-600 font-sans text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8">
            <p className="text-xl md:text-2xl font-serif italic text-stone-700">
              “Nada de esto es tu culpa. Solo necesitas una guía clara para realinear tu energía y tus acciones.”
            </p>
            <Button>Empezar Mi Cambio Hoy</Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: TRANSICIÓN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-stone-800">
            La buena noticia es que existe un ritual que ha transformado miles de vidas. 
            <br className="hidden md:block" />
            <span className="text-gold-600 block mt-4">
              Y hoy llega hasta ti gracias a <span className="font-bold">La Abu</span>, la guardiana de esta sabiduría ancestral.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;