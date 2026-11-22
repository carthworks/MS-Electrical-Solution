import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';

const ABOUT_ICONS = [ShieldCheck, Wrench, MapPin] as const;

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-brand-bg py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Electrician Photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card">
                <img
                  src="/images/about-technician.jpg"
                  alt={t.about.imageAlt}
                  width={1000}
                  height={750}
                  loading="lazy"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>

              {/* Clean Floating Info Tag */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:right-5 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-card flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-charcoal">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                    {t.about.badgeTop}
                  </p>
                  <p className="text-sm font-bold text-brand-charcoal">{t.about.badgeBottom}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green">
              <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-charcoal leading-tight">
              {t.about.heading}
            </h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            <ul className="space-y-3 pt-2">
              {t.about.points.map((text, idx) => {
                const Icon = ABOUT_ICONS[idx];
                return (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-green-soft text-brand-green">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-brand-charcoal">
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-charcoal px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-charcoal-light"
              >
                <span>{t.about.exploreServices}</span>
                <ArrowRight className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:text-brand-green-dark transition-colors"
              >
                <span>{t.about.quickAdvice}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
