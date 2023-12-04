import Counter from '@/components/ui/Counter';

const ElectricitySection = () => {
  return (
    <section className="section flex flex-col items-center gap-[24px] xl:gap-[17px]">
      <h2 className="heading2 text-center">
        Electricity we produced <br />
        for all time
      </h2>
      <div className="h-[48px] w-[1px] bg-accent md:h-[87px] " />
      <Counter />
    </section>
  );
};

export default ElectricitySection;
