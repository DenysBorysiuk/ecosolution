'use client';

import { useState, useEffect } from 'react';
import AccordionIcon from '../AccordionIcon/AccordionIcon';

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({ children, title, id, active = false }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="py-[16px]">
      <p>
        <button
          className="flex w-full items-center justify-between py-[16px] text-left font-semibold"
          onClick={e => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <AccordionIcon accordionOpen={accordionOpen} />
          <span>{title}</span>
        </button>
      </p>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-3">{children}</p>
        </div>
      </div>
    </div>
  );
}
