import React, { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      position: 'Fondatrice, LuxeHaven',
      quote: 'Sahar\'UX a complètement transformé notre présence en ligne. Notre nouveau site a non seulement un look premium qui correspond parfaitement à notre marque, mais a également augmenté nos conversions de 45%. Un investissement qui a largement dépassé nos attentes.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      position: 'CEO, FinTech Pro',
      quote: 'L\'équipe de Sahar\'UX comprend intuitivement ce dont nous avons besoin, parfois avant même que nous le sachions. Ils ont créé une interface utilisateur si intuitive que nos utilisateurs nous félicitent quotidiennement. Notre trafic a augmenté de 75% depuis le lancement.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      position: 'Directrice Marketing, EcoSphere',
      quote: 'Le branding créé par Sahar\'UX a donné vie à notre vision d\'une façon que nous n\'aurions jamais pu imaginer. Leur approche créative combinée à une exécution technique impeccable a fait de notre lancement un succès retentissant.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  return (
    <section className="py-20 relative" id="testimonials">
      {/* Background effects */}
      <div className="absolute inset-0 bg-midnight-dark opacity-70 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Ce que disent nos clients" 
          subtitle="Témoignages" 
        />
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonials slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-midnight-lighter border border-white/5 rounded-lg p-8 md:p-10 relative">
                    {/* Quote marks */}
                    <div className="absolute top-6 left-6 text-gold/10 text-7xl font-serif">
                      "
                    </div>
                    
                    {/* Stars */}
                    <div className="flex mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} size={18} className="text-gold fill-gold" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 relative z-10">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Client */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-playfair font-semibold text-white">
                          {testimonial.name}
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
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-midnight-lighter border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-gold w-6' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-midnight-lighter border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Client logos */}
          <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-16 opacity-70">
            {['LuxeHaven', 'FinTech Pro', 'EcoSphere', 'HealthHub', 'ArtisanCraft'].map((logo) => (
              <div key={logo} className="text-center">
                <p className="font-playfair text-xl text-white/40">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;