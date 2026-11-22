import { Clock, Home, Layers, UserCheck } from 'lucide-react';
import type { WhyChooseUsItem } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';

const WHY_ICONS: Record<WhyChooseUsItem['icon'], typeof UserCheck> = {
  professionals: UserCheck,
  doorstep: Home,
  solutions: Layers,
  emergency: Clock,
};

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-choose-us"
      className="bg-brand-bg py-16 sm:py-20 lg:py-24 border-b border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green">
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
            <span>{t.whyChooseUs.eyebrow}</span>
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-charcoal leading-tight">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">{t.whyChooseUs.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.items.map((item) => {
            const Icon = WHY_ICONS[item.icon];
            const isEmergency = item.icon === 'emergency';

            return (
              <div
                key={item.icon}
                className="group relative rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                    isEmergency
                      ? 'bg-brand-red-soft text-brand-red'
                      : 'bg-brand-yellow-soft text-brand-charcoal border border-brand-yellow/50'
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-brand-charcoal mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
