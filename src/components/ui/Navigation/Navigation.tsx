'use client';

import { MouseEvent } from 'react';

import { NAV_LINKS } from '@/constants';

import { smoothScroll } from '@/utils/smoothScroll';

import Arrow from 'public/icons/arrow-md.svg';

type NavigationProps = {
  onClose: () => void;
  currentLink: string;
  setCurrentLink: (link: string) => void;
};

export const Navigation = ({
  onClose,
  currentLink,
  setCurrentLink,
}: NavigationProps) => {
  const onLinkClick = (e: MouseEvent, link: string) => {
    onClose();
    setCurrentLink(link);
    smoothScroll(e, link);
  };

  return (
    <nav>
      <ul className="mb-auto flex flex-col gap-[8px]">
        {NAV_LINKS.map(link => (
          <li key={link.key}>
            <a
              onClick={e => onLinkClick(e, link.key)}
              href={link.href}
              className={`
              ${
                currentLink === link.key
                  ? 'text-accent'
                  : 'text-white xl:text-white/25'
              }
              anim flex items-center gap-[8px]
               text-[24px] tracking-[-0.96px] xl:hover:text-white xl:focus:text-white`}
            >
              {link.title}
              <Arrow className=" rotate-[-45deg]" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
