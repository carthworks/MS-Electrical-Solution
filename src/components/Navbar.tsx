import { useEffect, useState } from 'react';
import { Languages, Menu, Phone, X } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  const navItems = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.whyChooseUs, href: '#why-choose-us', id: 'why-choose-us' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'services', 'why-choose-us', 'contact'];
    const sectionElements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-sticky border-b border-gray-200/80' : 'border-b border-gray-100'
      }`}
    >
      {/* Signature Yellow + Green brand stripe inspired by the business card */}
      <div className="h-1 w-full flex" aria-hidden="true">
        <div className="w-1/2 bg-brand-yellow" />
        <div className="w-1/2 bg-brand-green" />
      </div>

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-[72px] items-center justify-between gap-3">
          <a
            href="#home"
            aria-label={`${BUSINESS.name} — ${t.nav.home}`}
            className="rounded-lg min-w-0 focus-visible:outline-brand-green"
          >
            <BrandLogo compact />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`whitespace-nowrap px-3 xl:px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-green bg-brand-green-soft'
                      : 'text-brand-charcoal hover:text-brand-green hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right: Language Switcher + Call Now */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <div
              role="group"
              aria-label={t.nav.switchLanguageAria}
              className="inline-flex items-center rounded-xl border border-gray-200 bg-brand-bg p-0.5"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  lang === 'en'
                    ? 'bg-brand-charcoal text-white shadow-xs'
                    : 'text-gray-600 hover:text-brand-charcoal'
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
                    ? 'bg-brand-charcoal text-white shadow-xs'
                    : 'text-gray-600 hover:text-brand-charcoal'
                }`}
              >
                தமிழ்
              </button>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-brand-green px-4 xl:px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-green-dark hover:shadow-md active:scale-[0.99]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile / Tablet Quick Language Toggle + Call + Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              aria-label={t.nav.switchLanguageAria}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-brand-bg px-2.5 py-2 text-xs font-bold text-brand-charcoal hover:border-brand-green transition-colors"
            >
              <Languages className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
              <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            <a
              href={BUSINESS.phoneHref}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-brand-green px-3.5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-green-dark"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              <span>{t.nav.callNow}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-brand-charcoal hover:bg-gray-50 transition-colors"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-gray-100 bg-white shadow-lg"
        >
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto max-w-7xl px-4 py-4 space-y-1"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-green-soft text-brand-green'
                      : 'text-brand-charcoal hover:bg-gray-50 hover:text-brand-green'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3 mt-3 border-t border-gray-100 grid grid-cols-2 gap-2.5">
              <a
                href={BUSINESS.phoneHref}
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white hover:bg-brand-green-dark transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{t.nav.callPhone}</span>
              </a>
              <a
                href={buildWhatsAppUrl(t.brand.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-charcoal/20 bg-white px-4 py-3 text-sm font-bold text-brand-charcoal hover:bg-gray-50 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-green" />
                <span>{t.nav.whatsappUs}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
