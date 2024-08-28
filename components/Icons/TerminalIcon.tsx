import React from 'react';

const TerminalIcon = () => {
  return (
    <svg width="148" height="40" viewBox="0 0 148 40" fill="none">
      <mask
        id="mask0_361_5716"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="148"
        height="40"
      >
        <rect
          x="0.789062"
          width="146.667"
          height="40"
          fill="url(#pattern0_361_5716)"
        />
      </mask>
      <g mask="url(#mask0_361_5716)">
        <rect x="0.789062" width="146.67" height="40" fill="#232222" />
      </g>
      <defs>
        <pattern
          id="pattern0_361_5716"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_361_5716"
            transform="matrix(0.00534759 0 0 0.0196078 -0.00267378 0)"
          />
        </pattern>
        <image
          id="image0_361_5716"
          width="188"
          height="51"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TerminalIcon;
