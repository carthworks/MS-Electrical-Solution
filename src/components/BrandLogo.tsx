import { useId } from 'react';
import { BUSINESS } from '../data/business';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export function BrandLogo({ variant = 'light', compact = false }: BrandLogoProps) {
  const clipId = useId();
  const isDark = variant === 'dark';

  return (
    <span className="inline-flex items-center gap-3 select-none">
      {/* Business-card faithful circular lightning emblem */}
      <svg
        width={compact ? 38 : 44}
        height={compact ? 38 : 44}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="32" cy="32" r="26" />
          </clipPath>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="28"
          fill={isDark ? '#32363C' : '#FFFFFF'}
          stroke={isDark ? '#454B53' : '#E5E7EB'}
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="32" height="64" fill={isDark ? '#4B525B' : '#24272B'} />
          <rect x="32" y="0" width="32" height="64" fill="#D92D20" />
        </g>
        <path
          d="M36.5 4L18.5 34.5H30.5L26 60L46 28.5H33.5L36.5 4Z"
          fill="#FFFFFF"
        />
      </svg>

      <span className="flex flex-col leading-tight">
        <span
          className={`font-extrabold tracking-tight ${
            compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
          } ${isDark ? 'text-white' : 'text-brand-charcoal'}`}
        >
          <span className="text-brand-green">M S</span> Electrical Solution
        </span>
        <span
          className={`text-[11px] sm:text-xs font-medium tracking-wide ${
            isDark ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {BUSINESS.tagline}
        </span>
      </span>
    </span>
  );
}
