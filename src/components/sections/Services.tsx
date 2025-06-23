import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { 
  Layers, Code, Smartphone, Lightbulb, BarChart, TrendingUp, 
  ChevronRight, CheckCircle, Sparkles, Wand2, Stars, Zap, 
  Palette, Globe, ArrowRight, Monitor, Maximize, Image, Home,
  HeartHandshake, CreditCard, QrCode, Magnet, Brain, Smile, Award,
  Building, Users, Target, Briefcase
} from 'lucide-react';
import Button from '../ui/Button';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  
  // Structure d'un service
  interface Service {
    icon: React.ReactNode;
    magicIcon: React.ReactNode;
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    budget: string;
    color: string;
    gradient: string;
    icon2: React.ReactNode;
  }
  
  // Services avec icônes et couleurs thématiques et budgets en CFA
  const services: Service[] = [
    {
      icon: <Layers className="text-[#008080]" size={24} />,
      magicIcon: <Wand2 className="text-[#008080]" size={16} />,
      title: 'Design UX/UI',
      shortDescription: 'Interfaces intuitives et esthétiques qui enchantent',
      longDescription: 'Nous concevons des interfaces utilisateur qui transcendent le simple aspect visuel pour créer une connexion émotionnelle durable avec vos utilisateurs.',
      features: [
        'Wireframing & prototypage magique',
        'Design système cohérent',
        'Micro-interactions & animations',
        'Tests utilisateurs approfondis',
      ],
      budget: 'À partir de 250 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <Palette className="text-[#008080]" size={16} />
    },
    {
      icon: <Code className="text-[#FF7F50]" size={24} />,
      magicIcon: <Zap className="text-[#FF7F50]" size={16} />,
      title: 'Développement Web',
      shortDescription: 'Sites performants, évolutifs et mystifiants',
      longDescription: 'Nous transformons des designs exceptionnels en sites web rapides et immersifs, construits avec les technologies front-end et back-end les plus adaptées à vos besoins.',
      features: [
        'Sites vitrines et corporate',
        'E-commerce et plateformes',
        'Applications web interactives',
        'Optimisation magique des performances',
      ],
      budget: 'À partir de 350 000 CFA',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Globe className="text-[#FF7F50]" size={16} />
    },
    {
      icon: <Smartphone className="text-[#008080]" size={24} />,
      magicIcon: <Sparkles className="text-[#008080]" size={16} />,
      title: 'Développement Mobile',
      shortDescription: 'Applications natives et cross-platform',
      longDescription: 'Nous créons des applications mobiles intuitives qui offrent une expérience utilisateur exceptionnelle sur iOS et Android, tout en répondant à vos objectifs commerciaux.',
      features: [
        'Applications iOS & Android',
        'Solutions cross-platform enchantées',
        'UI/UX mobile spécifique',
        'Maintenance & mises à jour',
      ],
      budget: 'À partir de 750 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <Monitor className="text-[#008080]" size={16} />
    },
    {
      icon: <Image className="text-[#FF7F50]" size={24} />,
      magicIcon: <Stars className="text-[#FF7F50]" size={16} />,
      title: 'Infographie',
      shortDescription: 'Créations visuelles captivantes et professionnelles',
      longDescription: 'Nous concevons des visuels percutants qui communiquent efficacement votre message et renforcent votre identité de marque à travers différents supports.',
      features: [
        'Création graphique sur mesure',
        'Illustrations et visuels uniques',
        'Retouche et montage photo',
        'Infographies et datavisualisation',
      ],
      budget: 'À partir de 150 000 CFA',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Palette className="text-[#FF7F50]" size={16} />
    },
    {
      icon: <Home className="text-[#008080]" size={24} />,
      magicIcon: <Wand2 className="text-[#008080]" size={16} />,
      title: 'Décoration Intérieure',
      shortDescription: 'Espaces harmonieux et personnalisés',
      longDescription: 'Nous transformons vos espaces en lieux uniques qui reflètent votre personnalité et répondent à vos besoins fonctionnels avec une touche d\'élégance et de magie.',
      features: [
        'Conception d\'espaces sur mesure',
        'Sélection de mobilier et accessoires',
        'Harmonisation des couleurs et textures',
        'Aménagement fonctionnel et esthétique',
      ],
      budget: 'À partir de 300 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <Sparkles className="text-[#008080]" size={16} />
    },
    {
      icon: <HeartHandshake className="text-[#FF7F50]" size={24} />,
      magicIcon: <Stars className="text-[#FF7F50]" size={16} />,
      title: 'Wedding Planner',
      shortDescription: 'Célébrations inoubliables et personnalisées',
      longDescription: 'Nous orchestrons chaque détail de votre mariage pour créer un événement magique et sans stress, parfaitement aligné avec votre vision et votre personnalité.',
      features: [
        'Planification complète ou partielle',
        'Coordination le jour J',
        'Sélection des prestataires de qualité',
        'Décoration et mise en scène enchantée',
      ],
      budget: 'À partir de 500 000 CFA',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Sparkles className="text-[#FF7F50]" size={16} />
    },
    {
      icon: <CreditCard className="text-[#008080]" size={24} />,
      magicIcon: <Zap className="text-[#008080]" size={16} />,
      title: 'Cartes de Visite',
      shortDescription: 'Votre identité professionnelle en format poche',
      longDescription: 'Nous créons des cartes de visite qui font forte impression et mémorisent votre marque, avec des options innovantes pour se démarquer dans un monde digital.',
      features: [
        'Carte classique premium',
        'Carte avec QR code interactif',
        'Carte magnétique innovante',
        'Design personnalisé et mémorable',
      ],
      budget: 'À partir de 25 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <QrCode className="text-[#008080]" size={16} />
    },
    {
      icon: <Lightbulb className="text-[#FF7F50]" size={24} />,
      magicIcon: <Stars className="text-[#FF7F50]" size={16} />,
      title: 'Branding Digital',
      shortDescription: 'Identités de marque mémorables',
      longDescription: 'Nous développons des identités visuelles distinctives qui résonnent avec votre public cible et établissent une présence mémorable dans l\'écosystème digital.',
      budget: 'À partir de 200 000 CFA',
      features: [
        'Identité visuelle captivante',
        'Logos & charte graphique',
        'Direction artistique web',
        'Guides de style digitaux magiques',
      ],
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Palette className="text-[#FF7F50]" size={16} />
    },
    {
      icon: <BarChart className="text-[#008080]" size={24} />,
      magicIcon: <Maximize className="text-[#008080]" size={16} />,
      title: 'Stratégie de Conversion',
      shortDescription: 'Parcours utilisateurs optimisés pour convertir',
      longDescription: 'Nous analysons, optimisons et perfectionnons chaque étape du parcours utilisateur pour maximiser vos taux de conversion et atteindre vos objectifs commerciaux.',
      features: [
        'Optimisation de conversion (CRO)',
        'A/B testing & analytics',
        'Entonnoirs de conversion magiques',
        'Psychologie des utilisateurs',
      ],
      budget: 'À partir de 200 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <TrendingUp className="text-[#008080]" size={16} />
    },
    {
      icon: <TrendingUp className="text-[#FF7F50]" size={24} />,
      magicIcon: <Sparkles className="text-[#FF7F50]" size={16} />,
      title: 'Marketing Digital',
      shortDescription: 'Stratégies d\'acquisition et de fidélisation',
      longDescription: 'Nous élaborons des stratégies digitales complètes pour attirer, engager et fidéliser votre audience cible, en utilisant les canaux les plus pertinents pour votre marque.',
      features: [
        'SEO & content marketing',
        'Campagnes publicitaires magiques',
        'Social media strategy',
        'Email marketing transformateur',
      ],
      budget: 'À partir de 300 000 CFA',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Globe className="text-[#FF7F50]" size={16} />
    },
    {
      icon: <Brain className="text-[#008080]" size={24} />,
      magicIcon: <Award className="text-[#008080]" size={16} />,
      title: 'Coaching en Développement Personnel',
      shortDescription: 'Révélez votre potentiel et atteignez vos objectifs',
      longDescription: 'Nous vous accompagnons dans votre transformation personnelle avec des méthodes éprouvées et personnalisées pour vous aider à surmonter vos obstacles et atteindre votre plein potentiel.',
      features: [
        'Coaching individuel sur mesure',
        'Ateliers de développement personnel',
        'Techniques de gestion du stress',
        'Accompagnement vers l\'excellence',
      ],
      budget: 'À partir de 200 000 CFA',
      color: '[#008080]',
      gradient: 'from-[#008080] to-[#008080]/70',
      icon2: <Smile className="text-[#008080]" size={16} />
    },
    {
      icon: <Building className="text-[#FF7F50]" size={24} />,
      magicIcon: <Target className="text-[#FF7F50]" size={16} />,
      title: 'Accompagnement d\'Entreprise',
      shortDescription: 'Stratégies de croissance et optimisation',
      longDescription: 'Nous accompagnons votre entreprise dans sa croissance avec des solutions sur mesure pour optimiser vos processus, améliorer votre performance et atteindre vos objectifs commerciaux.',
      features: [
        'Conseil stratégique et opérationnel',
        'Optimisation des processus d\'affaires',
        'Formation des équipes et leadership',
        'Accompagnement à la transformation digitale',
      ],
      budget: 'À partir de 400 000 CFA',
      color: '[#FF7F50]',
      gradient: 'from-[#FF7F50] to-[#FF7F50]/70',
      icon2: <Briefcase className="text-[#FF7F50]" size={16} />
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
  
  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };
  
  return (
    <section className="py-20 relative overflow-hidden" id="services" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-lighter via-midnight-dark to-midnight opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="url(#services-circle-gradient)"/>
          <defs>
            <linearGradient id="services-circle-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#FF7F50"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-40 left-10 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L60 30L30 60L0 30L30 0Z" fill="url(#services-diamond-gradient)"/>
          <defs>
            <linearGradient id="services-diamond-gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#FF7F50"/>
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
              Ce que nous offrons <Wand2 className="text-[#FF7F50]" size={16} />
            </span>
          }
          className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              budget={service.budget}
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
        
        <div className={`text-center mt-16 transition-all duration-500 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="primary" 
            size="lg"
            className="!bg-[#008080] hover:!bg-[#006666] !from-[#008080] !to-[#008080]"
          >
            <span className="flex items-center gap-2">
              Demander votre transformation digitale
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  magicIcon: React.ReactNode;
  icon2: React.ReactNode;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  budget: string;
  isActive: boolean;
  gradient: string;
  color: string;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
  index: number;
  isHovered: boolean;
}

const ServiceCard = ({ 
  icon, 
  magicIcon, 
  icon2,
  title,
  shortDescription,
  longDescription,
  features,
  budget,
  isActive,
  gradient,
  color,
  onClick,
  onHover,
  onLeave,
  delay,
  index,
  isHovered
}: ServiceCardProps) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isActive]);
  
  return (
    <div 
      className={`transform transition-all duration-500`}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card 
        className={`relative overflow-hidden group transition-all duration-300 hover:shadow-xl ${
          isActive ? `shadow-2xl shadow-${color}-500/20 scale-105 border border-${color}-500/10` : 'hover:shadow-purple-500/10 hover:-translate-y-1'
        }`}
      >
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-${color}-500/10 group-hover:via-${color}-500/5 group-hover:to-transparent`}></div>
        </div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon container */}
            <div className="relative">
              <div className={`w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-${color}-500/30 group-hover:border-${color}-500/50 transition-all duration-300 relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Main icon */}
                <div className={`relative z-10 text-${color}-400`}>
                  {icon}
                </div>
                
                {/* Magic icon that appears on hover */}
                <div className={`absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-${color}-300`}>
                  {magicIcon}
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 -m-1 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
            </div>
            
            <div className="flex-1">
              <h3 className={`text-xl font-playfair font-semibold mb-1.5 text-white group-hover:text-${color}-50 transition-colors relative`}>
                {title}
                
                {/* Line animation on hover */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-12 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                  <div className={`h-full w-full bg-gradient-to-r ${gradient} rounded-full`}></div>
                </div>
              </h3>
              <div className="text-sm text-white/70 mt-2">{shortDescription}</div>
              <div className="text-sm font-bold text-[#FF7F50] mt-2">{budget}</div>
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
                <div className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-300`}></div>
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
              className={`transition-all duration-300 ${isActive ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} 
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
    </div>
  );
};

export default Services;