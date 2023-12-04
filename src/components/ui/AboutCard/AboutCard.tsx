import { ReactNode } from 'react';

type AboutCardProps = {
  children: ReactNode;
  title: string;
  text: string;
  className?: string;
};

const AboutCard = ({ children, title, text, className }: AboutCardProps) => {
  return (
    <li className={`card ${className}`}>
      <h3 className="heading3 flex items-center gap-[8px]">
        {children}
        {title}
      </h3>

      <p
        className="border-t border-accent pt-[12px] text-justify text-[14px] tracking-[-0.56px] 
          xl:pt-[24px] xl:text-[16px] xl:tracking-[-0.64px]"
      >
        {text}
      </p>
    </li>
  );
};

export default AboutCard;
