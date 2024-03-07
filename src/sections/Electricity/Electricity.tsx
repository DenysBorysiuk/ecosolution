import Counter from '@/components/ui/Counter';

export const Electricity = () => {
  return (
    <section
      className="section electricity relative flex flex-col items-center 
      gap-[96px] md:gap-[135px] xl:gap-[120px]"
    >
      <h2 className="heading2 text-center">
        Electricity we produced <br />
        for all time
      </h2>

      <Counter />
    </section>
  );
};
