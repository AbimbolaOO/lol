import React from 'react';

import DoMoreBadge from '@/components/Badge/DoMoreBadge';

import HeresWhatYourBusiness from './HeresWhatYourBusiness/HeresWhatYourBusiness';
import SuperChargeLogistic from './SuperChargeLogistic/SuperChargeLogistic';

const page = () => {
  return (
    <div>
      <DoMoreBadge />
      <SuperChargeLogistic />
      <HeresWhatYourBusiness />
    </div>
  );
};

export default page;
