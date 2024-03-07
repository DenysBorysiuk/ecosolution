import { Counter } from '@/components/ui';

import data from '@/data/electricity.json';

export const Electricity = () => {
  const { title } = data;

  return (
    <section className="section electricity relative flex flex-col items-center gap-[96px] md:gap-[135px] xl:gap-[120px]">
      <h2 className="heading2 w-[286px] text-center md:w-[368px] xl:w-[491px]">
        {title}
      </h2>

      <Counter />
    </section>
  );
};
