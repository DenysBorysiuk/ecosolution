import Link from 'next/link';

import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';

import data from '@/data/common.json';

import { SocialIconsProps } from './type';

export const Socials = ({ color, className }: SocialIconsProps) => {
  const { socialLinks } = data;

  return (
    <ul className={`flex ${className}`}>
      {socialLinks.map(({ label, path, ariaLabel }) => (
        <li key={path}>
          <Link
            href={path}
            className={`text-${color} anim hover:text-accent focus:text-accent`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            {label === 'facebook' && <Facebook />}

            {label === 'instagram' && <Instagram />}
          </Link>
        </li>
      ))}
    </ul>
  );
};
