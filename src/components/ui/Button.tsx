import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight focus:ring-gold/50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-violet-600 to-amber-400 text-white hover:from-violet-700 hover:to-amber-500 shadow-lg hover:shadow-amber-500/20',
    secondary: 'bg-gradient-to-r from-blue-700 to-rose-400 text-white hover:from-blue-800 hover:to-rose-500 shadow-lg hover:shadow-rose-500/20',
    outline: 'border-2 border-gold/50 text-gold hover:bg-gold/10',
    text: 'text-gold hover:text-amber-300 bg-transparent',
  };
  
  const sizes = {
    sm: 'text-xs py-2 px-3 rounded-md',
    md: 'text-sm py-2.5 px-5 rounded-md',
    lg: 'text-base py-3 px-6 rounded-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} group`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
    </button>
  );
};

export default Button;