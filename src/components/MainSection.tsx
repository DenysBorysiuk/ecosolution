import Image from 'next/image';
import Link from 'next/link';
import heroBg from '../../public/images/hero/hero.jpg';

const MainSection = () => {
  return (
    <section className="sb section mt-[220px] md:mt-[240px] xl:mt-[264px]" id="main">
      <div className="flex flex-col gap-[24px] mb-[24px] md:flex-row md:gap-[65px] xl:gap-[296px]">
        <h1 className="md:w-[300px] xl:w-[485px] text-[36px] md:text-[48px] xl:text-[64px]">
          Renewable energy for any&nbsp;task
        </h1>
        <div className="flex flex-col gap-[24px] md:w-[342px]">
          <p className="md:w-[342px] xl:w-[363px] text-[16px] text-justify tracking-[-0.64px] ">
            Development and implementation of renewable non-polluting energy sources, generating
            power generation using energy wind, sun, water, biomass
          </p>
          <Link
            href="#cases"
            className="link-btn w-[141px] smOnly:mx-auto border border-[#97D28B] hover:border-[#173D33]"
          >
            Learn more
            <div className="flex justify-center items-center rounded-full bg-[#97D28B] w-[32px] h-[32px]">
              <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>
      <span>--------------------</span>
      <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      <p>office@ecosolution.com</p>
      <div className=" md:w-[708px] xl:w-[1240px] mx-auto">
        <Image
          src={heroBg}
          alt="wind turbine"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
};

export default MainSection;
