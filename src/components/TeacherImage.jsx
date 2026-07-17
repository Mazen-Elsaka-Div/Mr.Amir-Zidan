'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SPIRAL_TEXT = 'AMIR ZEDAN ENGLISH MASTERCLASS '.repeat(3);
const SPIRAL_LETTERS = SPIRAL_TEXT.split('');

export default function TeacherImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="teacher-image-section" id="teacher-image">
      <div className="teacher-image-wrapper">
        
        {/* 3D Spiral Letters */}
        {mounted && (
          <div className="spiral-container">
            {SPIRAL_LETTERS.map((letter, i) => {
              const total = SPIRAL_LETTERS.length;
              const progress = i / total;
              
              // 3 full rotations
              const rotateY = progress * 360 * 3;
              // Y translation: from bottom (-200px) to top (200px)
              const translateY = 200 - (progress * 400);
              // Radius of spiral
              const translateZ = 160;

              return (
                <span
                  key={i}
                  className="spiral-letter"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px)`,
                    opacity: 0.2 + (Math.sin(progress * Math.PI) * 0.8) // Fade out at top/bottom
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        )}

        {/* Teacher Photo */}
        <div className="teacher-image-container">
          <Image
            src="/images/teacher.png"
            alt="مستر أمير زيدان - مدرس اللغة الإنجليزية"
            width={360}
            height={480}
            priority
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          />
        </div>
      </div>
    </div>
  );
}

