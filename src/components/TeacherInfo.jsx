'use client';

import { useLang } from './LanguageContext';

export default function TeacherInfo() {
  const { lang } = useLang();

  return (
    <div className="teacher-info" id="teacher-info">
      
      <div className="glass-panel">
        {/* Badge / Pill */}
        <div className="hero-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-badge-icon">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            <path d="M5 3v4"/>
            <path d="M19 17v4"/>
            <path d="M3 5h4"/>
            <path d="M17 19h4"/>
          </svg>
          <span>{lang === 'ar' ? 'منصة اللغة الإنجليزية الأولى للثانوية العامة' : 'The #1 English Platform for High School'}</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading">
          {lang === 'ar' ? (
            <>
              الإنجليزي مش عقدة، ي<br/>
              ولاد<br/>
              هي بس محتاجة <span className="highlight-green">مُعَلِّم</span> صح
            </>
          ) : (
            <>
              English isn't hard, guys<br/>
              You just need the <span className="highlight-green">Right Teacher</span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className="hero-description">
          {lang === 'ar'
            ? 'مع الأستاذ أمير زيدان هتفهم كل قاعدة من جذورها، وتتدرب لحد ما الإنجليزي يبقى أسهل مادة. اختار مرحلتك وابدأ رحلتك للتفوق.'
            : 'With Mr. Amir Zedan, you will understand every rule from its roots, and practice until English becomes the easiest subject. Choose your stage and start your journey to excellence.'}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#stages" className="glass-button">
            {lang === 'ar' ? 'اختار مرحلتك الدراسية' : 'Choose your stage'}
            {lang === 'ar' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-icon">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-icon">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            )}
          </a>
        </div>
      </div>
      
    </div>
  );
}

