import Link from 'next/link';

const Address = () => {
  return (
    <div className="flex items-center smOnly:flex-col smOnly:gap-[8px]">
      <address className="not-italic md:mr-auto">
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </address>

      <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>

      <p className="md:ml-[50px] md:flex xl:ml-[167px]">
        ecosolution &copy; 2023
      </p>
    </div>
  );
};

export default Address;
