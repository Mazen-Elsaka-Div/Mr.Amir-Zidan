'use client';

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
      </div>
    </section>
  );
}


