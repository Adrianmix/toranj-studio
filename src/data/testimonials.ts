export interface TestimonialItem {
  id: string;
  quote: string;
  authorLabel: string;
  roleOrContext: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    quote: '«همکاری با ترنج تجربه‌ای متفاوت و لذت‌بخش بود.»',
    authorLabel: 'برند نمونه — محتوای نمایشی',
    roleOrContext: 'جایگاه ثبت بازخورد واقعی کارفرما پس از تکمیل پروژه',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote: '«دقت در جزئیات و نگاه معمارانه به هویت بصری، فراتر از انتظار ما بود.»',
    authorLabel: 'کارفرمای نمونه — محتوای نمایشی',
    roleOrContext: 'جایگاه ثبت نظر مدیر برند پس از تحویل کتابچه هویت بصری',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote: '«از نخستین جلسه مشاوره تا تحویل نهایی فایل‌های چاپ، همه‌چیز منظم و شفاف پیش رفت.»',
    authorLabel: 'استارتاپ نمونه — محتوای نمایشی',
    roleOrContext: 'جایگاه ثبت تجربه همکاری در طراحی لوگو و ست اداری',
    isPlaceholder: true,
  },
];
