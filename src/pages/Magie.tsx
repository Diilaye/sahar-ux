import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { 
  Sparkles, 
  Stars, 
  Lightbulb, 
  Palette, 
  Code, 
  LineChart,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';

const Magie: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    const handleMouseMove = (e: MouseEvent) => {
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
  
  // Les piliers de notre magie
  const magicPillars = [
    {
      icon: <Lightbulb size={32} className="text-teal-400" />,
      title: "Innovation Créative",
      description: "Nous repoussons constamment les limites du design et de la technologie pour créer des expériences uniques et mémorables.",
      color: "teal",
      gradient: "from-teal-600 to-teal-400"
    },
    {
      icon: <Palette size={32} className="text-orange-400" />,
      title: "Design Émotionnel",
      description: "Nous concevons des interfaces qui suscitent des émotions positives et créent un lien affectif avec vos utilisateurs.",
      color: "orange",
      gradient: "from-orange-600 to-orange-400"
    },
    {
      icon: <Code size={32} className="text-teal-400" />,
      title: "Excellence Technique",
      description: "Notre code est aussi beau que nos designs. Nous construisons des solutions robustes, évolutives et performantes.",
      color: "teal",
      gradient: "from-teal-600 to-teal-400"
    },
    {
      icon: <LineChart size={32} className="text-orange-400" />,
      title: "Résultats Mesurables",
      description: "Notre magie se traduit par des résultats concrets : augmentation des conversions, engagement utilisateur et croissance de votre business.",
      color: "orange",
      gradient: "from-orange-600 to-orange-400"
    }
  ];
  
  // Générer des particules magiques
  const renderParticles = (count = 20) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-0"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `magicSparkle ${Math.random() * 10 + 5}s infinite ease-in-out ${Math.random() * 5}s`,
        }}
      />
    ));
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden bg-midnight min-h-screen" ref={sectionRef}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-dark via-midnight to-midnight-darker opacity-90 z-0"></div>
        
        {/* Magical particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {renderParticles(40)}
        </div>
        
        {/* Magic orbs in background */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-teal-600/5 blur-3xl z-0 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-orange-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Magic glow that follows mouse */}
        <div 
          className="absolute rounded-full blur-3xl bg-gradient-to-r from-teal-500/5 to-orange-500/5 pointer-events-none transition-opacity duration-700 opacity-0 hover:opacity-100 z-0"
          style={{
            left: mousePosition.x,
            top: mousePosition.y, 
            width: '30rem',
            height: '30rem',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle 
              title="Notre Magie Digitale" 
              subtitle="Ce qui nous rend uniques"
            />
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Chez Sahar'UX, nous ne nous contentons pas de créer des sites web ou des applications. 
                Nous tissons des expériences digitales qui captivent, engagent et convertissent. 
                Notre magie réside dans notre approche unique qui combine créativité, technologie et stratégie.
              </p>
              <div className="inline-flex items-center">
                <div className="h-0.5 w-12 bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
                <Stars className="text-orange-400 mx-4" size={18} />
                <div className="h-0.5 w-12 bg-gradient-to-l from-teal-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Magic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {magicPillars.map((pillar, index) => (
              <div 
                key={index}
                className={`bg-midnight-lighter/20 backdrop-blur-sm border border-white/5 rounded-lg p-8 transition-all duration-500 hover:border-${pillar.color}-500/30 hover:shadow-lg hover:shadow-${pillar.color}-500/10 relative overflow-hidden group`}
                style={{ 
                  animation: `fadeIn 0.8s forwards ${index * 0.2}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon with glow effect */}
                <div className="mb-6 relative">
                  <div className="inline-block p-3 rounded-lg bg-midnight-dark/50 border border-white/5 relative group-hover:border-white/10 transition-all duration-300">
                    {pillar.icon}
                    <div className={`absolute inset-0 rounded-lg bg-${pillar.color}-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                    <Sparkles size={14} className={`text-${pillar.color}-400`} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-${pillar.color}-400 font-playfair text-xl font-bold mb-3`}>{pillar.title}</h3>
                <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                
                {/* Hover line effect */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${pillar.gradient} group-hover:w-full transition-all duration-700 ease-out rounded-full`}></div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className={`text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6 relative inline-block">
              Prêt à découvrir ce que notre magie peut faire pour vous?
              <span className="absolute -top-4 -right-4 transform rotate-12">
                <Stars size={16} className="text-orange-400 animate-pulse-slow" />
              </span>
            </h3>
            
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment 
              nous pouvons transformer votre vision en une expérience digitale exceptionnelle.
            </p>
            
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-500/30 group"
              onClick={() => window.location.href = '#contact'}
            >
              <span className="relative flex items-center gap-2">
                Commencer votre transformation digitale
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Keyframes for animations */}
        <style>{`
          @keyframes magicSparkle {
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
          
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Magie;
