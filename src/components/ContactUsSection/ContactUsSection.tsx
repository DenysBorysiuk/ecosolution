import Contacts from '@/components/ui/Contacts';
import ContactForm from '@/components/ui/ContactForm';

const ContactUsSection = () => {
  return (
    <section className="section" id="contacts">
      <h2 className="heading2 mb-[24px] text-center md:mb-[40px] xl:mb-[120px]">
        Contact us
      </h2>
      <div className="md:flex md:justify-between">
        <Contacts />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
