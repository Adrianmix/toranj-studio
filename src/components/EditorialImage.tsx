import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#E5DDD1] ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${imgClassName}`}
        />
      ) : (
        <div
          className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#E5DDD1] to-[#D8D0C5] text-[#655F56]"
          role="img"
          aria-label={alt}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="mb-2 opacity-60"
            aria-hidden="true"
          >
            <path
              d="M16 5C19.5 9.5 23 12 23 16.5C23 20.6 19.9 24 16 27C12.1 24 9 20.6 9 16.5C9 12 12.5 9.5 16 5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-xs font-medium">{fallbackLabel || alt}</span>
        </div>
      )}
    </div>
  );
};
