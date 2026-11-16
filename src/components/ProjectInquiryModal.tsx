import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/services';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialService || STUDIO_SERVICES[0].title
  );
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setBrandName('');
    setContact('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#252522]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F3EFE8] text-[#252522] border border-[#D8D0C5] my-auto p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D8D0C5]">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase text-[#655F56] block mb-1" dir="ltr">
              START A PROJECT
            </span>
            <h2 id="inquiry-modal-title" className="text-2xl font-bold text-[#252522]">
              شروع یک پروژه جدید
            </h2>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="بستن فرم"
            className="w-9 h-9 rounded-full border border-[#D8D0C5] flex items-center justify-center text-[#252522] hover:bg-[#252522] hover:text-[#F3EFE8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#252522] text-[#F3EFE8] mx-auto flex items-center justify-center">
              <Check className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#252522]">
              درخواست شما با موفقیت ثبت شد
            </h3>
            <p className="text-sm text-[#655F56] max-w-md mx-auto leading-relaxed">
              سپاس از پیام شما، {name}. تیم استودیو ترنج درخواست شما برای «{selectedService}» را بررسی کرده و از طریق {contact} با شما تماس خواهد گرفت.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors rounded-full px-7 py-3 text-sm font-medium cursor-pointer"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#655F56] mb-2.5">
                حوزه همکاری مورد نظر
              </label>
              <div className="flex flex-wrap gap-2">
                {STUDIO_SERVICES.map((svc) => (
                  <button
                    key={svc.number}
                    type="button"
                    onClick={() => setSelectedService(svc.title)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer border ${
                      selectedService === svc.title
                        ? 'bg-[#252522] text-[#F3EFE8] border-[#252522]'
                        : 'bg-[#E5DDD1]/60 text-[#252522] border-[#D8D0C5] hover:border-[#A18B70]'
                    }`}
                  >
                    {svc.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-xs font-semibold text-[#655F56] mb-1.5"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثلاً: سارا محمدی"
                  className="w-full bg-transparent border border-[#D8D0C5] focus:border-[#252522] px-3.5 py-2.5 text-sm text-[#252522] placeholder:text-[#655F56]/60 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-brand"
                  className="block text-xs font-semibold text-[#655F56] mb-1.5"
                >
                  نام برند یا کسب‌وکار
                </label>
                <input
                  id="inquiry-brand"
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="اختیاری"
                  className="w-full bg-transparent border border-[#D8D0C5] focus:border-[#252522] px-3.5 py-2.5 text-sm text-[#252522] placeholder:text-[#655F56]/60 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-contact"
                className="block text-xs font-semibold text-[#655F56] mb-1.5"
              >
                ایمیل یا شماره تماس *
              </label>
              <input
                id="inquiry-contact"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="name@example.com یا ۰۹۱۲..."
                className="w-full bg-transparent border border-[#D8D0C5] focus:border-[#252522] px-3.5 py-2.5 text-sm text-[#252522] placeholder:text-[#655F56]/60 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-notes"
                className="block text-xs font-semibold text-[#655F56] mb-1.5"
              >
                توضیح کوتاه درباره پروژه و اهداف شما
              </label>
              <textarea
                id="inquiry-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="چه محصول یا خدماتی ارائه می‌دهید و چه انتظاری از هویت بصری جدید دارید؟"
                className="w-full bg-transparent border border-[#D8D0C5] focus:border-[#252522] px-3.5 py-2.5 text-sm text-[#252522] placeholder:text-[#655F56]/60 outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-xs text-[#655F56]">
                پاسخ‌گویی ظرف ۲۴ تا ۴۸ ساعت کاری
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 bg-[#252522] text-[#F3EFE8] hover:bg-[#3A3832] transition-colors rounded-full px-7 py-3 text-sm font-medium cursor-pointer"
              >
                <span>ارسال درخواست</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
