import Image from 'next/image';
import React from 'react';

const KeepCustomerInformed = () => {
  return (
    <div className="flex w-full gap-[113px] pb-5 pl-20">
      <div className="flex w-full flex-col gap-10">
        <div className="grid grid-cols-[340px,355px,1fr] gap-[50px]">
          <div className="text-[40px] font-bold leading-[55px] text-primary">
            Keep Customers Informed
          </div>
          <div className="text-xl font-normal leading-[35px]">
            Darum provides the tools you need to boost profitability and
            accelerate business growth.
          </div>
        </div>
        <div className="relative flex h-fit w-full flex-col gap-[38px] pl-10">
          <Image
            src="/static/img/package-arrival.png"
            alt="background image"
            // fill
            height={118}
            width={450}
            className="self-start object-contain object-left-top"
          />
          <Image
            src="/static/img/slight-delay.png"
            alt="background image"
            // fill
            height={118}
            width={450}
            className="self-end object-contain object-right-bottom"
          />
        </div>
      </div>
      {/* Right side */}
      <div className="relative h-fit">
        <Image
          src="/static/img/sm-map.png"
          alt="background image"
          // fill
          width={421}
          height={400}
          className="object-contain object-left-bottom"
        />
      </div>
    </div>
  );
};

export default KeepCustomerInformed;
