import {
  ArrowUpRight,
  Cable,
  Cog,
  Droplets,
  Fan,
  RefreshCw,
  Siren,
  SlidersHorizontal,
} from 'lucide-react';
import { type ServiceIconKey, buildWhatsAppUrl } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslatedService } from '../i18n/translations';

const SERVICE_ICONS: Record<ServiceIconKey, typeof Cable> = {
  wiring: Cable,
  fan: Fan,
  emergency: Siren,
  rewiring: RefreshCw,
  switchboard: SlidersHorizontal,
  pump: Droplets,
  crane: Cog,
};

interface ServiceCardProps {
  service: TranslatedService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();
  const Icon = SERVICE_ICONS[service.icon];
  const whatsappUrl = buildWhatsAppUrl(t.brand.serviceWhatsAppMessage(service.title));

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${
        service.isEmergency
          ? 'border-brand-red/25 hover:border-brand-red/50'
          : 'border-gray-200/80 hover:border-brand-green/50'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
              service.isEmergency
                ? 'bg-brand-red-soft text-brand-red group-hover:bg-brand-red group-hover:text-white'
                : 'bg-brand-green-soft text-brand-green group-hover:bg-brand-green group-hover:text-white'
            }`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>

          {service.badge && (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                service.isEmergency
                  ? 'bg-brand-red-soft text-brand-red'
                  : 'bg-brand-yellow-soft text-brand-charcoal border border-brand-yellow/50'
              }`}
            >
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-brand-charcoal mb-2.5 group-hover:text-brand-green transition-colors leading-snug">
          {service.title}
        </h3>

        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.services.enquireAria(service.title)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:text-brand-green-dark transition-colors"
        >
          <span>{t.services.enquireNow}</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
