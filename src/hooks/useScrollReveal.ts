import { useEffect } from 'react';

import { RevealProps } from '@/interfaces/IScrollRevealService';

export type UseScrollRevealProps = RevealProps;

export const useScrollReveal = (targets: RevealProps[]) => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const { ScrollRevealServiceImpl } = await import(
        '@/services/ScrollRevealServiceImpl'
      );
      const ScrollReveal = new ScrollRevealServiceImpl();

      targets.forEach(({ target, config }) => {
        ScrollReveal.reveal({ target, config });
      });
    };
    loadScrollReveal();
  }, [targets]);
};
