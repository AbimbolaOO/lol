import React from 'react';

import CaptainIsBuilt from './CaptainIsBuilt/CaptainIsBuilt';
import DarumCaptainIsBuiltFor from './DarumCaptainIsBuiltFor/DarumCaptainIsBuiltFor';
import DarumMyCaptainHero from './DarumMyCaptainHero/DarumMyCaptainHero';
import Fleets from './Fleets/Fleets';
import TopBusiness from './TopBusiness/TopBusiness';

const page = () => {
  return (
    <div>
      <DarumMyCaptainHero />
      <Fleets />
      <CaptainIsBuilt />
      <DarumCaptainIsBuiltFor />
      <TopBusiness />
    </div>
  );
};

export default page;
