import Image from 'next/image';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section className="sb section" id="contacts">
      <h2 className="heading2">Contact us</h2>
      {/* <button className="link-btn w-[100px] border border-[#97D28B] hover:border-[#173D33]">
        Send
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#97D28B]">
          <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
        </div>
      </button> */}
    </section>
  );
};

export default ContactUsSection;
