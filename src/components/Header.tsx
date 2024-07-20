'use client';

import { useState } from 'react';

import { Button } from './ui/Button';
import { Link } from './ui/Link';

export const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <header className="w-full px-[8%] py-[28px]">
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
        className={`md:hidden duration-150 fixed right-0 w-full py-2 bg-background space-y-3 flex flex-col items-center ${mobileMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
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
