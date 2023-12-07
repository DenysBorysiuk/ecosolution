'use client';

import Accordion from '@/components/ui/Accordion';
import { smoothScroll } from '@/utils/smoothScroll';
import ArrowIcon from 'public/icons/arrow-sm.svg';
import data from '@/data/accordion.json';
import { useState } from 'react';

const FaqSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="flex flex-col flex-wrap md:h-[740px] md:gap-[24px] xl:gap-[185px]">
        <h2 className="heading2  mb-auto md:w-[342px]">
          Frequently asked <br /> questions
        </h2>
        <div className="h-[100%] divide-y divide-accent md:order-[-1] md:w-[342px] xl:w-[560px]">
          {data.faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              id={`faqs-${index}`}
              accordionOpen={current === index}
              setCurrent={setCurrent}
              index={index}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>
        <div className="md:w-[300px] xl:w-[400px]">
          <p
            className="mb-[12px] text-[18px] tracking-[-0.72px] xl:text-[24px] 
            xl:tracking-[-0.96px] smOnly:text-center"
          >
            Didn't find the answer to your question?
          </p>
          <button
            className="btn-filled anim group  mx-auto w-[141px] bg-accent"
            onClick={e => smoothScroll(e, 'contacts')}
          >
            Get in touch
            <span
              className="anim h-[14px] w-[14px] rounded-full bg-primary group-hover:bg-accent
            group-focus:bg-accent"
            >
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
