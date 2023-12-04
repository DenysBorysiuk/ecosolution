import Logo from '@/components/ui/Logo/Logo';
import Link from 'next/link';
import SocialIcons from '@/components/ui/SocialIcons';

import Arrow from 'public/icons/arrow-md.svg';
import Address from '../ui/Address';

const Footer = () => {
  return (
    <footer className="sb">
      <div className="mb-[24px] flex items-center smOnly:justify-between">
        <Logo />
        <Link
          className="icon h-[32px] w-[32px] rotate-[-90deg] bg-accent"
          href="#main"
        >
          <Arrow />
        </Link>
      </div>
      <SocialIcons className="mb-[24px] flex justify-center gap-[8px]" />

      <Address />
      {/* <div className="mb-[24px] flex items-center tracking-[-0.64px] smOnly:flex-col smOnly:gap-[16px]">
        <address className="not-italic md:mr-auto">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
        <p className="md:ml-[50px] xl:ml-[167px]">ecosolution &copy; 2023</p>
      </div> */}
    </footer>
  );
};

export default Footer;
