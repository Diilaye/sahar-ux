import React, { useEffect, useState } from 'react';
import { Calendar, Users, Award, Target, ArrowLeft, MapPin, BookOpen, Star, Zap, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CompleteHistory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const milestones = [
    {
      year: '2020',
      title: 'Les Fondations',
      icon: <MapPin className="text-[#008080]" size={20} />,
      description: 'Création de Sahar\'UX dans le désert digital. Deux passionnés décident de révolutionner l\'expérience utilisateur.',
      achievements: [
        'Première équipe de 2 personnes',
        'Premier client : refonte complète d\'une startup tech',
        'Développement de notre philosophie UX unique'
      ]
    },
    {
      year: '2021',
      title: 'L\'Expansion',
      icon: <Users className="text-[#FF7F50]" size={20} />,
      description: 'Croissance rapide et recrutement des premiers talents. L\'équipe s\'agrandit avec des experts en design et développement.',
      achievements: [
        'Équipe étendue à 8 collaborateurs',
        '15 projets réalisés avec succès',
        'Lancement de notre service de branding digital'
      ]
    },
    {
      year: '2022',
      title: 'La Reconnaissance',
      icon: <Award className="text-[#008080]" size={20} />,
      description: 'Première récompense internationale et reconnaissance par les pairs. Sahar\'UX devient une référence.',
      achievements: [
        'Prix "Best UX Design Agency" - WebAwards',
        '50+ projets réalisés',
        'Partenariats avec des entreprises du Fortune 500'
      ]
    },
    {
      year: '2023',
      title: 'L\'Innovation',
      icon: <Zap className="text-[#FF7F50]" size={20} />,
      description: 'Intégration de l\'IA dans nos processus de design. Lancement de notre laboratoire d\'innovation.',
      achievements: [
        'Création du lab d\'innovation IA',
        'Développement d\'outils propriétaires',
        '100+ projets réalisés avec 98% de satisfaction'
      ]
    },
    {
      year: '2024',
      title: 'L\'International',
      icon: <Globe className="text-[#008080]" size={20} />,
      description: 'Expansion internationale et ouverture de bureaux en Europe et en Amérique du Nord.',
      achievements: [
        'Bureaux à Paris, Londres et New York',
        'Équipe de 25+ experts internationaux',
        'Clients dans 15 pays'
      ]
    },
    {
      year: '2025',
      title: 'Le Futur',
      icon: <Target className="text-[#FF7F50]" size={20} />,
      description: 'Vision ambitieuse pour les années à venir : devenir la référence mondiale en UX magique.',
      achievements: [
        'Objectif : 50 collaborateurs d\'ici fin 2025',
        'Lancement de notre plateforme SaaS',
        'Expansion en Asie et Afrique'
      ]
    }
  ];

  const values = [
    {
      icon: <BookOpen className="text-[#008080]" size={24} />,
      title: 'Notre Mission',
      description: 'Transformer chaque interaction digitale en une expérience mémorable qui enchante les utilisateurs et propulse les entreprises vers le succès.'
    },
    {
      icon: <Star className="text-[#FF7F50]" size={24} />,
      title: 'Notre Vision',
      description: 'Devenir la référence mondiale en matière d\'expérience utilisateur, là où la technologie rencontre la magie pour créer l\'impossible.'
    },
    {
      icon: <Zap className="text-[#008080]" size={24} />,
      title: 'Nos Valeurs',
      description: 'Excellence, Innovation, Collaboration et Passion guident chacune de nos décisions pour créer des expériences qui marquent les esprits.'
    }
  ];

  const founders = [
    {
      name: 'Maguette Dramé',
      role: 'CEO & Co-fondatrice',
      background: 'Ancienne Directrice commerciale chez DEALLY , diplômée UCAD',
      vision: 'Pionnier de l\'UX émotionnelle et de l\'design thinking avancé'
    },
    {
      name: 'Issa Laye Kane',
      role: 'CTO & Co-fondateur',
      background: 'Ex-Lead Developer chez DEALLY, expert en IA et interfaces',
      vision: 'Visionnaire de l\'intégration IA dans les expériences utilisateur'
    },
    {
      name: 'Amina Dramé',
      role: 'Directrice Artistique',
      background: 'Designer primée, spécialisée en branding digital',
      vision: 'Créer des identités visuelles qui racontent des histoires uniques'
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#008080]/20 via-midnight-dark to-[#FF7F50]/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <div className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Button 
              variant="outline" 
              className="!border-[#008080] !text-[#008080] hover:bg-[#008080]/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={16} className="mr-2" />
              
            </Button>
          </div>

          <div className={`text-center transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Lavishly Yours, cursive' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#FF7F50]">
                Notre Histoire
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              L'épopée de Sahar'UX : de l'idée visionnaire à la révolution digitale
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
              Notre Parcours
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#008080] via-[#FF7F50] to-[#008080]"></div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative mb-16 transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#008080] to-[#FF7F50] rounded-full border-4 border-midnight"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-full bg-midnight-lighter border border-white/10">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-[#FF7F50]">{milestone.year}</span>
                            <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                          </div>
                          <p className="text-white/80 mb-4">{milestone.description}</p>
                        </div>
                      </div>
                      
                      <div className="ml-12">
                        <h4 className="font-semibold text-[#008080] mb-2">Réalisations clés :</h4>
                        <ul className="space-y-1">
                          {milestone.achievements.map((achievement, i) => (
                            <li key={i} className="text-white/70 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#FF7F50] rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-midnight-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Nos Fondements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className={`text-center p-8 hover:shadow-xl transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex p-4 rounded-full bg-midnight-lighter border border-white/10 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fondateurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Les Visionnaires
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-500 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#008080] to-[#FF7F50] p-0.5 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-midnight-dark flex items-center justify-center">
                      <Users className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{founder.name}</h3>
                  <p className="text-[#FF7F50] font-medium">{founder.role}</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-white/80 text-sm">{founder.background}</p>
                  <p className="text-[#008080] italic">{founder.vision}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-midnight-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Sahar'UX en Chiffres
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '20+', label: 'Projets Réalisés' },
              { number: '5+', label: 'Experts Talentueux' },
              { number: '3', label: 'Pays Conquis' },
              { number: '98%', label: 'Satisfaction Client' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#008080] to-[#FF7F50] mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Prêt à Écrire Votre Histoire avec Nous ?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Rejoignez les entreprises visionnaires qui ont choisi Sahar'UX pour transformer leur présence digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="!bg-[#008080] hover:!bg-[#006666] !from-[#008080] !to-[#008080]"
                onClick={() => window.location.href = '/#contact'}
              >
                Commencer Notre Collaboration
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="!border-[#008080] !text-[#008080] hover:bg-[#008080]/10"
                onClick={() => window.location.href = '/#portfolio'}
              >
                Voir Nos Réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompleteHistory;