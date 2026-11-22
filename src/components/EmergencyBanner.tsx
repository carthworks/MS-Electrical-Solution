import { Phone, Zap } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

export function EmergencyBanner() {
  return (
    <section
      aria-labelledby="emergency-heading"
      className="relative overflow-hidden bg-brand-green emergency-circuit-bg py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-charcoal/15 backdrop-blur-[1px] border border-white/20 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-charcoal">
              <Zap className="h-3.5 w-3.5 fill-brand-charcoal" aria-hidden="true" />
              <span>24/7 Emergency Electrical Support</span>
            </div>

            <h2
              id="emergency-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
            >
              Facing an Electrical Emergency?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Don&apos;t let electrical problems interrupt your day. Contact us for emergency
              electrical assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-yellow px-6 py-4 text-base font-extrabold text-brand-charcoal shadow-md transition-all hover:bg-[#f2ba00] active:scale-[0.99]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </a>

            <a
              href={buildWhatsAppUrl(BUSINESS.emergencyWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-charcoal px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-brand-charcoal-light active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand-green" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
