'use client';

import { useState, useEffect, useRef } from 'react';

const ARABIC_TEXT = 'شرح مبسط، متابعة مستمرة، وتدريب احترافي على نظام الامتحانات لتحقيق أفضل النتائج.';
const ENGLISH_TEXT = 'Simplified explanation, continuous follow-up, and professional training for best results.';
const TYPING_SPEED = 60; // ms per character
const PAUSE_AFTER_TEXT = 2000; // ms

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isEnglish, setIsEnglish] = useState(false);
  const indexRef = useRef(0);
  const textRef = useRef(null);
  const underlineRef = useRef(null);
  const isEnglishRef = useRef(false);

  useEffect(() => {
    let timeoutId;

    const typeNext = () => {
      const currentFullText = isEnglishRef.current ? ENGLISH_TEXT : ARABIC_TEXT;
      
      if (indexRef.current < currentFullText.length) {
        indexRef.current++;
        setDisplayedText(currentFullText.slice(0, indexRef.current));
        setIsTyping(true);
        timeoutId = setTimeout(typeNext, TYPING_SPEED);
      } else {
        setIsTyping(false);
        // Pause then restart with the other language
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText('');
          isEnglishRef.current = !isEnglishRef.current;
          setIsEnglish(isEnglishRef.current);
          setIsTyping(true);
          timeoutId = setTimeout(typeNext, TYPING_SPEED);
        }, PAUSE_AFTER_TEXT);
      }
    };

    // Start after a small delay
    timeoutId = setTimeout(typeNext, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  // Calculate underline width
  useEffect(() => {
    if (textRef.current && underlineRef.current) {
      const textWidth = textRef.current.offsetWidth;
      underlineRef.current.style.width = `${textWidth}px`;
    }
  }, [displayedText, isEnglish]);

  return (
    <div className="typing-section" id="typing-section">
      <span 
        className="typing-text" 
        ref={textRef} 
        style={{ direction: isEnglish ? 'ltr' : 'rtl', display: 'inline-block' }}
      >
        {displayedText}
        <span className="typing-cursor" style={{ opacity: isTyping ? 1 : undefined }} />
        <span className="typing-text-underline" ref={underlineRef} style={{ [isEnglish ? 'left' : 'right']: 0 }} />
      </span>
    </div>
  );
}
