import { type TouchEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { BUSINESS, HERO_SLIDES, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

const TRUST_HIGHLIGHTS = [
  {
    label: 'Doorstep Electrical Services',
    icon: MapPin,
  },
  {
    label: 'Experienced Professionals',
    icon: ShieldCheck,
  },
  {
    label: '24/7 Emergency Electrical Support',
    icon: Clock,
  },
];

const SLIDE_INTERVAL_MS = 4800;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(goToNext, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, goToNext, activeIndex]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) {
      goToNext();
    } else {
      goToPrev();
    }
  };

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white electrical-grid-bg border-b border-gray-100"
    >
      {/* Subtle Animated Electrical Circuit Traces Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
        viewBox="0 0 1440 680"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Static subtle circuit lines */}
        <path
          d="M-20 110 H190 L230 150 H410"
          stroke="#16B832"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <path
          d="M1460 560 H1210 L1165 515 H960"
          stroke="#16B832"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <path
          d="M720 -10 V70 L760 110 H940"
          stroke="#FFC400"
          strokeOpacity="0.22"
          strokeWidth="2"
        />

        {/* Animated live current pulses along circuit lines */}
        <path
          d="M-20 110 H190 L230 150 H410"
          stroke="#16B832"
          strokeOpacity="0.55"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-circuit-flow"
        />
        <path
          d="M1460 560 H1210 L1165 515 H960"
          stroke="#FFC400"
          strokeOpacity="0.8"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-circuit-flow-delayed"
        />
        <path
          d="M720 -10 V70 L760 110 H940"
          stroke="#16B832"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-circuit-flow-delayed"
        />

        {/* Subtle circuit terminal nodes */}
        <circle cx="410" cy="150" r="4" fill="#16B832" className="animate-node-blink" />
        <circle cx="960" cy="515" r="4" fill="#FFC400" className="animate-node-blink" />
        <circle cx="940" cy="110" r="3.5" fill="#16B832" className="animate-node-blink" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Availability Badge with Live Electrical Pulse */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-yellow/60 bg-brand-yellow-soft px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-charcoal shadow-xs">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-red" />
              </span>
              <span>Available for Emergency Services</span>
              <Zap
                className="h-3.5 w-3.5 text-brand-green fill-brand-yellow animate-bolt-pulse"
                aria-hidden="true"
              />
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-brand-charcoal leading-[1.14]">
              Reliable Electrical Services,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-green">Right at Your Doorstep.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1 h-2.5 bg-brand-yellow/35 -z-0 rounded-sm"
                />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              From household electrical repairs to office wiring and industrial electrical
              maintenance, M S Electrical Solution delivers dependable electrical services across
              Coimbatore.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={BUSINESS.phoneHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-green px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-green-dark hover:shadow-md active:scale-[0.99]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call Now</span>
                <span className="text-white/90 font-semibold text-sm border-l border-white/30 pl-2.5">
                  {BUSINESS.phoneDisplay}
                </span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-brand-charcoal/15 bg-white px-6 py-3.5 text-base font-bold text-brand-charcoal transition-all hover:border-brand-green hover:bg-brand-green-soft/60 hover:text-brand-charcoal active:scale-[0.99]"
              >
                <WhatsAppIcon className="h-5 w-5 text-brand-green" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <ul className="pt-4 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {TRUST_HIGHLIGHTS.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-brand-charcoal leading-snug">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Interactive Image Slider Column */}
          <div className="lg:col-span-6">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="M S Electrical Solution Coimbatore services showcase"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative"
            >
              {/* Brand Corner Accents */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-3 -right-3 h-24 w-24 rounded-2xl border-4 border-brand-yellow/80 -z-0"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl bg-brand-green/10 -z-0"
              />

              <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card-hover">
                {/* Image Viewport */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-charcoal/5">
                  {HERO_SLIDES.map((slide, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <img
                        key={slide.id}
                        src={slide.image}
                        alt={slide.alt}
                        width={1200}
                        height={900}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        aria-hidden={!isActive}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                          isActive
                            ? 'opacity-100 scale-100 z-10'
                            : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
                        }`}
                      />
                    );
                  })}

                  {/* Top-Left Live Slide Category Pill */}
                  <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-1.5 rounded-full bg-brand-charcoal/85 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                    <Zap
                      className="h-3.5 w-3.5 text-brand-yellow fill-brand-yellow animate-bolt-pulse"
                      aria-hidden="true"
                    />
                    <span>{activeSlide.tag}</span>
                  </div>

                  {/* Top-Right Pause / Play Toggle + Slide Counter */}
                  <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5">
                    <span className="rounded-full bg-brand-charcoal/75 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white tabular-nums">
                      {activeIndex + 1} / {totalSlides}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsPaused((prev) => !prev)}
                      aria-label={isPaused ? 'Resume image slideshow' : 'Pause image slideshow'}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-charcoal/75 backdrop-blur-sm text-white hover:bg-brand-charcoal transition-colors"
                    >
                      {isPaused ? (
                        <Play className="h-3.5 w-3.5 fill-white" aria-hidden="true" />
                      ) : (
                        <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  {/* Prev / Next Navigation Buttons */}
                  <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous service photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-brand-charcoal shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-brand-green active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next service photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-brand-charcoal shadow-md backdrop-blur-sm transition-all hover:bg-white hover:text-brand-green active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {/* Animated Electrical Current Flow Line along bottom of photo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 z-20 h-1 bg-brand-charcoal/40 overflow-hidden"
                  >
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-yellow to-brand-green animate-current-shimmer" />
                  </div>
                </div>

                {/* Grounded Service Caption & Slide Indicator Bar */}
                <div className="bg-brand-charcoal px-4 sm:px-5 py-3.5 text-white space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm sm:text-[15px] font-bold text-white truncate">
                        {activeSlide.caption}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-300">
                        <CheckCircle2
                          className="h-3.5 w-3.5 text-brand-yellow shrink-0"
                          aria-hidden="true"
                        />
                        <span className="truncate">{activeSlide.areaNote}</span>
                      </p>
                    </div>

                    {/* Slide Indicator Pills with Active Timing Progress */}
                    <div
                      role="tablist"
                      aria-label="Choose a service photo"
                      className="flex items-center gap-1.5 shrink-0"
                    >
                      {HERO_SLIDES.map((slide, index) => {
                        const isActive = index === activeIndex;
                        return (
                          <button
                            key={slide.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-label={`View slide ${index + 1}: ${slide.caption}`}
                            onClick={() => setActiveIndex(index)}
                            className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
                              isActive
                                ? 'w-9 bg-white/25'
                                : 'w-2.5 bg-white/30 hover:bg-white/55'
                            }`}
                          >
                            {isActive && (
                              <span
                                key={`${activeIndex}-${isPaused ? 'paused' : 'playing'}`}
                                className={`absolute inset-0 rounded-full bg-brand-yellow ${
                                  !isPaused && !prefersReducedMotion
                                    ? 'animate-slide-progress'
                                    : ''
                                }`}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
