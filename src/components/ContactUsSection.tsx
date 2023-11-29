import Image from 'next/image';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section className="sb section" id="contacts">
      <h2 className="heading2">Contact us</h2>
      <button className="link-btn w-[100px] border border-[#97D28B] hover:border-[#173D33]">
        Send
        <div className="flex justify-center items-center rounded-full bg-[#97D28B] w-[32px] h-[32px]">
          <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
        </div>
      </button>
    </section>
  );
};

export default ContactUsSection;
