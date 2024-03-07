'use client';

import { useEffect, useState } from 'react';

import { Logo, LinkButton } from '@/components/ui';
import { BurgerMenu } from '@/components/base';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }  ease; fixed left-0 right-0 top-0 z-10 transition duration-200`}
      id="header"
    >
      <div className="container flex items-center py-[36px] xl:max-w-screen-xl xl:py-[24px]">
        <Logo />

        <BurgerMenu />

        <LinkButton linkTo={'contacts'}>Get in touch</LinkButton>
      </div>
    </header>
  );
};
