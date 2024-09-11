import Image from "next/image";
import React from "react";

import DoMoreBadge from "@/components/Badge/DoMoreBadge";

import AboutUsHero from "./AboutUsHero/AboutUsHero";
import CoFounderQuote from "./CoFounderQuote/CoFounderQuote";
import JoinOurDynamicFamily from "./JoinOurDynamicFamily/JoinOurDynamicFamily";
import OurMission from "./OurMission/OurMission";
import OurProducts from "./OurProducts/OurProducts";
import WhatWeValue from "./WhatWeValue/WhatWeValue";

const page = () => {
  return (
    <main className="flex flex-col">
      <DoMoreBadge />
      <AboutUsHero />
      <CoFounderQuote />
      <OurMission />
      <WhatWeValue />
      <OurProducts />
      <JoinOurDynamicFamily />
      {/* <div className="h-[300px]"> */}
      <div className="relative flex h-[300px] w-full">
        <Image
          src="/static/img/truck-super-steep.png"
          fill
          priority
          alt="background image"
          className="object-contain object-right-bottom"
        />
      </div>
      {/* </div> */}
    </main>
  );
};

export default page;
