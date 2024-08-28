import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ChevronDownIcon from '../Icons/ChevronDownIcon';
import CircularTruck from '../Icons/CircularTruck';
import CircularTurboIcon from '../Icons/CircularTurboIcon';
import HeaderDropDownCard from './HeaderDropDownCard';

interface HeaderDropDownProps {
  label: string;
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({ label }) => {
  return (
    <div className="group relative flex h-fit items-center text-[12px]">
      {/* Dropdown label */}
      <div className="flex h-fit cursor-pointer items-center gap-[4px] px-[16px] py-[12px]">
        {label} <ChevronDownIcon />
      </div>

      {/* Dropdown content */}
      <div className="invisible absolute -left-[300%] top-[100%] flex flex-col group-hover:visible">
        {/* Empty space div */}
        <div className="h-10"></div>
        {/* Main dropdown content */}
        <div className="shadow-drop-down flex cursor-default overflow-hidden rounded-[25px] bg-white">
          {/* Header dropdown card area */}
          <div className="flex gap-10 px-10 py-[50px] pr-9">
            <HeaderDropDownCard
              label="Darum Turbo"
              description="Shift your logistics into high gear, Turbo charge your logistics operations with the power of technology"
              icon={<CircularTurboIcon />}
            />

            {/* <div className="bg-tertiary h-full w-1"></div> */}

            <HeaderDropDownCard
              label="Darum Captain"
              description="Keep drivers accountable with fleet visibility tools that ensure faster deliveries through adequate route planning"
              icon={<CircularTruck />}
            />
          </div>

          {/* Part with image */}
          <div className="bg-tertiary flex w-[350px] flex-col gap-[12px] p-[20px]">
            <Image
              src="/static/img/download-captain-log.png"
              width="310"
              height="150"
              alt="captain darum"
              priority
            />
            <div className="flex flex-col *:leading-8">
              <p className="text-tx-black font-medium">
                Download the Darum Captain App
              </p>
              <Link
                href="android://download-darum.ng"
                className="text-primary font-bold leading-[30px]"
              >
                Get for Android
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
