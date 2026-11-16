import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { STUDIO_MEDIA } from '../data/media';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="hero"
      aria-label="معرفی استودیو ترنج"
      className="relative border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-10 py-10 sm:py-14 lg:py-0">
          {/* Right Column in RTL: Editorial Headline, Description & Dual CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:py-20 xl:py-24 relative">
            {/* Subtle Editorial Chapter Indicator matching mockup */}
            <div className="hidden xl:flex items-center gap-3 text-xs text-[#655F56] mb-10 tabular-nums">
              <span className="font-semibold text-[#252522]">01</span>
              <span className="w-8 h-[1px] bg-[#D8D0C5]" aria-hidden="true" />
              <span>12</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-extrabold text-[#252522] leading-[1.22] tracking-tight text-balance">
              طراحی‌هایی
              <br />
              که هویت می‌سازند.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#655F56] leading-[1.85] max-w-md">
              ترنج، استودیوی خلاق طراحی و توسعه هویت بصری برندهاست؛ از ایده‌پردازی تا خلق تجربه‌ای منسجم و متمایز.
            </p>

            {/* Primary Charcoal Pill CTA + Secondary Text Link */}
            <div className="mt-9 flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-3 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-all duration-200 rounded-full px-7 py-3.5 text-sm sm:text-base font-medium whitespace-nowrap shrink-0 cursor-pointer group"
              >
                <span>شروع یک پروژه</span>
                <ArrowLeft
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href="#works"
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#252522] hover:text-[#A18B70] transition-colors whitespace-nowrap shrink-0 border-b border-[#252522]/40 hover:border-[#A18B70] pb-1"
              >
                <span>مشاهده نمونه‌کارها</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Left Column in RTL: Large Tactile Packaging Brand Mockup */}
          <div className="lg:col-span-7 flex items-stretch lg:py-8">
            <div className="relative w-full min-h-[300px] sm:min-h-[420px] lg:min-h-[540px] xl:min-h-[600px] overflow-hidden bg-[#252522]">
              <EditorialImage
                src={STUDIO_MEDIA.heroPackaging}
                alt="نمای نزدیک بسته‌بندی لوکس و مونوگرام هویت بصری استودیو ترنج روی سنگ تیره"
                priority
                className="w-full h-full"
                imgClassName="hover:scale-[1.02]"
                fallbackLabel="بسته‌بندی و هویت بصری ترنج"
              />
              {/* Subtle warm vignette matching editorial photography */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#252522]/25 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
