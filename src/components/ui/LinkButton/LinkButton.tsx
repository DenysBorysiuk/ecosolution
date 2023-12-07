import { smoothScroll } from '@/utils/smoothScroll';
import ArrowIcon from 'public/icons/arrow-sm.svg';
import { LinkButtonProps } from './type';

const LinkButton = ({ children, linkTo }: LinkButtonProps) => {
  return (
    <a
      href="#"
      className="btn-filled anim group ml-[12px] w-[141px] rounded-full bg-accent smOnly:hidden"
      onClick={e => smoothScroll(e, linkTo)}
    >
      {children}
      <span
        className="anim h-[14px] w-[14px] rounded-full bg-primary group-hover:bg-accent
          group-focus:bg-accent"
      >
        <ArrowIcon />
      </span>
    </a>
  );
};

export default LinkButton;
