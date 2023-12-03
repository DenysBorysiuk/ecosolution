'use client';

import { useState, MouseEvent } from 'react';
import { NAV_LINKS } from '@/constants';
import { smoothScroll } from '@/utils/smoothScroll';

type NavigationProps = {
  onClose: () => void;
  currentLink: string;
  setCurrentLink: (link: string) => void;
};

const Navigation = ({
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
              anim text-[24px] 
               tracking-[-0.96px] xl:hover:text-white`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

// <li onClick={onClick} className={navlinkClasses}>
//   <a href={href} onClick={e => smoothScroll(e, href)} aria-label={title}>
//     {title}
//   </a>
// </li>;
