import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Star, Rocket, Gem, Target, Sparkles, Wand2, BookOpen, Code, Stars, Link } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Valeurs avec icônes
  const values = [
    {
      icon: <Star className="text-[#FF7F50]" size={24} />,
      magicIcon: <Sparkles className="text-[#FF7F50]" size={16} />,
      title: 'Créativité',
      description: 'Nous repensons l\'expérience digitale pour créer des sites web qui dépassent les attentes et inspirent l\'émerveillement.',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      particleColor: 'bg-[#FF7F50]'
    },
    {
      icon: <Gem className="text-[#008080]" size={24} />,
      magicIcon: <Stars className="text-[#008080]" size={16} />,
      title: 'Excellence',
      description: 'Chaque pixel compte. Nous nous engageons à livrer un travail impeccable qui reflète l\'ambition et la qualité de votre marque.',
      gradient: 'from-[#008080] to-[#008080]/70',
      particleColor: 'bg-[#008080]'
    },
    {
      icon: <Rocket className="text-[#FF7F50]" size={24} />,
      magicIcon: <Wand2 className="text-[#FF7F50]" size={16} />,
      title: 'Innovation',
      description: 'Nous anticipons les tendances et intégrons les dernières technologies pour vous propulser en avant de la compétition.',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      particleColor: 'bg-[#FF7F50]'
    },
    {
      icon: <Target className="text-[#008080]" size={24} />,
      magicIcon: <Code className="text-[#008080]" size={16} />,
      title: 'Résultats',
      description: 'Au-delà de l\'esthétique, nous concevons des interfaces qui convertissent et qui accomplissent vos objectifs commerciaux.',
      gradient: 'from-[#008080] to-[#008080]/70',
      particleColor: 'bg-[#008080]'
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

  return (
    <section 
      className="py-20 relative overflow-hidden" 
      id="apropos"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-dark to-midnight-lighter opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0L78 42H42L60 0Z" fill="url(#paint0_linear)"/>
          <path d="M42 42L0 60L42 78V42Z" fill="url(#paint1_linear)"/>
          <path d="M78 42V78L120 60L78 42Z" fill="url(#paint2_linear)"/>
          <path d="M60 120L42 78H78L60 120Z" fill="url(#paint3_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="60" y1="0" x2="60" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#008080" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1="60" x2="42" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#008080" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="78" y1="60" x2="120" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7F50"/>
              <stop offset="1" stopColor="#FF7F50" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="60" y1="78" x2="60" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7F50"/>
              <stop offset="1" stopColor="#FF7F50" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="url(#circle-gradient)"/>
          <defs>
            <linearGradient id="circle-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7F50"/>
              <stop offset="1" stopColor="#008080"/>
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
              Notre vision <Stars className="text-[#FF7F50]" size={16} />
            </span>
          }
          className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-500 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-10">
            <p className="text-xl md:text-2xl font-playfair text-white/90 mb-8 leading-relaxed">
              "Nous créons des interfaces qui enchantent, des plateformes qui convertissent."
            </p>
            
            {/* Simplified elements */}
            <div className="absolute -top-4 left-0 w-full flex justify-center">
              <div className="relative">
                <Wand2 className="text-[#FF7F50]" size={20} />
              </div>
            </div>
            
            <div className="absolute -bottom-2 left-0 w-full flex justify-center">
              <div className="h-0.5 w-20 bg-gradient-to-r from-[#008080] via-[#008080] to-[#FF7F50] rounded-full"></div>
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
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#008080]/30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#FF7F50]/30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#008080]/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#FF7F50]/30"></div>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <div className="p-4 rounded-full bg-midnight-lighter border border-[#008080]/20 group-hover:border-[#008080]/40 transition-all duration-300">
              <BookOpen className="text-white/70 group-hover:text-[#FF7F50] transition-colors duration-300" size={28} />
            </div>
            <a href="/histoire" className="absolute inset-0 flex items-center justify-center text-center text-white/70 group-hover:text-[#FF7F50] transition-colors duration-300">
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 whitespace-nowrap opacity-100 transition-opacity duration-300">
                Notre histoire complète
              </span>
            </a>
          </div>

        </div>
      </div>
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
      className={`transform transition-all duration-500`}
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
        
        <div className="flex items-start gap-4 relative z-10">
          {/* Icon container */}
          <div className="relative">
            <div className={`w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-${gradient.split(' ')[1]}/30 group-hover:border-${gradient.split(' ')[1]}/50 transition-colors duration-300 relative overflow-hidden`}>
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10">
                {icon}
              </div>
              
              {/* Magical sparkle in corner */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {magicIcon}
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 -m-1 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-2 text-white group-hover:text-white/95 transition-colors relative">
              {title}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-12 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                <div className={`h-full w-full bg-gradient-to-r ${gradient} rounded-full`}></div>
              </div>
            </h3>
            <p className="text-white/70 group-hover:text-white/80 leading-relaxed transition-colors">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;