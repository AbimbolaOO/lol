import React from 'react';

const SquareGridIcon = ({ className }: { className?: string }) => {
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
        d="M22.5 31.9V16.1C22.5 14.6 21.86 14 20.27 14H16.23C14.64 14 14 14.6 14 16.1V31.9C14 33.4 14.64 34 16.23 34H20.27C21.86 34 22.5 33.4 22.5 31.9Z"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 22.9V16.1C34 14.6 33.36 14 31.77 14H27.73C26.14 14 25.5 14.6 25.5 16.1V22.9C25.5 24.4 26.14 25 27.73 25H31.77C33.36 25 34 24.4 34 22.9Z"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 31.9V30.1C34 28.6 33.36 28 31.77 28H27.73C26.14 28 25.5 28.6 25.5 30.1V31.9C25.5 33.4 26.14 34 27.73 34H31.77C33.36 34 34 33.4 34 31.9Z"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SquareGridIcon;
