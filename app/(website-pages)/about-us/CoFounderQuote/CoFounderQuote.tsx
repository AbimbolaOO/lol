import Image from "next/image";
import React from "react";

import QuoteIcon from "@/components/Icons/QuoteIcon";

const CoFounderQuote = () => {
  return (
    <div className="mx-20 mb-[20px] mt-[100px] flex justify-center">
      <div className="flex w-3/6 flex-col gap-[50px] self-center">
        <QuoteIcon />
        <blockquote className="flex flex-col gap-[50px] text-xl font-medium leading-[35px] text-hero-black">
          <div>
            At Darum, our mission is to revolutionize logistics in Nigeria by
            bridging the gap between business and fleet operations.
          </div>
          <div>
            We're committed to automating manual processes, leveraging
            data-driven solutions, and empowering our customers to thrive
            globally with our innovative software solutions poised to propel
            Nigeria's logistics industry onto the global stage.
          </div>
          <cite className="not-italic">
            <span className="font-medium text-primary">Abiola Yekini</span>{" "}
            &mdash; Co-founder, Darum NG
          </cite>
        </blockquote>
      </div>
      <div className="-mr-8 -mt-8 ml-auto w-1/6 flex-auto">
        <Image
          src={`/static/img/serious-boss.png`}
          //   layout="responsive"
          width={569}
          height={569}
          priority
          alt={`hero image a`}
          className="ml-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CoFounderQuote;
