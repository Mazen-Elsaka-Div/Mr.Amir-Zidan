import "./globals.css";

export const metadata = {
  title: "مستر أمير زيدان | مدرس اللغة الإنجليزية",
  description: "منصة مستر أمير زيدان - مدرس اللغة الإنجليزية للثانوية العامة والأزهرية. شرح مبسط، متابعة مستمرة، وتدريب احترافي.",
  keywords: "أمير زيدان, مدرس إنجليزي, ثانوية عامة, أزهرية, لغة إنجليزية, تعليم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
