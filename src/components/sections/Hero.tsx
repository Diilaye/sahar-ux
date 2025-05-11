import React, { useEffect, useState, useRef } from 'react';
import Button from '../ui/Button';
import { ChevronDown, Code, Layers, Smartphone, Globe, LineChart, Wand2, Sparkles, Stars } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Track mouse position for parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="accueil">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 bg-midnight-dark">
        <div 
          ref={particlesRef}
          className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] bg-repeat opacity-10"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            backgroundSize: '50px 50px' 
          }}
        />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-teal-900/70 opacity-80 z-1"></div>
      
      {/* Magical Sparkles */}
      <div className="absolute inset-0 z-1">
        <div className="sparkles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 4 + 3}s infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Magical Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl animate-pulse z-1"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse z-1" 
        style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gold/20 blur-3xl animate-pulse z-1"
        style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-indigo-500/20 blur-3xl animate-float z-1"
        style={{ animationDelay: '0.5s' }}></div>
      
      {/* Futuristic wireframe/grid background with magical overlay */}
      <div className="absolute inset-0 z-2">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600')] bg-cover bg-center opacity-10"
          style={{ 
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600')] bg-cover bg-center opacity-5 mix-blend-screen"
          style={{ 
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        ></div>
      </div>
      
      {/* Magic trails following cursor */}
      <div 
        className="pointer-events-none absolute h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-gold opacity-0 blur-md transition-opacity duration-500 ease-in-out"
        style={{
          left: `calc(50% + ${mousePosition.x * window.innerWidth/2}px)`,
          top: `calc(50% + ${mousePosition.y * window.innerHeight/2}px)`,
          opacity: Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 0.02 ? 0.3 : 0,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Digital floating elements */}
          <div className="relative mb-6">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
              <div className="flex gap-6 opacity-80">
                <Wand2 className="text-purple-400 animate-float" style={{ animationDelay: '0s' }} size={28} />
                <Code className="text-teal-400 animate-float" style={{ animationDelay: '0.3s' }} size={24} />
                <Stars className="text-amber-400 animate-float" style={{ animationDelay: '0.7s' }} size={32} />
                <Globe className="text-blue-400 animate-float" style={{ animationDelay: '1s' }} size={28} />
              </div>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-amber-400 relative">
                Les Magiciens
                <Sparkles className="absolute -top-8 -right-6 text-amber-300 animate-float" size={20} />
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-blue-400 to-purple-400">
                du Digital
              </span>
            </h1>
          </div>
          
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
            Nous créons des expériences digitales qui <span className="text-amber-300">enchantent</span> et des plateformes qui <span className="text-purple-300">convertissent</span>.
          </p>
          
          <p className="max-w-2xl mx-auto text-teal-300/80 text-md md:text-lg mb-10 leading-relaxed">
            Là où technologie et magie se rencontrent pour transformer votre univers numérique.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 hover:from-purple-700 hover:via-blue-600 hover:to-amber-600 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative">
                Révéler votre potentiel digital
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-300 opacity-70 group-hover:animate-ping"></span>
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105"
            >
              Découvrir notre magie
            </Button>
          </div>
          
          {/* Animated UI elements */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              {/* Magical devices and elements */}
              <div className="absolute -top-2 -left-20 w-24 h-40 border-2 border-purple-500/20 rounded-xl transform rotate-12 backdrop-blur-sm bg-midnight-lighter/10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-purple-500/10 after:to-transparent after:rounded-xl"></div>
              <div className="absolute -bottom-10 -right-16 w-32 h-24 border-2 border-amber-500/20 rounded-lg transform -rotate-6 backdrop-blur-sm bg-midnight-lighter/10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-amber-500/10 after:to-transparent after:rounded-lg"></div>
              
              {/* Magical particles */}
              <div className="absolute top-10 right-6 w-6 h-6 border border-amber-500/40 rounded-full animate-ping"></div>
              <div className="absolute -top-4 -right-2 w-3 h-3 bg-purple-400/80 rounded-full animate-float" style={{ animationDelay: '1.3s' }}></div>
              <div className="absolute bottom-2 left-10 w-2 h-2 bg-teal-400/80 rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute -bottom-6 right-20 w-4 h-4 bg-amber-400/80 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              
              {/* Floating badges */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 text-white/80 text-sm animate-float group relative">
                  <span className="flex items-center gap-2">
                    <Code size={14} />
                    Web Enchanteur
                  </span>
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 text-white/80 text-sm animate-float group relative" style={{ animationDelay: '1s' }}>
                  <span className="flex items-center gap-2">
                    <Wand2 size={14} />
                    Alchimie UX
                  </span>
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 text-white/80 text-sm animate-float group relative" style={{ animationDelay: '2s' }}>
                  <span className="flex items-center gap-2">
                    <Stars size={14} />
                    Expériences Immersives
                  </span>
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
                <div className="bg-midnight-lighter/30 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/30 text-white/80 text-sm animate-float group relative" style={{ animationDelay: '1.5s' }}>
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} />
                    Digital Transformant
                  </span>
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-amber-400/80 text-sm mb-2 group-hover:text-amber-300 transition-colors">Découvrir notre univers</span>
        <ChevronDown className="text-amber-400/80 group-hover:text-amber-300 transition-colors" size={24} />
        <span className="absolute -inset-4 border-b border-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </button>
      
      {/* Add this to your global CSS for magical animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .magic-text {
          background: linear-gradient(90deg, #9333ea, #60a5fa, #fcd34d, #9333ea);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;