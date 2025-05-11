import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { 
  Wand2, 
  FlaskRound as Flasks, 
  Wand as MagicWand, 
  Sparkles, 
  Stars, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2,
  Beaker,
  Brain,
  Rocket,
  Lightbulb
} from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const steps = [
    {
      id: 1,
      icon: <Flasks className="transition-transform duration-500 group-hover:scale-110" size={32} />,
      secondaryIcon: <Beaker size={20} className="text-purple-300" />,
      title: 'Concoctage d\'idées',
      description: 'Nous commençons par une phase de découverte approfondie pour comprendre vos objectifs, votre marché, et vos utilisateurs. Cette étape nous permet de distiller l\'essence de votre projet en une vision stratégique claire.',
      features: [
        'Audit complet de l\'existant',
        'Analyse de la concurrence',
        'Définition des personas',
        'Élaboration de la stratégie digitale',
      ],
      color: 'purple',
      gradient: 'from-purple-600 to-purple-400',
      particleColor: 'bg-purple-400'
    },
    {
      id: 2,
      icon: <Wand2 className="transition-transform duration-500 group-hover:rotate-12" size={32} />,
      secondaryIcon: <Brain size={20} className="text-blue-300" />,
      title: 'Transformation magique',
      description: 'Nous transformons la stratégie en expérience tangible, du wireframing à la conception visuelle. Chaque élément est pensé pour créer une expérience mémorable et efficace pour vos utilisateurs.',
      features: [
        'Wireframing et prototypage',
        'Design UI/UX sur-mesure',
        'Développement front-end et back-end',
        'Tests et optimisations itératives',
      ],
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400',
      particleColor: 'bg-blue-400'
    },
    {
      id: 3,
      icon: <MagicWand className="transition-transform duration-500 group-hover:rotate-45" size={32} />,
      secondaryIcon: <Rocket size={20} className="text-amber-300" />,
      title: 'Révélation & amplification',
      description: 'Une fois votre projet lancé, nous continuons à l\'optimiser en fonction des données d\'utilisation réelles. Nous mettons en place des stratégies d\'acquisition pour maximiser votre retour sur investissement.',
      features: [
        'Déploiement et mise en ligne',
        'Formation et documentation',
        'Analyse de performances',
        'Optimisation continue',
      ],
      color: 'amber',
      gradient: 'from-amber-600 to-amber-400',
      particleColor: 'bg-amber-400'
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
  
  // Gérer le changement d'étape avec animation
  const handleStepChange = (index) => {
    if (index === activeStep) return;
    
    setIsAnimating(true);
    
    // Animer la sortie du contenu actuel
    if (contentRef.current) {
      contentRef.current.classList.add('content-exit');
      
      setTimeout(() => {
        setActiveStep(index);
        
        setTimeout(() => {
          if (contentRef.current) {
            contentRef.current.classList.remove('content-exit');
            contentRef.current.classList.add('content-enter');
            
            setTimeout(() => {
              if (contentRef.current) {
                contentRef.current.classList.remove('content-enter');
                setIsAnimating(false);
              }
            }, 500);
          }
        }, 50);
      }, 300);
    }
  };
  
  // Générer des particules magiques
  const renderParticles = (count = 20) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-0"
        style={{
          width: `${Math.random() * 5 + 2}px`,
          height: `${Math.random() * 5 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animation: 'processSparkle infinite ease-in-out',
        }}
      />
    ));
  };
  
  // Générer des bulles de vapeur pour l'effet alchimique
  const renderBubbles = (count = 8) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={`bubble-${i}`}
        className="absolute rounded-full bg-gradient-to-t from-white/5 to-white/20 backdrop-blur-sm opacity-0 process-bubble-animation"
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
    <section className="py-20 relative overflow-hidden" id="process" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-dark to-midnight-darker opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(30)}
      </div>
      
      {/* Magic bubbles */}
      <div className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none overflow-hidden">
        {renderBubbles(12)}
      </div>
      
      {/* Magic orbs in background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-blue-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-amber-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
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
      
      {/* Decorative geometric elements */}
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 0L140 70L70 140L0 70L70 0Z" fill="url(#process-diamond-gradient)"/>
          <defs>
            <linearGradient id="process-diamond-gradient" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#FBBF24"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Notre formule magique" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Notre processus <Sparkles className="text-amber-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Process timeline desktop - transformé en potion magique */}
          <div className="hidden md:flex justify-between mb-12 relative">
            {/* Base progress line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0 overflow-hidden">
              {/* Sparkles le long de la ligne */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-white/30 sparkle-line"
                  style={{ 
                    left: `${i * 10}%`, 
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Animated progress line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-amber-500 -translate-y-1/2 z-10 transition-all duration-1000 ease-out rounded-full overflow-hidden shadow-lg shadow-purple-500/20"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            >
              {/* Effet de scintillement sur la barre de progression */}
              <div className="absolute inset-0 shimmer-effect"></div>
              
              {/* Particules qui suivent la progression */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/80 progress-particle"
                  style={{ 
                    left: `${i * 15}%`, 
                    animationDelay: `${i * 0.15}s`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Timeline steps */}
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative z-20"
              >
                <button
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group relative
                    ${index <= activeStep 
                      ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg shadow-${step.color}-500/30` 
                      : 'bg-midnight-lighter border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'}
                  `}
                  onClick={() => !isAnimating && handleStepChange(index)}
                  disabled={isAnimating}
                >
                  {/* Icon container */}
                  <div className="relative z-10 group">
                    {step.icon}
                    
                    {/* Show secondary icon for active step */}
                    {index === activeStep && (
                      <div className="absolute -top-1 -right-1 transform scale-0 animate-scale-in">
                        {step.secondaryIcon}
                      </div>
                    )}
                  </div>
                  
                  {/* Glow effect for active steps */}
                  {index <= activeStep && (
                    <div 
                      className={`absolute inset-0 rounded-full glow-pulse opacity-40 blur-sm -z-10 bg-${step.color}-500`}
                    ></div>
                  )}
                  
                  {/* Particles for active step */}
                  {index === activeStep && (
                    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`absolute w-1 h-1 rounded-full ${step.particleColor} opacity-0 step-particle`}
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
                
                {/* Step label with magic effect */}
                <div className="text-center mt-4">
                  <div className="relative">
                    <p className={`font-medium transition-colors duration-500 text-sm ${
                      index <= activeStep ? `text-${step.color}-400` : 'text-white/40'
                    }`}>
                      Étape {step.id}
                    </p>
                    
                    {/* Active step indicator */}
                    {index === activeStep && (
                      <div className="absolute -bottom-1 left-0 w-full flex justify-center">
                        <div className={`h-0.5 w-0 bg-${step.color}-400 animate-grow rounded-full`}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Step content */}
          <div 
            ref={contentRef}
            className="bg-gradient-to-br from-midnight-lighter/90 to-midnight-dark/90 backdrop-blur-sm border border-white/5 rounded-lg p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Background magical swirl effect */}
            <div className="absolute inset-0 bg-swirl opacity-5 pointer-events-none"></div>
            
            {/* Glowing corners */}
            <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${steps[activeStep].gradient} opacity-5 blur-xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none`}></div>
            <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${steps[activeStep].gradient} opacity-5 blur-xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none`}></div>
            
            {/* Mobile steps selector */}
            <div className="flex md:hidden gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hidden">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-300 relative group
                    ${activeStep === index 
                      ? `bg-gradient-to-r ${step.gradient} text-white font-medium shadow-md shadow-${step.color}-500/20` 
                      : 'bg-midnight-dark text-white/70 hover:text-white/90'}
                  `}
                  onClick={() => !isAnimating && handleStepChange(index)}
                  disabled={isAnimating}
                >
                  <span className="flex items-center gap-2">
                    {activeStep === index && (
                      <Stars size={12} className={`text-${step.color}-200`} />
                    )}
                    Étape {step.id}: {step.title}
                  </span>
                  
                  {/* Active indicator glow */}
                  {activeStep === index && (
                    <span className="absolute inset-0 rounded-full shadow-sm shadow-white/10 animate-pulse-slow"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Step title */}
            <div className="text-center mb-10 relative">
              {/* Magic wand decoration */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Wand2 size={16} className={`text-${steps[activeStep].color}-400 animate-float`} style={{ animationDelay: '0.5s' }} />
              </div>
              
              <h3 className={`font-playfair text-2xl md:text-3xl font-bold text-white mb-4 relative inline-block magic-text-${steps[activeStep].color}`}>
                {steps[activeStep].title}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </h3>
              
              <p className="text-white/70 max-w-2xl mx-auto relative">
                {steps[activeStep].description}
              </p>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps[activeStep].features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-midnight-dark/50 backdrop-blur-sm border border-white/5 rounded-lg p-6 transition-all duration-300 hover:border-${steps[activeStep].color}-500/20 hover:shadow-md hover:shadow-${steps[activeStep].color}-500/5 group relative overflow-hidden`}
                  style={{ 
                    animationDelay: `${index * 0.1 + 0.3}s`,
                    animation: 'featureAppear 0.5s forwards' 
                  }}
                >
                  {/* Feature content */}
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`text-${steps[activeStep].color}-400 mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110`} />
                    <p className="text-white/90 font-medium">{feature}</p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${steps[activeStep].gradient} group-hover:w-full transition-all duration-700 rounded-full opacity-70`}></div>
                  
                  {/* Corner spark */}
                  <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles size={10} className={`text-${steps[activeStep].color}-300`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-10">
            <button
              className={`
                px-5 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300 relative overflow-hidden group
                ${activeStep > 0 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-white/30 cursor-not-allowed'}
              `}
              onClick={() => activeStep > 0 && !isAnimating && handleStepChange(activeStep - 1)}
              disabled={activeStep === 0 || isAnimating}
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Étape précédente</span>
              
              {/* Button hover effect */}
              {activeStep > 0 && (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-transparent group-hover:w-full transition-all duration-500"></span>
              )}
            </button>
            
            <button
              className={`
                px-5 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300 relative overflow-hidden group
                ${activeStep < steps.length - 1 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-white/30 cursor-not-allowed'}
              `}
              onClick={() => activeStep < steps.length - 1 && !isAnimating && handleStepChange(activeStep + 1)}
              disabled={activeStep === steps.length - 1 || isAnimating}
            >
              <span>Étape suivante</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Button hover effect */}
              {activeStep < steps.length - 1 && (
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-amber-500 to-transparent group-hover:w-full transition-all duration-500"></span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes processSparkle {
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
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        /* Bubble animations */
        .process-bubble-animation {
          animation: processBubbleRise 1 forwards;
        }
        
        @keyframes processBubbleRise {
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
        
        /* Line sparkle animation */
        .sparkle-line {
          animation: sparkle-line-effect 3s infinite;
        }
        
        @keyframes sparkle-line-effect {
          0%, 100% { opacity: 0; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateY(-50%) scale(1.5); }
        }
        
        /* Progress particles */
        .progress-particle {
          animation: progress-particle-effect 2s infinite;
        }
        
        @keyframes progress-particle-effect {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
        }
        
        /* Step particles */
        .step-particle {
          animation: step-particle-effect 2s infinite;
        }
        
        @keyframes step-particle-effect {
          0% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translate(
              calc(-50% + ${Math.cos(Math.random() * Math.PI * 2) * 30}px), 
              calc(-50% + ${Math.sin(Math.random() * Math.PI * 2) * 30}px)
            ) scale(0); 
          }
        }
        
        /* Content animations */
        .content-exit {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease-out;
        }
        
        .content-enter {
          opacity: 0;
          transform: translateY(10px);
          animation: content-appear 0.5s forwards;
        }
        
        @keyframes content-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Feature appear animation */
        @keyframes featureAppear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Shimmer effect */
        .shimmer-effect {
          background: linear-gradient(
            90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.4) 50%, 
            rgba(255,255,255,0) 100%
          );
          width: 200%;
          animation: shimmer 3s infinite linear;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(50%); }
        }
        
        /* Background swirl */
        .bg-swirl {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,5 C65,10 75,10 90,25 C100,35 95,65 85,80 C70,95 35,95 15,80 C5,70 5,45 10,30 C20,10 35,5 50,5 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: 500px 500px;
          animation: swirl 120s infinite linear;
        }
        
        @keyframes swirl {
          0% { background-position: 0% 0%; }
          100% { background-position: 1000% 1000%; }
        }
        
        /* Grow animation */
        @keyframes grow {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animate-grow {
          animation: grow 0.5s forwards;
        }
        
        /* Scale in animation */
        @keyframes scale-in {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s forwards;
        }
        
        /* Float animation */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Magic text */
        .magic-text-purple {
          background-image: linear-gradient(90deg, #d8b4fe, #8b5cf6, #d8b4fe);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: magic-text 4s linear infinite;
        }
        
        .magic-text-blue {
          background-image: linear-gradient(90deg, #bfdbfe, #3b82f6, #bfdbfe);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: magic-text 4s linear infinite;
        }
        
        .magic-text-amber {
          background-image: linear-gradient(90deg, #fde68a, #f59e0b, #fde68a);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: magic-text 4s linear infinite;
        }
        
        @keyframes magic-text {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Process;