import { Building2, ExternalLink, Mail, MapPin, Phone, User } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';
import { EnquiryForm } from './EnquiryForm';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green">
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
            <span>{t.contact.eyebrow}</span>
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-charcoal leading-tight">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Side — Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-gray-200/90 bg-brand-bg p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-brand-charcoal">
                  {t.contact.cardHeading}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{t.contact.cardSubtitle}</p>
              </div>

              <dl className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-brand-green">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.contact.labels.business}
                    </dt>
                    <dd className="text-base font-bold text-brand-charcoal">{BUSINESS.name}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-brand-green">
                    <User className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.contact.labels.contactPerson}
                    </dt>
                    <dd className="text-base font-bold text-brand-charcoal">
                      {BUSINESS.proprietor}{' '}
                      <span className="text-sm font-medium text-gray-500">
                        ({t.brand.proprietorRole})
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-brand-green">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.contact.labels.phoneWhatsapp}
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={BUSINESS.phoneHref}
                        className="text-base font-extrabold text-brand-charcoal hover:text-brand-green transition-colors"
                      >
                        {BUSINESS.phoneInternational}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-brand-green">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.contact.labels.email}
                    </dt>
                    <dd className="mt-0.5 break-all">
                      <a
                        href={BUSINESS.emailHref}
                        className="text-sm sm:text-base font-semibold text-brand-charcoal hover:text-brand-green transition-colors"
                      >
                        {BUSINESS.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-brand-green">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.contact.labels.location}
                    </dt>
                    <dd className="text-sm sm:text-base font-medium text-brand-charcoal leading-relaxed">
                      {t.brand.addressLine1}
                      <br />
                      {t.brand.addressLine2}
                    </dd>
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:text-brand-green-dark transition-colors"
                    >
                      <span>{t.contact.viewOnMaps}</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </dl>

              <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white hover:bg-brand-green-dark transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.contact.callNow}</span>
                </a>
                <a
                  href={buildWhatsAppUrl(t.brand.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-charcoal px-4 py-3 text-sm font-bold text-white hover:bg-brand-charcoal-light transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-green" />
                  <span>{t.contact.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
