import Accordion from '@/components/ui/Accordion/Accordion';
import data from '@/data/accordion.json';

const FaqSection = () => {
  return (
    <section className="section" id="faq">
      <div className="flex flex-col flex-wrap md:h-[632px]">
        <h2 className="heading2 h-[100px]  md:w-[342px]">
          Frequently asked questions
        </h2>
        <div className="order-[-1] divide-y divide-accent md:w-[342px] xl:w-[560px]">
          {data.faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>
        <div className="">
          <p>Didn't find the answer to your question? </p>
          <button type="button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
