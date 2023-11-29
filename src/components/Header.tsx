import Logo from '@/components/ui/Logo';
import BurgerMenu from '@/components/BurgerMenu';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex gap-[12px] py-[36px] xl:py-[24px]">
      <Logo />
      <BurgerMenu />
      <button className="hidden md:flex justify-center items-center gap-[12px] px-[16px] rounded-full bg-[#97D28B]">
        Get in touch
        <Image src="/icons/arrow-down.svg" alt="arrow icon" width={14} height={14} />
      </button>
    </header>
  );
};

export default Header;
