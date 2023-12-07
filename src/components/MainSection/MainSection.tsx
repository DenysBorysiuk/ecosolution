'use client';

import Arrow from 'public/icons/arrow-md.svg';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import Address from '@/components/ui/Address';
import { smoothScroll } from '@/utils/smoothScroll';

const MainSection = () => {
  return (
    <section
      className="section pt-[220px] md:pt-[240px] xl:pt-[264px]"
      id="main"
    >
      <div className="mb-[24px] flex flex-col gap-[24px] md:flex-row md:gap-[65px] xl:gap-[296px]">
        <h1 className="text-[36px] md:w-[300px] md:text-[48px] xl:w-[485px] xl:text-[64px]">
          Renewable energy for any&nbsp;task
        </h1>

        <div className="flex flex-col gap-[24px] md:w-[342px]">
          <p className="text-justify text-[16px]  md:w-[342px] xl:w-[363px]">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <button
            className="btn anim w-[141px] smOnly:mx-auto"
            onClick={e => smoothScroll(e, 'cases')}
          >
            Learn more
            <span className="icon h-[32px] w-[32px] bg-accent text-primary">
              <Arrow />
            </span>
          </button>
        </div>
      </div>

      <div className="mb-[24px] h-[1px] w-full bg-accent" />

      <Address className="hidden" />

      <div className="h-[200px] md:h-[348px] xl:h-[524px]">
        <ResponsiveImage name={'main'} folder={'main'} alt={'wind turbine'} />
      </div>
    </section>
  );
};

export default MainSection;
