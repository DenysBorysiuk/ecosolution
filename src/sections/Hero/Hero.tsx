'use client';

import { smoothScroll } from '@/utils/smoothScroll';

import { Address } from '@/components/ui';

import Arrow from 'public/icons/arrow-md.svg';

import data from '@/data/hero.json';

export const Hero = () => {
  const { title, text, btn } = data;

  return (
    <section
      className="main-bg pb-[236px] pt-[220px]  md:pb-[388px] md:pt-[240px]
      xl:pb-[560px] xl:pt-[264px]"
      id="main"
    >
      <div
        className="mb-[24px] flex flex-col gap-[24px] border-b border-accent pb-[24px] md:mb-[16px]
        md:flex-row md:gap-[65px] xl:mb-[12px] xl:gap-[296px]"
      >
        <h1 className="text-[36px] md:w-[280px] md:text-[48px] xl:w-[485px] xl:text-[64px]">
          {title}
        </h1>

        <div className="flex flex-col gap-[24px] md:w-[342px]">
          <p className="text-justify text-[16px]  md:w-[342px] xl:w-[363px]">
            {text}
          </p>

          <a
            href="#"
            className="btn anim w-[141px] smOnly:mx-auto"
            onClick={e => smoothScroll(e, 'cases')}
          >
            {btn}
            <span className="icon h-[32px] w-[32px] bg-accent text-primary">
              <Arrow />
            </span>
          </a>
        </div>
      </div>

      <Address className="hidden" />
    </section>
  );
};
