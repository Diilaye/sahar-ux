import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Star, Rocket, Gem, Target, Sparkles, Wand2, BookOpen, Code, Stars } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Valeurs avec icônes magiques
  const values = [
    {
      icon: <Star className="text-amber-400 group-hover:animate-spin-slow" size={24} />,
      magicIcon: <Sparkles className="text-amber-300" size={16} />,
      title: 'Créativité',
      description: 'Nous repensons l\'expérience digitale pour créer des sites web qui dépassent les attentes et inspirent l\'émerveillement.',
      gradient: 'from-amber-600 to-amber-400',
      particleColor: 'bg-amber-400'
    },
    {
      icon: <Gem className="text-teal-400 group-hover:animate-pulse" size={24} />,
      magicIcon: <Stars className="text-teal-300" size={16} />,
      title: 'Excellence',
      description: 'Chaque pixel compte. Nous nous engageons à livrer un travail impeccable qui reflète l\'ambition et la qualité de votre marque.',
      gradient: 'from-teal-600 to-teal-400',
      particleColor: 'bg-teal-400'
    },
    {
      icon: <Rocket className="text-purple-400 group-hover:animate-bounce-gentle" size={24} />,
      magicIcon: <Wand2 className="text-purple-300" size={16} />,
      title: 'Innovation',
      description: 'Nous anticipons les tendances et intégrons les dernières technologies pour vous propulser en avant de la compétition.',
      gradient: 'from-purple-600 to-purple-400',
      particleColor: 'bg-purple-400'
    },
    {
      icon: <Target className="text-blue-400 group-hover:animate-pulse" size={24} />,
      magicIcon: <Code className="text-blue-300" size={16} />,
      title: 'Résultats',
      description: 'Au-delà de l\'esthétique, nous concevons des interfaces qui convertissent et qui accomplissent vos objectifs commerciaux.',
      gradient: 'from-blue-600 to-blue-400',
      particleColor: 'bg-blue-400'
    }
  ];

  // Détecter quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Traquer la position de la souris pour les effets de lueur
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Générer des particules magiques
  const renderParticles = (count = 20) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-0"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animation: 'aboutSparkle infinite ease-in-out',
        }}
      />
    ));
  };

  return (
    <section 
      className="py-20 relative overflow-hidden" 
      id="about"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-dark to-midnight-lighter opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(30)}
      </div>
      
      {/* Magic orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-teal-600/10 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Magic glow that follows mouse */}
      <div 
        className="absolute rounded-full blur-3xl bg-gradient-to-r from-purple-500/5 to-amber-500/5 pointer-events-none transition-opacity duration-700 opacity-0 hover:opacity-100 z-0"
        style={{
          left: mousePosition.x,
          top: mousePosition.y, 
          width: '30rem',
          height: '30rem',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0L78 42H42L60 0Z" fill="url(#paint0_linear)"/>
          <path d="M42 42L0 60L42 78V42Z" fill="url(#paint1_linear)"/>
          <path d="M78 42V78L120 60L78 42Z" fill="url(#paint2_linear)"/>
          <path d="M60 120L42 78H78L60 120Z" fill="url(#paint3_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="60" y1="0" x2="60" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333EA"/>
              <stop offset="1" stopColor="#7E22CE" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1="60" x2="42" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD4BF"/>
              <stop offset="1" stopColor="#14B8A6" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="78" y1="60" x2="120" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#D97706" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="60" y1="78" x2="60" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="url(#circle-gradient)"/>
          <defs>
            <linearGradient id="circle-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#9333EA"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="À propos de Sahar'UX" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Notre vision <Stars className="text-amber-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-10">
            <p className="text-xl md:text-2xl font-playfair text-white/90 mb-8 leading-relaxed magic-text">
              "Nous créons des interfaces qui enchantent, des plateformes qui convertissent."
            </p>
            
            {/* Magical elements */}
            <div className="absolute -top-4 left-0 w-full flex justify-center">
              <div className="relative">
                <Wand2 className="text-amber-400 animate-float" size={20} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-300 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 left-0 w-full flex justify-center">
              <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 via-amber-400 to-teal-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="relative overflow-hidden p-6 before:absolute before:inset-0 before:bg-midnight-lighter/20 before:backdrop-blur-sm before:rounded-xl">
            <div className="relative z-10">
              <p className="text-white/80 leading-relaxed mb-8">
                Fondée en 2020, Sahar'UX est née d'une passion commune pour l'innovation digitale et l'expérience utilisateur. 
                Notre nom évoque les vastes étendues du désert, où le potentiel illimité rencontre la précision et la clarté.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                Nous combinons expertise technique, vision artistique et compréhension approfondie des comportements utilisateurs 
                pour créer des expériences digitales qui transforment les visiteurs en ambassadeurs de votre marque.
              </p>
            </div>
            
            {/* Subtle corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-purple-500/30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-teal-500/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/30"></div>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              index={index}
              icon={value.icon}
              magicIcon={value.magicIcon}
              title={value.title}
              description={value.description}
              gradient={value.gradient}
              particleColor={value.particleColor}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
              onLeave={() => setActiveCard(null)}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* Book icon at the bottom */}
        <div className="flex justify-center mt-16">
          <div className="relative group cursor-pointer">
            <div className="p-4 rounded-full bg-midnight-lighter border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
              <BookOpen className="text-white/70 group-hover:text-amber-400 transition-colors duration-300" size={28} />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-amber-400/0 to-teal-500/0 group-hover:from-purple-500/10 group-hover:via-amber-400/10 group-hover:to-teal-500/10 blur-md transition-all duration-500"></div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Notre histoire complète
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes aboutSparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) translateY(0);
          }
          25% { 
            opacity: 0.6; 
            transform: scale(1) translateY(-10px);
          }
          50% { 
            opacity: 0.3; 
            transform: scale(0.5) translateY(-20px);
          }
          75% { 
            opacity: 0.5; 
            transform: scale(0.7) translateY(-30px);
          }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        .magic-text {
          background: linear-gradient(90deg, #9333ea, #60a5fa, #fcd34d, #9333ea);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const ValueCard = ({ 
  icon, 
  magicIcon, 
  title, 
  description, 
  gradient, 
  particleColor, 
  isActive, 
  onHover, 
  onLeave,
  index,
  delay
}) => {
  return (
    <div 
      className={`transform transition-all duration-500 delay-${Math.floor(delay * 1000)}`}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      <Card 
        className={`relative overflow-hidden group transition-all duration-300 ${
          isActive ? 'shadow-xl shadow-purple-500/10 -translate-y-1' : ''
        } hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Gradient border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-purple-500/10 group-hover:via-amber-500/10 group-hover:to-teal-500/10"></div>
        </div>
        
        {/* Animated particle effect on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          {isActive && Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className={`absolute w-2 h-2 rounded-full ${particleColor} opacity-50`}
              style={{
                left: `${50 + (Math.random() * 30 - 15)}%`,
                top: `${Math.random() * 100}%`,
                transform: 'scale(0)',
                animation: `cardParticle ${Math.random() * 1 + 1}s forwards ${Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="flex items-start gap-4 relative z-10">
          {/* Icon container with animated gradient background */}
          <div className="relative">
            <div className={`w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-${gradient.split(' ')[1]}/30 group-hover:border-${gradient.split(' ')[1]}/50 transition-colors duration-300 relative overflow-hidden`}>
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10">
                {icon}
              </div>
              
              {/* Magical sparkle in corner */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                {magicIcon}
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 -m-1 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-2 text-white group-hover:text-white/95 transition-colors relative">
              {title}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-12 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                <div className={`h-full w-full bg-gradient-to-r ${gradient} rounded-full`}></div>
              </div>
            </h3>
            <p className="text-white/70 group-hover:text-white/80 leading-relaxed transition-colors">{description}</p>
          </div>
        </div>
      </Card>
      
      <style jsx>{`
        @keyframes cardParticle {
          0% {
            opacity: 0.7;
            transform: scale(0) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(1) translateY(-100px);
          }
        }
      `}</style>
    </div>
  );
};

export default About;