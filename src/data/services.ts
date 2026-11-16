import { STUDIO_MEDIA } from './media';

export interface ServiceItem {
  number: string;
  title: string;
  englishLabel: string;
  description: string;
  deliverables: string[];
  previewImage: string;
  previewAlt: string;
}

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'طراحی لوگو',
    englishLabel: 'Logo & Monogram Design',
    description:
      'خلق نشان‌واره‌ای اصیل، ماندگار و دقیق که جوهره برند را در ساده‌ترین و هوشمندانه‌ترین فرم بیان می‌کند.',
    deliverables: ['تحلیل رقبا و موقعیت برند', 'اتودهای مفهومی و هندسی', 'فایل‌های برداری و شبکه تناسبات'],
    previewImage: STUDIO_MEDIA.journalPenPaper,
    previewAlt: 'نمونه طراحی دست‌نویس و مونوگرام با قلم جوهر',
  },
  {
    number: '02',
    title: 'طراحی هویت بصری',
    englishLabel: 'Visual Identity System',
    description:
      'ساخت یک زبان بصری منسجم شامل پالت رنگ، تایپوگرافی، الگوها و راهنمای جامع استفاده از برند در تمام نقاط تماس.',
    deliverables: ['کتابچه جامع برند (Brand Book)', 'نظام تایپوگرافی فارسی و لاتین', 'راهنمای تصویرسازی و عکاسی'],
    previewImage: STUDIO_MEDIA.caseMonograph,
    previewAlt: 'کتابچه جامع هویت بصری و استانداردهای گرافیکی برند',
  },
  {
    number: '03',
    title: 'طراحی ست اداری و اقلام سازمانی',
    englishLabel: 'Stationery & Collateral',
    description:
      'طراحی کارت ویزیت، سربرگ، پاکت، پوشه و هدایای سازمانی با توجه ویژه به جنس کاغذ، بافت و تکنیک‌های چاپ خاص.',
    deliverables: ['کارت ویزیت و سربرگ', 'پاکت و فولدر ارائه', 'انتخاب متریال و نظارت چاپ'],
    previewImage: STUDIO_MEDIA.workBlackEnvelope,
    previewAlt: 'ست اداری تیره مات با پاکت و پوشه سازمانی',
  },
  {
    number: '04',
    title: 'طراحی بسته‌بندی و لیبل',
    englishLabel: 'Packaging & Labeling',
    description:
      'طراحی تجربه بازگشایی و ساختار بسته‌بندی که محصول را در نگاه اول متمایز کرده و ارزش واقعی برند را منتقل می‌کند.',
    deliverables: ['طراحی لیبل و جعبه محصول', 'انتخاب متریال و قالب برش', 'آماده‌سازی فایل‌های پیش از چاپ'],
    previewImage: STUDIO_MEDIA.workCeramicBottle,
    previewAlt: 'نمونه بسته‌بندی و لیبل بطری لوکس',
  },
  {
    number: '05',
    title: 'طراحی گرافیک و تبلیغات',
    englishLabel: 'Editorial & Campaign Design',
    description:
      'طراحی کاتالوگ، کمپین‌های معرفی، محتوای بصری شبکه‌های اجتماعی و گرافیک نمایشگاهی هماهنگ با هویت برند.',
    deliverables: ['کاتالوگ و بروشورهای اختصاصی', 'اقلام بصری کمپین', 'قالب‌های بصری دیجیتال'],
    previewImage: STUDIO_MEDIA.journalPaperSculpture,
    previewAlt: 'ترکیب‌بندی مینیمال کاغذ و گرافیک چاپی',
  },
];

export interface ProcessStage {
  step: string;
  persianStep: string;
  title: string;
  summary: string;
  detail: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '1',
    persianStep: '۱',
    title: 'ثبت درخواست',
    summary: 'معرفی نیاز و نوع پروژه',
    detail: 'فرم آغاز پروژه را با شرح کوتاهی از برند، اهداف و زمان‌بندی مورد نظرتان ارسال می‌کنید.',
  },
  {
    step: '2',
    persianStep: '۲',
    title: 'بررسی و مشاوره',
    summary: 'بررسی نیازها و راهکارها',
    detail: 'در یک جلسه گفت‌وگوی کوتاه، ماهیت کسب‌وکار، مخاطبان هدف و جهت‌گیری بصری مناسب بررسی می‌شود.',
  },
  {
    step: '3',
    persianStep: '۳',
    title: 'ارائه پیشنهاد',
    summary: 'زمان‌بندی و هزینه',
    detail: 'پروپوزال شفاف شامل محدوده دقیق خدمات، مراحل اجرا، زمان تحویل و برآورد مالی ارائه می‌گردد.',
  },
  {
    step: '4',
    persianStep: '۴',
    title: 'طراحی و توسعه',
    summary: 'اجرای پروژه',
    detail: 'پژوهش بصری، اتودزنی و توسعه مسیر انتخاب‌شده در تعامل مستمر و ارائه پرزنتیشن‌های حرفه‌ای انجام می‌شود.',
  },
  {
    step: '5',
    persianStep: '۵',
    title: 'تحویل نهایی',
    summary: 'تحویل خروجی‌ها',
    detail: 'تمامی فایل‌های استاندارد چاپی و دیجیتال همراه با راهنمای کاربرد برند به صورت کامل تحویل داده می‌شود.',
  },
];
