'use client';

import { useState, useEffect, useRef } from 'react';
import { useLang } from './LanguageContext';

const TEXTS = {
  ar: 'شرح مبسط، متابعة مستمرة، وتدريب احترافي على نظام الامتحانات لتحقيق أفضل النتائج.',
  en: 'Simplified explanation, continuous follow-up, and professional exam training for the best results.',
};
const TYPING_SPEED = 60;
const PAUSE_AFTER_TEXT = 2500;

export default function TypingText() {
  const { lang } = useLang();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const langRef = useRef(lang);

  // Reset when language changes
  useEffect(() => {
    langRef.current = lang;
    indexRef.current = 0;
    setDisplayedText('');
    setIsTyping(true);
  }, [lang]);

  useEffect(() => {
    let timeoutId;

    const typeNext = () => {
      const fullText = TEXTS[langRef.current];
      if (indexRef.current < fullText.length) {
        indexRef.current++;
        setDisplayedText(fullText.slice(0, indexRef.current));
        setIsTyping(true);
        timeoutId = setTimeout(typeNext, TYPING_SPEED);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText('');
          setIsTyping(true);
          timeoutId = setTimeout(typeNext, TYPING_SPEED);
        }, PAUSE_AFTER_TEXT);
      }
    };

    timeoutId = setTimeout(typeNext, 400);
    return () => clearTimeout(timeoutId);
  }, [lang]);

  return (
    <div className="typing-section" id="typing-section">
      <span className="typing-text" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', display: 'inline-block' }}>
        {displayedText}
        <span className="typing-cursor" style={{ opacity: isTyping ? 1 : undefined }} />
      </span>
    </div>
  );
}
