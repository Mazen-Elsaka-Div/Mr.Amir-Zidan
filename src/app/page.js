import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-kufi">
        مرحباً بك في المنصة التعليمية
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl font-kufi leading-relaxed">
        اكتشف منصات المعلمين التعليمية التفاعلية. يمكنك زيارة المنصة الخاصة بالأستاذ أمير زيدان من خلال الرابط أدناه.
      </p>
      <Link 
        href="/amir-zedan" 
        className="px-8 py-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 font-kufi font-bold text-lg flex items-center gap-3"
      >
        <span>زيارة صفحة أ. أمير زيدان</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}
