import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Button } from '@/components/ui/Button';
import { Link } from '@/components/ui/Link';

export default function Home() {
  return (
    <main>
      <section className="flex md:min-h-[calc(100vh-100px)] relative min-h-full pt-0 md:pt-2">
        <div className="hidden md:block bg-muted w-[50%] h-full absolute rounded-tl-[40%] rounded-tr-[30%] rounded-bl-[20%] top-0 right-0 -z-10"></div>
        <div className="text-center md:text-left items-center md:items-start w-full md:w-[45%] flex flex-col gap-7 mt-[5%]">
          <h1 className="text-[4rem] leading-snug font-black">
            O Sabor que vai até <span className="text-secundary">você</span>
          </h1>

          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            dolores commodi, obcaecati dolorem maiores, quidem odit dolorum
            earum ab id eum repudiandae ea nulla omnis voluptatum eius libero
            molestiae suscipit!
          </p>

          <div className="flex gap-6">
            <Button asChild>
              <Link href="#">Ver Cardápio</Link>
            </Button>
            <Button asChild variant="secundary">
              <Link href="tel:+5555555555555">
                <Button className="hidden sm:block shadow-none">
                  <i className="fas fa-phone hidden"></i>
                </Button>
                (55) 55555-5555
              </Link>
            </Button>
          </div>

          <div className="flex gap-[18px]">
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
          </div>
        </div>

        <div className="hidden md:flex items-start justify-end w-[70%]">
          <Image
            alt="Banner"
            src="/images/hero.png"
            width={600}
            height={600}
            unoptimized
            priority
            className="hidden md:block w-fit h-full"
          />
        </div>
      </section>
    </main>
  );
}
