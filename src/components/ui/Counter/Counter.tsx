'use client';

import { useState, useEffect } from 'react';

import { formatNumber } from '@/utils/formatNumber';

import data from '@/data/electricity.json';

export const Counter = () => {
  const { value, units } = data;

  const [count, setCount] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const formattedNumber = formatNumber(count);

  return (
    <div className="flex items-center justify-center gap-[8px] md:gap-[24px]">
      <p className="w-[256px] font-oswald text-[48px] font-bold leading-none text-accent md:w-[533px] md:text-[100px] xl:w-[874px] xl:text-[164px]">
        {formattedNumber}
      </p>

      <span className="font-oswald text-[24px] leading-none md:text-[28px] xl:text-[48px] mdOnly:leading-[1.7]">
        {units}
      </span>
    </div>
  );
};
