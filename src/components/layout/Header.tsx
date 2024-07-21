'use client';

import { useEffect, useState } from 'react';

import { Button } from '../shared/Button';
import { Link } from '../shared/Link';

export const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrollActive(true) : setScrollActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full px-[8%] py-5 sticky top-0 bg-background z-10 duration-300 ${scrollActive ? 'shadow-sm' : 'shadow-none'}`}
    >
      <nav className="w-full flex items-center justify-between">
        <i className="fas fa-burger text-2xl text-primary"> FOOD</i>

        <ul className="hidden md:flex gap-12">
          <li>
            <Link href="#home" state="active">
              Início
            </Link>
          </li>
          <li>
            <Link href="#menu">Cardápio</Link>
          </li>
          <li>
            <Link href="#testimonials">Avaliações</Link>
          </li>
        </ul>

        <Button className="hidden md:flex">Peça aqui</Button>

        <Button
          variant="icon"
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
          className="md:hidden text-[1.5rem]"
        >
          {!mobileMenuActive && <i className="fas fa-bars"></i>}
          {mobileMenuActive && <i className="fas fa-x"></i>}
        </Button>
      </nav>

      <div
        className={`md:hidden duration-300 shadow-sm fixed right-0 w-full py-4 bg-background space-y-3 flex flex-col items-center z-10 object-cover ${mobileMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <ul className="flex flex-col gap-3 text-center">
          <li>
            <Link href="#home">Início</Link>
          </li>
          <li>
            <Link href="#menu">Cardápio</Link>
          </li>
          <li>
            <Link href="#testimonials">Avaliações</Link>
          </li>
        </ul>

        <Button className="">Peça aqui</Button>
      </div>
    </header>
  );
};
