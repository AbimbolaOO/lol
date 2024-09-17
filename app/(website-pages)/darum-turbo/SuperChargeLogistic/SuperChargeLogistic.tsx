import React from 'react';

import TertiaryButton from '@/components/Button/TertiaryButton';

const SuperChargeLogistic = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-bg-gradient pb-[55px] pt-[70px] text-center">
      <div className="text-[60px] font-extrabold leading-[100px] text-milky-white">
        <span className="text-white">Supercharge</span> your Logistics <br />{" "}
        with Digital Tools for <span className="text-white">Swift,</span> <br />{" "}
        <span className="text-white">Informed</span> Decisions.
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
