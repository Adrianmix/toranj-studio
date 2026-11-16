import React from 'react';
import { STUDIO_MEDIA } from '../data/media';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Philosophy: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      aria-label="فلسفه طراحی استودیو ترنج"
      className="relative overflow-hidden bg-[#252522] text-[#F3EFE8]"
    >
      {/* Subtle Moody Botanical Backdrop on the Left Edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-45"
      >
        <img
          src={STUDIO_MEDIA.darkBotanical}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#252522]/75 to-[#252522]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
          <div className="lg:col-span-9">
            <span className="font-editorial text-xs tracking-[0.2em] uppercase text-[#B8B0A4] block mb-5" dir="ltr">
              DESIGN PHILOSOPHY
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.45] text-[#F3EFE8] text-balance max-w-4xl">
              «طراحی فقط ساختن یک تصویر زیبا نیست؛ ساختن هویتی است که در ذهن می‌ماند.»
            </blockquote>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="inline-flex items-center gap-3 text-xs text-[#B8B0A4] tabular-nums">
              <span className="text-[#F3EFE8] font-medium">03</span>
              <span className="w-8 h-[1px] bg-[#B8B0A4]/50" aria-hidden="true" />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
