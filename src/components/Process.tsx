import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './SectionHeading';

export const Process: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      aria-label="فرآیند همکاری با ترنج"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            kicker="فرآیند همکاری"
            englishLabel="OUR PROCESS"
            title="چطور با هم کار کنیم؟"
          />
          <p className="text-sm text-[#655F56] max-w-md leading-relaxed">
            پنج گام شفاف و منظم از نخستین گفت‌وگو تا تحویل نهایی فایل‌ها و راهنمای برند.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 inset-x-10 h-[1px] bg-[#D8D0C5]"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = idx === activeStep;
              return (
                <li
                  key={stage.step}
                  className="relative flex lg:flex-col items-start gap-4 lg:gap-5"
                >
                  {/* Vertical connecting line for mobile */}
                  {idx < PROCESS_STAGES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="lg:hidden absolute top-11 bottom-[-2rem] right-5 w-[1px] bg-[#D8D0C5]"
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    aria-pressed={isSelected}
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold tabular-nums shrink-0 transition-colors duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#252522] text-[#F3EFE8] border-[#252522]'
                        : 'bg-[#F3EFE8] text-[#252522] border-[#D8D0C5] hover:border-[#A18B70]'
                    }`}
                  >
                    {stage.persianStep}
                  </button>

                  <div
                    onClick={() => setActiveStep(idx)}
                    className="pt-0.5 lg:pt-1 cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#252522]">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[#A18B70]">
                      {stage.summary}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#655F56] leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
