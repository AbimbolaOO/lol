import LearnMoreBadge from '@/components/Badge/LearnMoreBadge';

import AllTypesOfBusiness from './AllTypesOfBusiness/AllTypesOfBusiness';
import EmbraceDigitalSolutions from './EmbraceDigitalSolutions/EmbraceDigitalSolutions';
import GotQuestions from './GotQuestions/GotQuestions';
import JoinOurDarumPartner from './JoinOurDarumPartner/JoinOurDarumPartner';
import LandingPageHero from './LandingPageHero/LandingPageHero';
import NextGenLogistics from './NextGenLogistics/NextGenLogistics';
import TheDarumAdvantage from './TheDarumAdvantage/TheDarumAdvantage';
import TopBrands from './TopBrands/TopBrands';
import WhereToFindDarum from './WhereToFindDarum/WhereToFindDarum';

export default function Home() {
  return (
    <main className="flex flex-col">
      <LearnMoreBadge />
      <LandingPageHero />
      <TopBrands />
      <EmbraceDigitalSolutions />
      <TheDarumAdvantage />
      <AllTypesOfBusiness />
      <WhereToFindDarum />
      <JoinOurDarumPartner />
      <GotQuestions />
      <NextGenLogistics />
    </main>
  );
}
