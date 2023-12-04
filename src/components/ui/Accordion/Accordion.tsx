'use client';

import { Dispatch, SetStateAction } from 'react';
import AccordionIcon from '../AccordionIcon/AccordionIcon';

type AccordionProps = {
  children: React.ReactNode;
  question: string;
  id: string;
  accordionOpen: boolean;
  setCurrent: Dispatch<SetStateAction<number>>;
  index: number;
};

export default function Accordion({
  children,
  question,
  id,
  accordionOpen,
  setCurrent,
  index,
}: AccordionProps) {
  return (
    <div className="">
      <p>
        <button
          className="flex w-full items-center justify-between py-[16px] text-justify text-[18px] 
          tracking-[-0.72px] xl:py-[24px] xl:text-[24px] "
          onClick={e => {
            e.preventDefault();
            setCurrent(index);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <AccordionIcon accordionOpen={accordionOpen} />
          <span>{question}</span>
        </button>
      </p>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden  ">
          <p className="pb-[16px] pl-[24px] text-justify text-[14px] tracking-[-0.56]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
