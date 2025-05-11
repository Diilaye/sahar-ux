import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { 
  Layers, Code, Smartphone, Lightbulb, BarChart, TrendingUp, 
  ChevronRight, CheckCircle, Sparkles, Wand2, Stars, Zap, 
  Palette, Globe, ArrowRight, Monitor, Maximize
} from 'lucide-react';
import Button from '../ui/Button';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  
  // Services avec icônes magiques et couleurs thématiques
  const services = [
    {
      icon: <Layers className="group-hover:animate-float" size={24} />,
      magicIcon: <Wand2 size={16} />,
      title: 'Design UX/UI',
      shortDescription: 'Interfaces intuitives et esthétiques qui enchantent',
      longDescription: 'Nous concevons des interfaces utilisateur qui transcendent le simple aspect visuel pour créer une connexion émotionnelle durable avec vos utilisateurs.',
      features: [
        'Wireframing & prototypage magique',
        'Design système cohérent',
        'Micro-interactions & animations',
        'Tests utilisateurs approfondis',
      ],
      color: 'purple',
      gradient: 'from-purple-600 to-purple-400',
      icon2: <Palette size={16} />
    },
    {
      icon: <Code className="group-hover:animate-pulse" size={24} />,
      magicIcon: <Zap size={16} />,
      title: 'Développement Web',
      shortDescription: 'Sites performants, évolutifs et mystifiants',
      longDescription: 'Nous transformons des designs exceptionnels en sites web rapides et immersifs, construits avec les technologies front-end et back-end les plus adaptées à vos besoins.',
      features: [
        'Sites vitrines et corporate',
        'E-commerce et plateformes',
        'Applications web interactives',
        'Optimisation magique des performances',
      ],
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400',
      icon2: <Globe size={16} />
    },
    {
      icon: <Smartphone className="group-hover:animate-bounce-gentle" size={24} />,
      magicIcon: <Sparkles size={16} />,
      title: 'Développement Mobile',
      shortDescription: 'Applications natives et cross-platform',
      longDescription: 'Nous créons des applications mobiles intuitives qui offrent une expérience utilisateur exceptionnelle sur iOS et Android, tout en répondant à vos objectifs commerciaux.',
      features: [
        'Applications iOS & Android',
        'Solutions cross-platform enchantées',
        'UI/UX mobile spécifique',
        'Maintenance & mises à jour',
      ],
      color: 'teal',
      gradient: 'from-teal-600 to-teal-400',
      icon2: <Monitor size={16} />
    },
    {
      icon: <Lightbulb className="group-hover:animate-pulse" size={24} />,
      magicIcon: <Stars size={16} />,
      title: 'Branding Digital',
      shortDescription: 'Identités de marque mémorables',
      longDescription: 'Nous développons des identités visuelles distinctives qui résonnent avec votre public cible et établissent une présence mémorable dans l\'écosystème digital.',
      features: [
        'Identité visuelle captivante',
        'Logos & charte graphique',
        'Direction artistique web',
        'Guides de style digitaux magiques',
      ],
      color: 'amber',
      gradient: 'from-amber-600 to-amber-400',
      icon2: <Palette size={16} />
    },
    {
      icon: <BarChart className="group-hover:animate-float" size={24} />,
      magicIcon: <Maximize size={16} />,
      title: 'Stratégie de Conversion',
      shortDescription: 'Parcours utilisateurs optimisés pour convertir',
      longDescription: 'Nous analysons, optimisons et perfectionnons chaque étape du parcours utilisateur pour maximiser vos taux de conversion et atteindre vos objectifs commerciaux.',
      features: [
        'Optimisation de conversion (CRO)',
        'A/B testing & analytics',
        'Entonnoirs de conversion magiques',
        'Psychologie des utilisateurs',
      ],
      color: 'indigo',
      gradient: 'from-indigo-600 to-indigo-400',
      icon2: <TrendingUp size={16} />
    },
    {
      icon: <TrendingUp className="group-hover:animate-pulse" size={24} />,
      magicIcon: <Sparkles size={16} />,
      title: 'Marketing Digital',
      shortDescription: 'Stratégies d\'acquisition et de fidélisation',
      longDescription: 'Nous élaborons des stratégies digitales complètes pour attirer, engager et fidéliser votre audience cible, en utilisant les canaux les plus pertinents pour votre marque.',
      features: [
        'SEO & content marketing',
        'Campagnes publicitaires magiques',
        'Social media strategy',
        'Email marketing transformateur',
      ],
      color: 'rose',
      gradient: 'from-rose-600 to-rose-400',
      icon2: <Globe size={16} />
    },
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
  
  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };
  
  // Générer des particules magiques
  const renderParticles = (count = 15) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-0"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animation: 'servicesSparkle infinite ease-in-out',
        }}
      />
    ));
  };
  
  return (
    <section className="py-20 relative overflow-hidden" id="services" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-lighter via-midnight-dark to-midnight opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(25)}
      </div>
      
      {/* Magic orbs in background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-20 w-60 h-60 rounded-full bg-blue-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-amber-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
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
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="url(#services-circle-gradient)"/>
          <defs>
            <linearGradient id="services-circle-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#FBBF24"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-40 left-10 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L60 30L30 60L0 30L30 0Z" fill="url(#services-diamond-gradient)"/>
          <defs>
            <linearGradient id="services-diamond-gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14B8A6"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Nos services magiques" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Ce que nous offrons <Wand2 className="text-amber-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              icon={service.icon}
              magicIcon={service.magicIcon}
              icon2={service.icon2}
              title={service.title}
              shortDescription={service.shortDescription}
              longDescription={service.longDescription}
              features={service.features}
              isActive={activeService === index}
              gradient={service.gradient}
              color={service.color}
              onClick={() => handleServiceClick(index)}
              onHover={() => setHoveredService(index)}
              onLeave={() => setHoveredService(null)}
              delay={index * 0.1}
              isHovered={hoveredService === index}
            />
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 hover:from-purple-700 hover:via-blue-600 hover:to-amber-600 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 group relative"
          >
            <span className="flex items-center gap-2">
              Demander votre transformation digitale
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-300 opacity-70 group-hover:animate-ping"></span>
            </span>
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes servicesSparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) translateY(0);
          }
          25% { 
            opacity: 0.5; 
            transform: scale(1) translateY(-15px);
          }
          50% { 
            opacity: 0.2; 
            transform: scale(0.5) translateY(-30px);
          }
          75% { 
            opacity: 0.4; 
            transform: scale(0.7) translateY(-45px);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  magicIcon, 
  icon2,
  title, 
  shortDescription,
  longDescription,
  features,
  isActive,
  gradient,
  color,
  onClick,
  onHover,
  onLeave,
  delay,
  index,
  isHovered
}) => {
  // Référence pour mesurer la hauteur du contenu
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Mettre à jour la hauteur du contenu quand il est actif
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isActive]);
  
  return (
    <div 
      className={`transform transition-all duration-500 delay-${Math.floor(delay * 1000)}`}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card 
        className={`relative overflow-hidden group transition-all duration-500 hover:shadow-xl ${
          isActive ? `shadow-2xl shadow-${color}-500/20 scale-105 border border-${color}-500/10` : 'hover:shadow-purple-500/10 hover:-translate-y-1'
        }`}
      >
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-${color}-500/10 group-hover:via-${color}-500/5 group-hover:to-transparent`}></div>
        </div>
        
        {/* Animated particles on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          {isHovered && Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-${color}-400 opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
                animation: `serviceCardParticle ${Math.random() * 1 + 1}s forwards ease-out`
              }}
            />
          ))}
        </div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon container with animated gradient */}
            <div className="relative">
              <div className={`w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-${color}-500/30 group-hover:border-${color}-500/50 transition-all duration-300 relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Main icon */}
                <div className={`relative z-10 text-${color}-400`}>
                  {icon}
                </div>
                
                {/* Magic icon that appears on hover */}
                <div className={`absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 text-${color}-300`}>
                  {magicIcon}
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 -m-1 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
            </div>
            
            <div className="flex-1">
              <h3 className={`text-xl font-playfair font-semibold mb-1.5 text-white group-hover:text-${color}-50 transition-colors relative`}>
                {title}
                
                {/* Line animation on hover */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-12 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                  <div className={`h-full w-full bg-gradient-to-r ${gradient} rounded-full`}></div>
                </div>
              </h3>
              <p className="text-white/70 group-hover:text-white/80 transition-colors">{shortDescription}</p>
            </div>
          </div>
          
          {/* Content that expands/collapses */}
          <div 
            ref={contentRef}
            className="overflow-hidden transition-all duration-500 mt-4"
            style={{ 
              maxHeight: isActive ? `${contentHeight}px` : '0',
              opacity: isActive ? 1 : 0,
            }}
          >
            <div className="space-y-4">
              {/* Decorative divider */}
              <div className="relative h-0.5 w-full">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${gradient} opacity-20 rounded-full`}></div>
                <div className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500 animate-pulse`}></div>
              </div>
              
              <p className="text-white/80 relative">
                {longDescription}
                {/* Second icon near the description */}
                <span className={`absolute -top-1 -left-1 opacity-10 text-${color}-400`}>{icon2}</span>
              </p>
              
              <ul className="space-y-3 pt-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 group/item">
                    <CheckCircle 
                      size={16} 
                      className={`text-${color}-400 mt-1 shrink-0 transition-transform duration-300 group-hover/item:scale-110`} 
                    />
                    <span className="text-white/70 group-hover/item:text-white/90 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Button with animated icon */}
          <button 
            onClick={onClick}
            className={`flex items-center justify-center gap-1 text-${color}-400 hover:text-${color}-300 transition-all duration-300 mt-4 w-full group/btn ${isActive ? 'font-medium' : ''}`}
          >
            <span>{isActive ? 'Voir moins' : 'Découvrir la magie'}</span>
            <ChevronRight 
              size={16} 
              className={`transition-all duration-500 ${isActive ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} 
            />
            
            {/* Sparkle effect on button hover */}
            {!isActive && (
              <span className="relative ml-1">
                <Sparkles 
                  size={12} 
                  className={`absolute -top-1 -right-1 text-${color}-300 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} 
                />
              </span>
            )}
          </button>
        </div>
      </Card>
      
      <style jsx>{`
        @keyframes serviceCardParticle {
          0% {
            opacity: 0.7;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;