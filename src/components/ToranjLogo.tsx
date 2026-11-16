import React from 'react';

interface ToranjLogoProps {
  inverted?: boolean;
  className?: string;
}

export const ToranjLogo: React.FC<ToranjLogoProps> = ({
  inverted = false,
  className = '',
}) => {
  const strokeColor = inverted ? '#F3EFE8' : '#252522';
  const textColor = inverted ? 'text-[#F3EFE8]' : 'text-[#252522]';

  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${textColor} ${className}`}
      dir="ltr"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 4C19.6 8.6 23.5 11.4 23.5 16C23.5 20.6 19.6 23.4 16 28C12.4 23.4 8.5 20.6 8.5 16C8.5 11.4 12.4 8.6 16 4Z"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <path
          d="M16 7.5V24.5"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M11.5 13.5H20.5"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <circle cx="16" cy="17.5" r="2" fill="#A18B70" />
      </svg>
      <span className="font-editorial text-2xl font-medium tracking-tight leading-none">
        Toranj
      </span>
    </span>
  );
};
