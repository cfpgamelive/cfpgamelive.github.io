import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  href, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  showIcon = true
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black border-2 border-transparent",
    secondary: "bg-red-600 hover:bg-red-700 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {showIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </a>
  );
};