import ElectricitySection from '@/components/ElectricitySection';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import CasesSection from '@/components/CasesSection';
import FaqSection from '@/components/FaqSection';
import ContactUsSection from '@/components/ContactUsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactUsSection />
    </>
  );
}
