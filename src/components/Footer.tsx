import React from 'react';
import { Instagram, Linkedin, Globe } from 'lucide-react';
import { NAV_ITEMS } from './Header';
import { ToranjLogo } from './ToranjLogo';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="border-t border-[#D8D0C5] bg-[#F3EFE8] text-[#252522] pt-12 pb-8">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Multi-Column Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#D8D0C5]">
          {/* Brand & Short Studio Description */}
          <div className="lg:col-span-4 space-y-3">
            <a href="#hero" aria-label="بازگشت به ابتدای صفحه">
              <ToranjLogo />
            </a>
            <p className="text-sm text-[#655F56] leading-relaxed max-w-xs">
              استودیوی خلاق طراحی و توسعه هویت بصری برندها، طراحی لوگو، ست اداری و بسته‌بندی.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-[#655F56] mb-3">
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#252522] hover:text-[#A18B70] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Editable Contact Placeholders */}
          <div className="lg:col-span-3 space-y-2.5 text-sm">
            <h3 className="text-xs font-semibold text-[#655F56] mb-3">
              اطلاعات تماس (قابل ویرایش)
            </h3>
            <p>
              <a
                href="mailto:info@toranjstudio.example"
                className="text-[#252522] hover:text-[#A18B70] transition-colors font-editorial text-base"
                dir="ltr"
              >
                info@toranjstudio.example
              </a>
            </p>
            <p className="text-[#655F56] text-xs leading-relaxed">
              تهران — نشانی استودیو (جایگزین با آدرس و شماره تماس واقعی)
            </p>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="text-xs font-medium text-[#252522] border-b border-[#252522]/40 hover:text-[#A18B70] hover:border-[#A18B70] pb-0.5 transition-colors cursor-pointer"
            >
              ارسال فرم سفارش آنلاین
            </button>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold text-[#655F56] mb-3">
                شبکه‌های اجتماعی
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  aria-label="اینستاگرام استودیو ترنج"
                  className="w-9 h-9 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  aria-label="لینکدین استودیو ترنج"
                  className="w-9 h-9 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  aria-label="وب‌سایت و پورتفولیو ترنج"
                  className="w-9 h-9 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#655F56]">
          <p>تمامی حقوق محفوظ است. © استودیو ترنج</p>
          <p className="font-editorial tracking-wider uppercase" dir="ltr">
            TORANJ CREATIVE STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
};
