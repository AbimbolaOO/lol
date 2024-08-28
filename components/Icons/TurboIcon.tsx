import React from 'react';

const TurboIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={className}
    >
      <path
        d="M14.9257 9.68332H12.3507V3.68332C12.3507 2.28332 11.5924 1.99999 10.6674 3.04999L10.0007 3.80832L4.35908 10.225C3.58408 11.1 3.90908 11.8167 5.07574 11.8167H7.65074V17.8167C7.65074 19.2167 8.40907 19.5 9.33407 18.45L10.0007 17.6917L15.6424 11.275C16.4174 10.4 16.0924 9.68332 14.9257 9.68332Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TurboIcon;
