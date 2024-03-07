'use client';

import { MouseEvent } from 'react';

import data from '@/data/common.json';

import { smoothScroll } from '@/utils/smoothScroll';

import Arrow from 'public/icons/arrow-md.svg';

import { NavigationProps } from './type';

export const Navigation = ({
  onClose,
  currentLink,
  setCurrentLink,
}: NavigationProps) => {
  const { navLinks } = data;

  const onLinkClick = (e: MouseEvent, link: string) => {
    onClose();
    setCurrentLink(link);
    smoothScroll(e, link);
  };

  return (
    <nav>
      <ul className="mb-auto flex flex-col gap-[8px]">
        {navLinks.map(({ key, href, title }) => (
          <li key={key}>
            <a
              onClick={e => onLinkClick(e, key)}
              href={href}
              className={`
              ${
                currentLink === key
                  ? 'text-accent'
                  : 'text-white xl:text-white/25'
              }
              anim flex items-center gap-[8px]
               text-[24px] tracking-[-0.96px] xl:hover:text-white xl:focus:text-white`}
            >
              {title}
              <Arrow className="rotate-[-45deg]" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
