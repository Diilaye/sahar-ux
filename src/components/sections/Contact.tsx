import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Wand2, 
  Stars, 
  Send,
  CheckCircle,
  User,
  AtSign,
  FileText,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFocus = (field) => {
    setActiveField(field);
  };
  
  const handleBlur = () => {
    setActiveField(null);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Animation avant la soumission
    if (formRef.current) {
      formRef.current.classList.add('form-submitting');
      
      setTimeout(() => {
        // Ici, nous simulons une soumission de formulaire réussie
        try {
          // Logique de soumission du formulaire irait ici
          console.log('Form submitted:', formData);
          setFormSubmitted(true);
          setFormError(false);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            service: '',
            message: '',
          });
        } catch (error) {
          console.error('Form submission error:', error);
          setFormError(true);
        }
        
        if (formRef.current) {
          formRef.current.classList.remove('form-submitting');
        }
      }, 800);
    }
  };
  
  // Réinitialiser le message de succès après 5 secondes
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);
  
  // Services avec icônes et couleurs thématiques
  const services = [
    { value: 'design', label: 'Design UX/UI', color: 'purple' },
    { value: 'web', label: 'Développement Web', color: 'blue' },
    { value: 'mobile', label: 'Développement Mobile', color: 'teal' },
    { value: 'branding', label: 'Branding Digital', color: 'amber' },
    { value: 'conversion', label: 'Stratégie de Conversion', color: 'indigo' },
    { value: 'marketing', label: 'Marketing Digital', color: 'rose' },
    { value: 'other', label: 'Autre (préciser dans le message)', color: 'emerald' },
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
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animation: 'contactSparkle infinite ease-in-out',
        }}
      />
    ));
  };
  
  // Générer des bulles de vapeur
  const renderBubbles = (count = 8) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={`bubble-${i}`}
        className="absolute rounded-full bg-gradient-to-t from-white/5 to-white/20 backdrop-blur-sm opacity-0 contact-bubble-animation"
        style={{
          width: `${Math.random() * 40 + 15}px`,
          height: `${Math.random() * 40 + 15}px`,
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
    <section className="py-20 relative overflow-hidden" id="contact" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-darker via-midnight to-midnight-dark opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(30)}
      </div>
      
      {/* Magic bubbles */}
      <div className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none overflow-hidden">
        {renderBubbles(10)}
      </div>
      
      {/* Magic borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      
      {/* Magic orbs in background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-amber-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-blue-600/5 blur-3xl z-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="39" stroke="url(#contact-circle-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="contact-circle-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,0 100,50 50,100 0,50" stroke="url(#contact-diamond-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="contact-diamond-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#0EA5E9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Parlez à un magicien" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Contact <Wand2 className="text-amber-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6 relative inline-block magic-text">
              Commençons à créer votre magie digitale
              <span className="absolute -top-4 -right-4 transform rotate-12">
                <Stars size={16} className="text-amber-400 animate-pulse-slow" />
              </span>
            </h3>
            
            <p className="text-white/70 mb-10 leading-relaxed relative">
              Que vous ayez un projet spécifique en tête ou que vous cherchiez des conseils
              pour améliorer votre présence en ligne, nous sommes là pour vous aider.
              Contactez-nous aujourd'hui pour transformer votre vision en réalité.
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </p>
            
            <div className="space-y-8 mb-12">
              {/* Contact options with enhanced styling */}
              <ContactOption 
                icon={<Mail size={24} />}
                title="Par email"
                description="Envoyez-nous un message détaillé"
                action="contact@saharux.com"
                actionLink="mailto:contact@saharux.com"
                color="purple"
                gradient="from-purple-600 to-purple-400"
                delay={0.1}
              />
              
              <ContactOption 
                icon={<MessageSquare size={24} />}
                title="Par WhatsApp"
                description="Discussion instantanée avec un expert"
                action="Contacter sur WhatsApp"
                actionLink="#"
                color="blue"
                gradient="from-blue-600 to-blue-400"
                delay={0.2}
              />
              
              <ContactOption 
                icon={<Calendar size={24} />}
                title="Prise de rendez-vous"
                description="Réservez un appel de consultation"
                action="Réserver 30 minutes"
                actionLink="#"
                color="amber"
                gradient="from-amber-600 to-amber-400"
                delay={0.3}
              />
            </div>
            
            {/* Floating decorative element */}
            <div className="relative hidden lg:block">
              <div className="absolute -bottom-16 right-10 opacity-30">
                <Wand2 size={80} className="text-purple-400 transform rotate-45" />
                <div className="absolute inset-0 glow-pulse blur-md"></div>
              </div>
            </div>
          </div>
          
          {/* Contact form with magical styling */}
          <div className="relative">
            {/* Magical border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-amber-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 animate-gradient-xy"></div>
            
            <div className="relative bg-gradient-to-br from-midnight-lighter/40 to-midnight-dark/40 backdrop-blur-md border border-white/5 rounded-lg p-8 shadow-xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-swirl opacity-5 pointer-events-none"></div>
              
              {/* Triangle decorations */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-transparent border-r-white/2"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[60px] border-l-[60px] border-b-transparent border-l-white/2"></div>
              
              <h3 className="font-playfair text-xl font-semibold text-white mb-8 relative inline-block">
                <div className="flex items-center gap-2">
                  Envoyez-nous un message
                  <Sparkles size={16} className="text-amber-400" />
                </div>
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-amber-400 to-blue-500 opacity-50 rounded-full"></span>
              </h3>
              
              {/* Success message */}
              {formSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-midnight-dark/95 backdrop-blur-md z-20 animate-fade-in">
                  <div className="text-center p-8">
                    <div className="inline-block p-3 rounded-full bg-green-500/10 mb-4">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message envoyé avec succès!</h4>
                    <p className="text-white/70 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                    <Button 
                      variant="primary" 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Fermer
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Form */}
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6 relative z-10">
                <div className="form-field-container">
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                    Nom complet
                  </label>
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-white/50 ${activeField === 'name' ? `text-purple-400` : ''} transition-colors duration-300`}>
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={`
                        w-full bg-midnight-dark border border-white/10 rounded-md py-3 pl-10 pr-4 text-white 
                        transition-all duration-300
                        ${activeField === 'name' ? 'border-purple-500/50 shadow-sm shadow-purple-500/20' : ''}
                        focus:outline-none focus:border-purple-500/50 focus:shadow-sm focus:shadow-purple-500/20
                      `}
                      placeholder="Votre nom"
                    />
                    
                    {/* Magic sparkle effect on focus */}
                    {activeField === 'name' && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Sparkles size={14} className="text-purple-400 animate-ping-slow" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="form-field-container">
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                    Email
                  </label>
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-white/50 ${activeField === 'email' ? `text-blue-400` : ''} transition-colors duration-300`}>
                      <AtSign size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={`
                        w-full bg-midnight-dark border border-white/10 rounded-md py-3 pl-10 pr-4 text-white 
                        transition-all duration-300
                        ${activeField === 'email' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : ''}
                        focus:outline-none focus:border-blue-500/50 focus:shadow-sm focus:shadow-blue-500/20
                      `}
                      placeholder="votre@email.com"
                    />
                    
                    {/* Magic sparkle effect on focus */}
                    {activeField === 'email' && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Sparkles size={14} className="text-blue-400 animate-ping-slow" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="form-field-container">
                  <label htmlFor="service" className="block text-white/80 mb-2 text-sm">
                    Service souhaité
                  </label>
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-white/50 ${activeField === 'service' ? `text-amber-400` : ''} transition-colors duration-300`}>
                      <FileText size={18} />
                    </div>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => handleFocus('service')}
                      onBlur={handleBlur}
                      required
                      className={`
                        w-full bg-midnight-dark border border-white/10 rounded-md py-3 pl-10 pr-4 text-white appearance-none
                        transition-all duration-300
                        ${activeField === 'service' ? 'border-amber-500/50 shadow-sm shadow-amber-500/20' : ''}
                        focus:outline-none focus:border-amber-500/50 focus:shadow-sm focus:shadow-amber-500/20
                      `}
                    >
                      <option value="" disabled>Sélectionnez un service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                    
                    {/* Custom select arrow */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight size={14} className={`transform rotate-90 ${activeField === 'service' ? 'text-amber-400' : 'text-white/50'} transition-colors duration-300`} />
                    </div>
                  </div>
                </div>
                
                <div className="form-field-container">
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Message
                  </label>
                  <div className="relative">
                    <div className={`absolute left-3 top-3 text-white/50 ${activeField === 'message' ? `text-teal-400` : ''} transition-colors duration-300`}>
                      <MessageCircle size={18} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className={`
                        w-full bg-midnight-dark border border-white/10 rounded-md py-3 pl-10 pr-4 text-white resize-none
                        transition-all duration-300
                        ${activeField === 'message' ? 'border-teal-500/50 shadow-sm shadow-teal-500/20' : ''}
                        focus:outline-none focus:border-teal-500/50 focus:shadow-sm focus:shadow-teal-500/20
                      `}
                      placeholder="Décrivez votre projet ou vos besoins..."
                    ></textarea>
                    
                    {/* Magic sparkle effect on focus */}
                    {activeField === 'message' && (
                      <div className="absolute right-3 top-3">
                        <Sparkles size={14} className="text-teal-400 animate-ping-slow" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="form-field-container pt-2">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 hover:from-purple-700 hover:via-blue-600 hover:to-amber-600 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/30 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Envoyer le message
                      <Send size={16} className="transform -rotate-12 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    
                    {/* Animated background effect */}
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 shimmer-effect"></div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes contactSparkle {
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
        
        @keyframes ping-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.3); }
        }
        
        /* Bubble animations */
        .contact-bubble-animation {
          animation: contactBubbleRise 1 forwards;
        }
        
        @keyframes contactBubbleRise {
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
        
        /* Form submitting animation */
        .form-submitting {
          transform: scale(0.98);
          opacity: 0.8;
          transition: all 0.3s ease-out;
        }
        
        /* Fade in animation */
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        
        /* Form field animations */
        .form-field-container {
          animation: field-appear 0.5s forwards;
          opacity: 0;
          transform: translateY(10px);
        }
        
        .form-field-container:nth-child(1) { animation-delay: 0.1s; }
        .form-field-container:nth-child(2) { animation-delay: 0.2s; }
        .form-field-container:nth-child(3) { animation-delay: 0.3s; }
        .form-field-container:nth-child(4) { animation-delay: 0.4s; }
        .form-field-container:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes field-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Gradient animation */
        @keyframes gradient-xy {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 10s linear infinite;
          background-size: 400% 400%;
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
        
        /* Glow pulse */
        .glow-pulse {
          animation: glow-pulse 2s infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; filter: blur(1px); }
          50% { opacity: 0.7; filter: blur(2px); }
        }
        
        /* Magic title text */
        .magic-text {
          background-image: linear-gradient(90deg, #d8b4fe, #93c5fd, #fcd34d);
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
        
        /* Background swirl */
        .bg-swirl {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,5 C65,10 75,10 90,25 C100,35 95,65 85,80 C70,95 35,95 15,80 C5,70 5,45 10,30 C20,10 35,5 50,5 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: 800px 800px;
          animation: swirl 120s infinite linear;
        }
        
        @keyframes swirl {
          0% { background-position: 0% 0%; }
          100% { background-position: 1000% 1000%; }
        }
      `}</style>
    </section>
  );
};

const ContactOption = ({ icon, title, description, action, actionLink, color, gradient, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex items-start gap-4 transition-all duration-500 transform"
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'option-appear 0.8s forwards',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 rounded-full bg-midnight-lighter flex items-center justify-center border border-${color}-500/30 group relative overflow-hidden transition-all duration-300 ${isHovered ? `border-${color}-500/70 shadow-sm shadow-${color}-500/30` : ''}`}>
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`}></div>
        
        {/* Icon with hover effect */}
        <div className={`relative z-10 transition-colors duration-300 ${isHovered ? `text-${color}-400` : 'text-white/70'}`}>
          {icon}
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <div className={`absolute inset-0 rounded-full bg-${color}-500/10 blur-sm`}></div>
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className={`text-white font-medium mb-1 transition-colors duration-300 ${isHovered ? `text-${color}-300` : ''}`}>{title}</h4>
        <p className="text-white/60 text-sm mb-2">{description}</p>
        <a 
          href={actionLink}
          className={`inline-flex items-center text-${color}-400 hover:text-${color}-300 transition-colors text-sm font-medium relative group`}
        >
          <span className="relative">
            {action}
            <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-${color}-400 group-hover:w-full transition-all duration-500 rounded-full`}></span>
          </span>
          <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          
          {/* Sparkle on hover */}
          {isHovered && (
            <Sparkles size={10} className={`ml-1 text-${color}-300 animate-ping-slow absolute -right-4 top-0`} />
          )}
        </a>
      </div>
      
      <style jsx>{`
        @keyframes option-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;