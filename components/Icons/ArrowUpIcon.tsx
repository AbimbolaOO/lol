import React from 'react';

const ArrowUpIcon = ({ className }: { className?: string }) => {
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
        d="M5.88086 15.4308L11.7418 9.56982L17.6027 15.4308"
        fill="#232222"
      />
      <path
        d="M5.88086 15.4308L11.7418 9.56982L17.6027 15.4308"
        stroke="#232222"
        strokeWidth="1.46523"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
