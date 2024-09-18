import React from 'react';

import TableIcon from '@/components/Icons/TableIcon';

const VehicleUpdateReminders = () => {
  return (
    <div className="mb-20 flex flex-col gap-10">
      <div className="grid grid-cols-[299px,355px,1fr] gap-[50px]">
        <div className="text-[40px] font-bold leading-[55px] text-primary">
          Vehicle Update Reminders
        </div>
        <div className="text-xl font-normal leading-[35px]">
          Use real-time insights to proactively maintain your assets, minimizing
          downtime and maximizing efficiency.
        </div>
      </div>
      <TableIcon className="w-full" />
    </div>
  );
};

export default VehicleUpdateReminders;
