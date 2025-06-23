import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Users, 
  Globe,
  Smartphone
} from 'lucide-react';

// Types pour les projets
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  year: string;
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
  nextProject?: number;
  prevProject?: number;
}

const ProjetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('overview');
  
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const nextProjectRef = useRef<HTMLDivElement>(null);
  
  // Données fictives de projets (à remplacer par des données réelles)
  const projects: Project[] = [
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
      client: 'LuxeHaven Paris',
      challenge: 'LuxeHaven, une boutique de luxe établie depuis 15 ans, faisait face à une baisse significative des ventes en ligne malgré une réputation solide. Leur site e-commerce vieillissant souffrait d\'une expérience utilisateur médiocre, d\'un taux d\'abandon de panier élevé (78%) et d\'une absence totale d\'optimisation mobile.',
      solution: 'Nous avons repensé l\'ensemble de l\'expérience d\'achat en ligne en mettant l\'accent sur l\'élégance, la simplicité et la performance. Notre approche a combiné un design minimaliste mettant en valeur les produits, une navigation intuitive, et une optimisation complète du tunnel de conversion. Nous avons également intégré des fonctionnalités innovantes comme la visualisation 3D des produits et un système de recommandation personnalisé basé sur l\'IA.',
      results: [
        'Augmentation de 45% du taux de conversion',
        'Réduction de 62% du taux d\'abandon de panier',
        'Augmentation de 83% des ventes sur mobile',
        'Temps de chargement réduit de 4.2s à 1.8s'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Shopify API', 'Three.js'],
      testimonial: {
        quote: 'Sahar\'UX a complètement transformé notre présence en ligne. Notre nouvelle plateforme reflète parfaitement l\'élégance de notre marque tout en offrant une expérience d\'achat fluide et agréable. Les résultats ont dépassé toutes nos attentes.',
        author: 'Sophie Martin',
        position: 'Directrice, LuxeHaven Paris'
      },
      gallery: [
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632361/pexels-photo-5632361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      nextProject: 2,
      prevProject: 6
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
      client: 'Wanderlust Travel Tech',
      challenge: 'Wanderlust souhaitait révolutionner l\'industrie du voyage en créant une application mobile capable de générer des itinéraires personnalisés basés sur les préférences des utilisateurs, leur budget et leur style de voyage. Le défi était de créer une interface intuitive capable de gérer une grande complexité de données tout en restant simple à utiliser.',
      solution: 'Nous avons conçu une application mobile intuitive utilisant l\'IA pour analyser les préférences des utilisateurs et générer des itinéraires sur mesure. L\'interface combine une navigation fluide, des visualisations cartographiques interactives et un système de recommandation intelligent. Nous avons également intégré des fonctionnalités sociales permettant aux voyageurs de partager leurs expériences.',
      results: [
        'Plus de 250 000 téléchargements en 6 mois',
        'Note moyenne de 4.8/5 sur les stores d\'applications',
        'Durée moyenne de session de 12 minutes',
        '78% des utilisateurs créent un itinéraire complet'
      ],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'TensorFlow Lite', 'Realm'],
      testimonial: {
        quote: 'L\'équipe de Sahar\'UX a transformé notre vision en une application que nos utilisateurs adorent. Leur approche centrée sur l\'utilisateur et leur expertise technique ont fait toute la différence.',
        author: 'Thomas Dubois',
        position: 'CEO, Wanderlust Travel Tech'
      },
      gallery: [
        'https://images.pexels.com/photos/6633911/pexels-photo-6633911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6633886/pexels-photo-6633886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6633867/pexels-photo-6633867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6633923/pexels-photo-6633923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      nextProject: 3,
      prevProject: 1
    },
    // Autres projets...
  ];
  
  // Récupérer les données du projet
  useEffect(() => {
    if (id) {
      setLoading(true);
      // Simuler un chargement de données
      setTimeout(() => {
        const projectData = projects.find(p => p.id === parseInt(id));
        if (projectData) {
          setProject(projectData);
        } else {
          // Rediriger si le projet n'existe pas
          navigate('/');
        }
        setLoading(false);
      }, 800);
    }
  }, [id, navigate]);
  
  // Suivre le défilement pour la barre de progression
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Déterminer la section active
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      if (overviewRef.current && scrollPosition < overviewRef.current.offsetTop + overviewRef.current.offsetHeight) {
        setActiveSection('overview');
      } else if (challengeRef.current && scrollPosition < challengeRef.current.offsetTop + challengeRef.current.offsetHeight) {
        setActiveSection('challenge');
      } else if (galleryRef.current && scrollPosition < galleryRef.current.offsetTop + galleryRef.current.offsetHeight) {
        setActiveSection('gallery');
      } else if (resultsRef.current && scrollPosition < resultsRef.current.offsetTop + resultsRef.current.offsetHeight) {
        setActiveSection('results');
      } else {
        setActiveSection('next');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fonction pour naviguer vers un autre projet (sera utilisée dans les prochaines étapes)
  // const navigateToProject = (projectId: number) => {
  //   navigate(`/projet/${projectId}`);
  //   window.scrollTo(0, 0);
  // };
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/10 rounded-full animate-spin"></div>
            <div className="absolute inset-0 border-t-4 border-[#008080] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            <div className="absolute inset-0 border-t-4 border-[#FF7F50] rounded-full animate-spin" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl font-bold text-white mb-4">Projet non trouvé</h1>
          <p className="text-white/70 mb-8">Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
          <Button 
            variant="primary" 
            onClick={() => window.location.href = '/#portfolio'}
            className="bg-gradient-to-r from-[#008080] to-[#FF7F50]"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Retour aux projets
            </span>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Barre de progression */}
        <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
          <div 
            className="h-full bg-gradient-to-r from-[#008080] to-[#FF7F50] transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        
        {/* Navigation flottante */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="flex flex-col items-center gap-4">
            {['overview', 'challenge', 'gallery', 'results', 'next'].map((section) => (
              <button
                key={section}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-[#FF7F50] scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => {
                  const targetRef = 
                    section === 'overview' ? overviewRef.current :
                    section === 'challenge' ? challengeRef.current :
                    section === 'gallery' ? galleryRef.current :
                    section === 'results' ? resultsRef.current :
                    nextProjectRef.current;
                  
                  if (targetRef) {
                    window.scrollTo({
                      top: targetRef.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Contenu principal */}
        <div>
          {/* Section héro avec parallaxe */}
          <div 
            ref={heroRef}
            className="relative h-[70vh] overflow-hidden flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${project.image})`,
                transform: `translateY(${scrollProgress * 0.5}px)`,
                filter: 'brightness(0.4) saturate(1.2)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/50 to-midnight"></div>
            
            <div className="relative z-10 container mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 text-white/60 mb-6">
                <button 
                  onClick={() => window.location.href = '/#portfolio'}
                  className="flex items-center gap-1 hover:text-white transition-colors duration-300"
                >
                  <ArrowLeft size={14} />
                  <span>Retour aux projets</span>
                </button>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {project.icon}
                  {project.category === 'web' ? 'Web Design' : 
                   project.category === 'mobile' ? 'Application Mobile' : 
                   'Branding'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Calendar size={16} className="text-[#FF7F50]" />
                  <span>{project.year}</span>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Users size={16} className="text-[#008080]" />
                  <span>{project.client}</span>
                </div>
                
                <Button 
                  variant="primary"
                  className={`bg-${project.color} hover:bg-${project.color}/90`}
                >
                  <span className="flex items-center gap-2">
                    Voir le site
                    <ExternalLink size={14} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Section Aperçu */}
          <div ref={overviewRef} className="bg-midnight text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Technologies utilisées */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 font-playfair inline-block relative">
                    Technologies utilisées
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#008080] to-[#FF7F50] rounded-full"></span>
                  </h2>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies?.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 rounded-full bg-midnight-lighter/30 border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animation: 'fadeIn 0.5s forwards',
                          opacity: 0,
                          transform: 'translateY(10px)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Défi et Solution */}
          <div ref={challengeRef} className="bg-midnight-darker text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Défi */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#008080]/20 flex items-center justify-center">
                      <span className="text-[#008080] font-bold">01</span>
                    </div>
                    <h2 className="text-2xl font-bold font-playfair">Le Défi</h2>
                  </div>
                  
                  <div className="pl-14">
                    <p className="text-white/80 leading-relaxed mb-6">
                      {project.challenge}
                    </p>
                    
                    <div className="relative overflow-hidden rounded-lg border border-white/10 h-64 group">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ 
                          backgroundImage: `url(${project.gallery?.[0]})`,
                          filter: 'brightness(0.7) saturate(1.2)'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker/90 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="w-12 h-1 bg-[#FF7F50] rounded-full mb-4"></div>
                        <p className="text-white/90 text-sm italic">Avant notre intervention</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Solution */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FF7F50]/20 flex items-center justify-center">
                      <span className="text-[#FF7F50] font-bold">02</span>
                    </div>
                    <h2 className="text-2xl font-bold font-playfair">Notre Solution</h2>
                  </div>
                  
                  <div className="pl-14">
                    <p className="text-white/80 leading-relaxed mb-6">
                      {project.solution}
                    </p>
                    
                    <div className="relative overflow-hidden rounded-lg border border-white/10 h-64 group">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ 
                          backgroundImage: `url(${project.gallery?.[1]})`,
                          filter: 'brightness(0.7) saturate(1.2)'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker/90 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="w-12 h-1 bg-[#008080] rounded-full mb-4"></div>
                        <p className="text-white/90 text-sm italic">Après notre intervention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Galerie */}
          <div ref={galleryRef} className="bg-midnight text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-12 font-playfair text-center">
                  <span className="relative inline-block">
                    Galerie du Projet
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#008080] to-[#FF7F50] rounded-full"></span>
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery?.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animation: 'fadeIn 0.8s forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ 
                          backgroundImage: `url(${image})`,
                          filter: 'brightness(0.8) saturate(1.1)'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3H21V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 21H3V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 3L14 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 21L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Résultats */}
          <div ref={resultsRef} className="bg-midnight-darker text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-12 font-playfair text-center">
                  <span className="relative inline-block">
                    Résultats Obtenus
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#008080] to-[#FF7F50] rounded-full"></span>
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {project.results?.map((result, index) => (
                    <div 
                      key={index} 
                      className="bg-midnight-lighter/20 backdrop-blur-sm border border-white/5 rounded-lg p-6 transition-all duration-500 hover:border-white/10 hover:shadow-lg hover:shadow-[#008080]/5 relative overflow-hidden"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animation: 'fadeIn 0.8s forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
                      }}
                    >
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-bl from-[#008080]/10 to-transparent rounded-full blur-xl"></div>
                      <div className="relative z-10">
                        <p className="text-white/90 leading-relaxed">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Témoignage client */}
                {project.testimonial && (
                  <div className="bg-midnight-lighter/10 backdrop-blur-sm border border-white/5 rounded-lg p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#008080]/5 to-[#FF7F50]/5 opacity-50"></div>
                    <div className="absolute -top-6 -left-6 text-[#008080]/10 text-9xl font-serif">“</div>
                    <div className="relative z-10">
                      <p className="text-white/90 text-lg italic mb-6 leading-relaxed">
                        {project.testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#008080] to-[#FF7F50] flex items-center justify-center text-white font-bold text-xl">
                          {project.testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">{project.testimonial.author}</h4>
                          <p className="text-white/60 text-sm">{project.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Section Projet Suivant */}
          <div ref={nextProjectRef} className="bg-midnight text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6 font-playfair">
                  Découvrir d'autres projets
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {project.prevProject && (
                    <Button 
                      variant="outline" 
                      onClick={() => window.location.href = `/projet/${project.prevProject}`}
                      className="border-[#008080] text-[#008080] hover:bg-[#008080]/10"
                    >
                      <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Projet précédent
                      </span>
                    </Button>
                  )}
                  
                  {project.nextProject && (
                    <Button 
                      variant="primary" 
                      onClick={() => window.location.href = `/projet/${project.nextProject}`}
                      className="bg-gradient-to-r from-[#008080] to-[#FF7F50]"
                    >
                      <span className="flex items-center gap-2">
                        Projet suivant
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Animations */}
          <style>{`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
};

export default ProjetDetail;
