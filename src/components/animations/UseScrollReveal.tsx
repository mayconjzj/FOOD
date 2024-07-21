'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export const UseScrollReveal = () => {
  useScrollReveal([
    {
      target: '.reveal-left',
      config: {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
      }
    },
    {
      target: '.reveal-right',
      config: {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
      }
    }
  ]);

  return null;
};
