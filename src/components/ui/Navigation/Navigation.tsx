'use client';

import { NAV_LINKS } from '@/constants';
import { smoothScroll } from '@/utils/smoothScroll';

type NavigationProps = {
  onLinkClick: (currentLink: string) => void;
  currentLink: string;
};

const Navigation = ({ onLinkClick, currentLink }: NavigationProps) => {
  const onClick = (e: React.MouseEvent, link: string) => {
    onLinkClick(link);
    smoothScroll(e, link);
  };

  return (
    <nav>
      <ul className="flex flex-col gap-[8px]">
        {NAV_LINKS.map(link => (
          <li key={link.key}>
            <a
              onClick={e => onClick(e, link.key)}
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
