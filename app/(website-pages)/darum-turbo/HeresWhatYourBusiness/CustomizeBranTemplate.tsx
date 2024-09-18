import Image from "next/image";
import React from "react";

const CustomizeBranTemplate = () => {
  return (
    <div className="mb-[120px] flex w-full flex-col gap-10 px-20">
      <div className="grid grid-cols-[340px,355px,1fr] gap-[50px]">
        <div className="text-[40px] font-bold leading-[55px] text-primary">
          Customize
          <br /> Brand Templates
        </div>
        <div className="text-xl font-normal leading-[35px]">
          Darum provides the tools you need to boost profitability and
          accelerate business growth.
        </div>
      </div>
      <div className="rounded-[24px] border-[1.6px] border-primary bg-powder-yellow px-[50px] py-[42px]">
        <div className="relative flex h-[485px] items-center justify-between">
          <Image
            src="/static/img/left-lego.png"
            alt="background image"
            // fill
            width={421}
            height={400}
            className="object-contain object-left-bottom"
          />
          <div className="bg-tx-gradient bg-clip-text text-center text-xl font-semibold leading-[35px] text-transparent">
            Build on Darum <br /> to suit your <br />
            business needs.
          </div>
          <Image
            src="/static/img/right-lego.png"
            alt="background image"
            // fill
            width={382}
            height={400}
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeBranTemplate;
