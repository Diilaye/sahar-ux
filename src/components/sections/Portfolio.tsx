import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { 
  ExternalLink, 
  Sparkles, 
  Wand2, 
  Globe, 
  Smartphone, 
  Palette, 
  ChevronRight, 
  Stars,
  ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverStates, setHoverStates] = useState({});
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  
  // Catégories avec icônes et couleurs thématiques
  const categories = [
    { id: 'all', name: 'Tous', icon: <Stars size={14} />, color: 'amber' },
    { id: 'web', name: 'Web Design', icon: <Globe size={14} />, color: 'blue' },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone size={14} />, color: 'purple' },
    { id: 'branding', name: 'Branding', icon: <Palette size={14} />, color: 'teal' },
  ];
  
  // Projets avec métadonnées enrichies
  const projects = [
    {
      id: 1,
      title: 'LuxeHaven • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Refonte complète d\'une plateforme de vente en ligne de produits de luxe avec une augmentation de 45% du taux de conversion.',
      color: 'blue',
      gradient: 'from-blue-600 to-purple-400',
      icon: <Globe size={16} />,
      year: '2024'
    },
    {
      id: 2,
      title: 'Wanderlust • App Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de voyage révolutionnaire avec planification d\'itinéraires personnalisés basés sur l\'IA.',
      color: 'purple',
      gradient: 'from-purple-600 to-pink-400',
      icon: <Smartphone size={16} />,
      year: '2023'
    },
    {
      id: 3,
      title: 'EcoSphere • Branding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6845619/pexels-photo-6845619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Création d\'une identité visuelle pour une startup d\'écologie urbaine, du logo aux supports digitaux.',
      color: 'teal',
      gradient: 'from-teal-600 to-emerald-400',
      icon: <Palette size={16} />,
      year: '2024'
    },
    {
      id: 4,
      title: 'FinTech Pro • Web App',
      category: 'web',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interface utilisateur intuitive pour une application de gestion financière avec tableaux de bord personnalisables.',
      color: 'indigo',
      gradient: 'from-indigo-600 to-blue-400',
      icon: <Globe size={16} />,
      year: '2023'
    },
    {
      id: 5,
      title: 'HealthHub • Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de santé connectée avec suivi de données en temps réel et visualisations interactives.',
      color: 'rose',
      gradient: 'from-rose-600 to-pink-400',
      icon: <Smartphone size={16} />,
      year: '2024'
    },
    {
      id: 6,
      title: 'ArtisanCraft • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/5947551/pexels-photo-5947551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Boutique en ligne d\'artisanat local avec une expérience d\'achat immersive et storytelling engageant.',
      color: 'amber',
      gradient: 'from-amber-600 to-yellow-400',
      icon: <Globe size={16} />,
      year: '2023'
    },
  ];
  
  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
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
  
  // Gérer l'état de survol des projets
  const handleProjectHover = (id, isHovered) => {
    setHoverStates(prev => ({
      ...prev,
      [id]: isHovered
    }));
  };
  
  // Animation lors du changement de catégorie
  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.classList.add('filter-transition');
      
      const timer = setTimeout(() => {
        if (projectsRef.current) {
          projectsRef.current.classList.remove('filter-transition');
        }
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);
  
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
          animation: 'portfolioSparkle infinite ease-in-out',
        }}
      />
    ));
  };
  
  // Générer des bulles de vapeur qui éclatent
  const renderBubbles = (count = 8) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={`bubble-${i}`}
        className="absolute rounded-full bg-gradient-to-t from-white/5 to-white/20 backdrop-blur-sm opacity-0 bubble-animation"
        style={{
          width: `${Math.random() * 50 + 20}px`,
          height: `${Math.random() * 50 + 20}px`,
          left: `${Math.random() * 90 + 5}%`,
          bottom: `-50px`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${Math.random() * 8 + 6}s`,
          boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Reflet de la bulle */}
        <div className="absolute w-1/3 h-1/3 rounded-full bg-white/40 top-1/4 left-1/4 transform -rotate-45"></div>
      </div>
    ));
  };
  
  return (
    <section className="py-20 relative overflow-hidden" id="portfolio" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-darker via-midnight to-midnight-lighter opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(30)}
      </div>
      
      {/* Magic bubbles that burst */}
      <div className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none overflow-hidden">
        {renderBubbles(15)}
        
        {/* Vapor burst effects */}
        <div className="vapor-burst-container">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={`vapor-${i}`} 
              className="absolute rounded-full bg-white/5 backdrop-blur-sm opacity-0 vapor-burst"
              style={{
                left: `${(i * 20) + Math.random() * 10}%`,
                bottom: '5%',
                animationDelay: `${i * 4 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Magic orbs in background */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-blue-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-amber-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
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
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="60" stroke="url(#portfolio-circle-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="portfolio-circle-gradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#FBBF24"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" rx="8" stroke="url(#portfolio-rect-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="portfolio-rect-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14B8A6"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Notre portfolio magique" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Nos créations <Wand2 className="text-amber-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        {/* Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`
                px-5 py-2 rounded-full text-sm transition-all duration-500 flex items-center gap-2 group relative
                ${selectedCategory === category.id 
                  ? `bg-gradient-to-r from-${category.color}-600 to-${category.color}-400 text-white font-medium shadow-lg shadow-${category.color}-500/30` 
                  : 'bg-midnight-lighter/80 backdrop-blur-sm text-white/70 hover:text-white border border-white/5 hover:border-white/10'}
              `}
              onClick={() => setSelectedCategory(category.id)}
            >
              {/* Icon wrapper */}
              <span className={`transition-all duration-300 ${selectedCategory === category.id ? 'text-white' : `text-${category.color}-400 group-hover:text-${category.color}-300`}`}>
                {category.icon}
              </span>
              
              {/* Category name */}
              <span>{category.name}</span>
              
              {/* Active indicator */}
              {selectedCategory === category.id && (
                <>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white opacity-70">
                    <Sparkles size={10} className="animate-pulse" />
                  </span>
                  
                  {/* Glow effect */}
                  <span className={`absolute inset-0 rounded-full shadow-lg shadow-${category.color}-500/40 animate-pulse-slow opacity-70`}></span>
                </>
              )}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid with transition effect */}
        <div 
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              onHover={(isHovered) => handleProjectHover(project.id, isHovered)}
              isHovered={!!hoverStates[project.id]}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Empty state message if no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-white/70">
            <Wand2 size={40} className="mx-auto mb-4 text-amber-400 opacity-50" />
            <p className="text-xl">Nous travaillons sur quelque chose d'extraordinaire pour cette catégorie...</p>
            <p className="mt-2">Revenez bientôt pour découvrir notre magie !</p>
          </div>
        )}
        
        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-amber-400 border-amber-500/30 hover:from-amber-500 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 text-midnight-darker group relative"
          >
            <span className="flex items-center gap-2">
              Explorer notre univers créatif
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-white opacity-70 group-hover:animate-ping"></span>
            </span>
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes portfolioSparkle {
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
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        .filter-transition {
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.3s ease-out;
          animation: filterTransition 0.6s forwards;
        }
        
        @keyframes filterTransition {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Bubble animations */
        .bubble-animation {
          animation: bubbleRise 1 forwards;
        }
        
        @keyframes bubbleRise {
          0% {
            opacity: 0;
            transform: scale(0.2) translateY(0) rotate(0deg);
          }
          10% {
            opacity: 0.7;
            transform: scale(1) translateY(0) rotate(0deg);
          }
          90% {
            opacity: 0.7;
            transform: scale(1) translateY(-300px) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateY(-350px) rotate(200deg);
          }
        }
        
        /* Vapor burst effect */
        .vapor-burst {
          width: 5px;
          height: 5px;
          animation: vaporBurst 10s infinite;
        }
        
        @keyframes vaporBurst {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          1% {
            opacity: 0.8;
          }
          40% {
            transform: scale(30);
            opacity: 0.2;
            filter: blur(20px);
          }
          100% {
            transform: scale(50);
            opacity: 0;
            filter: blur(30px);
          }
        }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project, index, onHover, isHovered, delay }) => {
  // Référence pour gérer les animations
  const cardRef = useRef(null);
  
  useEffect(() => {
    // Animation pour les entrées décalées
    if (cardRef.current) {
      cardRef.current.style.transitionDelay = `${delay}s`;
    }
  }, [delay]);
  
  // Générer des étincelles pour l'effet de hover
  const renderSparkles = (count = 6) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-white opacity-0 pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: isHovered ? `projectSparkle ${Math.random() * 1 + 0.7}s forwards` : 'none',
          animationDelay: `${Math.random() * 0.3}s`
        }}
      />
    ));
  };
  
  // Effet de bulle qui éclate au survol
  const renderHoverBurst = () => {
    if (!isHovered) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm opacity-0 hover-burst"
            style={{
              left: `${30 + (i * 20)}%`,
              bottom: '30%',
              width: '10px',
              height: '10px',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div 
      ref={cardRef}
      className="transform transition-opacity duration-500"
      style={{ 
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className={`group relative overflow-hidden rounded-lg bg-midnight-lighter h-80 transition-all duration-500 ${isHovered ? 'shadow-xl shadow-purple-500/20 scale-[1.02]' : ''}`}>
        {/* Project Image with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Base overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker to-transparent opacity-70" />
        
        {/* Hover overlay with custom gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} style={{ mixBlendMode: 'hard-light' }} />
        
        {/* Sparkles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {renderSparkles(12)}
        </div>
        
        {/* Vapor burst effect on hover */}
        {renderHoverBurst()}
        
        {/* Content container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between transition-transform duration-500 z-10">
          {/* Top metadata section */}
          <div className="flex items-start justify-between">
            {/* Category indicator that appears on hover */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs transform -translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100`}>
              <span className={`text-${project.color}-300`}>{project.icon}</span>
              <span>{categories.find(c => c.id === project.category)?.name}</span>
            </div>
            
            {/* Year badge */}
            <span className="bg-midnight-darker/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
              {project.year}
            </span>
          </div>
          
          {/* Title with slide-up animation */}
          <div className="transform translate-y-0 group-hover:-translate-y-8 transition-transform duration-500">
            <h3 className="font-playfair text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">{project.title}</h3>
          </div>
          
          {/* Description and link with reveal animation */}
          <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col">
            <p className="text-white/90 mb-4">{project.description}</p>
            
            <a 
              href="#" 
              className={`inline-flex items-center text-white group/link`}
            >
              <span className="mr-2 relative">
                Découvrir
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover/link:w-full transition-all duration-300 rounded-full"></span>
              </span>
              <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${project.gradient} opacity-80 transform origin-top-left rotate-45 translate-x-10 -translate-y-10`}></div>
          <Sparkles size={12} className="absolute top-2 right-2 text-white" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes projectSparkle {
          0% {
            opacity: 0.8;
            transform: scale(0) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(1) translateY(-20px);
          }
        }
        
        /* Bubble burst animation */
        .hover-burst {
          animation: bubbleBurst 1.2s forwards ease-out;
        }
        
        @keyframes bubbleBurst {
          0% {
            opacity: 0.8;
            transform: scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: scale(40);
            filter: blur(6px);
          }
        }
      `}</style>
    </div>
  );
};

// Définir les catégories pour le ProjectCard
const categories = [
  { id: 'all', name: 'Tous', icon: <Stars size={14} />, color: 'amber' },
  { id: 'web', name: 'Web Design', icon: <Globe size={14} />, color: 'blue' },
  { id: 'mobile', name: 'Mobile', icon: <Smartphone size={14} />, color: 'purple' },
  { id: 'branding', name: 'Branding', icon: <Palette size={14} />, color: 'teal' },
];

export default Portfolio;