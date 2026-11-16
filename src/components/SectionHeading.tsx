import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  englishLabel?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  inverted?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  englishLabel,
  title,
  className = '',
  titleClassName = '',
  inverted = false,
}) => {
  const kickerColor = inverted ? 'text-[#B8B0A4]' : 'text-[#655F56]';
  const titleColor = inverted ? 'text-[#F3EFE8]' : 'text-[#252522]';

  return (
    <div className={className}>
      {(kicker || englishLabel) && (
        <div className={`flex flex-wrap items-center gap-2 text-xs md:text-sm mb-3 ${kickerColor}`}>
          {kicker && <span>{kicker}</span>}
          {kicker && englishLabel && <span aria-hidden="true">·</span>}
          {englishLabel && (
            <span className="font-editorial tracking-widest uppercase text-[12px] md:text-[13px]" dir="ltr">
              {englishLabel}
            </span>
          )}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.35] text-balance ${titleColor} ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
};
