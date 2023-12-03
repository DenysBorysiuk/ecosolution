'use client';

import MainImage from '@/components/ui/MainImage/MainImage';
import Arrow from 'public/icons/arrow-md.svg';
import { smoothScroll } from '@/utils/smoothScroll';
import Address from '@/components/ui/Address';

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
            className="link-btn anim w-[141px] border 
          border-accent hover:border-primary smOnly:mx-auto"
            onClick={e => smoothScroll(e, 'cases')}
          >
            Learn more
            <span className="icon h-[32px] w-[32px] bg-accent">
              <Arrow />
            </span>
          </button>
        </div>
      </div>

      <div className="mb-[24px] h-[1px] w-full bg-accent" />

      <Address />

      <div className="h-[200px] md:h-[348px] xl:h-[524px]">
        <MainImage name={'main'} alt={'wind turbine'} sm={true} />
      </div>
      {/* <Image
        src={image.src}
        alt={image.alt}
        width={572}
        height={578}
        priority
        sizes="(max-width: 767px) 440px, (max-width: 1279px) 334px, 578px"
        className="aspect-square object-cover object-center md:aspect-[1/1.01]"
      /> */}
    </section>
  );
};

export default MainSection;
