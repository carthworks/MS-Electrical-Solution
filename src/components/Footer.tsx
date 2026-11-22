import { Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.whyChooseUs, href: '#why-choose-us', id: 'why-choose-us' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

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
            <a href="#home" aria-label={`${BUSINESS.name} — ${t.nav.home}`} className="inline-block">
              <BrandLogo variant="dark" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={buildWhatsAppUrl(t.brand.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.floating.whatsappAria}
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

              <div
                role="group"
                aria-label={t.nav.switchLanguageAria}
                className="ml-1 inline-flex items-center rounded-xl bg-white/10 p-0.5"
              >
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors ${
                    lang === 'en'
                      ? 'bg-brand-yellow text-brand-charcoal'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ta')}
                  aria-pressed={lang === 'ta'}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors ${
                    lang === 'ta'
                      ? 'bg-brand-yellow text-brand-charcoal'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
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
              {t.footer.ourServices}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.services.items.map((service) => (
                <li key={service.id}>
                  <a
                    href={buildWhatsAppUrl(t.brand.serviceWhatsAppMessage(service.title))}
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
              {t.footer.contactDetails}
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
                    {BUSINESS.proprietor} ({t.brand.proprietorRole})
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
                  {t.brand.addressLine1}, {t.brand.addressLine2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.subline}</p>
        </div>
      </div>
    </footer>
  );
}
