import React from 'react';

const ListIcon = ({ className }: { className?: string }) => {
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
        d="M34 18V20.42C34 22 33 23 31.42 23H28V16.01C28 14.9 28.91 14 30.02 14C31.11 14.01 32.11 14.45 32.83 15.17C33.55 15.9 34 16.9 34 18Z"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19V33C14 33.83 14.94 34.3 15.6 33.8L17.31 32.52C17.71 32.22 18.27 32.26 18.63 32.62L20.29 34.29C20.68 34.68 21.32 34.68 21.71 34.29L23.39 32.61C23.74 32.26 24.3 32.22 24.69 32.52L26.4 33.8C27.06 34.29 28 33.82 28 33V16C28 14.9 28.9 14 30 14H19H18C15 14 14 15.79 14 18V19Z"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 25.01H24"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21.01H24"
        stroke="#F46F3B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9961 25H18.0051"
        stroke="#F46F3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9961 21H18.0051"
        stroke="#F46F3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListIcon;
