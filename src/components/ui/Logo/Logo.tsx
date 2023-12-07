import Link from 'next/link';
import LogoIcon from 'public/icons/logo.svg';
import { LogoProps } from './type';

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`${className} anim h-[40px] w-[269px]
      hover:text-[#97D28B] focus:text-[#97D28B]`}
    >
      <LogoIcon />
    </Link>
  );
};

export default Logo;
