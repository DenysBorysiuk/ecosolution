const ElectricitySection = () => {
  return (
    <section className="section flex flex-col items-center gap-[24px] xl:gap-[17px]">
      <h2 className="heading2 text-center">
        Electricity we produced <br />
        for all time
      </h2>
      <div className="bg-accent h-[48px] w-[1px] md:h-[87px] " />
      <div className="flex items-center justify-center gap-[8px] md:gap-[24px]">
        <p className="font-oswald text-accent text-[48px] font-bold leading-none md:text-[100px] xl:text-[164px]">
          1.134.147.814
        </p>
        <span className="font-oswald mdOnly:leading-[1.7] text-[24px] leading-none md:text-[28px] xl:text-[48px]">
          kWh
        </span>
      </div>
    </section>
  );
};

export default ElectricitySection;
