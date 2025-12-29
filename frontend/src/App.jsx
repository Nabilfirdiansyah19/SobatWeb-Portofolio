import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Transparency from './components/Transparency';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <Stats /> 
      <Services />
      <Gallery />
      <Pricing />
      <Transparency />
      <FAQ /> 
      <Footer />
      
      <a 
        href="https://wa.me/6287888082449" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;