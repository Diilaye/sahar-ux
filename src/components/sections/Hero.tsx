import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="accueil">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-dark via-midnight to-midnight-lighter opacity-90 z-0"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-300 to-gold">
              Les magiciens
            </span>
            <span className="block">du web</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
            Nous créons des interfaces qui enchantent, des plateformes qui convertissent.
            Votre présence en ligne, réinventée.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Démarrer un projet
            </Button>
            <Button variant="outline" size="lg">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-gold/80 text-sm mb-2">Découvrir</span>
        <ChevronDown className="text-gold/80" size={24} />
      </button>
    </section>
  );
};

export default Hero;