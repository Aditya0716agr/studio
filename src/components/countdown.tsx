'use client';

import { useState, useEffect } from 'react';

type CountdownProps = {
  date: string;
};

export function Countdown({ date }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(date) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Second' },
  ];

  return (
    <div className="flex items-center gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg w-24 h-24">
            <span className="text-4xl font-bold">{String(unit.value).padStart(2, '0')}</span>
            <span className="text-sm text-muted-foreground">{unit.label}</span>
          </div>
          {/* This is a decorative separator, it does not show up on the last item */}
          {index < timeUnits.length - 1 && (
            <div className="hidden sm:flex flex-col gap-1.5">
              <div className="w-1.5 h-1.5 bg-border rounded-full" />
              <div className="w-1.5 h-1.5 bg-border rounded-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
