import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { type Language, type SiteTranslations, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'ms-electrical-lang';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'ta' || urlLang === 'en') {
    return urlLang;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ta' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ta' : 'en');
  }, [lang, setLang]);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';
    document.title = t.seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.seo.description);
    }
  }, [lang, t.seo.description, t.seo.title]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
