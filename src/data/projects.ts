import { STUDIO_MEDIA } from './media';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  services: string;
  year: string;
  image: string;
  alt: string;
  layoutRole: 'large' | 'stacked-top' | 'stacked-bottom' | 'wide-secondary';
  summary: string;
  deliverables: string[];
  isPlaceholder: boolean;
}

export interface FeaturedCaseStudyData {
  label: string;
  title: string;
  description: string;
  approach: string;
  mainImage: string;
  mainAlt: string;
  supportingImages: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  highlights: string[];
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'concept-stationery-noir',
    title: 'ست اوراق و بسته‌بندی تیره (نمونه مفهومی)',
    category: 'هویت بصری',
    services: 'طراحی نشانه · ست اداری · چاپ طلاکوب',
    year: '۱۴۰۴',
    image: STUDIO_MEDIA.workBlackEnvelope,
    alt: 'نمونه طراحی پاکت و پوشه سازمانی تیره با نشان برنزی مینیمال',
    layoutRole: 'large',
    summary:
      'چیدمان مفهومی ست اداری بر پایه کاغذهای بافت‌دار مات تیره و چاپ کوبیده فلزی، جهت نمایش دقت در جزئیات ملموس برند.',
    deliverables: ['طراحی مونوگرام هندسی', 'ست اداری و پاکت اختصاصی', 'انتخاب متریال و نظارت چاپ'],
    isPlaceholder: true,
  },
  {
    id: 'concept-letterpress-card',
    title: 'کارت و اقلام کتان دست‌ساز (نمونه مفهومی)',
    category: 'طراحی لوگو',
    services: 'طراحی لوگو · چاپ برجسته · تایپوگرافی',
    year: '۱۴۰۴',
    image: STUDIO_MEDIA.workPaperStationery,
    alt: 'نمونه کارت ویزیت و اقلام هویت بصری روی کاغذ کتان کرم با چاپ گود',
    layoutRole: 'stacked-top',
    summary:
      'مطالعه بافت کاغذ پنبه طبیعی در کنار تایپوگرافی کلاسیک و نشان گیاهی مینیمال برای برندهای بوتیک و تخصصی.',
    deliverables: ['طراحی نشان اصلی', 'فرایند لترپرس و دِباس', 'پالت رنگی خنثی و گرم'],
    isPlaceholder: true,
  },
  {
    id: 'concept-apothecary-vessel',
    title: 'بسته‌بندی بطری شیشه‌ای مات (نمونه مفهومی)',
    category: 'بسته‌بندی',
    services: 'طراحی لیبل · نشان‌واره · کارگردانی هنری',
    year: '۱۴۰۴',
    image: STUDIO_MEDIA.workCeramicBottle,
    alt: 'نمونه طراحی بسته‌بندی بطری شیشه‌ای تیره مات با نشان ظریف طلایی روی سنگ تراورتن',
    layoutRole: 'stacked-bottom',
    summary:
      'طراحی فرم و چاپ مستقیم روی شیشه مات تیره با الهام از ظرافت‌های کلاسیک و نورپردازی طبیعی استودیویی.',
    deliverables: ['طراحی نشان تجاری', 'ساختار بسته‌بندی و لیبل', 'عکاسی و کارگردانی هنری'],
    isPlaceholder: true,
  },
  {
    id: 'concept-architectural-identity',
    title: 'نظام هویت فضایی و معماری (نمونه مفهومی)',
    category: 'هویت بصری',
    services: 'راهنمای جامع برند · گرافیک محیطی · تایپوگرافی',
    year: '۱۴۰۳',
    image: STUDIO_MEDIA.archTravertine,
    alt: 'جزئیات معماری سنگ تراورتن با خطوط منحنی و نور طبیعی گرم',
    layoutRole: 'wide-secondary',
    summary:
      'ترجمه زبان هندسی برند به متریال‌های معماری و فضاهای فیزیکی با تکیه بر سنگ، نور طبیعی و تناسبات آرام.',
    deliverables: ['کتابچه جامع هویت بصری', 'تابلوها و گرافیک محیطی', 'زبان عکاسی برند'],
    isPlaceholder: true,
  },
];

export const FEATURED_CASE_STUDY: FeaturedCaseStudyData = {
  label: 'مطالعه موردی · FEATURED PROJECT',
  title: 'روایتی از پروژه موفق (نمونه مطالعاتی)',
  description:
    'از ایده تا اجرا: نگاهی به فرآیند طراحی هویت یک برند متمایز و تأثیرگذار.',
  approach:
    'در این مطالعه موردی نمونه، تمرکز بر خلق یک نظام بصری ماندگار است که هم در کتابچه جامع برند و هم در اقلام لمسی روزمره با زبان بصری یکپارچه سخن بگوید.',
  mainImage: STUDIO_MEDIA.caseMonograph,
  mainAlt: 'کتابچه باز شده هویت بصری برند و پوشه برجسته روی سطح پارچه‌ای گرم',
  supportingImages: [
    {
      src: STUDIO_MEDIA.darkBotanical,
      alt: 'مطالعه بافت تیره و کنتراست نوری در کارگردانی هنری برند',
      caption: 'کارگردانی هنری و نورپردازی',
    },
    {
      src: STUDIO_MEDIA.workBlackEnvelope,
      alt: 'چاپ طلاکوب نشان روی مقوای تیره مات',
      caption: 'اقلام چاپی و متریال',
    },
    {
      src: STUDIO_MEDIA.archTravertine,
      alt: 'هماهنگی فرم‌های معماری و خطوط هویت بصری',
      caption: 'تناسبات فضایی و الهام معماری',
    },
  ],
  highlights: [
    'تدوین استراتژی بصری و شخصیت برند پیش از ورود به اتودهای گرافیکی',
    'طراحی مونوگرام هندسی قابل استفاده در مقیاس‌های ریز چاپی و محیطی',
    'انتخاب کاغذهای بدون روکش با گرماژ بالا و چاپ کوبیده بدون رنگ',
  ],
};
