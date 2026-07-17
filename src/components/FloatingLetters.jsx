'use client';

import { useEffect, useRef } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const LETTER_COUNT = 30;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingLetters() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = [];

    for (let i = 0; i < LETTER_COUNT; i++) {
      const span = document.createElement('span');
      span.className = 'floating-letter';
      span.textContent = LETTERS[Math.floor(Math.random() * LETTERS.length)];

      const size = randomBetween(20, 72);
      const left = randomBetween(0, 100);
      const duration = randomBetween(15, 35);
      const delay = randomBetween(0, 20);
      const startY = randomBetween(100, 120);

      span.style.cssText = `
        font-size: ${size}px;
        left: ${left}%;
        top: ${startY}%;
        animation: floatUp ${duration}s linear ${delay}s infinite;
        opacity: 0;
      `;

      container.appendChild(span);
      letters.push(span);
    }

    return () => {
      letters.forEach(l => l.remove());
    };
  }, []);

  return (
    <div className="floating-letters-container" ref={containerRef} aria-hidden="true" />
  );
}
