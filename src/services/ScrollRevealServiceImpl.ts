import {
  IScrollRevealService,
  RevealProps
} from '@/interfaces/IScrollRevealService';
import ScrollReveal from 'scrollreveal';

export class ScrollRevealServiceImpl implements IScrollRevealService {
  reveal({ target = '.reveal', config }: RevealProps): void {
    ScrollReveal().reveal(target, config);
  }
}
