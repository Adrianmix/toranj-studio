import React, { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SELECTED_PROJECTS, type ProjectItem } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './SectionHeading';
import { PortfolioItem } from './PortfolioItem';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['همه', 'هویت بصری', 'طراحی لوگو', 'بسته‌بندی'] as const;

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>('همه');
  const [showAllRow, setShowAllRow] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'همه') return SELECTED_PROJECTS;
    return SELECTED_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const isDefaultMosaic = activeCategory === 'همه';

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="py-16 sm:py-20 lg:py-24 border-b border-[#D8D0C5] bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Top Asymmetric 3-Column Editorial Grid matching the mockup */}
        {isDefaultMosaic ? (
          <div className="space-y-8 lg:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Right Column in RTL (3 cols): Title, Kicker, Filter & Action Link */}
              <div className="lg:col-span-3 flex flex-col justify-between py-2">
                <div>
                  <SectionHeading
                    kicker="نمونه‌کارهای منتخب"
                    englishLabel="SELECTED WORKS"
                    title="آثار شاخص ما"
                  />
                  <p className="mt-4 text-sm text-[#655F56] leading-relaxed">
                    مجموعه‌ای از آثار مفهومی و پروژه‌های تمرینی استودیو ترنج جهت نمایش زبان بصری، دقت در متریال و نگاه معمارانه ما.
                  </p>

                  {/* Minimal Category Filter Tabs */}
                  <div
                    role="group"
                    aria-label="فیلتر دسته‌بندی نمونه‌کارها"
                    className="mt-6 flex flex-wrap items-center gap-2"
                  >
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          activeCategory === cat
                            ? 'bg-[#252522] text-[#F3EFE8]'
                            : 'bg-[#E5DDD1]/70 text-[#655F56] hover:text-[#252522]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 lg:mt-12">
                  <button
                    type="button"
                    onClick={() => setShowAllRow((prev) => !prev)}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-[#252522] hover:text-[#A18B70] transition-colors border-b border-[#252522]/40 hover:border-[#A18B70] pb-1 cursor-pointer group"
                  >
                    <span>
                      {showAllRow ? 'نمایش فشرده آثار' : 'مشاهده همه نمونه‌کارها'}
                    </span>
                    <ArrowLeft
                      className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>

              {/* Middle Column in RTL (3 cols): Two Stacked Smaller Visuals */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-6">
                {SELECTED_PROJECTS[1] && (
                  <PortfolioItem
                    project={SELECTED_PROJECTS[1]}
                    aspectClass="aspect-[4/3]"
                    onSelect={onSelectProject}
                  />
                )}
                {SELECTED_PROJECTS[2] && (
                  <PortfolioItem
                    project={SELECTED_PROJECTS[2]}
                    aspectClass="aspect-[4/3]"
                    onSelect={onSelectProject}
                  />
                )}
              </div>

              {/* Left Column in RTL (6 cols): Large Signature Landscape Work */}
              <div className="lg:col-span-6 flex flex-col">
                {SELECTED_PROJECTS[0] && (
                  <PortfolioItem
                    project={SELECTED_PROJECTS[0]}
                    aspectClass="aspect-[16/10] lg:aspect-[16/11]"
                    onSelect={onSelectProject}
                  />
                )}
              </div>
            </div>

            {/* Secondary Wide Featured Project Row (4th Project — always accessible or expanded) */}
            {(showAllRow || SELECTED_PROJECTS[3]) && (
              <div className="pt-6 border-t border-[#D8D0C5]/70 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-7">
                  <PortfolioItem
                    project={SELECTED_PROJECTS[3]}
                    aspectClass="aspect-[16/9]"
                    onSelect={onSelectProject}
                  />
                </div>
                <div className="lg:col-span-5 lg:ps-6 space-y-4">
                  <span className="text-xs text-[#655F56] block">
                    پروژه منتخب چهارم · نمونه مفهومی استودیو
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#252522]">
                    {SELECTED_PROJECTS[3].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#655F56] leading-relaxed">
                    {SELECTED_PROJECTS[3].summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(SELECTED_PROJECTS[3])}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#252522] hover:text-[#A18B70] transition-colors cursor-pointer group"
                  >
                    <span>بررسی پروژه و خروجی‌ها</span>
                    <ArrowLeft
                      className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Filtered View */
          <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                kicker="نمونه‌کارهای منتخب"
                englishLabel="SELECTED WORKS"
                title="آثار شاخص ما"
              />
              <div
                role="group"
                aria-label="فیلتر دسته‌بندی نمونه‌کارها"
                className="flex flex-wrap items-center gap-2"
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-[#252522] text-[#F3EFE8]'
                        : 'bg-[#E5DDD1]/70 text-[#655F56] hover:text-[#252522]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <PortfolioItem
                  key={project.id}
                  project={project}
                  aspectClass="aspect-[4/3]"
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
