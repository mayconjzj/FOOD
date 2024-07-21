export type RateStarsProps = {
  number: 1 | 2 | 3 | 4 | 5;
};

export const RateStars = ({ number }: RateStarsProps) => {
  return Array.from({ length: number }, (_, i) => (
    <i key={i} className="fas fa-star text-primary" />
  ));
};
