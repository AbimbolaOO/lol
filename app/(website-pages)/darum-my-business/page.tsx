import React from "react";

import CaptainIsBuilt from "./CaptainIsBuilt/CaptainIsBuilt";
import DarumCaptainIsBuiltFor from "./DarumCaptainIsBuiltFor/DarumCaptainIsBuiltFor";
import DarumMyBusinessHero from "./DarumMyBusinessHero/DarumMyBusinessHero";
import Fleets from "./Fleets/Fleets";
import TopBusiness from "./TopBusiness/TopBusiness";

const page = () => {
  return (
    <div>
      <DarumMyBusinessHero />
      <Fleets />
      <CaptainIsBuilt />
      <DarumCaptainIsBuiltFor />
      <TopBusiness />
    </div>
  );
};

export default page;
