'use client';

import VerticalName from './VerticalName';
import TeacherImage from './TeacherImage';
import TeacherInfo from './TeacherInfo';
import TypingText from './TypingText';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid">
        {/* Right column in visual (RTL) = first in DOM = Teacher Info */}
        <TeacherInfo />

        {/* Center column = Teacher Image */}
        <TeacherImage />

        {/* Left column in visual (RTL) = last in DOM = Vertical Name (Marquee) */}
        <VerticalName />
      </div>

      {/* Typing animation below the 3 columns */}
      <TypingText />
    </section>
  );
}
