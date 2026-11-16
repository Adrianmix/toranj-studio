import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FEATURED_CASE_STUDY } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EditorialImage } from './EditorialImage';
import { SectionHeading } from './SectionHeading';

interface FeaturedCaseStudyProps {
  onOpenCaseStudy: () => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({
  onOpenCaseStudy,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="case-study"
      aria-label="مطالعه موردی منتخب"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Right Column in RTL (5 cols): Editorial Case Study Narrative + 3 Supporting Images */}
          <div className="lg:col-span-5 flex flex-col justify-between relative">
            <div className="flex items-start justify-between gap-4">
              <SectionHeading
                kicker="مطالعه موردی"
                englishLabel="FEATURED PROJECT"
                title={FEATURED_CASE_STUDY.title}
              />
              {/* Editorial Index Marker 02 / 12 matching visual mockup */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#655F56] tabular-nums shrink-0 pt-2">
                <span className="font-semibold text-[#252522]">02</span>
                <span className="w-5 h-[1px] bg-[#D8D0C5]" aria-hidden="true" />
                <span>12</span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-base text-[#252522] font-medium leading-relaxed">
                {FEATURED_CASE_STUDY.description}
              </p>
              <p className="text-sm text-[#655F56] leading-[1.85]">
                {FEATURED_CASE_STUDY.approach}
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-[#252522] hover:text-[#A18B70] transition-colors border-b border-[#252522]/40 hover:border-[#A18B70] pb-1 cursor-pointer group"
              >
                <span>مشاهده مطالعه موردی</span>
                <ArrowLeft
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Three Smaller Supporting Images below main content */}
            <div className="mt-8 pt-6 border-t border-[#D8D0C5] grid grid-cols-3 gap-3">
              {FEATURED_CASE_STUDY.supportingImages.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={onOpenCaseStudy}
                  aria-label={`${thumb.caption} — مشاهده جزئیات`}
                  className="group text-start cursor-pointer block"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#E5DDD1]">
                    <EditorialImage
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105"
                      fallbackLabel={thumb.caption}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Left Column in RTL (7 cols): Large Monograph Showcase Visual */}
          <div className="lg:col-span-7 flex items-stretch">
            <button
              type="button"
              onClick={onOpenCaseStudy}
              aria-label="باز کردن مطالعه موردی کامل"
              className="group relative w-full min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-[#E5DDD1] cursor-pointer block"
            >
              <EditorialImage
                src={FEATURED_CASE_STUDY.mainImage}
                alt={FEATURED_CASE_STUDY.mainAlt}
                className="w-full h-full"
                imgClassName="group-hover:scale-[1.02]"
                fallbackLabel={FEATURED_CASE_STUDY.title}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
