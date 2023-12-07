import Logo from '@/components/ui/Logo/Logo';
import SocialIcons from '@/components/ui/SocialIcons';
import Address from '@/components/ui/Address';
import ButtonUp from '@/components/ui/ButtonUp/ButtonUp';

const Footer = () => {
  return (
    <footer className="border-t border-accent pt-[24px] md:pt-[40px]">
      <div className="mb-[24px] flex flex-wrap md:items-center smOnly:justify-between smOnly:gap-y-[24px]">
        <Logo className="w-[269px] md:order-1 md:mr-[97px] xl:mr-[512px]" />
        <ButtonUp />
        <SocialIcons className="flex justify-center gap-[8px] md:order-2  md:mr-auto smOnly:w-full" />
      </div>
      <Address />
    </footer>
  );
};

export default Footer;
