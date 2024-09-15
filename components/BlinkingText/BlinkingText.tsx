"use client";
import React, { useEffect, useRef } from 'react';

interface BlinkingTextProps {
  children: React.ReactNode;
}

const BlinkingText: React.FC<BlinkingTextProps> = ({ children }) => {
  const textContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textContainer.current) {
      const allChildren = textContainer.current.children;

      const spanElements = Array.from(allChildren).filter(
        (child): child is HTMLSpanElement => child.tagName === "SPAN",
      );

      let currentSpan = 0;

      const interval = setInterval(() => {
        spanElements.forEach((span) => span.classList.remove("animate-blink"));

        spanElements[currentSpan].classList.add("animate-blink");

        currentSpan = (currentSpan + 1) % spanElements.length;
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      ref={textContainer}
      className="z-10 mx-auto py-[185px] text-center text-[40px] font-bold leading-[85px] text-milky-white"
    >
      {children}
    </div>
  );
};

export default BlinkingText;
