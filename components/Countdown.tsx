import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target Date: January 20, 2026 at 8:00 PM ET (UTC-5)
    // ISO string with offset -05:00 ensures it is treated as EST/EDT correctly
    const targetDate = new Date("2026-01-20T20:00:00-05:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Stop the countdown at 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Run immediately
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-slate-800 border border-slate-700 text-white text-3xl md:text-5xl font-black py-3 px-4 md:py-4 md:px-6 rounded-lg shadow-xl mb-2 min-w-[80px] md:min-w-[100px] text-center">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center mb-6 text-red-500 animate-pulse">
        <Timer className="w-6 h-6 mr-2" />
        <span className="font-bold tracking-widest uppercase">Kickoff Begins In</span>
      </div>
      <div className="flex flex-wrap justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};