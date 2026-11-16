import React, { useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { NAV_ITEMS } from './Header';
import { ToranjLogo } from './ToranjLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#252522] text-[#F3EFE8] flex flex-col justify-between p-6 sm:p-8 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="منوی ناوبری موبایل"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#3B3A35]">
        <ToranjLogo inverted />
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن منو"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#3B3A35] text-[#F3EFE8] hover:bg-[#3B3A35] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav aria-label="ناوبری موبایل" className="my-auto py-8">
        <ul className="space-y-4">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.id} className="border-b border-[#3B3A35]/60 pb-4 last:border-b-0">
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between text-2xl font-semibold text-[#F3EFE8] hover:text-[#A18B70] transition-colors py-1"
              >
                <span>{item.label}</span>
                <span className="font-editorial text-sm text-[#B8B0A4] tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom CTA & Info */}
      <div className="pt-6 border-t border-[#3B3A35] space-y-4">
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenInquiry();
          }}
          className="w-full inline-flex items-center justify-center gap-3 bg-[#F3EFE8] text-[#252522] hover:bg-[#E5DDD1] transition-colors rounded-full py-3.5 px-6 text-base font-semibold cursor-pointer"
        >
          <span>شروع یک پروژه</span>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </button>
        <p className="text-center text-xs text-[#B8B0A4]" dir="ltr">
          info@toranjstudio.example
        </p>
      </div>
    </div>
  );
};
