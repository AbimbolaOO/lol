import React from 'react';

const ArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.88086 9.56982L11.7418 15.4308L17.6027 9.56982"
        fill="#232222"
      />
      <path
        d="M5.88086 9.56982L11.7418 15.4308L17.6027 9.56982"
        stroke="#232222"
        strokeWidth="1.46523"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
