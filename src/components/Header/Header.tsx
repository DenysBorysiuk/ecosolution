'use client';

import { useEffect, useState } from 'react';
import { smoothScroll } from '@/utils/smoothScroll';
import Logo from '@/components/ui/Logo';
import BurgerMenu from '@/components/ui/BurgerMenu';
import ArrowIcon from 'public/icons/arrow-sm.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      } fixed left-0 right-0 top-0 z-10  h-[112px] w-full `}
      id="header"
    >
      <div className="container flex items-center pt-[36px] xl:max-w-screen-xl">
        <Logo />
        <BurgerMenu />

        <button
          className="btn-filled anim group ml-[12px] w-[141px] rounded-full bg-accent smOnly:hidden"
          onClick={e => smoothScroll(e, 'contacts')}
        >
          Get in touch
          <span className="anim h-[14px] w-[14px] rounded-full bg-primary group-hover:bg-accent">
            <ArrowIcon />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
