import Image from 'next/image';

import Circle from 'public/icons/maximize-circle.svg';
import Global from 'public/icons/global-edit.svg';
import Cpu from 'public/icons/cpu.svg';
import Ranking from 'public/icons/ranking.svg';

import AboutCard from '@/components/ui/AboutCard';

import data from '@/data/about.json';

export const About = () => {
  return (
    <section
      className="section pt-[36px] md:pt-[100px] xl:pt-[120px]"
      id="about"
    >
      <div className=" line relative mb-[36px] md:mb-[100px] md:flex xl:mb-[122px] ">
        <h2 className="heading2 md:mr-auto md:w-[272px] xl:w-[365px] smOnly:mb-[24px]">
          {data.heading}
        </h2>
        <p className="text-justify text-[16px] md:w-[342px] xl:w-[459px]">
          {data.paragraph}
        </p>
      </div>

      <ul
        className="grid grid-cols-2 grid-rows-2 gap-[24px] md:grid-cols-4 md:grid-rows-2 
        xl:gap-[48px] smOnly:mx-auto smOnly:w-[320px]"
      >
        <AboutCard title={data.cards[0].title} text={data.cards[0].text}>
          <Circle className="h-[16px] w-[16px] xl:h-[24px] xl:w-[24px]" />
        </AboutCard>

        <AboutCard title={data.cards[1].title} text={data.cards[1].text}>
          <Global className="h-[16px] w-[16px] xl:h-[24px] xl:w-[24px]" />
        </AboutCard>

        <li className="relative md:col-span-2 md:h-[197px] xl:h-[339px] smOnly:hidden ">
          <Image
            src="/images/values/values-1_lg@2.webp"
            alt="wind-farms-fields"
            fill
            sizes="(max-width: 1279px) 342px, (min-width: 1280px) 596px"
            quality={90}
            className="object-cover object-center"
          />
        </li>

        <li className="relative md:col-span-2  md:row-start-2 md:h-[197px] xl:h-[339px]  smOnly:hidden">
          <Image
            src="/images/values/values-2_lg@2.webp"
            alt="man-worker-field-by-solar-panels"
            fill
            sizes="(max-width: 1279px) 342px, (min-width: 1280px) 596px"
            quality={90}
            className="object-cover object-center"
          />
        </li>

        <AboutCard
          title={data.cards[2].title}
          text={data.cards[2].text}
          className="md:col-start-3 md:row-start-2"
        >
          <Cpu className="h-[16px] w-[16px] xl:h-[24px] xl:w-[24px]" />
        </AboutCard>

        <AboutCard
          title={data.cards[3].title}
          text={data.cards[3].text}
          className="md:col-start-4 md:row-start-2"
        >
          <Ranking className="h-[16px] w-[16px] xl:h-[24px] xl:w-[24px]" />
        </AboutCard>
      </ul>
    </section>
  );
};
