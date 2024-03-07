'use client';

import Arrow from 'public/icons/arrow-md.svg';
import Address from '@/components/ui/Address';
import { smoothScroll } from '@/utils/smoothScroll';

export const Hero = () => {
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
        <h1 className="text-[36px] md:w-[300px] md:text-[48px] xl:w-[485px] xl:text-[64px]">
          Renewable energy for any&nbsp;task
        </h1>

        <div className="flex flex-col gap-[24px] md:w-[342px]">
          <p className="text-justify text-[16px]  md:w-[342px] xl:w-[363px]">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <a
            href="#"
            className="btn anim w-[141px] smOnly:mx-auto"
            onClick={e => smoothScroll(e, 'cases')}
          >
            Learn more
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
