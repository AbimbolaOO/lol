import React from 'react';

interface HeaderDropDownCardProps {
  label: string;
  description: string;
  icon: React.ReactNode;
}
const HeaderDropDownCard: React.FC<HeaderDropDownCardProps> = ({
  label,
  description,
  icon,
}) => {
  return (
    <div className="grid grid-cols-[auto,220px] gap-2">
      {icon}
      <div className="flex h-fit items-center gap-[10px]">
        <span className="text-primary w-fit pl-3 text-[16px] font-bold">
          {label}
        </span>
        <span className="bg-bg-badge text-badge rounded-[8px] px-3 py-1 text-[12px] font-medium leading-5">
          New
        </span>
      </div>
      <div className="col-start-2 pl-3 text-[14px] leading-[30px]">
        {description}
      </div>
    </div>
  );
};

export default HeaderDropDownCard;
