import React from 'react';

import PrimaryButton from '@/components/Button/PrimaryButton';
import TertiaryButton from '@/components/Button/TertiaryButton';
import TurboIcon from '@/components/Icons/TurboIcon';

const LandingPageHero = () => {
  return (
    <div className="grid h-fit *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="h-full w-full"></div>

      {/* Foreground content */}
      <div className="z-10 flex flex-col items-center justify-center gap-[20px] py-[90px] text-center text-hero-black">
        <div className="max-w-[900px] px-28 text-6xl font-bold leading-[100px]">
          <span className="bg-text-image relative font-extrabold text-primary">
            Next-Gen
          </span>{" "}
          Logistics Software for a{" "}
          <span className="font-extrabold text-primary">Smarter</span> Supply
          Chain
        </div>
        <div className="max-w-[640px] text-xl font-normal leading-[35px]">
          Darum is powering logistics operations with smart systems, enabling
          businesses to achieve more with less.
        </div>
        <div className="mb-1 mt-3 flex gap-3">
          <TertiaryButton href="/book-demo" label="Book Demo" />
          <PrimaryButton
            href="/try-turbo"
            label="Try Turbo"
            icon={<TurboIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
