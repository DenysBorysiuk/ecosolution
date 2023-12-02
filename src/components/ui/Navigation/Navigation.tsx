import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-[8x]">
        {NAV_LINKS.map(link => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[24px] leading-[1.2] tracking-[-0.72px] text-white/25 hover:text-white"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
