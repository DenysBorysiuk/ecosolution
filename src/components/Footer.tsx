import Logo from '@/components/ui/Logo';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="sb">
      <div className="flex items-center smOnly:justify-between mb-[24px]">
        <Logo />
        <Link className="icon-md rotate-[-90deg]" href="#main">
          <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
        </Link>
      </div>
      <ul className="flex gap-[8px] justify-center mb-[24px]">
        <li>
          <Link href="#">
            <Image src="/icons/facebook.svg" alt="facebook icon" width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/icons/instagram.svg" alt="instagram icon" width={24} height={24} />
          </Link>
        </li>
      </ul>
      <div className="flex smOnly:flex-col smOnly:gap-[16px] items-center mb-[24px] tracking-[-0.64px]">
        <address className="md:mr-auto not-italic">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
        <p className="md:ml-[50px] xl:ml-[167px]">ecosolution &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
