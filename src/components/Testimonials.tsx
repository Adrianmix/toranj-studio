import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './SectionHeading';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="نظرات مشتریان"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#E5DDD1]/40"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right Column in RTL (4 cols): Section Label + Carousel Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <SectionHeading
              kicker="نظرات مشتریان"
              englishLabel="CLIENT PERSPECTIVES"
              title="تجربه همکاری"
            />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="نظر قبلی"
                  className="w-10 h-10 rounded-full border border-[#D8D0C5] bg-[#F3EFE8] text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="نظر بعدی"
                  className="w-10 h-10 rounded-full border border-[#D8D0C5] bg-[#F3EFE8] text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center gap-2" role="tablist" aria-label="انتخاب نظر">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === currentIndex}
                    aria-label={`بازخورد ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 bg-[#252522]'
                        : 'w-1.5 bg-[#A18B70]/45 hover:bg-[#A18B70]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left Column in RTL (8 cols): Large Editorial Quote */}
          <div className="lg:col-span-8 lg:border-s lg:border-[#D8D0C5] lg:ps-12">
            <figure className="space-y-6">
              <blockquote className="text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-[#252522] leading-[1.6] text-balance min-h-[4.5rem]">
                {active.quote}
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#655F56]">
                <span className="font-semibold text-[#252522]">
                  — {active.authorLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{active.roleOrContext}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
