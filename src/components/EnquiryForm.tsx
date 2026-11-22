import { type FormEvent, useState } from 'react';
import { AlertCircle, Check, CheckCircle2, Copy, Mail, Send } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '../data/business';
import { useLanguage } from '../i18n/LanguageContext';
import type { SiteTranslations } from '../i18n/translations';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FormValues {
  fullName: string;
  mobile: string;
  service: string;
  address: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  fullName: '',
  mobile: '',
  service: '',
  address: '',
  description: '',
};

function normalizeIndianMobile(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

function validateForm(values: FormValues, errMsgs: SiteTranslations['form']['errors']): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = errMsgs.fullNameRequired;
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = errMsgs.fullNameMin;
  }

  const normalizedMobile = normalizeIndianMobile(values.mobile);
  if (!values.mobile.trim()) {
    errors.mobile = errMsgs.mobileRequired;
  } else if (!/^[6-9]\d{9}$/.test(normalizedMobile)) {
    errors.mobile = errMsgs.mobileInvalid;
  }

  if (!values.service) {
    errors.service = errMsgs.serviceRequired;
  }

  if (!values.address.trim()) {
    errors.address = errMsgs.addressRequired;
  } else if (values.address.trim().length < 3) {
    errors.address = errMsgs.addressMin;
  }

  if (!values.description.trim()) {
    errors.description = errMsgs.descriptionRequired;
  } else if (values.description.trim().length < 10) {
    errors.description = errMsgs.descriptionMin;
  }

  return errors;
}

function buildStructuredEnquiryText(
  values: FormValues,
  successCopy: SiteTranslations['form']['success']
): string {
  const cleanMobile = normalizeIndianMobile(values.mobile);
  return [
    successCopy.summaryHeader,
    '',
    `${successCopy.summaryName}: ${values.fullName.trim()}`,
    `${successCopy.summaryMobile}: +91 ${cleanMobile}`,
    `${successCopy.summaryService}: ${values.service}`,
    `${successCopy.summaryAddress}: ${values.address.trim()}`,
    `${successCopy.summaryProblem}: ${values.description.trim()}`,
  ].join('\n');
}

export function EnquiryForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    whatsappUrl: string;
    mailtoUrl: string;
    summaryText: string;
    service: string;
    name: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateForm(values, t.form.errors);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstErrorField = Object.keys(nextErrors)[0];
      const fieldElement = document.getElementById(`enquiry-${firstErrorField}`);
      fieldElement?.focus();
      return;
    }

    const summaryText = buildStructuredEnquiryText(values, t.form.success);
    const whatsappUrl = buildWhatsAppUrl(summaryText);
    const mailtoUrl = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      `${t.form.success.emailSubjectPrefix} - ${values.service}`
    )}&body=${encodeURIComponent(summaryText)}`;

    setSubmittedData({
      whatsappUrl,
      mailtoUrl,
      summaryText,
      service: values.service,
      name: values.fullName.trim(),
    });
    setErrors({});

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(submittedData.summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmittedData(null);
    setCopied(false);
  };

  if (submittedData) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-green/30 bg-brand-green-soft/60 p-6 sm:p-8 space-y-5"
      >
        <div className="flex items-start gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold text-brand-charcoal">
              {t.form.success.heading}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1 leading-relaxed">
              {t.form.success.bodyPrefix}{' '}
              <span className="font-bold">{submittedData.name}</span>. {t.form.success.bodyMiddle}{' '}
              <span className="font-semibold">{submittedData.service}</span>{' '}
              {t.form.success.bodySuffix}
            </p>
          </div>
        </div>

        <pre className="rounded-xl border border-gray-200 bg-white p-4 text-xs sm:text-sm text-brand-charcoal whitespace-pre-wrap font-sans leading-relaxed">
          {submittedData.summaryText}
        </pre>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={submittedData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-bold text-white hover:bg-brand-green-dark transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>{t.form.success.openWhatsapp}</span>
          </a>

          <a
            href={submittedData.mailtoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-brand-charcoal hover:bg-gray-50 transition-colors"
          >
            <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" />
            <span>{t.form.success.sendEmail}</span>
          </a>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal hover:bg-gray-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-brand-green" aria-hidden="true" />
                <span>{t.form.success.copied}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>{t.form.success.copyDetails}</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-2 border-t border-brand-green/20">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-bold text-brand-charcoal underline underline-offset-4 hover:text-brand-green transition-colors"
          >
            {t.form.success.submitAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-card space-y-5"
    >
      <div className="space-y-1">
        <h3 className="text-xl font-extrabold text-brand-charcoal">{t.form.heading}</h3>
        <p className="text-sm text-gray-500">{t.form.subtitle}</p>
      </div>

      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-brand-red/30 bg-brand-red-soft px-4 py-3 text-sm text-brand-red"
        >
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t.form.errorBanner}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-fullName"
            className="block text-sm font-semibold text-brand-charcoal mb-1.5"
          >
            {t.form.fullNameLabel} <span className="text-brand-red">*</span>
          </label>
          <input
            id="enquiry-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder={t.form.fullNamePlaceholder}
            value={values.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 ${
              errors.fullName
                ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/20'
                : 'border-gray-300 focus:border-brand-green focus:ring-brand-green/20'
            }`}
          />
          {errors.fullName && (
            <p id="error-fullName" className="mt-1.5 text-xs font-medium text-brand-red">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="enquiry-mobile"
            className="block text-sm font-semibold text-brand-charcoal mb-1.5"
          >
            {t.form.mobileLabel} <span className="text-brand-red">*</span>
          </label>
          <input
            id="enquiry-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder={t.form.mobilePlaceholder}
            value={values.mobile}
            onChange={(e) => handleChange('mobile', e.target.value)}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? 'error-mobile' : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 ${
              errors.mobile
                ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/20'
                : 'border-gray-300 focus:border-brand-green focus:ring-brand-green/20'
            }`}
          />
          {errors.mobile && (
            <p id="error-mobile" className="mt-1.5 text-xs font-medium text-brand-red">
              {errors.mobile}
            </p>
          )}
        </div>
      </div>

      {/* Service Required */}
      <div>
        <label
          htmlFor="enquiry-service"
          className="block text-sm font-semibold text-brand-charcoal mb-1.5"
        >
          {t.form.serviceLabel} <span className="text-brand-red">*</span>
        </label>
        <select
          id="enquiry-service"
          name="service"
          required
          value={values.service}
          onChange={(e) => handleChange('service', e.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? 'error-service' : undefined}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-charcoal transition-colors focus:outline-none focus:ring-2 ${
            errors.service
              ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/20'
              : 'border-gray-300 focus:border-brand-green focus:ring-brand-green/20'
          }`}
        >
          <option value="">{t.form.servicePlaceholder}</option>
          {t.services.items.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value={t.form.otherServiceOption}>{t.form.otherServiceOption}</option>
        </select>
        {errors.service && (
          <p id="error-service" className="mt-1.5 text-xs font-medium text-brand-red">
            {errors.service}
          </p>
        )}
      </div>

      {/* Address / Area */}
      <div>
        <label
          htmlFor="enquiry-address"
          className="block text-sm font-semibold text-brand-charcoal mb-1.5"
        >
          {t.form.addressLabel} <span className="text-brand-red">*</span>
        </label>
        <input
          id="enquiry-address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          placeholder={t.form.addressPlaceholder}
          value={values.address}
          onChange={(e) => handleChange('address', e.target.value)}
          aria-invalid={Boolean(errors.address)}
          aria-describedby={errors.address ? 'error-address' : undefined}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 ${
            errors.address
              ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/20'
              : 'border-gray-300 focus:border-brand-green focus:ring-brand-green/20'
          }`}
        />
        {errors.address && (
          <p id="error-address" className="mt-1.5 text-xs font-medium text-brand-red">
            {errors.address}
          </p>
        )}
      </div>

      {/* Description of Problem */}
      <div>
        <label
          htmlFor="enquiry-description"
          className="block text-sm font-semibold text-brand-charcoal mb-1.5"
        >
          {t.form.descriptionLabel} <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="enquiry-description"
          name="description"
          rows={4}
          required
          placeholder={t.form.descriptionPlaceholder}
          value={values.description}
          onChange={(e) => handleChange('description', e.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'error-description' : undefined}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal placeholder:text-gray-400 transition-colors resize-y focus:outline-none focus:ring-2 ${
            errors.description
              ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/20'
              : 'border-gray-300 focus:border-brand-green focus:ring-brand-green/20'
          }`}
        />
        {errors.description && (
          <p id="error-description" className="mt-1.5 text-xs font-medium text-brand-red">
            {errors.description}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-green px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-green-dark hover:shadow-md active:scale-[0.99]"
      >
        <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{t.form.submitCta}</span>
      </button>

      <p className="text-xs text-gray-500 text-center">{t.form.submitNote}</p>
    </form>
  );
}
