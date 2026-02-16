import { LandingHeader } from '../components/LandingHeader';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { MachinesSection } from '../components/MachinesSection';
import { HowToUseSection } from '../components/HowToUseSection';
import { SobreNosotros } from '../components/SobreNosotros';

export function LandingPage() {
  return (
    <>
      <LandingHeader />
      <HeroSection />
      <BenefitsSection />
      <MachinesSection />
      <HowToUseSection />
      <SobreNosotros />
    </>
  );
}
