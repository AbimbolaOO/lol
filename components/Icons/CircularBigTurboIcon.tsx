import React from 'react';

const CircularBigTurboIcon = ({ className }: { className?: string }) => {
  return (
    <svg width="61" height="61" viewBox="0 0 61 61" fill="none">
      <circle
        cx="30.554"
        cy="30.2767"
        r="30"
        fill="#FFF8ED"
        className={className}
      />
      <path
        d="M27.8467 37.2107L29.5118 33.8976L37.2317 37.7773C38.3682 38.3485 39.6156 37.2026 39.1351 36.021L33.9932 23.2702C33.5446 22.1584 32.0046 22.0962 31.4657 23.1684L29.8007 26.4815L22.0807 22.6018C20.9442 22.0306 19.6968 23.1765 20.1774 24.3581L25.3193 37.1089C25.7732 38.21 27.3132 38.2722 27.8467 37.2107Z"
        fill="#F46F3B"
      />
    </svg>
  );
};

export default CircularBigTurboIcon;
