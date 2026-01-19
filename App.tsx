import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AFFILIATE_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      <Header />
      
      <main>
        <Hero />
        <Features />
        
        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 z-50">
            <a 
                href={AFFILIATE_LINK}
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-center py-3 rounded-lg shadow-lg animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
            >
                WATCH LIVE NOW
            </a>
        </div>

        <section id="cta-banner" className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
             <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-black mb-6">
                    Don't Miss The Kickoff!
                </h2>
                <p className="text-black/80 text-xl mb-8 font-medium">
                    Limited spots available for the high-bandwidth stream. Secure your access now.
                </p>
                <a 
                    href={AFFILIATE_LINK}
                    className="inline-block bg-black text-white font-bold text-xl py-4 px-12 rounded-full hover:scale-105 transition-transform shadow-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GET ACCESS
                </a>
             </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;