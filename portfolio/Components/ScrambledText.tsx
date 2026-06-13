'use client'
import React, { useState, useEffect, useRef } from 'react';

interface ScrambledTextProps {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  autoStart?: boolean;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  className = "",
  duration = 1.5,
  speed = 0.6,
  scrambleChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  autoStart = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const originalText = children;

  const scramble = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const progress = (timestamp - startTimeRef.current) / (duration * 1000);

    if (progress < 1) {
      const scrambled = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          const charProgress = index / originalText.length;
          if (progress > charProgress + (1 - charProgress) * speed) {
            return char;
          }
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join('');

      setDisplayText(scrambled);
      frameRef.current = requestAnimationFrame(scramble);
    } else {
      setDisplayText(originalText);
    }
  };

  const startAnimation = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startTimeRef.current = null;
    frameRef.current = requestAnimationFrame(scramble);
  };

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [children]);

  return (
    <div 
      className={`font-mono transition-all duration-300 ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        startAnimation();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText || children}
    </div>
  );
};

export default ScrambledText;
