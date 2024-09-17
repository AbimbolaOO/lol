import React from 'react';

import CustomizeBranTemplate from './CustomizeBranTemplate';
import GainBusinessInsight from './GainBusinessInsight';
import KeepCustomerInformed from './KeepCustomerInformed';
import RouteAndDeliveryEfficiency from './RouteAndDeliveryEfficiency';
import StreamlineOperations from './StreamlineOperations';
import VehicleUpdateReminders from './VehicleUpdateReminders';

const HeresWhatYourBusiness = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[120px]">
      <StreamlineOperations />
      <GainBusinessInsight />
      <VehicleUpdateReminders />
      <RouteAndDeliveryEfficiency />
      <CustomizeBranTemplate />
      <KeepCustomerInformed />
    </div>
  );
};

export default HeresWhatYourBusiness;
