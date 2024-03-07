'use client';

import { smoothScroll } from '@/utils/smoothScroll';

import data from '@/data/common.json';

import Arrow from 'public/icons/arrow-md.svg';

export const ButtonUp = () => {
  const { btnUpAriaLabel } = data;

  return (
    <a
      href="#"
      className="anim icon h-[32px] w-[32px] rotate-[-90deg] bg-accent hover:bg-primary hover:text-accent focus:bg-primary focus:text-accent md:order-3"
      onClick={e => smoothScroll(e, 'main')}
      aria-label={btnUpAriaLabel}
    >
      <Arrow />
    </a>
  );
};
