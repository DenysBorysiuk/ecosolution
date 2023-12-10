'use client';

import AccordionIcon from '@/components/ui/AccordionIcon';
import { AccordionProps } from './type';

export default function Accordion({
  children,
  question,
  id,
  accordionOpen,
  setCurrent,
  index,
}: AccordionProps) {
  return (
    <div>
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
        className={`grid overflow-hidden text-sm  transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-[16px] pl-[24px] text-justify text-[14px] tracking-[-0.56px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
