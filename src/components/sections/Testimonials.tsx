import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles, 
  Quote, 
  Heart, 
  ThumbsUp,
  Wand2,
  Stars,
  Users
} from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      position: 'Fondatrice, LuxeHaven',
      quote: 'Sahar\'UX a complètement transformé notre présence en ligne. Notre nouveau site a non seulement un look premium qui correspond parfaitement à notre marque, mais a également augmenté nos conversions de 45%. Un investissement qui a largement dépassé nos attentes.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      color: 'teal',
      gradient: 'from-teal-600 to-teal-400',
      icon: <ThumbsUp size={16} className="text-teal-300" />,
      stats: '+45% de conversions'
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      position: 'CEO, FinTech Pro',
      quote: 'L\'équipe de Sahar\'UX comprend intuitivement ce dont nous avons besoin, parfois avant même que nous le sachions. Ils ont créé une interface utilisateur si intuitive que nos utilisateurs nous félicitent quotidiennement. Notre trafic a augmenté de 75% depuis le lancement.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      color: 'teal',
      gradient: 'from-teal-600 to-teal-400',
      icon: <Users size={16} className="text-teal-300" />,
      stats: '+75% de trafic'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      position: 'Directrice Marketing, EcoSphere',
      quote: 'Le branding créé par Sahar\'UX a donné vie à notre vision d\'une façon que nous n\'aurions jamais pu imaginer. Leur approche créative combinée à une exécution technique impeccable a fait de notre lancement un succès retentissant.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      color: 'orange',
      gradient: 'from-orange-600 to-orange-400',
      icon: <Heart size={16} className="text-orange-300" />,
      stats: 'Lancement réussi'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
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
  
  // Fonction de changement de slide avec animation
  const changeSlide = (index) => {
    if (index === activeIndex || isAnimating) return;
    
    setIsAnimating(true);
    
    // Animer la transition
    if (sliderRef.current) {
      sliderRef.current.classList.add('slider-transition');
      
      setTimeout(() => {
        setActiveIndex(index);
        
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.classList.remove('slider-transition');
            setIsAnimating(false);
          }
        }, 700);
      }, 300);
    }
  };
  
  const nextSlide = () => {
    if (isAnimating) return;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    changeSlide(nextIndex);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    changeSlide(prevIndex);
  };
  
  // Auto-rotation des témoignages
  useEffect(() => {
    if (!isPaused && !isAnimating) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 8000);
      
      return () => clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isAnimating, activeIndex]);
  
  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
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
          animation: 'testimonialSparkle infinite ease-in-out',
        }}
      />
    ));
  };
  
  // Générer des bulles de vapeur
  const renderBubbles = (count = 8) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={`bubble-${i}`}
        className="absolute rounded-full bg-gradient-to-t from-white/5 to-white/20 backdrop-blur-sm opacity-0 testimonial-bubble-animation"
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
    <section 
      className="py-20 relative overflow-hidden" 
      id="testimonials"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-dark via-midnight to-midnight-darker opacity-90 z-0"></div>
      
      {/* Magical particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderParticles(30)}
      </div>
      
      {/* Magic bubbles */}
      <div className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none overflow-hidden">
        {renderBubbles(10)}
      </div>
      
      {/* Magic borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L60 30L30 60L0 30L30 0Z" stroke="url(#testimonial-diamond-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="testimonial-diamond-gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008080"/>
              <stop offset="1" stopColor="#FF7F50"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="39" stroke="url(#testimonial-circle-gradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="testimonial-circle-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7F50"/>
              <stop offset="1" stopColor="#008080"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Ce que disent nos clients" 
          subtitle={
            <span className="flex items-center justify-center gap-2">
              Témoignages <Stars className="text-orange-400" size={16} />
            </span>
          }
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        <div 
          className={`max-w-4xl mx-auto relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonials slider */}
          <div 
            ref={sliderRef}
            className="relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-midnight-lighter/40 to-midnight-dark/40 border border-white/5 shadow-xl"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-swirl opacity-5 pointer-events-none"></div>
            
            {/* Triangle decorations */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-white/2"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-white/2"></div>
            
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4 py-10"
                >
                  <div className="max-w-3xl mx-auto relative">
                    {/* Floating quote icon */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <Quote 
                        size={32} 
                        className={`text-${testimonial.color}-500/30 animate-float`} 
                        style={{ animationDelay: '0.5s' }} 
                      />
                    </div>
                    
                    {/* Stars rating with magic effect */}
                    <div className="flex justify-center mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star 
                            size={20} 
                            className={`text-${testimonial.color}-400 fill-${testimonial.color}-400 mx-0.5`} 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                          <div 
                            className={`absolute inset-0 star-pulse text-${testimonial.color}-300 fill-${testimonial.color}-300`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <Star size={20} />
                          </div>
                        </div>
                      ))}
                      
                      {/* Star burst for the highest rating */}
                      {testimonial.rating === 5 && (
                        <div className="absolute -right-6 -top-1">
                          <Sparkles size={16} className={`text-${testimonial.color}-300 animate-ping-slow`} />
                        </div>
                      )}
                    </div>
                    
                    {/* Stats badge */}
                    <div className="flex justify-center mb-8">
                      <div className={`px-4 py-1.5 rounded-full bg-${testimonial.color}-500/10 backdrop-blur-sm border border-${testimonial.color}-500/20 flex items-center gap-2`}>
                        {testimonial.icon}
                        <span className={`text-${testimonial.color}-300 text-sm font-medium`}>
                          {testimonial.stats}
                        </span>
                      </div>
                    </div>
                    
                    {/* Quote with animated gradient underline */}
                    <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-10 relative z-10 text-center max-w-2xl mx-auto">
                      <span className="relative quote-text">
                        "{testimonial.quote}"
                        <span className={`absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r ${testimonial.gradient} opacity-30 rounded-full`}></span>
                      </span>
                    </blockquote>
                    
                    {/* Client info with animated border */}
                    <div className="flex items-center justify-center gap-4 relative">
                      <div className={`w-16 h-16 rounded-full overflow-hidden border-2 border-${testimonial.color}-500/30 p-0.5 relative client-image-container group`}>
                        {/* Animated border */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        
                        {/* Client image */}
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-${testimonial.color}-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                        
                        {/* Sparkle in corner */}
                        <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`p-1 rounded-full bg-${testimonial.color}-500/30`}>
                            <Sparkles size={10} className="text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <p className="font-playfair font-semibold text-white text-lg relative inline-block">
                          {testimonial.name}
                          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${testimonial.color}-400 group-hover:w-full transition-all duration-500 rounded-full`}></span>
                        </p>
                        <p className="text-white/60 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center gap-6 mt-10">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300 group relative disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              
              {/* Button glow effect */}
              <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse-slow">
                <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-sm"></div>
              </div>
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && changeSlide(index)}
                  disabled={isAnimating}
                  className={`relative transition-all duration-500 disabled:cursor-not-allowed rounded-full ${
                    activeIndex === index ? 'scale-100' : 'scale-90 opacity-70 hover:opacity-100 hover:scale-95'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Dot indicator */}
                  <div 
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                      activeIndex === index 
                        ? `bg-gradient-to-r ${testimonials[index].gradient} w-8` 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  ></div>
                  
                  {/* Active indicator glow */}
                  {activeIndex === index && (
                    <div className={`absolute inset-0 -z-10 rounded-full bg-${testimonials[index].color}-500/20 blur-sm animate-pulse-slow`}></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Next button */}
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300 group relative disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              
              {/* Button glow effect */}
              <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse-slow">
                <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-sm"></div>
              </div>
            </button>
          </div>
          
          {/* Client logos with magic effect */}
          <div className={`mt-20 relative transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-full w-full"></div>
            
            {/* Logo title */}
            <div className="text-center mb-10 relative">
              <h3 className="inline-relative text-white/50 text-sm uppercase tracking-widest">
                <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent">
                  Ils nous font confiance
                </span>
                <Wand2 size={14} className="inline-block ml-2 text-orange-400/50 animate-float" />
              </h3>
            </div>
            
            {/* Logo cloud */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {[
                { name: 'LuxeHaven', color: 'teal' },
                { name: 'FinTech Pro', color: 'teal' },
                { name: 'EcoSphere', color: 'orange' },
                { name: 'HealthHub', color: 'teal' },
                { name: 'ArtisanCraft', color: 'orange' }
              ].map((logo, index) => (
                <div 
                  key={logo.name} 
                  className="relative group"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: 'logoAppear 0.8s forwards' 
                  }}
                >
                  <p className={`font-playfair text-xl text-${logo.color}-400/40 group-hover:text-${logo.color}-400/70 transition-colors duration-500 relative`}>
                    {logo.name}
                    
                    {/* Hover underline effect */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${logo.color}-400/30 group-hover:w-full transition-all duration-700 ease-out rounded-full`}></span>
                  </p>
                  
                  {/* Sparkle on hover */}
                  <div className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                    <Sparkles size={12} className={`text-${logo.color}-400/70`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes testimonialSparkle {
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
        .testimonial-bubble-animation {
          animation: testimonialBubbleRise 1 forwards;
        }
        
        @keyframes testimonialBubbleRise {
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
        
        /* Quote text appear */
        .quote-text {
          opacity: 0;
          animation: quote-appear 1s forwards 0.3s;
        }
        
        @keyframes quote-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Star pulse effect */
        .star-pulse {
          animation: star-pulse 2s infinite;
        }
        
        @keyframes star-pulse {
          0%, 100% { opacity: 0; transform: scale(1.3); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        /* Client image container */
        .client-image-container {
          animation: client-appear 1s forwards 0.6s;
          opacity: 0;
        }
        
        @keyframes client-appear {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        /* Float animation */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Slider transition */
        .slider-transition {
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.3s ease-out;
        }
        
        /* Logo appear animation */
        @keyframes logoAppear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
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

export default Testimonials;