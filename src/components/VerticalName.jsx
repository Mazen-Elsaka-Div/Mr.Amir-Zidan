'use client';

import { useLang } from './LanguageContext';

export default function VerticalName() {
  const { lang } = useLang();

  const name1 = lang === 'ar' ? 'أمير' : 'AMIR';
  const name2 = lang === 'ar' ? 'زيدان' : 'ZEDAN';

  return (
    <div className="vertical-name" id="vertical-name" dir="ltr">
      <div className="marquee-column">
        <div className="marquee-content-up">
          <span className="name-word">{name1}</span>
          <span className="name-word" aria-hidden="true">{name1}</span>
        </div>
      </div>
      <div className="marquee-column">
        <div className="marquee-content-down">
          <span className="name-word">{name2}</span>
          <span className="name-word" aria-hidden="true">{name2}</span>
        </div>
      </div>
    </div>
  );
}


