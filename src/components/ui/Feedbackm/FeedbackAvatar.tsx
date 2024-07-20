import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';

export type FeedbackAvatar = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export const FeedbackAvatar = ({ alt, src }: FeedbackAvatar) => {
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
