import Accordion from './ui/Accordion';
import data from '@/data/accordion.json';

const FaqSection = () => {
  return (
    <section className="sb section">
      <h2 className="heading2">Frequently asked questions</h2>
      <div className="divide-y divide-[#97D28B]">
        {data.faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
            {faq.text}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
