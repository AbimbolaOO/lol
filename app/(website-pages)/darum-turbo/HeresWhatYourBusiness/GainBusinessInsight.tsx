import React from "react";

import VCards from "@/components/Cards/VCards";

const GainBusinessInsight = () => {
  return (
    <div className="mx-20 mb-[120px] grid grid-cols-2 gap-[2px] bg-line-gradient">
      <div className="mb-[2px] bg-white pb-[31px] pr-[78px] pt-[71px]">
        <VCards
          label="Gain Business Insights"
          description="Gain end-to-end visibility into logistics operations with actionable
          reports and data-driven insights."
          img="pie-chart"
          imgBoxClasses="bg-powder-blue"
          width={307}
          height={270}
        />
      </div>
      <div className="mb-[2px] bg-white pb-[31px] pl-[78px] pt-[71px]">
        <VCards
          label="Improve Productivity"
          description="Effortlessly manage customer orders from start to finish, guaranteeing fast, accurate, and reliable deliveries."
          img="road"
          imgBoxClasses="bg-powder-yellow"
          width={559}
          height={300}
        />
      </div>
    </div>
  );
};

export default GainBusinessInsight;
