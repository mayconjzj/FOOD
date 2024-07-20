import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';

export type DishCardImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export const DishCardImage = ({ alt, src }: DishCardImageProps) => {
  return <Image alt={alt} src={src} width={230} height={230} />;
};
