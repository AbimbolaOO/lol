import React from 'react';

import SquareDollarIcon from '../Icons/SquareDollarIcon';

interface AdvantageCardProps {
  label: string;
  description: string;
  icon: React.ReactNode;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  label,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {icon}
      <div className="text-[25px] font-bold leading-[45px] text-primary">
        {label}
      </div>
      <div className="text-[20px] font-normal leading-[35px] text-ft-black">
        {description}
      </div>
    </div>
  );
};

export default AdvantageCard;
