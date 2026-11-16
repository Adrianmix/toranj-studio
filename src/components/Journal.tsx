import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { JOURNAL_ARTICLES, type JournalArticle } from '../data/articles';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EditorialImage } from './EditorialImage';
import { SectionHeading } from './SectionHeading';

interface JournalProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const Journal: React.FC<JournalProps> = ({ onSelectArticle }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="journal"
      aria-label="مطالب منتخب استودیو"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3EFE8]"
    >
      <div
        ref={ref}
        className={`max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <SectionHeading
            kicker="مقالات منتخب"
            englishLabel="STUDIO JOURNAL"
            title="مطالب منتخب"
          />
          <p className="text-sm text-[#655F56] max-w-sm">
            یادداشت‌هایی کوتاه درباره برندینگ، کارگردانی هنری و اصول ماندگاری هویت بصری.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between border-b border-[#D8D0C5] pb-6"
            >
              <div>
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="block w-full text-start cursor-pointer"
                  aria-label={`مطالعه مقاله ${article.title}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#E5DDD1]">
                    <EditorialImage
                      src={article.image}
                      alt={article.alt}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-[1.03]"
                      fallbackLabel={article.title}
                    />
                  </div>

                  {/* Clean Unboxed Metadata */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#655F56]">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#252522] group-hover:text-[#A18B70] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </button>

                <p className="mt-2.5 text-sm text-[#655F56] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#252522] hover:text-[#A18B70] transition-colors cursor-pointer group/btn"
                >
                  <span>مطالعه مقاله</span>
                  <ArrowLeft
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
