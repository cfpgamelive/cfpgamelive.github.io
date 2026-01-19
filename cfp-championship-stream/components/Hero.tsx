import React from 'react';
import { AFFILIATE_LINK, BANNER_IMAGE_URL, EVENT_NAME } from '../constants';
import { Button } from './Button';
import { Countdown } from './Countdown';
import { Shield, CheckCircle, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col pt-20">
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BANNER_IMAGE_URL} 
          alt="Stadium Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 z-10 flex-grow flex flex-col items-center justify-center py-12">
        
        {/* Main Badge */}
        <div className="inline-flex items-center bg-red-600/20 border border-red-500 rounded-full px-4 py-1 mb-6 animate-pulse">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span className="text-red-400 font-bold text-sm tracking-wider uppercase">Live Stream Access</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-4 leading-tight">
          <span className="block text-white">Watch The</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
            {EVENT_NAME}
          </span>
        </h1>

        {/* Date Display */}
        <div className="flex items-center justify-center mb-8">
            <div className="bg-slate-800/80 border border-slate-600 px-6 py-2 rounded-full backdrop-blur-sm shadow-lg flex items-center group hover:border-yellow-500 transition-colors">
                <Calendar className="w-5 h-5 text-yellow-500 mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-200 font-bold uppercase tracking-widest text-sm md:text-base">
                    Jan 20, 2026 • 8:00 PM ET
                </span>
            </div>
        </div>

        <p className="text-lg md:text-2xl text-gray-300 text-center max-w-3xl mb-8 leading-relaxed">
          The stage is set. The teams are ready. Don't miss the biggest game of the year. 
          Stream the College Football Playoff National Championship live in 4K.
        </p>

        {/* The Banner Image provided by user - Displayed clearly */}
        <div className="w-full max-w-4xl mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform transition-transform hover:scale-[1.01]">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                <img 
                    src={BANNER_IMAGE_URL} 
                    alt="CFP Title Game Banner" 
                    className="w-full h-auto"
                />
            </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md md:max-w-xl justify-center mb-12">
          <Button 
            text="Start Streaming Now" 
            href={AFFILIATE_LINK} 
            fullWidth={true}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-400">
            <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> No Blackouts
            </div>
            <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> HD Quality
            </div>
            <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Instant Setup
            </div>
            <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" /> Secure Stream
            </div>
        </div>

        <div className="w-full mt-16 border-t border-slate-800 pt-10">
            <Countdown />
        </div>
      </div>
    </div>
  );
};