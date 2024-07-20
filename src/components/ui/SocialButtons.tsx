import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

import { Button } from './Button';

export const SocialButtons = () => {
  return (
    <>
      <Button asChild variant="secundary">
        <Link href="wa.me/+5555555555555">
          <FaWhatsapp size={25} />
        </Link>
      </Button>
      <Button asChild variant="secundary">
        <Link href="instagram.com">
          <FaInstagram size={25} />
        </Link>
      </Button>
      <Button asChild variant="secundary">
        <Link href="facebook.com">
          <FaFacebook size={25} />
        </Link>
      </Button>
    </>
  );
};
