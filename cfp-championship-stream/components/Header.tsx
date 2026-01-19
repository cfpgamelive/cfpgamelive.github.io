import React, { useState, useEffect } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import { AFFILIATE_LINK, APP_NAME } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-2 rounded-lg mr-3">
              <Tv className="h-6 w-6 text-black" />
            </div>
            <span className="font-black text-xl md:text-2xl tracking-tight text-white">
              {APP_NAME}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#schedule" className="text-gray-300 hover:text-white transition-colors font-medium">Schedule</a>
            <a 
              href={AFFILIATE_LINK} 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Watch Live
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-300 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#schedule" className="text-gray-300 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a>
            <a 
              href={AFFILIATE_LINK} 
              className="bg-red-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Watch Live
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};