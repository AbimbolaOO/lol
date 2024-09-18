"use client";
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

interface BlinkingTextProps {
  children: React.ReactNode;
  classes?: string;
}

const BlinkingText: React.FC<BlinkingTextProps> = ({ children, classes }) => {
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
      className={clsx(
        "z-10 mx-auto py-[185px] text-center text-[40px] font-bold leading-[85px] text-milky-white",
        classes,
      )}
    >
      {children}
    </div>
  );
};

export default BlinkingText;
