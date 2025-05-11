import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Star, Rocket, Gem, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Star className="text-gold" size={24} />,
      title: 'Créativité',
      description: 'Nous repensons l&apos;expérience digitale pour créer des sites web qui dépassent les attentes et inspirent l&apos;émerveillement.'
    },
    {
      icon: <Gem className="text-gold" size={24} />,
      title: 'Excellence',
      description: 'Chaque pixel compte. Nous nous engageons à livrer un travail impeccable qui reflète l&apos;ambition et la qualité de votre marque.'
    },
    {
      icon: <Rocket className="text-gold" size={24} />,
      title: 'Innovation',
      description: 'Nous anticipons les tendances et intégrons les dernières technologies pour vous propulser en avant de la compétition.'
    },
    {
      icon: <Target className="text-gold" size={24} />,
      title: 'Résultats',
      description: 'Au-delà de l&apos;esthétique, nous concevons des interfaces qui convertissent et qui accomplissent vos objectifs commerciaux.'
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-midnight-lighter opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="À propos de Sahar&apos;UX" 
          subtitle="Notre vision" 
        />
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl font-playfair text-white/90 mb-8 leading-relaxed">
            "Nous créons des interfaces qui enchantent, des plateformes qui convertissent."
          </p>
          
          <p className="text-white/70 leading-relaxed mb-8">
            Fondée en 2020, Sahar&apos;UX est née d&apos;une passion commune pour l&apos;innovation digitale et l&apos;expérience utilisateur. 
            Notre nom évoque les vastes étendues du désert, où le potentiel illimité rencontre la précision et la clarté.
          </p>
          
          <p className="text-white/70 leading-relaxed">
            Nous combinons expertise technique, vision artistique et compréhension approfondie des comportements utilisateurs 
            pour créer des expériences digitales qui transforment les visiteurs en ambassadeurs de votre marque.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-midnight-dark flex items-center justify-center border border-gold/20">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-playfair font-semibold mb-2 text-white">{title}</h3>
          <p className="text-white/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default About;