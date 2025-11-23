import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Methodology from './components/Methodology';
import ProductDetails from './components/ProductDetails';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';

function App() {
  return (
    <main className="w-full overflow-x-hidden selection:bg-gold-200 selection:text-gold-900">
      <Hero />
      <ProblemSolution />
      <Methodology />
      <ProductDetails />
      <Testimonials />
      <Offer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 shadow-lg md:hidden z-50">
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-3 rounded-full shadow-md"
        >
          Quiero Empezar (Solo $14)
        </button>
      </div>
    </main>
  );
}

export default App;