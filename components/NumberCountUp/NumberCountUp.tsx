"use client";
import './CountUp.css';

import React, { useEffect, useRef } from 'react';

import useIntersectionAnimate from '@/hooks/useIntersectionObserver';

// Corrected import

interface NumberCountUpProps {
  target: number;
  className?: string;
  attachment?: string;
}

const NumberCountUp: React.FC<NumberCountUpProps> = ({
  target,
  className,
  attachment,
}) => {
  const numberRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimate(numberRef, "counter", {
    threshold: 0.1,
  });

  useEffect(() => {
    if (numberRef.current) {
      numberRef.current.style.setProperty("--target", target.toString());
    }
  }, [target]);

  return (
    <div className={className}>
      <span ref={numberRef} data-target={target}></span>
      <span>{attachment}</span>
    </div>
  );
};

export default NumberCountUp;
