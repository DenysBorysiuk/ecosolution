import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/icons/logo.svg" alt="logo" width={269} height={40} />
    </Link>
  );
};

export default Logo;
