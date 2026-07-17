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

        {/* 3D Spiral Letters — still rotating around everything */}
        {mounted && (
          <div className="spiral-container">
            {SPIRAL_LETTERS.map((letter, i) => {
              const total = SPIRAL_LETTERS.length;
              const progress = i / total;
              const rotateY = progress * 360 * 3;
              const translateY = 350 - (progress * 700);
              const translateZ = 320;

              return (
                <span
                  key={i}
                  className="spiral-letter"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px)`,
                    opacity: 0.2 + (Math.sin(progress * Math.PI) * 0.8)
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        )}

        {/* Red circle container */}
        <div className="teacher-image-container">

          {/* Tower — behind teacher, floating gently */}
          <div className="tower-layer">
            <Image
              src="/images/عمود.png"
              alt="Big Ben Tower"
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            />
          </div>

          {/* Teacher photo — in front of tower */}
          <div className="teacher-layer">
            <Image
              src="/images/teacher.png"
              alt="مستر أمير زيدان - مدرس اللغة الإنجليزية"
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
