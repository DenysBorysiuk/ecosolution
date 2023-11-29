import Logo from '@/components/ui/Logo';
import BurgerMenu from '@/components/BurgerMenu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex gap-[12px] py-[36px] xl:py-[24px]">
      <Logo />
      <BurgerMenu />
      <Link
        href="#contacts"
        className="link-btn w-[141px] smOnly:hidden rounded-full bg-[#97D28B] hover:bg-[#173D33] hover:text-[#97D28B]"
      >
        Get in touch
        <Image src="/icons/arrow-down.svg" alt="arrow icon" width={14} height={14} />
      </Link>
    </header>
  );
};

export default Header;
