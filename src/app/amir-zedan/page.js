import NotebookBackground from '@/components/NotebookBackground';
import FloatingLetters from '@/components/FloatingLetters';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/components/LanguageContext';

export default function AmirZedanPage() {
  return (
    <LanguageProvider>
      <NotebookBackground />
      <FloatingLetters />
      <Navbar />
      <HeroSection />
    </LanguageProvider>
  );
}
