import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div className={`max-w-3xl mb-16 ${alignmentClasses[align]}`}>
      {subtitle && (
        <p className="text-gold uppercase tracking-wider text-sm font-medium mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative">
        {title}
        <span className="block h-1 w-16 bg-gradient-to-r from-gold to-gold/0 mt-4 mx-auto"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;