import Link from 'next/link';

import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';

import { SocialIconsProps } from './type';

export const SocialIcons = ({ color, className }: SocialIconsProps) => {
  return (
    <ul className={`flex ${className}`}>
      <li>
        <Link
          href="https://facebook.com"
          className={`text-${color} anim hover:text-accent focus:text-accent`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to facebook"
        >
          <Facebook />
        </Link>
      </li>

      <li>
        <Link
          href="https://instagram.com"
          className={`text-${color} anim hover:text-accent focus:text-accent`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to instagram"
        >
          <Instagram />
        </Link>
      </li>
    </ul>
  );
};
