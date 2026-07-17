'use client';

import { useLang } from './LanguageContext';

export default function TeacherInfo() {
  const { lang } = useLang();

  return (
    <div className="teacher-info" id="teacher-info">
      <h1 className="teacher-info-name">
        {lang === 'ar' ? 'أ/ أمير زيدان' : 'Mr. Amir Zedan'}
      </h1>

      <p className="teacher-info-title">
        {lang === 'ar'
          ? 'مستر أمير زيدان | مدرس اللغة الإنجليزية للثانوية العامة والأزهرية'
          : 'Mr. Amir Zedan | English Teacher for Secondary & Al-Azhar'}
      </p>

      <div className="teacher-info-quote">
        <p>
          {lang === 'ar'
            ? 'لو الإنجليزي مقلقك، عبقري لغة هيلحقك! مستر أمير زيدان هيساعدك بخبرة كبيرة، أفكار مبتكرة، واستراتيجيات مراجعة ذكية توصلك لأعلى الدرجات.'
            : 'If English worries you, a language genius will catch you! Mr. Amir Zedan will help you with great experience, innovative ideas, and smart review strategies to reach the highest grades.'}
        </p>
      </div>

      <button className="cta-button" id="cta-subscribe">
        <svg className="cta-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
        {lang === 'ar' ? 'اشترك معانا' : 'Subscribe Now'}
      </button>
    </div>
  );
}

