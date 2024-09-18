import React from 'react';

import TertiaryButton from '@/components/Button/TertiaryButton';
import TurboInlineIcon from '@/components/Icons/TurboInlineIcon';
import TurboLargeIcon from '@/components/Icons/TurboLargeIcon';

const SuperChargeLogistic = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-bg-gradient pb-[60px] pt-[70px] text-center">
      <div className="text-[60px] font-extrabold leading-[100px] text-milky-white">
        <span className="inline-flex w-fit text-white">
          Superch
          <TurboLargeIcon className="mx-0 ml-0 mt-4 self-center" />
          rge
        </span>{" "}
        your Logistics <br /> with Digital Tools for{" "}
        <span className="bg-speed-trail relative text-white">Swift,</span>{" "}
        <br /> <span className="text-white">Informed</span> Decisions.
      </div>
      {/* section 2 */}
      <div className="flex flex-col items-center justify-center gap-9 text-white">
        <div className="max-w-[700px] text-xl font-normal leading-[35px]">
          Darum offers innovative solutions that transform manual processes into
          efficient digital workflows, delivering real-time operational
          visibility and actionable data insights.
        </div>
        <div className="flex gap-3">
          <TertiaryButton
            href="dd"
            label="Start your 2-week Trial"
            className="w-fit !bg-hero-black text-white"
          />
          <TertiaryButton
            href="dd"
            label="Book Demo"
            className="w-fit text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default SuperChargeLogistic;
