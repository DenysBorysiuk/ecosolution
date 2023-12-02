import ElectricitySection from '@/components/ElectricitySection';
import MainSection from '@/components/MainSection';
import ValuesSection from '@/components/ValuesSection';
import CasesSection from '@/components/CasesSection';
import FaqSection from '@/components/FaqSection';
import ContactUsSection from '@/components/ContactUsSection';
import BurgerMenu from '@/components/ui/BurgerMenu';

export default function Home() {
  return (
    <>
      <MainSection />
      <ValuesSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactUsSection />
      <BurgerMenu />
    </>
  );
}
