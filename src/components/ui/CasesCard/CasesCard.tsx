'use client';

import Image from 'next/image';

import Arrow from 'public/icons/arrow-xl.svg';

import { CasesCardProps } from './type';

export const CasesCard = ({ img, title, text, date }: CasesCardProps) => {
  return (
    <div className="h-[318px] md:h-[322px] md:w-[342px] xl:h-[506px] xl:w-[596px] ">
      <div className="relative h-[168px]  xl:h-[296px]">
        <Image
          src={`/images/cases/${img}_lg@2x.webp`}
          alt={text}
          fill
          sizes="(max-width: 767px) 320px, (max-width: 1279px) 342px, 596px"
          quality={90}
        />
      </div>
      
      <div className="bg-form_bg px-[12px] pb-[12px] pt-[24px] xl:px-[48px] xl:py-[36px]">
        <div className="mb-[24px] flex justify-between md:mb-[22px] xl:mb-[36px]">
          <p
            className="h-[66px] w-[175px] text-[18px] tracking-[-0.72px] 
            md:h-[72px] md:w-[230px] md:text-[20px] xl:w-[357px] xl:text-[24px]"
          >
            {title}
          </p>

          <a
            href="#"
            aria-label={`Read more about ${title}`}
            className="anim icon block h-[60px] w-[60px] bg-accent hover:bg-primary
             hover:text-accent focus:bg-primary focus:text-accent"
          >
            <Arrow />
          </a>
        </div>

        <div className="flex justify-between border-t border-accent pt-[12px] xl:pt-[24px]">
          <p className="text-[12px] md:text-[14px]">{text}</p>

          <p className="text-[12px] md:text-[14px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

