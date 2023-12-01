import Image from 'next/image';
import Link from 'next/link';
import MainImage from '../ui/MainImage/MainImage';

const MainSection = () => {
  return (
    <section className="section mt-[220px] md:mt-[240px] xl:mt-[264px]" id="main">
      <div className="mb-[24px] flex flex-col gap-[24px] md:flex-row md:gap-[65px] xl:gap-[296px]">
        <h1 className="text-[36px] md:w-[300px] md:text-[48px] xl:w-[485px] xl:text-[64px]">
          Renewable energy for any&nbsp;task
        </h1>

        <div className="flex flex-col gap-[24px] md:w-[342px]">
          <p className="text-justify text-[16px] tracking-[-0.64px] md:w-[342px] xl:w-[363px]">
            Development and implementation of renewable non-polluting energy sources, generating
            power generation using energy wind, sun, water, biomass
          </p>
          <Link
            href="#cases"
            className="link-btn w-[141px] border border-[#97D28B] hover:border-[#173D33] smOnly:mx-auto"
          >
            Learn more
            <div className="icon-md">
              <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>

      <hr className="mb-[24px] border-t border-[#97D28B]" />

      <div className="mb-[36px] flex items-center tracking-[-0.64px] smOnly:flex-col smOnly:gap-[24px]">
        <address className="not-italic md:mr-auto">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
        <p className="hidden md:ml-[50px] md:flex xl:ml-[167px]">ecosolution &copy; 2023</p>
      </div>

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
