import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';

export type FeedBackAvatar = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export const FeedBackAvatar = ({ alt, src }: FeedBackAvatar) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={92}
      height={92}
      className="w-[100px] h-[100px] rounded-full "
    />
  );
};
