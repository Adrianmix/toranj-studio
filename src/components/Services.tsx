import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EditorialImage } from './EditorialImage';
import { SectionHeading } from './SectionHeading';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = STUDIO_SERVICES[activeIndex];

  return (
    <section
      id="services"
      aria-label="خدمات استودیو ترنج"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Right Column in RTL (4 cols): Heading + Interactive Service Preview Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <SectionHeading
              kicker="خدمات ما"
              englishLabel="OUR SERVICES"
              title="تخصص‌های استودیو"
            />

            <p className="text-sm text-[#655F56] leading-relaxed">
              از طراحی نشان‌واره تا شکل‌دهی کامل تجربه لمسی و بصری برند؛ روی هر خدمت کلیک کنید تا درخواست پروژه متناسب با آن را ثبت نمایید.
            </p>

            {/* Desktop Interactive Preview Frame */}
            <div className="hidden lg:block pt-2">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E5DDD1]">
                <EditorialImage
                  src={activeService.previewImage}
                  alt={activeService.previewAlt}
                  className="w-full h-full"
                  fallbackLabel={activeService.title}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#655F56]">
                <span className="font-medium text-[#252522]">{activeService.title}</span>
                <span className="font-editorial tracking-wider uppercase" dir="ltr">
                  {activeService.number} · {activeService.englishLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Left Column in RTL (8 cols): Sophisticated Editorial Horizontal Service List */}
          <div className="lg:col-span-8">
            <ul className="border-t border-[#D8D0C5]">
              {STUDIO_SERVICES.map((service, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={service.number}
                    className="border-b border-[#D8D0C5]"
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <button
                      type="button"
                      onFocus={() => setActiveIndex(idx)}
                      onClick={() => onSelectService(service.title)}
                      className={`w-full text-start py-6 sm:py-7 px-3 sm:px-5 transition-colors duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                        isActive ? 'bg-[#E5DDD1]/45' : 'hover:bg-[#E5DDD1]/30'
                      }`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                        <span className="font-editorial text-lg sm:text-xl text-[#A18B70] tabular-nums shrink-0">
                          {service.number}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#252522] group-hover:text-[#A18B70] transition-colors">
                            {service.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-[#655F56] leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <span className="text-xs font-medium text-[#252522] opacity-80 group-hover:opacity-100 whitespace-nowrap">
                          ثبت سفارش
                        </span>
                        <ArrowLeft
                          className="w-4 h-4 text-[#252522] transition-transform duration-200 group-hover:-translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
