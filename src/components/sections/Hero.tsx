import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ChevronDown, Code, Layers, Smartphone, Globe, LineChart, Wand2, Sparkles, Stars } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple visibility trigger
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('services');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="accueil">
      {/* Simple Background */}
      <div className="absolute inset-0 z-0 bg-midnight-dark">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] bg-repeat opacity-10" 
             style={{ backgroundSize: '50px 50px' }} />
      </div>
      
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#008080]/70 via-[#008080]/50 to-[#FF7F50]/70 opacity-80 z-1"></div>
      
      {/* Simplified background */}
      <div className="absolute inset-0 z-2">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563898061254-696f043d010c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682703555628-3ed7c97dd2e7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-5 mix-blend-screen"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Simplified floating elements */}
          <div className="relative mb-6">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
              <div className="flex gap-6 opacity-80">
                <Wand2 className="text-[#008080]" size={28} />
                <Code className="text-[#008080]" size={24} />
                <Stars className="text-[#FF7F50]" size={32} />
                <Globe className="text-[#008080]" size={28} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight p-4" style={{ fontFamily: 'Playfair Display' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008080] via-[#008080] to-[#FF7F50] relative">
                Les Magiciens
                <Sparkles className="absolute -top-8 -right-6 text-[#FF7F50]" size={20} />
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FF7F50] via-[#008080] to-[#008080] p-8">
                du Digital
              </span>
            </h1>
          </div>
          
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
            Nous créons des expériences digitales qui <span className="text-[#FF7F50]">enchantent</span> et des plateformes qui <span className="text-[#008080]">convertissent</span>.
          </p>
          
          <p className="max-w-2xl mx-auto text-[#008080]/80 text-md md:text-lg mb-10 leading-relaxed">
            Là où technologie et magie se rencontrent pour transformer votre univers numérique.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="!bg-[#FF7F50] hover:!bg-[#FF6666] !from-[#FF7F50] !to-[#FF7F50]"
              onClick={() => window.location.href = '/potentiel'}
            >
              <span className="relative">
                Révéler votre potentiel digital
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="!border-[#008080] !border-1 !text-white hover:bg-[#008080]/10 transition-all duration-300"
              onClick={() => window.location.href = '/magie'}
            >
              Découvrir notre magie
            </Button>
          </div>
          
          {/* Simplified UI elements */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              {/* Static devices and elements */}
              <div className="absolute -top-2 -left-20 w-24 h-40 border-2 border-[#008080]/20 rounded-xl transform rotate-12 backdrop-blur-sm bg-midnight-lighter/10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#008080]/10 after:to-transparent after:rounded-xl"></div>
              <div className="absolute -bottom-10 -right-16 w-32 h-24 border-2 border-[#FF7F50]/20 rounded-lg transform -rotate-6 backdrop-blur-sm bg-midnight-lighter/10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-[#FF7F50]/10 after:to-transparent after:rounded-lg"></div>
              
              {/* Static particles */}
              <div className="absolute top-10 right-6 w-6 h-6 border border-[#FF7F50]/40 rounded-full"></div>
              <div className="absolute -top-4 -right-2 w-3 h-3 bg-[#008080]/80 rounded-full"></div>
              <div className="absolute bottom-2 left-10 w-2 h-2 bg-[#008080]/80 rounded-full"></div>
              <div className="absolute -bottom-6 right-20 w-4 h-4 bg-[#FF7F50]/80 rounded-full"></div>
              
              {/* Static badges */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-[#008080]/30 text-white/80 text-sm group relative">
                  <span className="flex items-center gap-2">
                    <Code size={14} />
                    Web Enchanteur
                  </span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-[#008080]/30 text-white/80 text-sm group relative">
                  <span className="flex items-center gap-2">
                    <Wand2 size={14} />
                    Alchimie UX
                  </span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-[#FF7F50]/30 text-white/80 text-sm group relative">
                  <span className="flex items-center gap-2">
                    <Stars size={14} />
                    Expériences Immersives
                  </span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-[#008080]/30 text-white/80 text-sm group relative">
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} />
                    Digital Transformant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simplified scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-amber-400/80 text-sm mb-2 group-hover:text-amber-300 transition-colors">Découvrir notre univers</span>
        <ChevronDown className="text-amber-400/80 group-hover:text-amber-300 transition-colors" size={24} />
      </button>
    </section>
  );
};

export default Hero;