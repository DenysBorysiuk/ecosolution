import Logo from '@/components/ui/Logo/Logo';
import SocialIcons from '@/components/ui/SocialIcons';

import Arrow from 'public/icons/arrow-md.svg';
import Address from '../ui/Address';

const Footer = () => {
  return (
    <footer className="border-t border-accent pt-[24px] md:pt-[40px]">
      <div className="mb-[24px] flex flex-wrap md:items-center smOnly:justify-between smOnly:gap-y-[24px]">
        <Logo className="w-[269px] md:order-1 md:mr-[97px] xl:mr-[512px]" />
        <a
          className="anim icon h-[32px] w-[32px] rotate-[-90deg] bg-accent hover:bg-primary 
          hover:text-accent md:order-3"
          href="#main"
          arial-label="link to top of page"
        >
          <Arrow />
        </a>
        <SocialIcons className="flex justify-center gap-[8px] md:order-2  md:mr-auto smOnly:w-full" />
      </div>
      <Address />
    </footer>
  );
};

export default Footer;
