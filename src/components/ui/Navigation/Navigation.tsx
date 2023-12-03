'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import { smoothScroll } from '@/utils/smoothScroll';

type NavigationProps = {
  onClick: () => void;
};

const Navigation = ({ onClick }: NavigationProps) => {
  const [currentLink, setCurrentLink] = useState('');

  const onLinkClick = (e: React.MouseEvent, link: string) => {
    onClick();
    setCurrentLink(link);
    smoothScroll(e, link);
  };

  return (
    <nav>
      <ul className="flex flex-col gap-[8px]">
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
              text-[24px] tracking-[-0.96px] 
               xl:hover:text-white`}
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
