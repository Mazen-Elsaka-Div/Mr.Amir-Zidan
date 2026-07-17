'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HALO_LETTERS_INNER = 'ABCDEFGHIJKLMNOP'.split('');
const HALO_LETTERS_OUTER = 'QRSTUVWXYZABCDEF'.split('');

// Fixed opacity values to avoid hydration mismatch
const INNER_OPACITIES = [0.7, 0.55, 0.8, 0.6, 0.75, 0.5, 0.85, 0.65, 0.7, 0.55, 0.9, 0.6, 0.75, 0.5, 0.8, 0.65];
const OUTER_OPACITIES = [0.45, 0.35, 0.5, 0.4, 0.55, 0.3, 0.6, 0.45, 0.35, 0.5, 0.4, 0.55, 0.3, 0.6, 0.45, 0.35];

export default function TeacherImage() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const positionLetters = (container, letters, radius) => {
      if (!container) return;
      const letterElements = container.querySelectorAll('.halo-letter');
      const angleStep = (2 * Math.PI) / letters.length;

      letterElements.forEach((el, i) => {
        const angle = angleStep * i;
        const x = radius + radius * Math.cos(angle) - 10;
        const y = radius + radius * Math.sin(angle) - 10;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `rotate(${angle * (180 / Math.PI) + 90}deg)`;
      });
    };

    const updatePositions = () => {
      if (innerRef.current) {
        const innerSize = innerRef.current.getBoundingClientRect().width;
        positionLetters(innerRef.current, HALO_LETTERS_INNER, innerSize / 2);
      }
      if (outerRef.current) {
        const outerSize = outerRef.current.getBoundingClientRect().width;
        positionLetters(outerRef.current, HALO_LETTERS_OUTER, outerSize / 2);
      }
    };

    // Small delay to ensure dimensions are calculated after render
    const timer = setTimeout(updatePositions, 100);

    const resizeObserver = new ResizeObserver(updatePositions);
    if (innerRef.current) resizeObserver.observe(innerRef.current);
    if (outerRef.current) resizeObserver.observe(outerRef.current);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, [mounted]);

  return (
    <div className="teacher-image-section" id="teacher-image">
      <div className="teacher-image-wrapper">
        {/* Inner Halo */}
        <div className="letter-halo halo-inner" ref={innerRef}>
          {HALO_LETTERS_INNER.map((letter, i) => (
            <span
              key={`inner-${i}`}
              className="halo-letter"
              style={{ opacity: INNER_OPACITIES[i] }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Outer Halo */}
        <div className="letter-halo halo-outer" ref={outerRef}>
          {HALO_LETTERS_OUTER.map((letter, i) => (
            <span
              key={`outer-${i}`}
              className="halo-letter"
              style={{ opacity: OUTER_OPACITIES[i] }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Teacher Photo */}
        <div className="teacher-image-container">
          <Image
            src="/images/teacher.png"
            alt="مستر أمير زيدان - مدرس اللغة الإنجليزية"
            width={360}
            height={480}
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </div>
    </div>
  );
}
