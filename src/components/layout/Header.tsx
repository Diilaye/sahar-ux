import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Wand2 } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const glowRef = useRef(null);
  const navItems = ['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact'];

  // Handle scroll to update header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => 
        document.getElementById(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
      ).filter(Boolean);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Handle mouse movement for magical glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const rect = glowRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  // Random sparkle generator for the magic effect
  const Sparkle = ({ delay = 0, size = 6, duration = 1.5, top, left }) => (
    <div 
      className="absolute rounded-full bg-white z-10 opacity-0"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `headerSparkle ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );

  return (
    <header
      ref={glowRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-midnight/90 via-purple-900/80 to-midnight/90 backdrop-blur-md py-3 shadow-xl border-b border-purple-500/10' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Magic glow effect that follows mouse in header */}
      <div 
        className="absolute rounded-full blur-3xl bg-purple-500/5 pointer-events-none transition-all duration-1000 opacity-0 hover:opacity-100"
        style={{
          left: mousePosition.x,
          top: mousePosition.y, 
          width: '15rem',
          height: '15rem',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Header sparkles */}
      <Sparkle top={20} left={5} delay={0.5} size={4} />
      <Sparkle top={70} left={25} delay={1.2} size={5} />
      <Sparkle top={30} left={80} delay={0.8} size={4} />
      <Sparkle top={65} left={95} delay={1.8} size={5} />
      
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Animated Logo */}
        <div className="relative group">
          <Logo className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/0 via-amber-400/0 to-teal-500/0 group-hover:from-purple-500/10 group-hover:via-amber-400/10 group-hover:to-teal-500/10 blur-md transition-all duration-500"></div>
          <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles size={16} className="text-amber-300 animate-pulse" />
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const itemId = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
              const isActive = activeSection === itemId;
              
              return (
                <li key={item} className="relative">
                  <a 
                    href={`#${itemId}`}
                    className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 px-2 py-1 relative z-10 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-amber-300'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-amber-400 to-teal-500 rounded-full"></span>
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-amber-400 opacity-70">
                          <Wand2 size={12} className="animate-pulse" />
                        </span>
                      </>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            variant="primary" 
            className={`bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 hover:from-purple-700 hover:via-blue-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg ${
              isScrolled ? 'shadow-purple-500/10' : 'shadow-purple-500/20'
            }`}
          >
            <span className="relative">
              Démarrer un projet
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-300 opacity-70 animate-ping"></span>
            </span>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            mobileMenuOpen 
              ? 'bg-midnight-lighter text-amber-400' 
              : 'text-white hover:bg-midnight-lighter/50'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            {!mobileMenuOpen && (
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-400/70 animate-pulse"></span>
            )}
          </div>
        </button>
      </div>
      
      {/* Mobile menu with magic animation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-b from-midnight/95 via-purple-900/90 to-midnight/95 backdrop-blur-lg md:hidden transition-all duration-500 z-40 ${
          mobileMenuOpen ? 'opacity-100 top-[4.5rem]' : 'opacity-0 pointer-events-none top-[4.5rem] -translate-y-5'
        }`}
      >
        <nav className="container mx-auto px-4 py-10 h-full flex flex-col">
          <ul className="space-y-8 flex-1">
            {navItems.map((item, index) => {
              const itemId = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
              const isActive = activeSection === itemId;
              
              return (
                <li 
                  key={item}
                  className="transform transition-all duration-500"
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <a 
                    href={`#${itemId}`}
                    className={`block py-2 text-2xl font-medium transition-all duration-300 relative ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-amber-300'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <div className="flex items-center">
                      {isActive && (
                        <span className="absolute -left-6 text-amber-400">
                          <Wand2 size={16} className="animate-pulse" />
                        </span>
                      )}
                      <span>
                        {item}
                        {isActive && (
                          <span className="ml-2 inline-block animate-pulse">
                            <Sparkles size={16} className="text-amber-300" />
                          </span>
                        )}
                      </span>
                    </div>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-amber-400 to-teal-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="py-6 transform transition-all duration-500"
              style={{ 
                transitionDelay: mobileMenuOpen ? '0.5s' : '0s',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}>
            <Button 
              variant="primary" 
              fullWidth 
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 hover:from-purple-700 hover:via-blue-600 hover:to-amber-600 transition-all duration-300 py-4 shadow-lg shadow-purple-500/20"
            >
              <span className="relative text-lg">
                Démarrer un projet magique
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-300 opacity-70 animate-ping"></span>
              </span>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Styles for header animations */}
      <style jsx>{`
        @keyframes headerSparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
    </header>
  );
};

export default Header;