import React from 'react';

import DoMoreBadge from '@/components/Badge/DoMoreBadge';

import GetStartedWithDarumTurbo from './GetStartedWithDarumTurbo/GetStartedWithDarumTurbo';
import HeresWhatYourBusiness from './HeresWhatYourBusiness/HeresWhatYourBusiness';
import ReadyToDigitize from './ReadyToDigitize/ReadyToDigitize';
import SuperChargeLogistic from './SuperChargeLogistic/SuperChargeLogistic';
import TrackDriver from './TrackDriver/TrackDriver';
import TurboCharged from './TurboCharged/TurboCharged';
import WePowerManyIndustries from './WePowerManyIndustries/WePowerManyIndustries';

const page = () => {
  return (
    <div>
      <DoMoreBadge />
      <SuperChargeLogistic />
      <HeresWhatYourBusiness />
      <TurboCharged />
      <WePowerManyIndustries />
      <GetStartedWithDarumTurbo />
      <TrackDriver />
      <ReadyToDigitize />
    </div>
  );
};

export default page;
