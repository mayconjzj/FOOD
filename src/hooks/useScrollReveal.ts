import { useEffect } from 'react';

import { RevealProps } from '@/interfaces/IScrollRevealService';
import { ScrollRevealServiceImpl } from '@/services/ScrollRevealServiceImpl';

export type UseScrollRevealProps = RevealProps;

export const useScrollReveal = (targets: RevealProps[]) => {
  useEffect(() => {
    const scrollReveal = new ScrollRevealServiceImpl();
    targets.forEach(({ target, config }) => {
      scrollReveal.reveal({ target, config });
    });
  }, [targets]);
};
