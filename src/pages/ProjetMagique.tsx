import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { 
  Sparkles, 
  Stars, 
  Rocket, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Layers,
  Globe,
  Smartphone,
  PenTool
} from 'lucide-react';

// Types pour le formulaire et les étapes
type ProjectType = 'web' | 'mobile' | 'design' | 'marketing' | '';
type ProjectBudget = 'small' | 'medium' | 'large' | 'enterprise' | '';
type ProjectTimeline = 'urgent' | 'standard' | 'flexible' | '';

interface FormData {
  projectType: ProjectType;
  projectName: string;
  projectDescription: string;
  projectBudget: ProjectBudget;
  projectTimeline: ProjectTimeline;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  agreeToTerms: boolean;
}

const ProjetMagique: React.FC = () => {
  // États pour les animations et l'interface
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    projectName: '',
    projectDescription: '',
    projectBudget: '',
    projectTimeline: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    agreeToTerms: false
  });
  
  // Références pour les animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
  
  // Animation de confetti quand le formulaire est soumis
  useEffect(() => {
    if (!showConfetti || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti: {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      angle: number;
      rotation: number;
      rotationSpeed: number;
    }[] = [];
    
    // Créer les confettis
    for (let i = 0; i < 200; i++) {
      const colors = ['#008080', '#FF7F50', '#ffffff', '#00cccc', '#ff9966'];
      confetti.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 6.28,
        rotation: Math.random() * 6.28,
        rotationSpeed: Math.random() * 0.2 - 0.1
      });
    }
    
    // Animer les confettis
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let stillFalling = false;
      
      confetti.forEach(c => {
        c.y += c.speed;
        c.x += Math.sin(c.angle) * 2;
        c.rotation += c.rotationSpeed;
        
        if (c.y < canvas.height) {
          stillFalling = true;
        }
        
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        ctx.restore();
      });
      
      if (stillFalling) {
        animationId = requestAnimationFrame(animate);
      } else {
        setShowConfetti(false);
      }
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [showConfetti]);
  
  // Gérer les changements de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Gérer la sélection du type de projet
  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData(prev => ({
      ...prev,
      projectType: type
    }));
  };
  
  // Gérer la sélection du budget
  const handleBudgetSelect = (budget: ProjectBudget) => {
    setFormData(prev => ({
      ...prev,
      projectBudget: budget
    }));
  };
  
  // Gérer la sélection du délai
  const handleTimelineSelect = (timeline: ProjectTimeline) => {
    setFormData(prev => ({
      ...prev,
      projectTimeline: timeline
    }));
  };
  
  // Passer à l'étape suivante
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  // Revenir à l'étape précédente
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  // Soumettre le formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    // Ici, vous pourriez envoyer les données à un serveur
    console.log('Form submitted:', formData);
    nextStep();
  };
  
  // Vérifier si le bouton suivant doit être désactivé
  const isNextButtonDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.projectType;
      case 2:
        return !formData.projectName || !formData.projectDescription;
      case 3:
        return !formData.projectBudget || !formData.projectTimeline;
      case 4:
        return !formData.contactName || !formData.contactEmail || !formData.agreeToTerms;
      default:
        return false;
    }
  };
  
  // Options pour les types de projets
  const projectTypes = [
    {
      id: 'web',
      title: 'Site Web',
      icon: <Globe size={32} className="text-teal-400" />,
      description: 'Site vitrine, e-commerce, application web, portail client...',
      color: 'teal'
    },
    {
      id: 'mobile',
      title: 'Application Mobile',
      icon: <Smartphone size={32} className="text-orange-400" />,
      description: 'Application iOS, Android, PWA, application hybride...',
      color: 'orange'
    },
    {
      id: 'design',
      title: 'Design UX/UI',
      icon: <PenTool size={32} className="text-teal-400" />,
      description: 'Refonte graphique, identité visuelle, prototype, maquettes...',
      color: 'teal'
    },
    {
      id: 'marketing',
      title: 'Marketing Digital',
      icon: <Layers size={32} className="text-orange-400" />,
      description: 'SEO, campagnes publicitaires, stratégie de contenu, analytics...',
      color: 'orange'
    }
  ];
  
  // Options pour les budgets
  const budgetOptions = [
    {
      id: 'small',
      title: '< 5 000 €',
      description: 'Projets simples et ciblés',
      icon: <span className="text-lg">💰</span>
    },
    {
      id: 'medium',
      title: '5 000 € - 15 000 €',
      description: 'Projets de taille moyenne',
      icon: <span className="text-lg">💰💰</span>
    },
    {
      id: 'large',
      title: '15 000 € - 50 000 €',
      description: 'Projets complexes et ambitieux',
      icon: <span className="text-lg">💰💰💰</span>
    },
    {
      id: 'enterprise',
      title: '> 50 000 €',
      description: 'Projets d\'envergure et stratégiques',
      icon: <span className="text-lg">💰💰💰💰</span>
    }
  ];
  
  // Options pour les délais
  const timelineOptions = [
    {
      id: 'urgent',
      title: 'Urgent (< 1 mois)',
      description: 'Livraison prioritaire et accélérée',
      icon: <Rocket size={20} className="text-orange-400" />
    },
    {
      id: 'standard',
      title: 'Standard (1-3 mois)',
      description: 'Délai classique pour la plupart des projets',
      icon: <CheckCircle size={20} className="text-teal-400" />
    },
    {
      id: 'flexible',
      title: 'Flexible (> 3 mois)',
      description: 'Planification à long terme, sans urgence',
      icon: <Lightbulb size={20} className="text-orange-400" />
    }
  ];
  
  // Rendu des étapes du formulaire
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quel type de projet souhaitez-vous réaliser?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                    formData.projectType === type.id
                      ? `border-${type.color}-500 bg-${type.color}-500/10`
                      : 'border-white/10 bg-midnight-lighter/20 hover:border-white/20'
                  }`}
                  onClick={() => handleProjectTypeSelect(type.id as ProjectType)}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      {type.icon}
                      <h4 className={`text-xl font-bold ${formData.projectType === type.id ? `text-${type.color}-400` : 'text-white'}`}>
                        {type.title}
                      </h4>
                    </div>
                    <p className="text-white/70">{type.description}</p>
                    
                    {formData.projectType === type.id && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle size={20} className={`text-${type.color}-400`} />
                      </div>
                    )}
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br from-${type.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    formData.projectType === type.id ? 'opacity-100' : ''
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Parlez-nous de votre projet
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="projectName" className="block text-white font-medium mb-2">
                  Nom du projet <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="ex: Refonte du site web de ma boutique"
                  className="w-full px-4 py-3 rounded-lg bg-midnight-lighter/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="projectDescription" className="block text-white font-medium mb-2">
                  Description du projet <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, vos objectifs, vos attentes..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-midnight-lighter/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Budget et délai
            </h3>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Budget estimé <span className="text-orange-400">*</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {budgetOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      formData.projectBudget === option.id
                        ? 'border-teal-500 bg-teal-500/10'
                        : 'border-white/10 bg-midnight-lighter/20 hover:border-white/20'
                    }`}
                    onClick={() => handleBudgetSelect(option.id as ProjectBudget)}
                  >
                    <div className="flex items-center gap-3">
                      {option.icon}
                      <div>
                        <h5 className="font-medium text-white">{option.title}</h5>
                        <p className="text-sm text-white/60">{option.description}</p>
                      </div>
                      
                      {formData.projectBudget === option.id && (
                        <CheckCircle size={16} className="text-teal-400 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">
                Délai souhaité <span className="text-orange-400">*</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {timelineOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      formData.projectTimeline === option.id
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-white/10 bg-midnight-lighter/20 hover:border-white/20'
                    }`}
                    onClick={() => handleTimelineSelect(option.id as ProjectTimeline)}
                  >
                    <div className="flex items-center gap-3">
                      {option.icon}
                      <div>
                        <h5 className="font-medium text-white">{option.title}</h5>
                        <p className="text-sm text-white/60">{option.description}</p>
                      </div>
                      
                      {formData.projectTimeline === option.id && (
                        <CheckCircle size={16} className="text-orange-400 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Vos coordonnées
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactName" className="block text-white font-medium mb-2">
                  Nom complet <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  className="w-full px-4 py-3 rounded-lg bg-midnight-lighter/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-white font-medium mb-2">
                  Email <span className="text-orange-400">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  className="w-full px-4 py-3 rounded-lg bg-midnight-lighter/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="contactPhone" className="block text-white font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
                className="w-full px-4 py-3 rounded-lg bg-midnight-lighter/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-white/20 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-midnight"
                  required
                />
                <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  J'accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de ma demande. 
                  Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre 
                  <a href="#" className="text-teal-400 hover:text-teal-300 ml-1">politique de confidentialité</a>.
                </span>
              </label>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 animate-ping">
                <Stars size={20} className="text-orange-400" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Votre projet magique est en route!
            </h3>
            
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Merci d'avoir partagé votre vision avec nous! Notre équipe de magiciens digitaux va étudier votre demande 
              et vous contactera dans les 24-48 heures pour discuter des prochaines étapes de votre projet.
            </p>
            
            <div className="bg-midnight-lighter/20 border border-white/10 rounded-xl p-6 max-w-md mx-auto">
              <h4 className="text-xl font-bold text-teal-400 mb-4">Récapitulatif de votre projet</h4>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-white/60">Type de projet:</span>
                  <span className="text-white font-medium">
                    {projectTypes.find(t => t.id === formData.projectType)?.title || ''}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-white/60">Budget estimé:</span>
                  <span className="text-white font-medium">
                    {budgetOptions.find(b => b.id === formData.projectBudget)?.title || ''}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-white/60">Délai souhaité:</span>
                  <span className="text-white font-medium">
                    {timelineOptions.find(t => t.id === formData.projectTimeline)?.title || ''}
                  </span>
                </div>
              </div>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 shadow-lg shadow-teal-500/20 transition-all duration-300 mt-8"
              onClick={() => window.location.href = '/'}
            >
              <span className="flex items-center gap-2">
                Retour à l'accueil
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Barre de progression
  const renderProgressBar = () => {
    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;
    
    return (
      <div className="mb-10">
        <div className="flex justify-between mb-2">
          <span className="text-white/60 text-sm">Étape {currentStep} sur {totalSteps}</span>
          <span className="text-white/60 text-sm">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-midnight-lighter/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <Layout>
      <div className="relative overflow-hidden bg-midnight min-h-screen" ref={sectionRef}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-dark via-midnight to-midnight-darker opacity-90 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-teal-600/5 to-teal-400/5 blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-orange-600/5 to-orange-400/5 blur-3xl"></div>
        
        {/* Confetti canvas */}
        {showConfetti && (
          <canvas 
            ref={canvasRef} 
            className="fixed inset-0 z-50 pointer-events-none"
          ></canvas>
        )}
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle 
              title="Démarrer un Projet Magique" 
              subtitle="Transformez votre vision en réalité digitale"
            />
            
            <div className="max-w-4xl mx-auto">
              {currentStep < 5 && renderProgressBar()}
              
              <div className="bg-midnight-lighter/10 backdrop-blur-sm border border-white/5 rounded-xl p-8 md:p-10 transition-all duration-500 shadow-xl shadow-midnight-darker/50">
                <form onSubmit={handleSubmit}>
                  {renderStep()}
                  
                  {currentStep < 5 && (
                    <div className="flex justify-between mt-10">
                      {currentStep > 1 ? (
                        <Button
                          variant="outline"
                          onClick={prevStep}
                          className="border-white/20 text-white hover:bg-white/5"
                        >
                          <span className="flex items-center gap-2">
                            <ChevronRight size={16} className="transform rotate-180" />
                            Retour
                          </span>
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {currentStep < 4 ? (
                        <Button
                          variant="primary"
                          onClick={nextStep}
                          disabled={isNextButtonDisabled()}
                          className={`bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 transition-all duration-300 ${
                            isNextButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            Continuer
                            <ChevronRight size={16} />
                          </span>
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isNextButtonDisabled()}
                          className={`bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 transition-all duration-300 ${
                            isNextButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            Envoyer ma demande
                            <Sparkles size={16} />
                          </span>
                        </Button>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Keyframes for animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
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

export default ProjetMagique;
