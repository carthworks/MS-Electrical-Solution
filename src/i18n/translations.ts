import type { ServiceIconKey, WhyChooseUsItem } from '../data/business';

export type Language = 'en' | 'ta';

export interface TranslatedService {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
  badge?: string;
  isEmergency?: boolean;
}

export interface TranslatedHeroSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  caption: string;
  areaNote: string;
}

export interface TranslatedShowcaseItem {
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export interface TranslatedWhyItem {
  title: string;
  description: string;
  icon: WhyChooseUsItem['icon'];
}

export interface SiteTranslations {
  seo: {
    title: string;
    description: string;
  };
  skipToContent: string;
  brand: {
    tagline: string;
    proprietorRole: string;
    addressLine1: string;
    addressLine2: string;
    cityState: string;
    defaultWhatsAppMessage: string;
    emergencyWhatsAppMessage: string;
    serviceWhatsAppMessage: (serviceTitle: string) => string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    whyChooseUs: string;
    contact: string;
    callNow: string;
    callPhone: string;
    whatsappUs: string;
    openMenu: string;
    closeMenu: string;
    switchLanguageAria: string;
  };
  hero: {
    availabilityBadge: string;
    headingStart: string;
    headingHighlight: string;
    subtitle: string;
    callNow: string;
    whatsappUs: string;
    trustHighlights: [string, string, string];
    carouselLabel: string;
    prevSlide: string;
    nextSlide: string;
    pauseSlideshow: string;
    resumeSlideshow: string;
    chooseSlide: string;
    slides: TranslatedHeroSlide[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    points: [string, string, string];
    exploreServices: string;
    quickAdvice: string;
    badgeTop: string;
    badgeBottom: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    enquireNow: string;
    enquireAria: (serviceTitle: string) => string;
    items: TranslatedService[];
    customBadge: string;
    customHeading: string;
    customBody: string;
    customCallCta: string;
    customWhatsappCta: string;
    showcaseEyebrow: string;
    showcaseHeading: string;
    showcaseNote: string;
    showcaseItems: TranslatedShowcaseItem[];
  };
  whyChooseUs: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: TranslatedWhyItem[];
  };
  emergency: {
    badge: string;
    heading: string;
    subtitle: string;
    callCta: string;
    whatsappCta: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cardHeading: string;
    cardSubtitle: string;
    labels: {
      business: string;
      contactPerson: string;
      phoneWhatsapp: string;
      email: string;
      location: string;
    };
    viewOnMaps: string;
    callNow: string;
    whatsapp: string;
  };
  form: {
    heading: string;
    subtitle: string;
    errorBanner: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    otherServiceOption: string;
    addressLabel: string;
    addressPlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submitCta: string;
    submitNote: string;
    errors: {
      fullNameRequired: string;
      fullNameMin: string;
      mobileRequired: string;
      mobileInvalid: string;
      serviceRequired: string;
      addressRequired: string;
      addressMin: string;
      descriptionRequired: string;
      descriptionMin: string;
    };
    success: {
      heading: string;
      bodyPrefix: string;
      bodyMiddle: string;
      bodySuffix: string;
      openWhatsapp: string;
      sendEmail: string;
      copyDetails: string;
      copied: string;
      submitAnother: string;
      summaryHeader: string;
      summaryName: string;
      summaryMobile: string;
      summaryService: string;
      summaryAddress: string;
      summaryProblem: string;
      emailSubjectPrefix: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    ourServices: string;
    contactDetails: string;
    copyright: string;
    subline: string;
  };
  floating: {
    whatsappLabel: string;
    whatsappAria: string;
    mobileCall: string;
    mobileWhatsapp: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  en: {
    seo: {
      title: 'M S Electrical Solution | Electrician & Electrical Services in Coimbatore',
      description:
        'Looking for reliable electrical services in Coimbatore? M S Electrical Solution offers home and office wiring, fan repairs, rewiring, switchboard upgrades, water pump services and emergency electrical support.',
    },
    skipToContent: 'Skip to main content',
    brand: {
      tagline: 'Doorstep Electrical Services',
      proprietorRole: 'Proprietor',
      addressLine1: '5th Street Ext, Subbana Gounder Layout',
      addressLine2: 'Gandhipuram, Coimbatore - 641012, Tamil Nadu',
      cityState: 'Coimbatore, Tamil Nadu',
      defaultWhatsAppMessage:
        'Hello M S Electrical Solution, I need electrical service in Coimbatore. Please contact me.',
      emergencyWhatsAppMessage:
        'Hello M S Electrical Solution, I need urgent 24/7 emergency electrical assistance in Coimbatore. Please contact me immediately.',
      serviceWhatsAppMessage: (serviceTitle: string) =>
        `Hello M S Electrical Solution, I would like to enquire about ${serviceTitle} in Coimbatore. Please contact me.`,
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      whyChooseUs: 'Why Choose Us',
      contact: 'Contact',
      callNow: 'Call Now',
      callPhone: 'Call 9994505144',
      whatsappUs: 'WhatsApp Us',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchLanguageAria: 'Switch website language',
    },
    hero: {
      availabilityBadge: 'Available for Emergency Services',
      headingStart: 'Reliable Electrical Services,',
      headingHighlight: 'Right at Your Doorstep.',
      subtitle:
        'From household electrical repairs to office wiring and industrial electrical maintenance, M S Electrical Solution delivers dependable electrical services across Coimbatore.',
      callNow: 'Call Now',
      whatsappUs: 'WhatsApp Us',
      trustHighlights: [
        'Doorstep Electrical Services',
        'Experienced Professionals',
        '24/7 Emergency Electrical Support',
      ],
      carouselLabel: 'M S Electrical Solution Coimbatore services showcase',
      prevSlide: 'Previous service photo',
      nextSlide: 'Next service photo',
      pauseSlideshow: 'Pause image slideshow',
      resumeSlideshow: 'Resume image slideshow',
      chooseSlide: 'Choose a service photo',
      slides: [
        {
          id: 'residential-switchboard',
          image: '/images/hero-switchboard.jpg',
          alt: 'Professional electrician from M S Electrical Solution inspecting a residential electrical switchboard and MCB distribution box in Coimbatore',
          tag: 'Home • Office • Industrial',
          caption: 'Switchboard Diagnostics & Doorstep Electrical Repairs',
          areaNote: 'Serving Gandhipuram & All Areas of Coimbatore',
        },
        {
          id: 'wiring-distribution',
          image: '/images/work-wiring-panel.jpg',
          alt: 'Neatly organized electrical wiring and modular MCB circuit breaker distribution panel installed in Coimbatore',
          tag: 'Wiring & Rewiring',
          caption: 'Domestic, Office Wiring & Old House Rewiring',
          areaNote: 'Safe, Organized Circuit & Distribution Panel Work',
        },
        {
          id: 'ceiling-fan-service',
          image: '/images/work-ceiling-fan.jpg',
          alt: 'Coimbatore electrician safely installing a modern ceiling fan inside a residential living room',
          tag: 'Doorstep Maintenance',
          caption: 'Ceiling & Exhaust Fan Installation and Repair',
          areaNote: 'Quick Doorstep Appliance & Fixture Support',
        },
        {
          id: 'industrial-eot-crane',
          image: '/images/work-eot-crane.jpg',
          alt: 'Industrial electrical technician inspecting an overhead EOT crane electrical control panel in Coimbatore',
          tag: 'Industrial Electricals',
          caption: 'EOT Crane Electrical Maintenance & Troubleshooting',
          areaNote: 'Reliable Workshop & Industrial Electrical Care',
        },
      ],
    },
    about: {
      eyebrow: 'About Us',
      heading: 'Your Trusted Electrical Service Partner in Coimbatore',
      paragraph1:
        'M S Electrical Solution is a Coimbatore-based doorstep electrical service provider. Electricity is an essential part of everyday life, and we understand how important safe and reliable electrical systems are for homes and businesses.',
      paragraph2:
        'Our experienced professionals handle a wide range of electrical work and household maintenance requirements, providing convenient and dependable service at your doorstep.',
      points: [
        'Safety-first workmanship using proper testing tools and insulated equipment',
        'Residential, commercial office, and industrial electrical maintenance under one roof',
        'Based in Gandhipuram, Coimbatore — doorstep service across the city',
      ],
      exploreServices: 'Explore Our Services',
      quickAdvice: 'Need quick advice? Call 9994505144',
      badgeTop: 'Coimbatore Doorstep Team',
      badgeBottom: 'Safe & Dependable Electrical Care',
      imageAlt:
        'Experienced electrical technician wearing safety glasses and insulated gloves preparing electrical testing tools',
    },
    services: {
      eyebrow: 'Our Electrical Services',
      heading: 'Electrical Solutions for Every Need',
      subtitle:
        "From small electrical repairs to complete wiring and industrial maintenance, we've got you covered.",
      enquireNow: 'Enquire Now',
      enquireAria: (serviceTitle: string) => `Enquire now about ${serviceTitle} on WhatsApp`,
      items: [
        {
          id: 'domestic-office-wiring',
          title: 'Domestic & Office Wiring',
          description:
            'Electrical wiring installation, maintenance and repair for homes and offices.',
          icon: 'wiring',
        },
        {
          id: 'ceiling-exhaust-fan',
          title: 'Ceiling & Exhaust Fan Services',
          description:
            'Installation, repair and replacement of ceiling fans and exhaust fans.',
          icon: 'fan',
        },
        {
          id: 'emergency-electrical',
          title: '24/7 Emergency Electrical Services',
          description: 'Electrical emergency assistance for urgent electrical problems.',
          icon: 'emergency',
          badge: '24/7 Urgent',
          isEmergency: true,
        },
        {
          id: 'old-house-rewiring',
          title: 'Old House Rewiring',
          description:
            'Complete rewiring solutions and electrical system upgrades for older buildings.',
          icon: 'rewiring',
        },
        {
          id: 'switchboard-upgrades',
          title: 'Switchboard Upgrades',
          description:
            'Switchboard alterations, upgrades and electrical point improvements.',
          icon: 'switchboard',
        },
        {
          id: 'water-pump-services',
          title: 'Water Pump Services',
          description: 'Water pump installation, repair and alarm system installation.',
          icon: 'pump',
        },
        {
          id: 'eot-crane-services',
          title: 'EOT Crane Services',
          description:
            'Electrical maintenance, troubleshooting and repair services for EOT cranes.',
          icon: 'crane',
          badge: 'Industrial',
        },
      ],
      customBadge: 'Custom Electrical Work',
      customHeading: 'Need Another Electrical Repair or Maintenance Service?',
      customBody:
        'Tell us about your electrical issue at home, office, or factory in Coimbatore. We provide quick doorstep diagnosis and reliable electrical work.',
      customCallCta: 'Call 9994505144',
      customWhatsappCta: 'WhatsApp Your Requirement',
      showcaseEyebrow: 'Domestic • Commercial • Industrial',
      showcaseHeading: 'Practical Workmanship Across Every Setting',
      showcaseNote:
        'Clean wiring standards, safe installations, and attentive troubleshooting across Coimbatore.',
      showcaseItems: [
        {
          title: 'Wiring & Distribution Panels',
          caption:
            'Clean, safety-compliant MCB panels and organized wiring for homes & offices.',
          image: '/images/work-wiring-panel.jpg',
          alt: 'Neatly organized residential and commercial electrical wiring inside a modern MCB distribution panel',
        },
        {
          title: 'Ceiling & Exhaust Fan Fitting',
          caption: 'Secure mounting, regulator setup, and dependable repair at your doorstep.',
          image: '/images/work-ceiling-fan.jpg',
          alt: 'Professional electrician installing a modern ceiling fan inside a bright home in Coimbatore',
        },
        {
          title: 'Industrial EOT Crane Support',
          caption:
            'Control panel diagnostics, pendant repairs, and preventive crane electrical maintenance.',
          image: '/images/work-eot-crane.jpg',
          alt: 'Electrical technician inspecting an industrial EOT overhead crane electrical control panel with safety gear',
        },
      ],
    },
    whyChooseUs: {
      eyebrow: 'Why Choose Us',
      heading: 'Why Customers Choose M S Electrical Solution',
      subtitle:
        'Dependable workmanship, prompt doorstep support, and safe electrical solutions for Coimbatore homes and workplaces.',
      items: [
        {
          title: 'Experienced Professionals',
          description:
            'Skilled technicians who diagnose faults accurately and carry out every job with proper tools and safety practices.',
          icon: 'professionals',
        },
        {
          title: 'Doorstep Service',
          description:
            'Convenient electrical support delivered directly to your home, office, or workshop across Coimbatore.',
          icon: 'doorstep',
        },
        {
          title: 'Wide Range of Electrical Solutions',
          description:
            'From everyday fan and switchboard repairs to complete house rewiring, water pumps, and EOT cranes.',
          icon: 'solutions',
        },
        {
          title: 'Emergency Electrical Assistance – 24/7',
          description:
            'Round-the-clock support when sudden power failures, short circuits, or tripping breakers disrupt your day.',
          icon: 'emergency',
        },
      ],
    },
    emergency: {
      badge: '24/7 Emergency Electrical Support',
      heading: 'Facing an Electrical Emergency?',
      subtitle:
        "Don't let electrical problems interrupt your day. Contact us for emergency electrical assistance.",
      callCta: 'Call 9994505144',
      whatsappCta: 'WhatsApp Now',
    },
    contact: {
      eyebrow: 'Contact Us',
      heading: "Let's Solve Your Electrical Problems",
      subtitle:
        'Call us directly, message on WhatsApp, or send your enquiry below for doorstep electrical service in Coimbatore.',
      cardHeading: 'Direct Contact Details',
      cardSubtitle:
        'Reach M S Electrical Solution directly for bookings and emergency support.',
      labels: {
        business: 'Business',
        contactPerson: 'Contact Person',
        phoneWhatsapp: 'Phone & WhatsApp',
        email: 'Email',
        location: 'Location',
      },
      viewOnMaps: 'View Location on Google Maps',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
    },
    form: {
      heading: 'Send a Service Enquiry',
      subtitle:
        'Fill out the details below to send your request directly to our WhatsApp service desk.',
      errorBanner:
        'Please fix the highlighted fields below before submitting your enquiry.',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Your full name',
      mobileLabel: 'Mobile Number',
      mobilePlaceholder: '10-digit mobile number',
      serviceLabel: 'Service Required',
      servicePlaceholder: 'Select an electrical service...',
      otherServiceOption: 'Other Electrical Service',
      addressLabel: 'Address / Area',
      addressPlaceholder: 'e.g., Gandhipuram, RS Puram, Peelamedu, Coimbatore',
      descriptionLabel: 'Description of Problem',
      descriptionPlaceholder:
        'Describe the electrical issue, appliance, or installation requirement...',
      submitCta: 'Submit Enquiry via WhatsApp',
      submitNote:
        'Opens WhatsApp with your prefilled details. Email fallback is also provided after submission.',
      errors: {
        fullNameRequired: 'Please enter your full name.',
        fullNameMin: 'Name must be at least 2 characters.',
        mobileRequired: 'Please enter your mobile number.',
        mobileInvalid: 'Enter a valid 10-digit Indian mobile number (e.g., 9994505144).',
        serviceRequired: 'Please select the electrical service you need.',
        addressRequired: 'Please enter your address or area in Coimbatore.',
        addressMin: 'Please enter a clearer locality or address.',
        descriptionRequired: 'Please briefly describe the electrical issue or work needed.',
        descriptionMin: 'Please provide at least a short 10-character description.',
      },
      success: {
        heading: 'Enquiry Ready to Send on WhatsApp',
        bodyPrefix: 'Thank you,',
        bodyMiddle: 'Your',
        bodySuffix:
          'enquiry has been formatted for WhatsApp. Tap Send in WhatsApp so our team can contact you promptly.',
        openWhatsapp: 'Open WhatsApp Chat',
        sendEmail: 'Send via Email Instead',
        copyDetails: 'Copy Details',
        copied: 'Copied',
        submitAnother: 'Submit another enquiry',
        summaryHeader:
          'Hello M S Electrical Solution, I have a new service enquiry from your website:',
        summaryName: 'Name',
        summaryMobile: 'Mobile',
        summaryService: 'Service Required',
        summaryAddress: 'Address / Area',
        summaryProblem: 'Problem Description',
        emailSubjectPrefix: 'Electrical Service Enquiry',
      },
    },
    footer: {
      description:
        'Coimbatore-based doorstep electrical service provider delivering safe, dependable wiring, repairs, switchboard upgrades, water pump, and industrial EOT crane electrical support.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactDetails: 'Contact Details',
      copyright: '© 2026 M S Electrical Solution. All Rights Reserved.',
      subline: 'Doorstep Electrical Services • Coimbatore, Tamil Nadu',
    },
    floating: {
      whatsappLabel: 'WhatsApp Us',
      whatsappAria: 'Chat with M S Electrical Solution on WhatsApp',
      mobileCall: 'Call Now',
      mobileWhatsapp: 'WhatsApp',
    },
  },

  ta: {
    seo: {
      title: 'M S Electrical Solution | கோவையில் எலக்ட்ரீஷியன் & மின்சார சேவைகள்',
      description:
        'கோவையில் நம்பகமான மின்சார சேவைகள் வேண்டுமா? M S Electrical Solution வீடு மற்றும் அலுவலக வயரிங், ஃபேன் பழுதுபார்ப்பு, பழைய வீடு ரீவயரிங், சுவிட்ச்போர்டு மேம்பாடு, வாட்டர் பம்ப், EOT கிரேன் மற்றும் 24/7 அவசர மின்சார சேவைகளை வழங்குகிறது.',
    },
    skipToContent: 'முக்கிய உள்ளடக்கத்திற்கு செல்லவும்',
    brand: {
      tagline: 'வீட்டு வாசலில் மின்சார சேவைகள்',
      proprietorRole: 'உரிமையாளர்',
      addressLine1: '5-வது தெரு விரிவாக்கம், சுப்பண்ண கவுண்டர் லேஅவுட்',
      addressLine2: 'காந்திபுரம், கோயம்புத்தூர் - 641012, தமிழ்நாடு',
      cityState: 'கோயம்புத்தூர், தமிழ்நாடு',
      defaultWhatsAppMessage:
        'வணக்கம் M S Electrical Solution, கோவையில் எனக்கு மின்சார சேவை தேவை. தயவுசெய்து தொடர்பு கொள்ளவும்.',
      emergencyWhatsAppMessage:
        'வணக்கம் M S Electrical Solution, கோவையில் 24/7 அவசர மின்சார உதவி தேவை. உடனடியாக தொடர்பு கொள்ளவும்.',
      serviceWhatsAppMessage: (serviceTitle: string) =>
        `வணக்கம் M S Electrical Solution, கோவையில் "${serviceTitle}" சேவை குறித்து விசாரிக்க விரும்புகிறேன். தயவுசெய்து தொடர்பு கொள்ளவும்.`,
    },
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      services: 'சேவைகள்',
      whyChooseUs: 'எங்கள் சிறப்பு',
      contact: 'தொடர்பு',
      callNow: 'அழைக்கவும்',
      callPhone: '9994505144 அழைக்க',
      whatsappUs: 'WhatsApp',
      openMenu: 'வழிசெலுத்தல் மெனுவை திறக்கவும்',
      closeMenu: 'வழிசெலுத்தல் மெனுவை மூடவும்',
      switchLanguageAria: 'மொழியை மாற்றவும் (English / தமிழ்)',
    },
    hero: {
      availabilityBadge: 'அவசர மின்சார சேவைகளுக்கு 24/7 தயார்',
      headingStart: 'நம்பகமான மின்சார சேவைகள்,',
      headingHighlight: 'உங்கள் வீட்டு வாசலிலேயே.',
      subtitle:
        'வீட்டு மின்சார பழுதுபார்ப்பு முதல் அலுவலக வயரிங் மற்றும் தொழிற்சாலை மின்சார பராமரிப்பு வரை, கோவை முழுவதும் நம்பகமான சேவைகளை M S Electrical Solution வழங்குகிறது.',
      callNow: 'அழைக்கவும்',
      whatsappUs: 'WhatsApp செய்தி',
      trustHighlights: [
        'வீட்டு வாசலில் மின்சார சேவைகள்',
        'அனுபவமிக்க மின்சார நிபுணர்கள்',
        '24/7 அவசர மின்சார உதவி',
      ],
      carouselLabel: 'M S Electrical Solution கோவை மின்சார சேவைகள் காட்சி',
      prevSlide: 'முந்தைய படம்',
      nextSlide: 'அடுத்த படம்',
      pauseSlideshow: 'படக்காட்சியை நிறுத்தவும்',
      resumeSlideshow: 'படக்காட்சியை தொடரவும்',
      chooseSlide: 'சேவை படத்தை தேர்ந்தெடுக்கவும்',
      slides: [
        {
          id: 'residential-switchboard',
          image: '/images/hero-switchboard.jpg',
          alt: 'கோவையில் வீட்டு சுவிட்ச்போர்டு மற்றும் MCB பாக்ஸை பரிசோதிக்கும் M S Electrical Solution மின்சார நிபுணர்',
          tag: 'வீடு • அலுவலகம் • தொழிற்சாலை',
          caption: 'சுவிட்ச்போர்டு பரிசோதனை & வீட்டு வாசல் மின்சார பழுதுபார்ப்பு',
          areaNote: 'காந்திபுரம் & கோயம்புத்தூர் முழுவதும் சேவை',
        },
        {
          id: 'wiring-distribution',
          image: '/images/work-wiring-panel.jpg',
          alt: 'கோவையில் நேர்த்தியாக அமைக்கப்பட்ட மின்சார வயரிங் மற்றும் MCB டிஸ்ட்ரிபியூஷன் பேனல்',
          tag: 'வயரிங் & ரீவயரிங்',
          caption: 'வீடு, அலுவலக வயரிங் & பழைய வீடு ரீவயரிங்',
          areaNote: 'பாதுகாப்பான மற்றும் நேர்த்தியான சர்க்யூட் & பேனல் வேலை',
        },
        {
          id: 'ceiling-fan-service',
          image: '/images/work-ceiling-fan.jpg',
          alt: 'கோவை வீட்டில் புதிய சீலிங் ஃபேனை பாதுகாப்பாக பொருத்தும் எலக்ட்ரீஷியன்',
          tag: 'வீட்டு பராமரிப்பு',
          caption: 'சீலிங் ஃபேன் & எக்ஸாஸ்ட் ஃபேன் பொருத்துதல் மற்றும் பழுதுபார்ப்பு',
          areaNote: 'விரைவான வீட்டு மின்சாதன சேவைகள்',
        },
        {
          id: 'industrial-eot-crane',
          image: '/images/work-eot-crane.jpg',
          alt: 'கோவை தொழிற்சாலையில் EOT கிரேன் மின்சார கண்ட்ரோல் பேனலை பரிசோதிக்கும் நிபுணர்',
          tag: 'தொழிற்சாலை சேவைகள்',
          caption: 'EOT கிரேன் மின்சார பராமரிப்பு & பழுதுநீக்கம்',
          areaNote: 'நம்பகமான வொர்க்ஷாப் & தொழிற்சாலை மின்சார பராமரிப்பு',
        },
      ],
    },
    about: {
      eyebrow: 'எங்களைப் பற்றி',
      heading: 'கோவையில் உங்கள் நம்பகமான மின்சார சேவை கூட்டாளர்',
      paragraph1:
        'M S Electrical Solution என்பது கோயம்புத்தூரை மையமாகக் கொண்ட வீட்டு வாசல் மின்சார சேவை நிறுவனமாகும். மின்சாரம் நம் அன்றாட வாழ்வின் அத்தியாவசிய பகுதி என்பதால், வீடுகள் மற்றும் வணிக நிறுவனங்களுக்கு பாதுகாப்பான மற்றும் நம்பகமான மின் அமைப்புகள் எவ்வளவு முக்கியம் என்பதை நாங்கள் நன்கு அறிவோம்.',
      paragraph2:
        'எங்கள் அனுபவமிக்க நிபுணர்கள் அனைத்து வகையான மின்சார வேலைகள் மற்றும் வீட்டு பராமரிப்பு தேவைகளையும் உங்கள் வீட்டு வாசலிலேயே எளிதாகவும் நம்பகமாகவும் செய்து தருகின்றனர்.',
      points: [
        'சரியான பரிசோதனை கருவிகள் மற்றும் பாதுகாப்பு உபகரணங்களுடன் தரமான வேலை',
        'வீடு, அலுவலகம் மற்றும் தொழிற்சாலை மின்சார பராமரிப்பு ஒரே இடத்தில்',
        'காந்திபுரம், கோவையை மையமாகக் கொண்டு நகர் முழுவதும் வீட்டு வாசல் சேவை',
      ],
      exploreServices: 'எங்கள் சேவைகளைப் பார்க்க',
      quickAdvice: 'உடனடி ஆலோசனைக்கு அழைக்கவும்: 9994505144',
      badgeTop: 'கோவை வீட்டு வாசல் சேவை குழு',
      badgeBottom: 'பாதுகாப்பான & நம்பகமான மின்சார பராமரிப்பு',
      imageAlt:
        'பாதுகாப்பு கண்ணாடி மற்றும் கையுறைகளுடன் மல்டிமீட்டர் பரிசோதனை செய்யும் அனுபவமிக்க மின்சார நிபுணர்',
    },
    services: {
      eyebrow: 'எங்கள் மின்சார சேவைகள்',
      heading: 'அனைத்து தேவைகளுக்கும் மின்சார தீர்வுகள்',
      subtitle:
        'சிறிய மின்சார பழுதுபார்ப்பு முதல் முழுமையான வயரிங் மற்றும் தொழிற்சாலை பராமரிப்பு வரை அனைத்து சேவைகளும் எங்களிடம் உள்ளன.',
      enquireNow: 'விசாரிக்கவும்',
      enquireAria: (serviceTitle: string) => `${serviceTitle} குறித்து WhatsApp-ல் விசாரிக்கவும்`,
      items: [
        {
          id: 'domestic-office-wiring',
          title: 'வீடு & அலுவலக வயரிங்',
          description:
            'வீடுகள் மற்றும் அலுவலகங்களுக்கான புதிய மின்சார வயரிங், பராமரிப்பு மற்றும் பழுதுபார்ப்பு சேவைகள்.',
          icon: 'wiring',
        },
        {
          id: 'ceiling-exhaust-fan',
          title: 'சீலிங் & எக்ஸாஸ்ட் ஃபேன் சேவைகள்',
          description:
            'சீலிங் ஃபேன் மற்றும் எக்ஸாஸ்ட் ஃபேன் பொருத்துதல், பழுதுபார்ப்பு மற்றும் மாற்றம்.',
          icon: 'fan',
        },
        {
          id: 'emergency-electrical',
          title: '24/7 அவசர மின்சார சேவைகள்',
          description:
            'திடீர் மின் தடை மற்றும் அவசர மின்சார கோளாறுகளுக்கு உடனடி உதவி.',
          icon: 'emergency',
          badge: '24/7 அவசரம்',
          isEmergency: true,
        },
        {
          id: 'old-house-rewiring',
          title: 'பழைய வீடு ரீவயரிங்',
          description:
            'பழைய கட்டிடங்களுக்கு முழுமையான ரீவயரிங் மற்றும் பாதுகாப்பான மின் அமைப்பு மேம்பாடு.',
          icon: 'rewiring',
        },
        {
          id: 'switchboard-upgrades',
          title: 'சுவிட்ச்போர்டு மேம்பாடு',
          description:
            'சுவிட்ச்போர்டு மாற்றங்கள், மாடுலர் மேம்பாடு மற்றும் கூடுதல் மின் இணைப்பு பணிகள்.',
          icon: 'switchboard',
        },
        {
          id: 'water-pump-services',
          title: 'வாட்டர் பம்ப் சேவைகள்',
          description:
            'தண்ணீர் மோட்டார் பம்ப் பொருத்துதல், பழுதுபார்ப்பு மற்றும் வாட்டர் டேங்க் அலாரம் அமைப்பு.',
          icon: 'pump',
        },
        {
          id: 'eot-crane-services',
          title: 'EOT கிரேன் மின்சார சேவைகள்',
          description:
            'தொழிற்சாலை EOT கிரேன்களுக்கான மின்சார பராமரிப்பு, பழுது கண்டறிதல் மற்றும் சீரமைப்பு.',
          icon: 'crane',
          badge: 'தொழிற்சாலை',
        },
      ],
      customBadge: 'பிற மின்சார வேலைகள்',
      customHeading: 'வேறு மின்சார பழுதுபார்ப்பு அல்லது பராமரிப்பு தேவையா?',
      customBody:
        'கோவையில் உங்கள் வீடு, அலுவலகம் அல்லது தொழிற்சாலையில் உள்ள எந்த மின்சார பிரச்சனையையும் எங்களிடம் கூறுங்கள். விரைவான வீட்டு வாசல் பரிசோதனை மற்றும் நம்பகமான சேவை வழங்குகிறோம்.',
      customCallCta: '9994505144 அழைக்க',
      customWhatsappCta: 'WhatsApp-ல் தெரிவிக்கவும்',
      showcaseEyebrow: 'வீடு • வணிகம் • தொழிற்சாலை',
      showcaseHeading: 'ஒவ்வொரு இடத்திலும் நேர்த்தியான வேலைப்பாடு',
      showcaseNote:
        'கோவை முழுவதும் பாதுகாப்பான வயரிங், தரமான பொருத்துதல் மற்றும் துல்லியமான பழுதுநீக்கம்.',
      showcaseItems: [
        {
          title: 'வயரிங் & டிஸ்ட்ரிபியூஷன் பேனல்கள்',
          caption: 'வீடு மற்றும் அலுவலகங்களுக்கான பாதுகாப்பான MCB பேனல்கள் மற்றும் நேர்த்தியான வயரிங்.',
          image: '/images/work-wiring-panel.jpg',
          alt: 'நேர்த்தியாக இணைக்கப்பட்ட MCB டிஸ்ட்ரிபியூஷன் பேனல் மற்றும் மின்சார வயரிங்',
        },
        {
          title: 'சீலிங் & எக்ஸாஸ்ட் ஃபேன் பொருத்துதல்',
          caption: 'உங்கள் வீட்டு வாசலிலேயே பாதுகாப்பான பொருத்துதல், ரெகுலேட்டர் மற்றும் பழுதுபார்ப்பு.',
          image: '/images/work-ceiling-fan.jpg',
          alt: 'கோவை வீட்டில் சீலிங் ஃபேன் பொருத்தும் எலக்ட்ரீஷியன்',
        },
        {
          title: 'தொழிற்சாலை EOT கிரேன் பராமரிப்பு',
          caption: 'கண்ட்ரோல் பேனல் பரிசோதனை, பெண்டன்ட் பழுதுபார்ப்பு மற்றும் தடுப்பு பராமரிப்பு.',
          image: '/images/work-eot-crane.jpg',
          alt: 'தொழிற்சாலை EOT கிரேன் மின்சார கண்ட்ரோல் பேனலை பரிசோதிக்கும் நிபுணர்',
        },
      ],
    },
    whyChooseUs: {
      eyebrow: 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
      heading: 'வாடிக்கையாளர்கள் M S Electrical Solution-ஐ தேர்வு செய்வது ஏன்?',
      subtitle:
        'கோவை வீடுகள் மற்றும் பணியிடங்களுக்கு நம்பகமான வேலைப்பாடு, விரைவான வீட்டு வாசல் சேவை மற்றும் பாதுகாப்பான மின்சார தீர்வுகள்.',
      items: [
        {
          title: 'அனுபவமிக்க நிபுணர்கள்',
          description:
            'கோளாறுகளை துல்லியமாகக் கண்டறிந்து, சரியான கருவிகள் மற்றும் பாதுகாப்பு விதிகளுடன் பணிபுரியும் திறமையான தொழில்நுட்ப வல்லுநர்கள்.',
          icon: 'professionals',
        },
        {
          title: 'வீட்டு வாசல் சேவை',
          description:
            'கோவை முழுவதும் உங்கள் வீடு, அலுவலகம் அல்லது தொழிற்சாலைக்கே நேரடியாக வந்து மின்சார சேவை வழங்குகிறோம்.',
          icon: 'doorstep',
        },
        {
          title: 'விரிவான மின்சார தீர்வுகள்',
          description:
            'அன்றாட ஃபேன், சுவிட்ச்போர்டு பழுதுபார்ப்பு முதல் முழு வீடு ரீவயரிங், வாட்டர் பம்ப் மற்றும் EOT கிரேன் வரை.',
          icon: 'solutions',
        },
        {
          title: '24/7 அவசர மின்சார உதவி',
          description:
            'திடீர் மின் தடை, ஷார்ட் சர்க்யூட் அல்லது MCB டிரிப் ஆகும் அவசர நிலைகளில் எப்போதும் உடனடி உதவி.',
          icon: 'emergency',
        },
      ],
    },
    emergency: {
      badge: '24/7 அவசர மின்சார உதவி',
      heading: 'மின்சார அவசர நிலையை எதிர்கொள்கிறீர்களா?',
      subtitle:
        'மின்சார பிரச்சனைகள் உங்கள் அன்றாட பணிகளை தடை செய்ய விடாதீர்கள். அவசர மின்சார உதவிக்கு உடனே எங்களைத் தொடர்பு கொள்ளவும்.',
      callCta: '9994505144 அழைக்கவும்',
      whatsappCta: 'இப்போது WhatsApp செய்யவும்',
    },
    contact: {
      eyebrow: 'தொடர்பு கொள்ள',
      heading: 'உங்கள் மின்சார பிரச்சனைகளுக்கு தீர்வு காண்போம்',
      subtitle:
        'கோவையில் வீட்டு வாசல் மின்சார சேவைகளுக்கு நேரடியாக அழைக்கவும், WhatsApp செய்யவும் அல்லது கீழே உள்ள படிவத்தை நிரப்பவும்.',
      cardHeading: 'நேரடி தொடர்பு விவரங்கள்',
      cardSubtitle:
        'முன்பதிவு மற்றும் அவசர உதவிக்கு M S Electrical Solution-ஐ நேரடியாக தொடர்பு கொள்ளவும்.',
      labels: {
        business: 'நிறுவனம்',
        contactPerson: 'தொடர்பு நபர்',
        phoneWhatsapp: 'தொலைபேசி & WhatsApp',
        email: 'மின்னஞ்சல் (Email)',
        location: 'முகவரி',
      },
      viewOnMaps: 'Google Maps-ல் இடத்தைப் பார்க்கவும்',
      callNow: 'அழைக்கவும்',
      whatsapp: 'WhatsApp',
    },
    form: {
      heading: 'சேவை கோரிக்கையை அனுப்பவும்',
      subtitle:
        'கீழே உள்ள விவரங்களை பூர்த்தி செய்து உங்கள் கோரிக்கையை நேரடியாக எங்கள் WhatsApp-க்கு அனுப்பவும்.',
      errorBanner:
        'சமர்ப்பிப்பதற்கு முன் கீழே சிவப்பு நிறத்தில் காட்டப்பட்டுள்ள புலங்களைச் சரி செய்யவும்.',
      fullNameLabel: 'முழு பெயர்',
      fullNamePlaceholder: 'உங்கள் பெயரை உள்ளிடவும்',
      mobileLabel: 'மொபைல் எண்',
      mobilePlaceholder: '10 இலக்க மொபைல் எண்',
      serviceLabel: 'தேவையான சேவை',
      servicePlaceholder: 'மின்சார சேவையை தேர்ந்தெடுக்கவும்...',
      otherServiceOption: 'பிற மின்சார சேவை',
      addressLabel: 'முகவரி / பகுதி',
      addressPlaceholder: 'எ.கா: காந்திபுரம், ஆர்.எஸ்.புரம், பீளமேடு, கோவை',
      descriptionLabel: 'பிரச்சனை விவரம்',
      descriptionPlaceholder:
        'மின்சார பிரச்சனை, சாதனம் அல்லது புதிய பொருத்துதல் விவரத்தை எழுதவும்...',
      submitCta: 'WhatsApp மூலம் அனுப்பவும்',
      submitNote:
        'உங்கள் விவரங்களுடன் WhatsApp திறக்கப்படும். சமர்ப்பித்த பிறகு மின்னஞ்சல் விருப்பமும் கிடைக்கும்.',
      errors: {
        fullNameRequired: 'தயவுசெய்து உங்கள் முழு பெயரை உள்ளிடவும்.',
        fullNameMin: 'பெயர் குறைந்தது 2 எழுத்துக்கள் இருக்க வேண்டும்.',
        mobileRequired: 'தயவுசெய்து உங்கள் மொபைல் எண்ணை உள்ளிடவும்.',
        mobileInvalid: 'சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும் (எ.கா: 9994505144).',
        serviceRequired: 'தேவையான மின்சார சேவையை தேர்ந்தெடுக்கவும்.',
        addressRequired: 'கோவையில் உங்கள் முகவரி அல்லது பகுதியை உள்ளிடவும்.',
        addressMin: 'தெளிவான பகுதி அல்லது முகவரியை உள்ளிடவும்.',
        descriptionRequired: 'மின்சார பிரச்சனை அல்லது தேவையான வேலையை சுருக்கமாக எழுதவும்.',
        descriptionMin: 'குறைந்தது 10 எழுத்துக்களில் விவரத்தை உள்ளிடவும்.',
      },
      success: {
        heading: 'உங்கள் கோரிக்கை WhatsApp-ல் அனுப்ப தயார்',
        bodyPrefix: 'நன்றி,',
        bodyMiddle: 'உங்கள்',
        bodySuffix:
          'சேவை கோரிக்கை WhatsApp செய்தியாக தயாரிக்கப்பட்டுள்ளது. WhatsApp-ல் Send பொத்தானை அழுத்தவும்; எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்.',
        openWhatsapp: 'WhatsApp உரையாடலை திறக்க',
        sendEmail: 'மின்னஞ்சலில் அனுப்ப',
        copyDetails: 'விவரங்களை நகலெடுக்க',
        copied: 'நகலெடுக்கப்பட்டது',
        submitAnother: 'மற்றொரு கோரிக்கை அனுப்பவும்',
        summaryHeader:
          'வணக்கம் M S Electrical Solution, இணையதளம் வழியாக புதிய சேவை கோரிக்கை:',
        summaryName: 'பெயர்',
        summaryMobile: 'மொபைல்',
        summaryService: 'தேவையான சேவை',
        summaryAddress: 'முகவரி / பகுதி',
        summaryProblem: 'பிரச்சனை விவரம்',
        emailSubjectPrefix: 'மின்சார சேவை கோரிக்கை',
      },
    },
    footer: {
      description:
        'கோயம்புத்தூரில் வீடுகள், அலுவலகங்கள் மற்றும் தொழிற்சாலைகளுக்கான பாதுகாப்பான வயரிங், பழுதுபார்ப்பு, சுவிட்ச்போர்டு மேம்பாடு, வாட்டர் பம்ப் மற்றும் EOT கிரேன் மின்சார சேவைகள்.',
      quickLinks: 'விரைவு இணைப்புகள்',
      ourServices: 'எங்கள் சேவைகள்',
      contactDetails: 'தொடர்பு விவரங்கள்',
      copyright: '© 2026 M S Electrical Solution. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      subline: 'வீட்டு வாசலில் மின்சார சேவைகள் • கோயம்புத்தூர், தமிழ்நாடு',
    },
    floating: {
      whatsappLabel: 'WhatsApp உதவி',
      whatsappAria: 'M S Electrical Solution-ஐ WhatsApp-ல் தொடர்பு கொள்ளவும்',
      mobileCall: 'அழைக்கவும்',
      mobileWhatsapp: 'WhatsApp',
    },
  },
};
