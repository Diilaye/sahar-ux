import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { 
  Sparkles, 
  Stars, 
  Rocket, 
  BarChart3, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';

const Potentiel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('strategie');
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
  
  // Données pour les onglets
  const tabData = {
    strategie: {
      title: "Stratégie Digitale",
      description: "Nous élaborons une stratégie sur mesure pour maximiser votre présence en ligne et atteindre vos objectifs commerciaux.",
      icon: <Target size={24} className="text-teal-400" />,
      points: [
        "Analyse approfondie de votre marché et de votre concurrence",
        "Définition d'objectifs mesurables et réalisables",
        "Identification des canaux de communication les plus pertinents",
        "Planification stratégique à court, moyen et long terme"
      ],
      color: "teal",
      image: "strategy.svg"
    },
    experience: {
      title: "Expérience Utilisateur",
      description: "Nous créons des expériences utilisateur intuitives et engageantes qui convertissent les visiteurs en clients fidèles.",
      icon: <Users size={24} className="text-orange-400" />,
      points: [
        "Conception centrée sur l'utilisateur pour une navigation intuitive",
        "Tests utilisateurs pour valider les hypothèses de design",
        "Optimisation des parcours de conversion",
        "Création d'interfaces accessibles et inclusives"
      ],
      color: "orange",
      image: "experience.svg"
    },
    croissance: {
      title: "Croissance & Performance",
      description: "Nous optimisons votre présence digitale pour générer une croissance mesurable et durable de votre activité.",
      icon: <TrendingUp size={24} className="text-teal-400" />,
      points: [
        "Optimisation pour les moteurs de recherche (SEO)",
        "Stratégies d'acquisition de trafic qualifié",
        "Analyse des données pour une amélioration continue",
        "Automatisation des processus marketing pour plus d'efficacité"
      ],
      color: "teal",
      image: "growth.svg"
    },
    innovation: {
      title: "Innovation Technologique",
      description: "Nous intégrons les dernières technologies pour vous donner un avantage concurrentiel et préparer votre entreprise pour l'avenir.",
      icon: <Lightbulb size={24} className="text-orange-400" />,
      points: [
        "Veille technologique pour identifier les opportunités d'innovation",
        "Intégration d'intelligence artificielle et d'apprentissage automatique",
        "Développement d'applications sur mesure pour répondre à vos besoins spécifiques",
        "Solutions évolutives qui grandissent avec votre entreprise"
      ],
      color: "orange",
      image: "innovation.svg"
    }
  };
  
  // Statistiques impressionnantes
  const stats = [
    {
      value: "+150%",
      label: "Augmentation du taux de conversion moyen",
      icon: <BarChart3 size={20} className="text-teal-400" />
    },
    {
      value: "+200%",
      label: "Croissance du trafic organique",
      icon: <TrendingUp size={20} className="text-orange-400" />
    },
    {
      value: "-40%",
      label: "Réduction du taux de rebond",
      icon: <Users size={20} className="text-teal-400" />
    },
    {
      value: "+85%",
      label: "Amélioration de l'engagement utilisateur",
      icon: <Sparkles size={20} className="text-orange-400" />
    }
  ];
  
  return (
    <Layout>
      <div className="relative overflow-hidden bg-midnight min-h-screen" ref={sectionRef}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-dark via-midnight to-midnight-darker opacity-90 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-teal-600/5 to-teal-400/5 blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-orange-600/5 to-orange-400/5 blur-3xl"></div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle 
              title="Révélez Votre Potentiel Digital" 
              subtitle="Transformez votre présence en ligne en un puissant moteur de croissance"
            />
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Dans un monde numérique en constante évolution, votre potentiel de croissance est illimité. 
                Chez Sahar'UX, nous vous aidons à exploiter pleinement ce potentiel grâce à des stratégies 
                digitales innovantes, un design captivant et des solutions technologiques de pointe.
              </p>
              <div className="inline-flex items-center">
                <div className="h-0.5 w-12 bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
                <Rocket className="text-orange-400 mx-4" size={18} />
                <div className="h-0.5 w-12 bg-gradient-to-l from-teal-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-midnight-lighter/20 backdrop-blur-sm border border-white/5 rounded-lg p-6 text-center hover:border-teal-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5"
                style={{ 
                  animation: `fadeIn 0.8s forwards ${index * 0.2}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Tabs section */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {Object.entries(tabData).map(([key, data]) => (
                <button
                  key={key}
                  className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeTab === key 
                      ? `bg-${data.color}-500/20 text-${data.color}-400 border border-${data.color}-500/30` 
                      : 'bg-midnight-lighter/10 text-white/60 border border-white/5 hover:text-white/80'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {data.icon}
                  <span>{data.title}</span>
                </button>
              ))}
            </div>
            
            <div className="bg-midnight-lighter/10 backdrop-blur-sm border border-white/5 rounded-xl p-8 transition-all duration-500">
              {Object.entries(tabData).map(([key, data]) => (
                <div 
                  key={key} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-500 ${
                    activeTab === key ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <div>
                    <h3 className={`text-${data.color}-400 text-2xl font-bold mb-4 flex items-center gap-2`}>
                      {data.icon}
                      {data.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {data.description}
                    </p>
                    <ul className="space-y-3">
                      {data.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className={`text-${data.color}-400 mt-1`}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.5 9.5L2.5 6.5L3.5 5.5L5.5 7.5L10.5 2.5L11.5 3.5L5.5 9.5Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span className="text-white/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${data.color}-500/10 to-transparent rounded-xl opacity-30`}></div>
                    <div className="aspect-video rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-midnight-darker/50 p-8">
                      <div className={`text-${data.color}-400 text-opacity-20 text-9xl font-bold absolute inset-0 flex items-center justify-center`}>
                        {key.charAt(0).toUpperCase()}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className={`w-16 h-16 rounded-full bg-${data.color}-500/10 flex items-center justify-center mx-auto mb-4`}>
                          {data.icon}
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">{data.title}</h4>
                        <p className="text-white/60 text-sm max-w-xs mx-auto">
                          Découvrez comment nous pouvons transformer votre présence digitale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className={`text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6 relative inline-block">
              Prêt à révéler tout votre potentiel digital?
              <span className="absolute -top-4 -right-4 transform rotate-12">
                <Stars size={16} className="text-orange-400 animate-pulse" />
              </span>
            </h3>
            
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
              comment nous pouvons transformer votre vision en une réalité digitale exceptionnelle.
            </p>
            
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-500/30 group"
              onClick={() => window.location.href = '#contact'}
            >
              <span className="relative flex items-center gap-2">
                Commencer votre transformation
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Keyframes for animations */}
        <style>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Potentiel;
