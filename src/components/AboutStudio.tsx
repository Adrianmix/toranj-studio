import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { STUDIO_MEDIA } from '../data/media';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EditorialImage } from './EditorialImage';
import { SectionHeading } from './SectionHeading';

interface AboutStudioProps {
  onOpenAboutModal: () => void;
}

export const AboutStudio: React.FC<AboutStudioProps> = ({ onOpenAboutModal }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      aria-label="درباره استودیو ترنج"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right Column in RTL (5 cols): Editorial Headline & Studio Introduction */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              kicker="درباره استودیو"
              englishLabel="THE STUDIO"
              title="ما یک استودیوی خلاق با نگاهی متفاوت هستیم."
            />

            <p className="text-base text-[#655F56] leading-[1.9]">
              ترنج با تکیه بر پژوهش عمیق، خلاقیت و درک دقیق از ساختار برندها، در مسیر ساخت هویت‌های ماندگار و متمایز همراه شماست. باور ما این است که هر نشانه و نظام بصری باید از درون ماهیت واقعی کسب‌وکار بجوشد و بدون هیاهوی اضافه، اعتبار را منتقل کند.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#252522] hover:text-[#A18B70] transition-colors border-b border-[#252522]/40 hover:border-[#A18B70] pb-1 cursor-pointer group"
              >
                <span>بیشتر درباره ترنج</span>
                <ArrowLeft
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Left Column in RTL (7 cols): Warm Minimalist Studio Architectural Photo */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden bg-[#E5DDD1]">
              <EditorialImage
                src={STUDIO_MEDIA.studioInterior}
                alt="فضای داخلی مینیمال استودیو ترنج با دیوارهای کرم گرم و میز گفت‌وگوی تیره"
                className="w-full h-full"
                imgClassName="hover:scale-[1.02]"
                fallbackLabel="فضای استودیو ترنج"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
