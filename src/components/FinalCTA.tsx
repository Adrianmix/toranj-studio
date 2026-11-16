import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      aria-label="شروع پروژه با استودیو ترنج"
      className="py-10 sm:py-14 lg:py-16 bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="bg-[#252522] text-[#F3EFE8] rounded-2xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl space-y-4">
              <span
                className="font-editorial text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#B8B0A4] block"
                dir="ltr"
              >
                LET&apos;S CREATE SOMETHING MEANINGFUL
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#F3EFE8] leading-[1.35] text-balance">
                برای ساختن هویت بعدی آماده‌اید؟
              </h2>

              <p className="text-sm sm:text-base text-[#C8C0B4] leading-[1.85] max-w-xl">
                اگر برای برندتان به یک هویت متمایز و حرفه‌ای نیاز دارید، از اینجا گفت‌وگو را شروع کنیم.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-3 bg-[#F3EFE8] text-[#252522] hover:bg-[#E5DDD1] transition-colors duration-200 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold whitespace-nowrap cursor-pointer group"
              >
                <span>شروع یک پروژه</span>
                <ArrowLeft
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
