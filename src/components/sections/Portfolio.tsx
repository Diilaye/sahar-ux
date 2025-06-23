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
  const [hoverStates, setHoverStates] = useState({});
  const sectionRef = useRef(null);
  
  // Catégories avec icônes et couleurs thématiques
  const categories = [
    { id: 'all', name: 'Tous', icon: <Stars className="text-[#FF7F50]" size={14} />, color: '[#FF7F50]' },
    { id: 'web', name: 'Web Design', icon: <Globe className="text-[#008080]" size={14} />, color: '[#008080]' },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="text-[#FF7F50]" size={14} />, color: '[#FF7F50]' },
    { id: 'branding', name: 'Branding', icon: <Palette className="text-[#008080]" size={14} />, color: '[#008080]' },
  ];
  
  // Projets avec métadonnées enrichies
  const projects = [
    {
      id: 1,
      title: 'LuxeHaven • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Refonte complète d\'une plateforme de vente en ligne de produits de luxe avec une augmentation de 45% du taux de conversion.',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon: <Globe className="text-[#008080]" size={16} />,
      year: '2024',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Sanity CMS'],
      results: [
        'Augmentation du taux de conversion de 45% en 3 mois',
        'Réduction du taux d\'abandon de panier de 78% à 23%',
        'Augmentation de la valeur moyenne des commandes de 32%',
        'Temps de chargement des pages réduit de 8,2s à 1,4s'
      ]
    },
    {
      id: 2,
      title: 'Wanderlust • App Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de voyage révolutionnaire avec planification d\'itinéraires personnalisés basés sur l\'IA.',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon: <Smartphone className="text-[#FF7F50]" size={16} />,
      year: '2023',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'TensorFlow.js'],
      results: [
        '250 000+ téléchargements dans les 6 premiers mois',
        'Note moyenne de 4.8/5 sur l\'App Store et Google Play',
        'Durée moyenne de session de 18 minutes (industrie: 5 minutes)',
        'Taux de rétention à 30 jours de 68% (industrie: 32%)'
      ]
    },
    {
      id: 3,
      title: 'EcoSphere • Branding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6845619/pexels-photo-6845619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Création d\'une identité visuelle pour une startup d\'écologie urbaine, du logo aux supports digitaux.',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon: <Palette className="text-[#008080]" size={16} />,
      year: '2024',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects', 'Procreate'],
      results: [
        'Reconnaissance de la marque améliorée de 127% après le rebranding',
        'Augmentation de 45% des demandes de partenariat',
        'Couverture médiatique dans 3 publications majeures du secteur',
        'Croissance de 78% de l\'engagement sur les réseaux sociaux'
      ]
    },
    {
      id: 4,
      title: 'FinTech Pro • Web App',
      category: 'web',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interface utilisateur intuitive pour une application de gestion financière avec tableaux de bord personnalisables.',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon: <Globe className="text-[#008080]" size={16} />,
      year: '2023',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      results: [
        'Augmentation du taux d\'engagement de 37% en 2 mois',
        'Réduction du taux d\'abandon de 62% à 18%',
        'Augmentation de 52% du temps passé sur l\'application',
        '89% des utilisateurs ont créé au moins un tableau de bord personnalisé'
      ]
    },
    {
      id: 5,
      title: 'HealthHub • Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de santé connectée avec suivi de données en temps réel et visualisations interactives.',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon: <Smartphone className="text-[#FF7F50]" size={16} />,
      year: '2024',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit', 'Google Fit API'],
      results: [
        '180 000+ téléchargements dans les 3 premiers mois',
        'Taux de rétention à 60 jours de 72% (industrie: 25%)',
        'Engagement quotidien moyen de 3,7 sessions par utilisateur',
        'Augmentation moyenne de 42% de l\'activité physique chez les utilisateurs réguliers'
      ]
    },
    {
      id: 6,
      title: 'ArtisanCraft • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/5947551/pexels-photo-5947551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Boutique en ligne d\'artisanat local avec une expérience d\'achat immersive et storytelling engageant.',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon: <Globe className="text-[#008080]" size={16} />,
      year: '2023',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'GSAP', 'Three.js', 'Algolia'],
      results: [
        'Augmentation des ventes de 87% par rapport à l\'ancienne plateforme',
        'Temps moyen passé sur le site augmenté de 4,2 à 9,7 minutes',
        'Taux de conversion amélioré de 1,8% à 4,3%',
        'Plus de 120 artisans locaux ont rejoint la plateforme en 6 mois'
      ]
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
  
  // Gérer l'état de survol des projets
  const handleProjectHover = (id, isHovered) => {
    setHoverStates(prev => ({
      ...prev,
      [id]: isHovered
    }));
  };
  
  return (
    <section className="py-20 relative overflow-hidden" id="portfolio" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-darker via-midnight to-midnight-lighter opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="60" stroke="url(#portfolio-circle-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="portfolio-circle-gradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#FF7F50"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" rx="8" stroke="url(#portfolio-rect-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="portfolio-rect-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#FF7F50"/>
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
              Nos créations <Wand2 className="text-[#FF7F50]" size={16} />
            </span>
          }
          className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        {/* Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-500 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`
                px-5 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 group relative
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
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white opacity-70">
                  <Sparkles size={10} />
                </span>
              )}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <Wand2 size={40} className="mx-auto mb-4 text-[#FF7F50] opacity-50" />
            <p className="text-xl">Nous travaillons sur quelque chose d'extraordinaire pour cette catégorie...</p>
            <p className="mt-2">Revenez bientôt pour découvrir notre magie !</p>
          </div>
        )}
        
        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-500 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="secondary" 
            size="lg"
            className="!bg-[#008080] hover:!bg-[#006666] !from-[#008080] !to-[#008080]"
          >
            <span className="flex items-center gap-2">
              Explorer notre univers créatif
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onHover, isHovered, delay }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transitionDelay = `${delay}s`;
    }
  }, [delay]);
  
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
      <div className={`group relative overflow-hidden rounded-lg bg-midnight-lighter h-80 transition-all duration-300 ${isHovered ? 'shadow-xl shadow-[#008080]/20 scale-[1.02]' : ''}`}>
        {/* Project Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Base overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker to-transparent opacity-70" />
        
        {/* Hover overlay with custom gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} style={{ mixBlendMode: 'hard-light' }} />
        
        {/* Content container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between transition-transform duration-300 z-10">
          {/* Top metadata section */}
          <div className="flex items-start justify-between">
            {/* Category indicator */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs transform -translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100`}>
              <span className={`text-${project.color}-300`}>{project.icon}</span>
              <span>{categories.find(c => c.id === project.category)?.name}</span>
            </div>
            
            {/* Year badge */}
            <span className="bg-midnight-darker/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/60 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              {project.year}
            </span>
          </div>
          
          {/* Title */}
          <div className="transform translate-y-0 group-hover:-translate-y-8 transition-transform duration-300">
            <h3 className="font-playfair text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">{project.title}</h3>
          </div>
          
          {/* Description and link */}
          <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col">
            <p className="text-white/90 mb-4">{project.description}</p>
            
            <a 
              href={`/projet/${project.id}`} 
              className={`inline-flex items-center text-white group/link`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/projet/${project.id}`;
              }}
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
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${project.gradient} opacity-80 transform origin-top-left rotate-45 translate-x-10 -translate-y-10`}></div>
          <Sparkles size={12} className="absolute top-2 right-2 text-white" />
        </div>
      </div>
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