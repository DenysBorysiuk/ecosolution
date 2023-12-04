import Link from 'next/link';
import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';

type SocialIcons = {
  color?: string;
  className?: string;
};

const SocialIcons = ({ color, className }: SocialIcons) => {
  return (
    <ul className={`flex ${className}`}>
      <li>
        <Link
          href="https://facebook.com"
          className={`text-${color} anim hover:text-accent`}
        >
          <Facebook />
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com"
          className={`text-${color} anim hover:text-accent`}
        >
          <Instagram />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
{
  /* <Image
  src="/icons/instagram.svg"
  alt="instagram icon"
  width={24}
  height={24}
/>; */
}
