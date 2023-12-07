import ElectricitySection from '@/components/ElectricitySection';
import MainSection from '@/components/MainSection';
import ValuesSection from '@/components/AboutSection';
import CasesSection from '@/components/CasesSection';
import FaqSection from '@/components/FaqSection';
import ContactUsSection from '@/components/ContactUsSection';

export default function Home() {
  return (
    <>
      <MainSection />
      <ValuesSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactUsSection />
    </>
  );
}
