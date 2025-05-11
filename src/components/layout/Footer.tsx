import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0e0e1b] via-[#0c0c18] to-[#0a0a15] text-white">
      {/* Étoiles animées */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none animate-[twinkle_8s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/70 leading-relaxed font-light">
              Créateurs d'expériences digitales envoûtantes, à la croisée du design émotionnel, de la performance et de la magie technologique.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
            </div>
          </div>

          <FooterColumn title="Navigation" links={['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact', 'Blog']} />
          <FooterColumn title="Services" links={[
            'Design UX/UI', 'Développement web', 'Développement mobile',
            'Branding digital', 'Stratégie de conversion', 'Marketing de performance'
          ]} />

          <div>
            <h3 className="text-yellow-400 font-semibold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <FooterContact icon={<Mail size={18} />} text="contact@saharux.com" />
              <FooterContact icon={<Phone size={18} />} text="+33 6 12 34 56 78" />
              <FooterContact icon={<MapPin size={18} />} text={`15 Avenue de l'Innovation\n75008 Paris, France`} />
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-white/50 italic mt-12 tracking-wide animate-[fadeIn_2.4s_ease-out_forwards]">
          “Chaque pixel cache un sort. Chaque clic déclenche la magie.”
        </p>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Sahar'UX. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>

      {/* Keyframes injectés inline (uniquement si Tailwind ne les gère pas nativement) */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center text-white/80 hover:text-yellow-400 transition-all duration-300 shadow-[0_0_10px_#00000033] hover:shadow-[0_0_20px_#FFD70099]"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div>
    <h3 className="text-yellow-400 font-semibold text-xl mb-6">{title}</h3>
    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-white/70 hover:text-yellow-400 transition-colors">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContact: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    <div className="text-yellow-400 mt-1 shrink-0">{icon}</div>
    <span className="text-white/70 whitespace-pre-line">{text}</span>
  </li>
);

export default Footer;
