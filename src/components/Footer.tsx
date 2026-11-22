import { Mail, MapPin, Phone } from 'lucide-react';
import {
  BUSINESS,
  NAV_ITEMS,
  SERVICES,
  buildServiceWhatsAppUrl,
  buildWhatsAppUrl,
} from '../data/business';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-300 pb-20 sm:pb-0">
      {/* Brand Signature Top Bar */}
      <div className="h-1.5 w-full flex" aria-hidden="true">
        <div className="w-1/2 bg-brand-yellow" />
        <div className="w-1/2 bg-brand-green" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" aria-label={`${BUSINESS.name} — Back to top`} className="inline-block">
              <BrandLogo variant="dark" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Coimbatore-based doorstep electrical service provider delivering safe, dependable
              wiring, repairs, switchboard upgrades, water pump, and industrial EOT crane
              electrical support.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message M S Electrical Solution on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                aria-label={`Call ${BUSINESS.phoneDisplay}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-brand-yellow hover:text-brand-charcoal transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.emailHref}
                aria-label={`Email ${BUSINESS.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-brand-yellow hover:text-brand-charcoal transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-brand-yellow transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={buildServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Details
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-green shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-bold text-white hover:text-brand-yellow transition-colors"
                  >
                    {BUSINESS.phoneInternational}
                  </a>
                  <p className="text-xs text-gray-400">
                    {BUSINESS.proprietor} ({BUSINESS.proprietorRole})
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-green shrink-0 mt-1" aria-hidden="true" />
                <a
                  href={BUSINESS.emailHref}
                  className="text-gray-300 hover:text-brand-yellow transition-colors break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-green shrink-0 mt-1" aria-hidden="true" />
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors leading-relaxed"
                >
                  {BUSINESS.streetAddress}, {BUSINESS.locality}, Tamil Nadu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400">
          <p>&copy; 2026 M S Electrical Solution. All Rights Reserved.</p>
          <p>Doorstep Electrical Services &bull; Coimbatore, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
