import React from 'react';

const RealtimeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect width="48" height="48" rx="8" fill="#FDEDE7" />
      <path
        d="M18 16C19.67 14.75 21.75 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34C18.48 34 14 29.52 14 24C14 22.19 14.48 20.49 15.33 19.02L24 24"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.83 20.96C18.3 21.85 18 22.89 18 24C18 27.31 20.69 30 24 30C27.31 30 30 27.31 30 24C30 20.69 27.31 18 24 18C23.09 18 22.22 18.2 21.45 18.57"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RealtimeIcon;
