import Image from 'next/image';
import Link from 'next/link';
import Contacts from '@/components/ui/Contacts';
import ContactForm from '@/components/ui/ContactForm';

const ContactUsSection = () => {
  return (
    <section className="sb section" id="contacts">
      <h2 className="heading2 mb-[24px] text-center md:mb-[40px] xl:mb-[120px]">Contact us</h2>
      <Contacts />
      <ContactForm />
    </section>
  );
};

export default ContactUsSection;
