'use client';

import { useState, useEffect, useRef } from 'react';

const ARABIC_TEXT = 'شرح مبسط، متابعة مستمرة، وتدريب احترافي على نظام الامتحانات لتحقيق أفضل النتائج.';
const TYPING_SPEED = 60;
const PAUSE_AFTER_TEXT = 2500;

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    let timeoutId;

    const typeNext = () => {
      if (indexRef.current < ARABIC_TEXT.length) {
        indexRef.current++;
        setDisplayedText(ARABIC_TEXT.slice(0, indexRef.current));
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

    timeoutId = setTimeout(typeNext, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="typing-section" id="typing-section">
      <span className="typing-text" style={{ direction: 'rtl', display: 'inline-block' }}>
        {displayedText}
        <span className="typing-cursor" style={{ opacity: isTyping ? 1 : undefined }} />
      </span>
    </div>
  );
}

