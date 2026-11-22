import { Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const whatsappHref = buildWhatsAppUrl();

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with M S Electrical Solution on WhatsApp"
        className="hidden sm:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2.5 rounded-full bg-brand-green pl-4 pr-5 py-3.5 text-sm font-bold text-white shadow-lg ring-4 ring-brand-green/20 transition-all duration-200 hover:bg-brand-green-dark hover:scale-[1.03] active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>WhatsApp Us</span>
      </a>

      {/* Mobile Fixed Thumb-Friendly Action Bar (Prominent Call + WhatsApp) */}
      <div
        aria-label="Quick Contact Actions"
        className="sm:hidden fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md px-3 py-2.5 shadow-[0_-4px_20px_rgba(36,39,43,0.1)]"
      >
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call Now</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-charcoal px-4 py-3 text-sm font-bold text-white shadow-sm active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4 text-brand-green" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
