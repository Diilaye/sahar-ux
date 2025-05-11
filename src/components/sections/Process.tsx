import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Wand2, FlaskRound as Flasks, Wand as MagicWand } from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 1,
      icon: <Flasks className="text-gold" size={32} />,
      title: 'Concoctage d&apos;idées',
      description: 'Nous commençons par une phase de découverte approfondie pour comprendre vos objectifs, votre marché, et vos utilisateurs. Cette étape nous permet de distiller l&apos;essence de votre projet en une vision stratégique claire.',
      features: [
        'Audit complet de l&apos;existant',
        'Analyse de la concurrence',
        'Définition des personas',
        'Élaboration de la stratégie digitale',
      ]
    },
    {
      id: 2,
      icon: <Wand2 className="text-gold" size={32} />,
      title: 'Transformation magique',
      description: 'Nous transformons la stratégie en expérience tangible, du wireframing à la conception visuelle. Chaque élément est pensé pour créer une expérience mémorable et efficace pour vos utilisateurs.',
      features: [
        'Wireframing et prototypage',
        'Design UI/UX sur-mesure',
        'Développement front-end et back-end',
        'Tests et optimisations itératives',
      ]
    },
    {
      id: 3,
      icon: <MagicWand className="text-gold" size={32} />,
      title: 'Révélation & amplification',
      description: 'Une fois votre projet lancé, nous continuons à l&apos;optimiser en fonction des données d&apos;utilisation réelles. Nous mettons en place des stratégies d&apos;acquisition pour maximiser votre retour sur investissement.',
      features: [
        'Déploiement et mise en ligne',
        'Formation et documentation',
        'Analyse de performances',
        'Optimisation continue',
      ]
    },
  ];
  
  return (
    <section className="py-20 relative" id="process">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-midnight-darker opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Notre formule magique" 
          subtitle="Notre processus" 
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Process timeline desktop */}
          <div className="hidden md:flex justify-between mb-12 relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-gold to-amber-300 -translate-y-1/2 z-10 transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative z-20"
              >
                <button
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                    ${index <= activeStep 
                      ? 'bg-gradient-to-br from-gold to-amber-500 text-midnight shadow-lg shadow-gold/20' 
                      : 'bg-midnight-lighter border border-white/20 text-white/50'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                </button>
                <p className={`text-center mt-4 font-medium transition-colors ${index <= activeStep ? 'text-gold' : 'text-white/50'}`}>
                  Étape {step.id}
                </p>
              </div>
            ))}
          </div>
          
          {/* Step content */}
          <div className="bg-midnight-lighter border border-white/5 rounded-lg p-8 md:p-10">
            {/* Mobile steps selector */}
            <div className="flex md:hidden gap-4 mb-8 overflow-x-auto pb-4">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all
                    ${activeStep === index 
                      ? 'bg-gold text-midnight font-medium' 
                      : 'bg-midnight-dark text-white/70'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  Étape {step.id}: {step.title}
                </button>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                {steps[activeStep].description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps[activeStep].features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-midnight-dark/50 border border-white/5 rounded-lg p-6 transition-all hover:border-gold/20"
                >
                  <p className="text-white/90 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <button
              className={`
                px-5 py-2 rounded-md text-sm flex items-center gap-2 transition-all
                ${activeStep > 0 
                  ? 'text-white/70 hover:text-gold' 
                  : 'text-white/30 cursor-not-allowed'}
              `}
              onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
              disabled={activeStep === 0}
            >
              ← Étape précédente
            </button>
            
            <button
              className={`
                px-5 py-2 rounded-md text-sm flex items-center gap-2 transition-all
                ${activeStep < steps.length - 1 
                  ? 'text-white/70 hover:text-gold' 
                  : 'text-white/30 cursor-not-allowed'}
              `}
              onClick={() => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)}
              disabled={activeStep === steps.length - 1}
            >
              Étape suivante →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;