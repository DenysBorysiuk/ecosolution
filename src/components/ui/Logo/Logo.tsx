import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`${className}`}>
      <Image src="/icons/logo.svg" alt="logo" width={269} height={40} />
    </Link>
  );
};

export default Logo;
