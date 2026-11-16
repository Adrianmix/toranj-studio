import React, { useEffect, useState } from 'react';
import { ArrowLeft, Menu } from 'lucide-react';
import { ToranjLogo } from './ToranjLogo';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'خانه', href: '#hero' },
  { id: 'works', label: 'نمونه‌کارها', href: '#works' },
  { id: 'services', label: 'خدمات', href: '#services' },
  { id: 'about', label: 'درباره ما', href: '#about' },
  { id: 'contact', label: 'تماس', href: '#contact' },
];

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInquiry,
  onOpenMobileMenu,
  isMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);

      const offsets = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce((prev, curr) => (curr.top < prev.top ? curr : prev));
      if (closest) setActiveSection(closest.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-[#D8D0C5] ${
        isScrolled
          ? 'bg-[#F3EFE8]/95 backdrop-blur-md py-3'
          : 'bg-[#F3EFE8] py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1 (Right in RTL): Single-element Brand Wordmark */}
        <a
          href="#hero"
          aria-label="صفحه اصلی استودیو ترنج"
          className="inline-flex items-center whitespace-nowrap shrink-0 rounded-sm"
        >
          <ToranjLogo />
        </a>

        {/* Zone 2 (Center): 5 Single-Line Navigation Links */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden md:flex items-center gap-7 lg:gap-10 text-sm font-medium text-[#655F56]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#252522] ${
                  isActive ? 'text-[#252522] font-semibold' : ''
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#252522] transition-transform duration-300 origin-right ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3 (Left in RTL): 1 Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden md:inline-flex items-center gap-2.5 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors duration-200 rounded-full px-5 py-2.5 text-xs lg:text-sm font-medium whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>شروع یک پروژه</span>
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="باز کردن منوی ناوبری"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#252522] hover:bg-[#E5DDD1] transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};
