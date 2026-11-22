import { type FormEvent, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Send,
} from 'lucide-react';
import { BUSINESS, SERVICES, buildWhatsAppUrl } from '../data/business';
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

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  }

  const normalizedMobile = normalizeIndianMobile(values.mobile);
  if (!values.mobile.trim()) {
    errors.mobile = 'Please enter your mobile number.';
  } else if (!/^[6-9]\d{9}$/.test(normalizedMobile)) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number (e.g., 9994505144).';
  }

  if (!values.service) {
    errors.service = 'Please select the electrical service you need.';
  }

  if (!values.address.trim()) {
    errors.address = 'Please enter your address or area in Coimbatore.';
  } else if (values.address.trim().length < 3) {
    errors.address = 'Please enter a clearer locality or address.';
  }

  if (!values.description.trim()) {
    errors.description = 'Please briefly describe the electrical issue or work needed.';
  } else if (values.description.trim().length < 10) {
    errors.description = 'Please provide at least a short 10-character description.';
  }

  return errors;
}

function buildStructuredEnquiryText(values: FormValues): string {
  const cleanMobile = normalizeIndianMobile(values.mobile);
  return [
    `Hello ${BUSINESS.name}, I have a new service enquiry from your website:`,
    '',
    `Name: ${values.fullName.trim()}`,
    `Mobile: +91 ${cleanMobile}`,
    `Service Required: ${values.service}`,
    `Address / Area: ${values.address.trim()}`,
    `Problem Description: ${values.description.trim()}`,
  ].join('\n');
}

export function EnquiryForm() {
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
    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstErrorField = Object.keys(nextErrors)[0];
      const fieldElement = document.getElementById(`enquiry-${firstErrorField}`);
      fieldElement?.focus();
      return;
    }

    const summaryText = buildStructuredEnquiryText(values);
    const whatsappUrl = buildWhatsAppUrl(summaryText);
    const mailtoUrl = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      `Electrical Service Enquiry - ${values.service}`
    )}&body=${encodeURIComponent(summaryText)}`;

    setSubmittedData({
      whatsappUrl,
      mailtoUrl,
      summaryText,
      service: values.service,
      name: values.fullName.trim(),
    });
    setErrors({});

    // Trigger WhatsApp workflow directly on user submit gesture
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
              Enquiry Ready to Send on WhatsApp
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-1 leading-relaxed">
              Thank you, <span className="font-bold">{submittedData.name}</span>. Your{' '}
              <span className="font-semibold">{submittedData.service}</span> enquiry has been
              formatted for WhatsApp. Tap <span className="font-semibold">Send</span> in WhatsApp
              so our team can contact you promptly.
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
            <span>Open WhatsApp Chat</span>
          </a>

          <a
            href={submittedData.mailtoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-brand-charcoal hover:bg-gray-50 transition-colors"
          >
            <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" />
            <span>Send via Email Instead</span>
          </a>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal hover:bg-gray-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-brand-green" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>Copy Details</span>
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
            Submit another enquiry
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
        <h3 className="text-xl font-extrabold text-brand-charcoal">Send a Service Enquiry</h3>
        <p className="text-sm text-gray-500">
          Fill out the details below to send your request directly to our WhatsApp service desk.
        </p>
      </div>

      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-brand-red/30 bg-brand-red-soft px-4 py-3 text-sm text-brand-red"
        >
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>Please fix the highlighted fields below before submitting your enquiry.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-fullName"
            className="block text-sm font-semibold text-brand-charcoal mb-1.5"
          >
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="enquiry-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
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
            Mobile Number <span className="text-brand-red">*</span>
          </label>
          <input
            id="enquiry-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="10-digit mobile number"
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
          Service Required <span className="text-brand-red">*</span>
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
          <option value="">Select an electrical service...</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other Electrical Service">Other Electrical Service</option>
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
          Address / Area <span className="text-brand-red">*</span>
        </label>
        <input
          id="enquiry-address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          placeholder="e.g., Gandhipuram, RS Puram, Peelamedu, Coimbatore"
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
          Description of Problem <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="enquiry-description"
          name="description"
          rows={4}
          required
          placeholder="Describe the electrical issue, appliance, or installation requirement..."
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
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>Submit Enquiry via WhatsApp</span>
      </button>

      <p className="text-xs text-gray-500 text-center">
        Opens WhatsApp with your prefilled details. Email fallback is also provided after submission.
      </p>
    </form>
  );
}
