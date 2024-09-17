import Link from 'next/link';
import React from 'react';

interface HeaderDropDownCardProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}
const HeaderDropDownCard: React.FC<HeaderDropDownCardProps> = ({
  label,
  description,
  icon,
  link,
}) => {
  return (
    <div className="grid grid-cols-[auto,220px] gap-2">
      {icon}
      <Link
        href={link}
        className="flex h-fit cursor-pointer items-center gap-[10px]"
      >
        <span className="w-fit pl-3 text-[16px] font-bold text-primary">
          {label}
        </span>
        <span className="rounded-[8px] bg-bg-badge px-3 py-1 text-[12px] font-medium leading-5 text-badge">
          New
        </span>
      </Link>
      <div className="col-start-2 pl-3 text-[14px] leading-[30px]">
        {description}
      </div>
    </div>
  );
};

export default HeaderDropDownCard;
