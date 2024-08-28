import React from 'react';

import SecondaryButton from '@/components/Button/SecondaryButton';

const JoinOurDarumPartner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[19px] bg-ft-black pb-[72px] pt-[105px] text-white">
      {/* Section Label */}
      <div className="max-w-[1000px] px-28 text-center text-6xl font-bold leading-[100px]">
        Join our Darum{" "}
        <span className="bg-text-zig-image relative font-extrabold text-primary">
          Partner{" "}
        </span>
        Community
      </div>

      <div className="relative pb-3 text-[20px] font-normal leading-[35px]">
        Be the first to know when new products ship to Darum
      </div>
      <SecondaryButton
        label="Join Our Beta Program"
        href="https://our-beta"
        bgColor="bg-button-dark-brown"
      />
    </div>
  );
};

export default JoinOurDarumPartner;
