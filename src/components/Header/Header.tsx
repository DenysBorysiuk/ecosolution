import Logo from '@/components/ui/Logo/Logo';
import BurgerMenu from '@/components/ui/BurgerMenu/BurgerMenu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex gap-[12px] py-[36px] xl:py-[24px]">
      <Logo />
      <BurgerMenu />
      <Link href="#contacts" className="link-btn w-[141px] rounded-full bg-[#97D28B] smOnly:hidden">
        Get in touch
        <Image src="/icons/arrow-down.svg" alt="arrow icon" width={14} height={14} />
      </Link>
    </header>
  );
};

export default Header;
