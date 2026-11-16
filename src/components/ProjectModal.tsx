import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import {
  FEATURED_CASE_STUDY,
  SELECTED_PROJECTS,
  type ProjectItem,
} from '../data/projects';
import { EditorialImage } from './EditorialImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  isCaseStudyOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onStartSimilarProject: (serviceTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isCaseStudyOpen,
  onClose,
  onSelectProject,
  onStartSimilarProject,
}) => {
  const isOpen = Boolean(project) || isCaseStudyOpen;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentIdx = project
    ? SELECTED_PROJECTS.findIndex((p) => p.id === project.id)
    : -1;

  const handleStep = (dir: -1 | 1) => {
    if (currentIdx === -1) return;
    const nextIdx =
      (currentIdx + dir + SELECTED_PROJECTS.length) % SELECTED_PROJECTS.length;
    onSelectProject(SELECTED_PROJECTS[nextIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#252522]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={
        isCaseStudyOpen
          ? FEATURED_CASE_STUDY.title
          : project?.title || 'جزئیات پروژه'
      }
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F3EFE8] text-[#252522] border border-[#D8D0C5] my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 bg-[#F3EFE8]/95 backdrop-blur-sm px-6 py-4 border-b border-[#D8D0C5] flex items-center justify-between gap-4">
          <div className="text-xs text-[#655F56] flex items-center gap-2">
            <span>
              {isCaseStudyOpen
                ? FEATURED_CASE_STUDY.label
                : `${project?.category} · ${project?.year}`}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره"
            className="w-9 h-9 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {isCaseStudyOpen ? (
          <div className="p-6 sm:p-8 space-y-8">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E5DDD1]">
              <EditorialImage
                src={FEATURED_CASE_STUDY.mainImage}
                alt={FEATURED_CASE_STUDY.mainAlt}
                className="w-full h-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#252522]">
                  {FEATURED_CASE_STUDY.title}
                </h3>
                <p className="text-base text-[#252522] leading-relaxed">
                  {FEATURED_CASE_STUDY.description}
                </p>
                <p className="text-sm text-[#655F56] leading-[1.9]">
                  {FEATURED_CASE_STUDY.approach}
                </p>
              </div>

              <div className="md:col-span-5 border-t md:border-t-0 md:border-s border-[#D8D0C5] pt-6 md:pt-0 md:ps-6 space-y-4">
                <h4 className="text-xs font-semibold text-[#655F56]">
                  مراحل و خروجی‌های کلیدی
                </h4>
                <ul className="space-y-2.5 text-sm text-[#252522]">
                  {FEATURED_CASE_STUDY.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-editorial text-[#A18B70] tabular-nums">
                        0{i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D8D0C5]">
              {FEATURED_CASE_STUDY.supportingImages.map((img, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[4/3] overflow-hidden bg-[#E5DDD1]">
                    <EditorialImage src={img.src} alt={img.alt} className="w-full h-full" />
                  </div>
                  <p className="text-xs text-[#655F56]">{img.caption}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D8D0C5] flex justify-end">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onStartSimilarProject('طراحی هویت بصری');
                }}
                className="inline-flex items-center gap-2.5 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors rounded-full px-6 py-3 text-sm font-medium cursor-pointer"
              >
                <span>شروع پروژه‌ای با این رویکرد</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          project && (
            <div className="p-6 sm:p-8 space-y-7">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E5DDD1]">
                <EditorialImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl font-bold text-[#252522]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A18B70] font-medium">
                    {project.services}
                  </p>
                  <p className="text-sm sm:text-base text-[#655F56] leading-[1.85]">
                    {project.summary}
                  </p>
                </div>

                <div className="md:col-span-5 border-t md:border-t-0 md:border-s border-[#D8D0C5] pt-5 md:pt-0 md:ps-6 space-y-3">
                  <h4 className="text-xs font-semibold text-[#655F56]">
                    خروجی‌های تعریف‌شده
                  </h4>
                  <ul className="space-y-2 text-sm text-[#252522]">
                    {project.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="font-editorial text-xs text-[#A18B70] tabular-nums">
                          0{i + 1}
                        </span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Controls: Prev/Next & Start Project */}
              <div className="pt-5 border-t border-[#D8D0C5] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStep(-1)}
                    aria-label="پروژه قبلی"
                    className="w-10 h-10 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStep(1)}
                    aria-label="پروژه بعدی"
                    className="w-10 h-10 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onStartSimilarProject(project.category);
                  }}
                  className="inline-flex items-center gap-2.5 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors rounded-full px-6 py-3 text-sm font-medium cursor-pointer"
                >
                  <span>ثبت سفارش مشابه</span>
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
