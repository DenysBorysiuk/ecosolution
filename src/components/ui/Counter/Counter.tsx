'use client';

import { formatNumber } from '@/utils/formatNumber';
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  //   console.log(count);

  //   const string = count.toString();
  //   const parts = string.split('.');
  const formattedNumber = formatNumber(count);
  //   console.log(formattedNumber);

  return (
    <div className="flex items-center justify-center gap-[8px] md:gap-[24px]">
      <p className="font-oswald text-[48px] font-bold leading-none text-accent md:text-[100px] xl:text-[164px]">
        {/* 1.134.147.814 */}
        {formattedNumber}
      </p>
      <span className="font-oswald text-[24px] leading-none md:text-[28px] xl:text-[48px] mdOnly:leading-[1.7]">
        kWh
      </span>
    </div>
  );
};

export default Counter;
