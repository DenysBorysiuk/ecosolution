import Logo from '@/components/ui/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="sb">
      <Logo />
      <Link href="#main">Up</Link>
      <ul>
        <li>F</li>
        <li>I</li>
      </ul>
      <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      <p>office@ecosolution.com</p>
      <p>ecosolution © 2023</p>
    </footer>
  );
};

export default Footer;
