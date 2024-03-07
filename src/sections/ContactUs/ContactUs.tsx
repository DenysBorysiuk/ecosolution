import { Contacts } from '@/components/ui';
import { ContactForm } from '@/components/base';

import data from '@/data/contact-us.json';

export const ContactUs = () => {
  const { title } = data;

  return (
    <section className="section" id="contacts">
      <h2 className="heading2 mb-[24px] text-center md:mb-[40px] xl:mb-[120px]">
        {title}
      </h2>

      <div className="md:flex md:justify-between">
        <Contacts />

        <ContactForm />
      </div>
    </section>
  );
};
