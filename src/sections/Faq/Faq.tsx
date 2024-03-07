'use client';

import { useState } from 'react';

import { Accordion, LinkButton } from '@/components/ui';

import data from '@/data/faq.json';

export const Faq = () => {
  const { faqs, title, text, link } = data;

  const [current, setCurrent] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="flex flex-col flex-wrap md:h-[740px] md:gap-[24px] xl:gap-[185px]">
        <h2 className="heading2  mb-auto md:w-[342px] smOnly:mb-[24px]">
          {title}
        </h2>

        <div className="h-[100%] md:order-[-1] md:w-[342px] xl:w-[560px]">
          {faqs.map((faq, index) => (
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
            {text}
          </p>

          <LinkButton linkTo={link.path}>{link.label}</LinkButton>
        </div>
      </div>
    </section>
  );
};
