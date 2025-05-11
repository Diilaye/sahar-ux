import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'branding', name: 'Branding' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'LuxeHaven • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Refonte complète d&apos;une plateforme de vente en ligne de produits de luxe avec une augmentation de 45% du taux de conversion.',
    },
    {
      id: 2,
      title: 'Wanderlust • App Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de voyage révolutionnaire avec planification d&apos;itinéraires personnalisés basés sur l&apos;IA.',
    },
    {
      id: 3,
      title: 'EcoSphere • Branding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6845619/pexels-photo-6845619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Création d&apos;une identité visuelle pour une startup d&apos;écologie urbaine, du logo aux supports digitaux.',
    },
    {
      id: 4,
      title: 'FinTech Pro • Web App',
      category: 'web',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interface utilisateur intuitive pour une application de gestion financière avec tableaux de bord personnalisables.',
    },
    {
      id: 5,
      title: 'HealthHub • Mobile',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Application de santé connectée avec suivi de données en temps réel et visualisations interactives.',
    },
    {
      id: 6,
      title: 'ArtisanCraft • E-commerce',
      category: 'web',
      image: 'https://images.pexels.com/photos/5947551/pexels-photo-5947551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Boutique en ligne d&apos;artisanat local avec une expérience d&apos;achat immersive et storytelling engageant.',
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  return (
    <section className="py-20 relative" id="portfolio">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-midnight-darker opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Notre portfolio magique" 
          subtitle="Nos réalisations" 
        />
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`
                px-5 py-2 rounded-full text-sm transition-all duration-300
                ${selectedCategory === category.id 
                  ? 'bg-gold text-midnight font-medium' 
                  : 'bg-midnight-lighter text-white/70 hover:text-white'}
              `}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="secondary" size="lg">
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-midnight-lighter h-80">
      {/* Project Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker to-transparent opacity-60" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-midnight-darker opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between transition-transform duration-500">
        {/* Title always visible */}
        <div className="transform translate-y-0 transition-transform duration-500 group-hover:translate-y-[-1rem]">
          <h3 className="font-playfair text-xl font-semibold text-white">{title}</h3>
        </div>
        
        {/* Description only visible on hover */}
        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col h-full justify-center">
          <p className="text-white/90 mb-4">{description}</p>
          <a 
            href="#" 
            className="inline-flex items-center text-gold hover:text-amber-300 transition-colors"
          >
            <span className="mr-2">Voir le projet</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;