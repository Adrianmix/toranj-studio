import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { EditorialImage } from './EditorialImage';

interface PortfolioItemProps {
  project: ProjectItem;
  aspectClass?: string;
  onSelect: (project: ProjectItem) => void;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  project,
  aspectClass = 'aspect-[4/3]',
  onSelect,
}) => {
  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`مشاهده جزئیات ${project.title}`}
        className="text-start cursor-pointer block w-full focus-visible:outline-2 focus-visible:outline-[#A18B70]"
      >
        <div className={`relative w-full overflow-hidden bg-[#E5DDD1] ${aspectClass}`}>
          <EditorialImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full"
            imgClassName="group-hover:scale-[1.03]"
            fallbackLabel={project.title}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#252522]/0 group-hover:bg-[#252522]/10 transition-colors duration-300"
          />
        </div>

        {/* Clean Unboxed Editorial Metadata — Zero Pills */}
        <div className="pt-3.5 pb-1 flex items-start justify-between gap-4 border-b border-transparent group-hover:border-[#D8D0C5] transition-colors">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-[#252522] group-hover:text-[#A18B70] transition-colors truncate">
              {project.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-[13px] text-[#655F56]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.services}</span>
            </div>
          </div>

          <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#252522] opacity-70 group-hover:opacity-100 transition-all shrink-0">
            <span className="hidden sm:inline">جزئیات</span>
            <ArrowLeft
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </button>
    </article>
  );
};
