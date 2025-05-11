import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-dark relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/70 leading-relaxed">
              Créateurs d'expériences digitales uniques, à la frontière entre design émotionnel,
              performance et innovation technologique.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-gold font-playfair text-xl mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-playfair text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Design UX/UI', 
                'Développement web', 
                'Développement mobile', 
                'Branding digital',
                'Stratégie de conversion',
                'Marketing de performance'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-playfair text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold shrink-0 mt-1" />
                <span className="text-white/70">contact@saharux.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold shrink-0 mt-1" />
                <span className="text-white/70">+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span className="text-white/70">
                  15 Avenue de l'Innovation<br />
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Sahar'UX. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-gold text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/50 hover:text-gold text-sm">
              Mentions légales
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href}
      className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-white/80 hover:text-gold transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;