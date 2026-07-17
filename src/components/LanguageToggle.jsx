'use client';

import { useLang } from './LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
      id="lang-toggle-btn"
    >
      {lang === 'ar' ? 'EN' : 'ع'}
    </button>
  );
}
