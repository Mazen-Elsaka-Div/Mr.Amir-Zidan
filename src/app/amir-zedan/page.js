import NotebookBackground from '@/components/NotebookBackground';
import FloatingLetters from '@/components/FloatingLetters';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import HeroSection from '@/components/HeroSection';
import { LanguageProvider } from '@/components/LanguageContext';

export default function AmirZedanPage() {
  return (
    <LanguageProvider>
      <NotebookBackground />
      <FloatingLetters />
      <ThemeToggle />
      <LanguageToggle />
      <HeroSection />
    </LanguageProvider>
  );
}

