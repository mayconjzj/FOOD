export type RevealProps = {
  target?: string;
  config: scrollReveal.ScrollRevealObjectOptions;
};

export interface IScrollRevealService {
  reveal({ target, config }: RevealProps): void;
}
