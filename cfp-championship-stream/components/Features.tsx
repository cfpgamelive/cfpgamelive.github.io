import React from 'react';
import { Wifi, ShieldCheck, Zap, MonitorPlay, Globe, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
    <div className="bg-slate-900 inline-block p-3 rounded-lg mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
      <Icon className="w-6 h-6 text-yellow-500 group-hover:text-black" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Why Stream With <span className="text-yellow-500">Us?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the CFP National Championship like never before with our premium streaming features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={MonitorPlay}
            title="4K Ultra HD"
            description="Crystal clear picture quality so you see every play, every pixel, every touchdown."
          />
          <FeatureCard 
            icon={Zap}
            title="Zero Buffering"
            description="High-speed servers ensure you never miss a critical moment due to lag."
          />
          <FeatureCard 
            icon={Globe}
            title="Global Access"
            description="Watch from anywhere in the world. No regional blackouts or restrictions."
          />
          <FeatureCard 
            icon={Smartphone}
            title="Multi-Device"
            description="Stream on your TV, laptop, tablet, or phone simultaneously."
          />
          <FeatureCard 
            icon={Wifi}
            title="Live Stats Integration"
            description="Real-time player stats and game analytics overlay options available."
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Secure & Private"
            description="Your connection is encrypted and secure. Stream with total peace of mind."
          />
        </div>
      </div>
    </section>
  );
};