import Image from 'next/image';
import React from 'react';

import { Accordion, AccordionCell } from '@/components/Accordion/Accordion';
import PrimaryButton from '@/components/Button/PrimaryButton';

import { faqData } from './FAQData';

const GotQuestions = () => {
  return (
    <div className="grid h-fit w-full *:col-start-1 *:row-start-1">
      {/* Background image */}
      <div className="w-ful relative h-full overflow-hidden">
        <Image
          src="/static/img/bike-left.png"
          fill
          priority
          alt="background image"
          className="object-contain object-top"
        />
      </div>

      {/* Foreground content */}
      <div className="z-10 flex flex-col gap-[110px] pb-[150px] pt-[111px]">
        <div className="grid grid-cols-2 px-20 pt-[137px]">
          {/* Section Label */}
          <div className="text-left text-6xl font-bold leading-[100px]">
            Got Questions? We've Got{" "}
            <span className="bg-text-image relative font-extrabold text-primary">
              Answers!
            </span>
          </div>
          <div className="-mt-9">
            <Accordion>
              {faqData.map((data, index) => (
                <AccordionCell key={index} title={data.title}>
                  {data.content}
                </AccordionCell>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="max-w-[700px] text-center text-[20px] text-ft-black">
            Don’t see any of your questions answered? You can contact us and get
            a response in 2-3 working days.
          </div>
          <PrimaryButton
            label="Contact Us"
            href="http://lol"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default GotQuestions;
