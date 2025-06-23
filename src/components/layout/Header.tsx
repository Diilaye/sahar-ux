import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Wand2 } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  // Removed mouse position tracking for performance
  
  const navItems = [
    {
      id: 'accueil',
      label: 'Accueil',
    },
     {
      id: 'a-propos',
      label: 'À propos',
    },
    {
      id: 'services',
      label: 'Services',
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
    },
   
    {
      id: 'contact',
      label: 'Contact',
    }
  ];

  // Handle scroll to update header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => {
        const sectionId = item.id === 'a-propos' ? 'apropos' : item.id;
        return document.getElementById(sectionId);
      }).filter(Boolean);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 100) {
          const sectionId = section.id === 'apropos' ? 'a-propos' : section.id;
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Removed mouse movement effect for better performance

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  // Removed sparkle animation for better performance

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-midnight/90 via-[#008080]/80 to-[#FF7F50]/30 backdrop-blur-md py-3 shadow-xl border-b border-[#008080]/10' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Removed magic glow and sparkles for better performance */}
      
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Simplified Logo */}
        <div className="relative">
          <Logo className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const href = item.id === 'a-propos' ? '#apropos' : `#${item.id}`;
              
              return (
                <li key={item.id} className="relative">
                  <a 
                    href={href}
                    className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 px-2 py-1 relative z-10 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-amber-300'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 w-[50%] h-0.5 !bg-[#FF7F50] rounded-full"></span>
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
            className="!bg-[#008080] hover:!bg-[#006666] !from-[#008080] !to-[#008080]"
            onClick={() => window.location.href = '/projet-magique'}
          >
            <span className="relative">
              Démarrer un projet
            </span>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            mobileMenuOpen 
              ? 'bg-midnight-lighter text-[#FF7F50]' 
              : 'text-white hover:bg-midnight-lighter/50'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>
      
      {/* Mobile menu with magic animation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-b from-midnight/95 via-[#008080]/90 to-[#FF7F50]/30 backdrop-blur-lg md:hidden transition-all duration-500 z-40 ${
          mobileMenuOpen ? 'opacity-100 top-[4.5rem]' : 'opacity-0 pointer-events-none top-[4.5rem] -translate-y-5'
        }`}
      >
        <nav className="container mx-auto px-4 py-10 h-full flex flex-col">
          <ul className="space-y-8 flex-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const href = item.id === 'a-propos' ? '#apropos' : `#${item.id}`;
              
              return (
                <li 
                  key={item.id}
                  className="transform transition-all duration-500"
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <a 
                    href={href}
                    className={`block py-2 text-2xl font-medium transition-all duration-300 relative ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-[#FF7F50]'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <div className="flex items-center">
                      <span>
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#008080] via-[#008080] to-[#FF7F50] rounded-full"></span>
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
              className="!bg-[#008080] hover:!bg-[#006666] !from-[#008080] !to-[#008080]"
              onClick={() => window.location.href = '/projet-magique'}
            >
              <span className="relative text-lg">
                Démarrer un projet
              </span>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Removed animations styles */}
    </header>
  );
};

export default Header;