import React from 'react';

const CircularTurboIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
    >
      <circle cx="15" cy="15" r="15" fill="#F46F3B" fillOpacity="0.1" />
      <path
        d="M11.2931 15.3474H13.1471V19.6674C13.1471 20.3034 13.9391 20.6034 14.3591 20.1234L18.9011 14.9634C19.2971 14.5134 18.9791 13.8114 18.3791 13.8114H16.5251V9.49138C16.5251 8.85538 15.7331 8.55538 15.3131 9.03538L10.7711 14.1954C10.3811 14.6454 10.6991 15.3474 11.2931 15.3474Z"
        fill="#F46F3B"
      />
    </svg>
  );
};

export default CircularTurboIcon;
