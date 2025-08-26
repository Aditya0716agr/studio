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
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex items-center gap-4 text-center">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center justify-center p-4 border rounded-lg w-24 h-24 bg-secondary">
            <span className="text-3xl font-bold">{String(unit.value).padStart(2, '0')}</span>
            <span className="text-sm text-muted-foreground">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
