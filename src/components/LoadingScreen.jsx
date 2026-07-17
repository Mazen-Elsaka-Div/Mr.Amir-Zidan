'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    };

    // If already loaded (fast navigation), hide quickly
    if (document.readyState === 'complete') {
      const t = setTimeout(hide, 600);
      return () => clearTimeout(t);
    }

    const onLoad = () => {
      setTimeout(hide, 400);
    };
    window.addEventListener('load', onLoad);
    // Fallback: hide after 3s no matter what
    const fallback = setTimeout(hide, 3000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  if (!visible) return null;

  const letters = ['A', 'B', 'C'];

  return (
    <div
      id="loading-screen"
      className="loading-screen-container"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="loading-letters-wrapper" dir="ltr">
        {letters.map((l, i) => (
          <span key={i} className="loading-letter" style={{ animationDelay: `${i * 0.16}s` }}>
            {l}
          </span>
        ))}
      </div>
      <p className="loading-text">جاري التحميل...</p>
    </div>
  );
}
