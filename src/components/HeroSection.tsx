import Image from 'next/image';
import Link from 'next/link';
import heroBg from '../../public/images/hero/hero.jpg';

const HeroSection = () => {
  return (
    <section className="border-2 border-green-500 mt-[220px] mb-[36px]">
      <h1>Renewable energy for any task</h1>
      <p>
        Development and implementation of renewable non-polluting energy sources, generating power
        generation using energy wind, sun, water, biomass
      </p>
      <Link href="/">Learn more</Link>
      <span>---</span>
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

export default HeroSection;
