import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Mail, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
    });
    // Show success message
    alert('Votre message a été envoyé avec succès!');
  };
  
  return (
    <section className="py-20 relative" id="contact">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-midnight-darker opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Parlez à un magicien" 
          subtitle="Contact" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">
              Commençons à créer votre magie digitale
            </h3>
            
            <p className="text-white/70 mb-10">
              Que vous ayez un projet spécifique en tête ou que vous cherchiez des conseils
              pour améliorer votre présence en ligne, nous sommes là pour vous aider.
              Contactez-nous aujourd'hui pour transformer votre vision en réalité.
            </p>
            
            <div className="space-y-8 mb-12">
              {/* Contact options */}
              <ContactOption 
                icon={<Mail className="text-gold" size={24} />}
                title="Par email"
                description="Envoyez-nous un message détaillé"
                action="contact@saharux.com"
                actionLink="mailto:contact@saharux.com"
              />
              
              <ContactOption 
                icon={<MessageSquare className="text-gold" size={24} />}
                title="Par WhatsApp"
                description="Discussion instantanée avec un expert"
                action="Contacter sur WhatsApp"
                actionLink="#"
              />
              
              <ContactOption 
                icon={<Calendar className="text-gold" size={24} />}
                title="Prise de rendez-vous"
                description="Réservez un appel de consultation"
                action="Réserver 30 minutes"
                actionLink="#"
              />
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-midnight-lighter border border-white/5 rounded-lg p-8 shadow-xl">
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-midnight-dark border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-midnight-dark border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2 text-sm">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-midnight-dark border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  >
                    <option value="" disabled>Sélectionnez un service</option>
                    <option value="design">Design UX/UI</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="branding">Branding Digital</option>
                    <option value="conversion">Stratégie de Conversion</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="other">Autre (préciser dans le message)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-midnight-dark border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>
                
                <div>
                  <Button variant="primary" type="submit" fullWidth size="lg">
                    Envoyer le message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  actionLink: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ 
  icon, 
  title, 
  description, 
  action, 
  actionLink 
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-midnight-lighter flex items-center justify-center border border-white/10">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-white/60 text-sm mb-2">{description}</p>
        <a 
          href={actionLink}
          className="inline-flex items-center text-gold hover:text-amber-300 transition-colors text-sm font-medium"
        >
          {action}
          <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Contact;