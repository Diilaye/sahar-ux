import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { 
  Layers, Code, Smartphone, Lightbulb, BarChart, TrendingUp, 
  ChevronRight, CheckCircle
} from 'lucide-react';
import Button from '../ui/Button';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Layers className="text-gold" size={24} />,
      title: 'Design UX/UI',
      shortDescription: 'Interfaces intuitives et esthétiques qui engagent',
      longDescription: 'Nous concevons des interfaces utilisateur qui transcendent le simple aspect visuel pour créer une connexion émotionnelle durable avec vos utilisateurs.',
      features: [
        'Wireframing & prototypage',
        'Design système cohérent',
        'Micro-interactions & animations',
        'Tests utilisateurs',
      ]
    },
    {
      icon: <Code className="text-gold" size={24} />,
      title: 'Développement Web',
      shortDescription: 'Sites performants, évolutifs et optimisés',
      longDescription: 'Nous transformons des designs exceptionnels en sites web rapides et immersifs, construits avec les technologies front-end et back-end les plus adaptées à vos besoins.',
      features: [
        'Sites vitrines et corporate',
        'E-commerce et plateformes',
        'Applications web complexes',
        'Optimisation des performances',
      ]
    },
    {
      icon: <Smartphone className="text-gold" size={24} />,
      title: 'Développement Mobile',
      shortDescription: 'Applications natives et cross-platform',
      longDescription: 'Nous créons des applications mobiles intuitives qui offrent une expérience utilisateur exceptionnelle sur iOS et Android, tout en répondant à vos objectifs commerciaux.',
      features: [
        'Applications iOS & Android',
        'Solutions cross-platform',
        'UI/UX mobile spécifique',
        'Maintenance & mises à jour',
      ]
    },
    {
      icon: <Lightbulb className="text-gold" size={24} />,
      title: 'Branding Digital',
      shortDescription: 'Identités de marque mémorables',
      longDescription: 'Nous développons des identités visuelles distinctives qui résonnent avec votre public cible et établissent une présence mémorable dans l&apos;écosystème digital.',
      features: [
        'Identité visuelle',
        'Logos & charte graphique',
        'Direction artistique web',
        'Guides de style digitaux',
      ]
    },
    {
      icon: <BarChart className="text-gold" size={24} />,
      title: 'Stratégie de Conversion',
      shortDescription: 'Parcours utilisateurs optimisés pour convertir',
      longDescription: 'Nous analysons, optimisons et perfectionnons chaque étape du parcours utilisateur pour maximiser vos taux de conversion et atteindre vos objectifs commerciaux.',
      features: [
        'Optimisation de conversion (CRO)',
        'A/B testing & analytics',
        'Entonnoirs de conversion',
        'Psychologie des utilisateurs',
      ]
    },
    {
      icon: <TrendingUp className="text-gold" size={24} />,
      title: 'Marketing Digital',
      shortDescription: 'Stratégies d&apos;acquisition et de fidélisation',
      longDescription: 'Nous élaborons des stratégies digitales complètes pour attirer, engager et fidéliser votre audience cible, en utilisant les canaux les plus pertinents pour votre marque.',
      features: [
        'SEO & content marketing',
        'Campagnes publicitaires',
        'Social media strategy',
        'Email marketing avancé',
      ]
    },
  ];
  
  const handleServiceClick = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };
  
  return (
    <section className="py-20 relative" id="services">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-midnight-lighter opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Nos services magiques" 
          subtitle="Ce que nous offrons" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
              longDescription={service.longDescription}
              features={service.features}
              isActive={activeService === index}
              onClick={() => handleServiceClick(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="primary" size="lg">
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  shortDescription,
  longDescription,
  features,
  isActive,
  onClick 
}) => {
  return (
    <Card className={`transition-all duration-500 ${isActive ? 'scale-105 shadow-xl shadow-gold/10' : ''}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-gold/20">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-1.5 text-white">{title}</h3>
            <p className="text-white/70">{shortDescription}</p>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 mt-4 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-white/80 mb-4">{longDescription}</p>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-white/70">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={onClick}
          className="flex items-center justify-center gap-1 text-gold hover:text-amber-300 transition-colors mt-4 w-full"
        >
          <span>{isActive ? 'Voir moins' : 'En savoir plus'}</span>
          <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
        </button>
      </div>
    </Card>
  );
};

export default Services;