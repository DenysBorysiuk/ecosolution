import Image from 'next/image';
import values1 from '../../../public/images/values/values-1_lg@2.webp';
import values2 from '../../../public/images/values/values-2_lg@2.webp';

const ValuesSection = () => {
  return (
    <section className="section">
      <div className="mb-[36px] md:mb-[100px] md:flex xl:mb-[122px] ">
        <h2 className="heading2 md:mr-auto md:w-[272px] xl:w-[365px] smOnly:mb-[24px]">
          Main values of our company
        </h2>
        <p className="text-justify text-[16px] tracking-[-0.64px] md:w-[342px] xl:w-[459px]">
          EcoSolution envisions a world where sustainable energy solutions power a brighter and
          cleaner future for all. We aspire to be at the forefront of the global shift towards
          renewable energy, leading the way in innovative technologies that harness the power of
          nature to meet the world's energy needs.
        </p>
      </div>

      <ul className="grid grid-cols-2 grid-rows-2 gap-[24px] md:grid-cols-4 md:grid-rows-2 xl:gap-[48px] smOnly:mx-auto smOnly:w-[320px]">
        <li className="card">
          <h3 className="heading3">Openness</h3>
          <p
            className="border-accent border-t pt-[12px] text-justify text-[14px] tracking-[-0.56px] 
                       xl:pt-[24px] xl:text-[16px] xl:tracking-[-0.64px]"
          >
            to the world, people, new ideas and projects
          </p>
        </li>
        <li className="card">
          <h3 className="heading3">Responsibility</h3>
          <p
            className="border-accent border-t pt-[12px] text-justify text-[14px] tracking-[-0.56px] 
                       xl:pt-[24px] xl:text-[16px] xl:tracking-[-0.64px]"
          >
            we are aware that the results of our work have an impact on our lives and the lives of
            future generations
          </p>
        </li>
        <li className="md:col-span-2 md:h-[197px] xl:h-[339px]  smOnly:hidden">
          <Image
            src={values1}
            alt="wind-farms-fields"
            sizes="(max-width: 1279px) 342px, (min-width: 1280px) 596px"
            quality={90}
            // priority
            style={{
              maxWidth: '100%',
              height: '100%',
            }}
            className=" md:w-[342px] xl:w-[596px]"
          />
        </li>
        <li className="md:col-span-2  md:row-start-2 md:h-[197px] xl:h-[339px]  smOnly:hidden">
          <Image
            src={values2}
            alt="man-worker-field-by-solar-panels"
            sizes="(max-width: 1279px) 342px, (min-width: 1280px) 596px"
            quality={90}
            // priority
            style={{
              maxWidth: '100%',
              height: '100%',
            }}
            className=" md:w-[342px] xl:h-[339px] xl:w-[596px]"
          />
        </li>
        <li className="card md:col-start-3 md:row-start-2">
          <h3 className="heading3">Innovation</h3>
          <p
            className="border-t border-[#97D28B] pt-[12px] text-justify text-[14px] tracking-[-0.56px] 
                       xl:pt-[24px] xl:text-[16px] xl:tracking-[-0.64px]"
          >
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li className="card md:col-start-4 md:row-start-2">
          <h3 className="heading3">Quality</h3>
          <p
            className="border-t border-[#97D28B] pt-[12px] text-justify text-[14px] tracking-[-0.56px] 
                       xl:pt-[24px] xl:text-[16px] xl:tracking-[-0.64px]"
          >
            we do not strive to be the first among others, but we want to be the best in our
            business
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ValuesSection;
