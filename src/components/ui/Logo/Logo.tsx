import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';

import data from '@/data/header.json';

import { LogoProps } from './type';

export const Logo = ({ className }: LogoProps) => {
  const { logoLink } = data;

  return (
    <Link
      href={logoLink.path}
      className={`${className} anim h-[40px] w-[269px] hover:text-[#97D28B] focus:text-[#97D28B]`}
      aria-label={logoLink.ariaLabel}
    >
      <LogoIcon />
    </Link>
  );
};
