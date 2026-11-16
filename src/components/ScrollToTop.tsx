import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="بازگشت به بالای صفحه"
      className="fixed bottom-5 left-5 z-30 w-11 h-11 rounded-full bg-[#252522] text-[#F3EFE8] border border-[#3B3A35] shadow-sm hover:bg-[#A18B70] transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
    </button>
  );
};
