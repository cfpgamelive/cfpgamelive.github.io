import React from 'react';
import { AFFILIATE_LINK } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-500 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <a href={AFFILIATE_LINK} className="text-2xl font-black text-white tracking-tighter hover:text-yellow-500 transition-colors">
                        CFP LIVE PASS
                    </a>
                </div>
                <div className="flex justify-center space-x-6 mb-8 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact Support</a>
                </div>
                <p className="text-xs">
                    This site is not affiliated with the NCAA, CFP, or any specific team. All trademarks remain property of their respective owners. 
                    This page contains affiliate links.
                </p>
                <p className="text-xs mt-2">
                    &copy; {new Date().getFullYear()} CFP Live Pass. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};