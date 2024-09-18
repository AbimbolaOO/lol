import React from 'react';

import SingleMorphingCard from '@/components/Cards/SingleMorphingCard';

const GetStartedWithDarumTurbo = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-[100px] bg-bg-gradient px-20 py-[90px]">
      {/* Left */}
      <div className="flex flex-col gap-10 text-white">
        <div className="w-full border-b-[1px] border-b-white py-[30px] text-[36px] font-bold leading-[50px]">
          Get Started with Darum Turbo
        </div>
        {/* <div> */}
        <ol className="ml-3 flex list-decimal flex-col gap-10 pl-3 text-[24px] text-lg leading-[35px]">
          <li>
            <div className="ml-[26px]">Sign up to get a Turbo Account</div>
          </li>
          <li>
            <div className="ml-[26px]">Log in to your Dashboard</div>
          </li>
          <li>
            <div className="ml-[26px]">
              Fill out our short KYC form and await account verification
            </div>
          </li>
          <li>
            <div className="ml-[26px]">
              Register vehicles and drivers, assign drivers, and streamline your
              order management channels.
            </div>
          </li>
          <li>
            <div className="ml-[26px]">Track and Monitor Shipment</div>
          </li>
        </ol>
        {/* </div> */}
      </div>
      {/* Right */}
      <SingleMorphingCard />
    </div>
  );
};

export default GetStartedWithDarumTurbo;
