'use client';

import { smoothScroll } from '@/utils/smoothScroll';
import Arrow from 'public/icons/arrow-md.svg';

const ButtonUp = () => {
  return (
    <a
      href="#"
      className="anim icon h-[32px] w-[32px] rotate-[-90deg] bg-accent hover:bg-primary 
          hover:text-accent focus:bg-primary focus:text-accent 
          md:order-3"
      onClick={e => smoothScroll(e, 'main')}
      aria-label="Top of page"
    >
      <Arrow />
    </a>
  );
};

export default ButtonUp;
