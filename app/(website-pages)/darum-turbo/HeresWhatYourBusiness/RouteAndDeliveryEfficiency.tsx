import React from 'react';

import VCards from '@/components/Cards/VCards';

const RouteAndDeliveryEfficiency = () => {
  return (
    <div className="bg-line-gradient mx-20 mb-[120px] grid grid-cols-2 gap-[2px]">
      <div className="my-[2px] bg-white pb-[31px] pr-[78px] pt-[71px]">
        <VCards
          label="Route and Delivery Efficiency"
          description="Centralize your fleet data for growth, with accurate records and insights that drive smart decisions."
          img="map"
          classes="bg-powder-blue"
          width={559}
          height={559}
        />
      </div>
      <div className="my-[2px] bg-white pb-[31px] pl-[78px] pt-[71px]">
        <VCards
          label="Driver Management"
          description="Darum provides the tools you need to boost profitability and accelerate business growth."
          img="crop-dashboard"
          classes="bg-powder-yellow"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default RouteAndDeliveryEfficiency;
