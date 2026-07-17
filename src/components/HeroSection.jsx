'use client';

import VerticalName from './VerticalName';
import TeacherImage from './TeacherImage';
import TeacherInfo from './TeacherInfo';
import { useLang } from './LanguageContext';

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="hero-section" id="hero" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="hero-grid">
        {/* Right column in visual (RTL) / Left in LTR = Teacher Info */}
        <TeacherInfo />

        {/* Center column = Teacher Image */}
        <TeacherImage />

        {/* Left column in visual (RTL) / Right in LTR = Vertical Name (Marquee) */}
        <VerticalName />
      </div>
    </section>
  );
}


