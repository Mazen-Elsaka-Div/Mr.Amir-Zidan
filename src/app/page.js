'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NotebookBackground from '@/components/NotebookBackground';
import { LanguageProvider } from '@/components/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';

export default function LoadingLandingPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation slightly before the redirect
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1200);

    // Redirect to the platform
    const redirectTimer = setTimeout(() => {
      router.push('/amir-zedan');
    }, 1500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <LanguageProvider>
      <main 
        className="loading-screen-container" 
        style={{ opacity: isExiting ? 0 : 1 }}
      >
        <NotebookBackground />
        
        {/* We can use ThemeToggle so it applies user's saved theme */}
        <div style={{ display: 'none' }}>
          <ThemeToggle />
        </div>
        
        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <div className="loading-letters-wrapper" dir="ltr">
            <span className="loading-letter">A</span>
            <span className="loading-letter">B</span>
            <span className="loading-letter">C</span>
          </div>
          
          <p className="loading-text">
            جاري التحميل...
          </p>
        </div>
      </main>
    </LanguageProvider>
  );
}
