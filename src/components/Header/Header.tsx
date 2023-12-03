'use client';

import { useEffect, useState, MouseEvent } from 'react';
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
      } fixed left-0 right-0 top-0 z-10 flex h-[112px] items-center`}
      id="header"
    >
      <Logo />
      <BurgerMenu />

      <button
        className="link-btn anim group ml-[12px] w-[141px] rounded-full bg-accent smOnly:hidden"
        onClick={e => smoothScroll(e, 'contacts')}
      >
        Get in touch
        <span className="anim h-[14px] w-[14px] rounded-full bg-primary group-hover:bg-accent">
          <ArrowIcon />
        </span>
      </button>
    </header>
  );
};

export default Header;
