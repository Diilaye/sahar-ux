import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        bg-midnight-lighter border border-white/5 rounded-lg p-6 
        relative overflow-hidden backdrop-blur-sm
        ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/5' : ''}
        ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
};

export default Card;