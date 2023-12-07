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

        <button
          className="btn-filled anim group ml-[12px] w-[141px] rounded-full bg-accent smOnly:hidden"
          onClick={e => smoothScroll(e, 'contacts')}
        >
          Get in touch
          <span
            className="anim h-[14px] w-[14px] rounded-full bg-primary group-hover:bg-accent
          group-focus:bg-accent"
          >
            <ArrowIcon />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
