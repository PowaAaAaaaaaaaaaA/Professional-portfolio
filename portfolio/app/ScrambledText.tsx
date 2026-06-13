'use client'
import React, { useState, useEffect, useRef } from 'react';

interface ScrambledTextProps {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  className = "",
  duration = 1.2,
  speed = 0.5,
  scrambleChars = "!@#$%^&*()_+{}[]|;:,.<>?",
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const scramble = (text: string, progress: number) => {
    return text
      .split('')
      .map((char, index) => {
        if (char === ' ' || char === '\n') return char;
        if (index / text.length < progress) return char;
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      })
      .join('');
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const progress = Math.min(elapsed / (duration * speed), 1);

    setDisplayText(scramble(children, progress));

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [children, isHovered]);

  return (
    <div 
      className={`font-mono ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </div>
  );
};

export default ScrambledText;
