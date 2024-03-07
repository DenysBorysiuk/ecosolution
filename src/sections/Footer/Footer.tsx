import { Logo, SocialIcons, Address, ButtonUp } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className="border-t border-accent py-[24px] md:py-[40px]">
      <div className="mb-[24px] flex flex-wrap md:items-center smOnly:justify-between smOnly:gap-y-[24px]">
        <Logo className="w-[269px] md:order-1 md:mr-[97px] xl:mr-[512px]" />

        <ButtonUp />

        <SocialIcons className="flex justify-center gap-[8px] md:order-2  md:mr-auto smOnly:w-full" />
      </div>

      <Address />
    </footer>
  );
};
