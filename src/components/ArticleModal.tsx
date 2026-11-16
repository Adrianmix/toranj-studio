import React, { useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import type { JournalArticle } from '../data/articles';
import { STUDIO_MEDIA } from '../data/media';
import { EditorialImage } from './EditorialImage';

interface ArticleModalProps {
  article: JournalArticle | null;
  isAboutOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isAboutOpen,
  onClose,
  onOpenInquiry,
}) => {
  const isOpen = Boolean(article) || isAboutOpen;

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

  return (
    <div
      className="fixed inset-0 z-50 bg-[#252522]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={isAboutOpen ? 'درباره استودیو ترنج' : article?.title || 'مقاله'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F3EFE8] text-[#252522] border border-[#D8D0C5] my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#F3EFE8]/95 backdrop-blur-sm px-6 py-4 border-b border-[#D8D0C5] flex items-center justify-between gap-4">
          <div className="text-xs text-[#655F56]">
            {isAboutOpen
              ? 'درباره استودیو · TORANJ STUDIO'
              : `${article?.category} · ${article?.readTime}`}
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

        {isAboutOpen ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E5DDD1]">
              <EditorialImage
                src={STUDIO_MEDIA.studioInterior}
                alt="فضای داخلی استودیو ترنج"
                className="w-full h-full"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#252522]">
              استودیو ترنج؛ خلق هویت‌های ماندگار و سنجیده
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#655F56] leading-[1.9]">
              <p>
                ترنج یک استودیوی تخصصی در حوزه طراحی لوگو، توسعه هویت بصری و بسته‌بندی است. ما به جای تولید طرح‌های پرزرق‌وبرق و زودگذر، بر دقت هندسی، اصالت تایپوگرافی فارسی و هماهنگی میان ایده و متریال واقعی تمرکز داریم.
              </p>
              <p>
                هر پروژه در ترنج با شناخت دقیق از فرهنگ برند، مخاطبان و بافت بازار آغاز می‌شود و تا نظارت بر کیفیت نهایی چاپ و اجرا ادامه پیدا می‌کند.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D0C5] grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
              <div>
                <span className="font-editorial text-[#A18B70] block mb-1">01</span>
                <strong className="text-[#252522] block">پژوهش‌محور</strong>
                <span className="text-xs text-[#655F56]">
                  طراحی بر پایه تحلیل دقیق جایگاه برند
                </span>
              </div>
              <div>
                <span className="font-editorial text-[#A18B70] block mb-1">02</span>
                <strong className="text-[#252522] block">تایپوگرافی فارسی</strong>
                <span className="text-xs text-[#655F56]">
                  تسلط بر تناسبات حروف و خوانایی معاصر
                </span>
              </div>
              <div>
                <span className="font-editorial text-[#A18B70] block mb-1">03</span>
                <strong className="text-[#252522] block">دقت در متریال</strong>
                <span className="text-xs text-[#655F56]">
                  همراهی از طراحی تا انتخاب کاغذ و چاپ
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D0C5] flex justify-end">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="inline-flex items-center gap-2.5 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors rounded-full px-6 py-3 text-sm font-medium cursor-pointer"
              >
                <span>شروع گفت‌وگو با ترنج</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          article && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#E5DDD1]">
                <EditorialImage
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#252522] leading-snug">
                {article.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#655F56] leading-[1.95]">
                {article.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
