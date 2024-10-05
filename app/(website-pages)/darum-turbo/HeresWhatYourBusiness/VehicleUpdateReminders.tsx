import clsx from "clsx";
import React from "react";

import BikeIcon from "@/components/Icons/BikeIcon";

import VehicleUpdateRemindersData from "./VehicleUpdateRemindersData";

const VehicleUpdateReminders = () => {
  return (
    <div className="mb-20 flex w-full flex-col gap-10 px-20">
      <div className="grid grid-cols-[299px,355px,1fr] gap-[50px]">
        <div className="text-[40px] font-bold leading-[55px] text-primary">
          Vehicle Update Reminders
        </div>
        <div className="text-xl font-normal leading-[35px]">
          Stay on top of vehicle paperwork with timely reminders and
          notifications for upcoming renewals.
        </div>
      </div>
      <div className="bg-grey-foreground grid grid-cols-[repeat(auto-fill,_286px)] gap-[21px] rounded-[24px] p-8">
        {VehicleUpdateRemindersData.map((data, index) => (
          <div
            className="flex w-fit gap-2 rounded-[8px] bg-white p-4 pr-11"
            key={index}
          >
            {data.icon}
            <div className="flex flex-col text-ft-black">
              <div
                className={clsx(
                  "w-fit rounded-[8px] p-1 px-2 text-[8px] font-medium leading-[10px]",
                  data.status.textBgColor,
                  data.status.textColor,
                )}
              >
                {data.status.text}
              </div>
              <div className="text-[14px] font-medium leading-[24px]">
                Paper Renewal | <span className="text-secondary">FKJ2389</span>
              </div>
              <div
                className={clsx(
                  "text-[10px] font-semibold",
                  data.footer.textColor,
                )}
              >
                <span className="text-grey font-normal">Due</span> 28/08/24
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleUpdateReminders;
