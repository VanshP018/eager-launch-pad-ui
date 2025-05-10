
import React from 'react';

interface BubbleProps {
  size: number;
  color: string;
  delay: number;
  duration: number;
  startPosition: number;
}

const Bubble: React.FC<BubbleProps> = ({ size, color, delay, duration, startPosition }) => {
  return (
    <div
      className="absolute rounded-full opacity-80"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        animation: `orbit ${duration}s infinite linear`,
        animationDelay: `${delay}s`,
        transform: `rotate(${startPosition}deg) translateX(60px)`,
      }}
    ></div>
  );
};

const BubbleRing: React.FC = () => {
  // Define bubble colors
  const colors = [
    '#00E5E5', // Bburst teal
    '#9b87f5', // Purple
    '#D6BCFA', // Light purple
    '#FFDEE2', // Soft pink
    '#D3E4FD', // Soft blue
    '#F97316', // Orange
    '#33C3F0', // Sky blue
  ];

  // Generate bubbles
  const bubbles = Array.from({ length: 15 }, (_, i) => {
    const size = Math.random() * 6 + 4; // Random size between 4-10px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 2;
    const duration = Math.random() * 5 + 10; // 10-15s duration
    const startPosition = (i / 15) * 360; // Evenly distribute bubbles in a circle

    return (
      <Bubble
        key={i}
        size={size}
        color={color}
        delay={delay}
        duration={duration}
        startPosition={startPosition}
      />
    );
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-40 h-40">
        {bubbles}
      </div>
    </div>
  );
};

export default BubbleRing;
