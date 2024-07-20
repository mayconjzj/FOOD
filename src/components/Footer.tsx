import Image from 'next/image';

import { SocialButtons } from './ui/SocialButtons';

export const Footer = () => {
  return (
    <footer className="w-full bg-muted">
      <Image
        src="/images/wave.svg"
        alt="waves"
        width={600}
        height={200}
        className="w-full h-[auto]"
      />

      <div className="flex flex-col gap-2 md:flex-row items-center justify-between pb-7 px-[8%]">
        <span className="font-medium text-xl">&copy; 2024 Maycon Douglas</span>

        <div className="flex gap-2">
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
};