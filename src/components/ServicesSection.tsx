import { Phone } from 'lucide-react';
import { BUSINESS, SERVICES, WORK_SHOWCASE, buildWhatsAppUrl } from '../data/business';
import { ServiceCard } from './ServiceCard';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green">
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
            <span>Our Electrical Services</span>
            <span className="h-1.5 w-6 rounded-full bg-brand-yellow" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-charcoal">
            Electrical Solutions for Every Need
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From small electrical repairs to complete wiring and industrial maintenance, we&apos;ve
            got you covered.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* Balanced Direct-Enquiry Card filling row 3 cleanly on Desktop */}
          <div className="md:col-span-1 lg:col-span-2 rounded-2xl border border-brand-green/25 bg-brand-bg p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-2.5">
              <span className="inline-flex items-center rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-charcoal">
                Custom Electrical Work
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal">
                Need Another Electrical Repair or Maintenance Service?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                Tell us about your electrical issue at home, office, or factory in Coimbatore. We
                provide quick doorstep diagnosis and reliable electrical work.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-green-dark transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-charcoal/15 bg-white px-5 py-3 text-sm font-bold text-brand-charcoal hover:border-brand-green hover:bg-brand-green-soft/60 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-green" />
                <span>WhatsApp Your Requirement</span>
              </a>
            </div>
          </div>
        </div>

        {/* Photographic Workmanship Showcase */}
        <div className="mt-14 pt-12 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">
                Domestic • Commercial • Industrial
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal">
                Practical Workmanship Across Every Setting
              </h3>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Clean wiring standards, safe installations, and attentive troubleshooting across
              Coimbatore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_SHOWCASE.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card"
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={960}
                    height={540}
                    loading="lazy"
                    className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="p-4 sm:p-5">
                  <h4 className="text-base font-bold text-brand-charcoal mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
