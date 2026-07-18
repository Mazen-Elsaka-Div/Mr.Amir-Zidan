'use client';

import { useLang } from './LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const NAV_LINKS_AR = [
  { label: 'المراحل', href: '#stages' },
  { label: 'آراء الطلبة', href: '#reviews' },
  { label: 'أرقامنا', href: '#stats' },
  { label: 'الكورسات', href: '#courses' },
];

const NAV_LINKS_EN = [
  { label: 'Stages', href: '#stages' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Our Numbers', href: '#stats' },
  { label: 'Courses', href: '#courses' },
];

export default function Navbar() {
  const { lang } = useLang();
  const links = lang === 'ar' ? NAV_LINKS_AR : NAV_LINKS_EN;

  return (
    <nav className="navbar" id="main-navbar" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Logo */}
      <div className="navbar-logo">
        {lang === 'ar' ? (
          <span className="navbar-logo-ar">م. أمير زيدان</span>
        ) : (
          <span className="navbar-logo-en">Mr. Amir Zedan</span>
        )}
      </div>

      {/* Nav Links */}
      <ul className="navbar-links" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="navbar-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Controls */}
      <div className="navbar-controls">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </nav>
  );
}
