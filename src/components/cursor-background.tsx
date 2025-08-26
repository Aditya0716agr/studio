"use client";

import { useEffect } from 'react';

export default function CursorBackground() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      document.body.style.setProperty('--cursor-x', `${x}%`);
      document.body.style.setProperty('--cursor-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}
