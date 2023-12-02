'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      } fixed left-0 right-0 top-0 z-10 flex gap-[12px] py-[36px] xl:py-[24px] `}
    >
      <Logo />

      <button className="ml-auto flex w-[40px] items-center justify-center rounded-full bg-[#DCEFD8]  hover:bg-[#97D28B]">
        <Image src="/icons/menu.svg" alt="menu-button" width={16} height={16} />
      </button>

      <Link href="#contacts" className="link-btn w-[141px] rounded-full bg-accent smOnly:hidden">
        Get in touch
        <Image src="/icons/arrow-down.svg" alt="arrow icon" width={14} height={14} />
      </Link>
    </header>
  );
};

export default Header;
