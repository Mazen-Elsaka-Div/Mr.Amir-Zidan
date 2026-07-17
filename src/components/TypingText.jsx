'use client';

import { useState, useEffect, useRef } from 'react';

const FULL_TEXT = 'شرح مبسط، متابعة مستمرة، وتدريب احترافي على نظام الامتحانات لتحقيق أفضل النتائج.';
const TYPING_SPEED = 60; // ms per character
const PAUSE_BEFORE_RESTART = 3000; // ms

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const typeNext = () => {
      if (indexRef.current < FULL_TEXT.length) {
        indexRef.current++;
        setDisplayedText(FULL_TEXT.slice(0, indexRef.current));
        setIsTyping(true);
        timeoutId = setTimeout(typeNext, TYPING_SPEED);
      } else {
        setIsTyping(false);
        // Pause then restart
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText('');
          setIsTyping(true);
          timeoutId = setTimeout(typeNext, TYPING_SPEED);
        }, PAUSE_BEFORE_RESTART);
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
  }, [displayedText]);

  return (
    <div className="typing-section" id="typing-section">
      <span className="typing-text" ref={textRef}>
        {displayedText}
        <span className="typing-cursor" style={{ opacity: isTyping ? 1 : undefined }} />
        <span className="typing-text-underline" ref={underlineRef} />
      </span>
    </div>
  );
}
