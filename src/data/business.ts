export const BUSINESS = {
  name: 'M S Electrical Solution',
  shortName: 'MS Electrical Solution',
  tagline: 'Doorstep Electrical Services',
  proprietor: 'M. Suganya',
  proprietorRole: 'Proprietor',
  phoneDisplay: '9994505144',
  phoneInternational: '+91 9994505144',
  phoneHref: 'tel:+919994505144',
  whatsappNumber: '919994505144',
  email: 'mselectricalsolutioncbe@gmail.com',
  emailHref: 'mailto:mselectricalsolutioncbe@gmail.com',
  streetAddress: '5th Street Ext, Subbana Gounder Layout',
  locality: 'Gandhipuram, Coimbatore - 641012',
  cityState: 'Coimbatore, Tamil Nadu',
  fullAddress: '5th Street Ext, Subbana Gounder Layout, Gandhipuram, Coimbatore - 641012, Tamil Nadu',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=5th+Street+Ext+Subbana+Gounder+Layout+Gandhipuram+Coimbatore+641012',
  defaultWhatsAppMessage:
    'Hello M S Electrical Solution, I need electrical service in Coimbatore. Please contact me.',
  emergencyWhatsAppMessage:
    'Hello M S Electrical Solution, I need urgent 24/7 emergency electrical assistance in Coimbatore. Please contact me immediately.',
} as const;

export function buildWhatsAppUrl(message: string = BUSINESS.defaultWhatsAppMessage): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello M S Electrical Solution, I would like to enquire about ${serviceTitle} in Coimbatore. Please contact me.`;
  return buildWhatsAppUrl(message);
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export type ServiceIconKey =
  | 'wiring'
  | 'fan'
  | 'emergency'
  | 'rewiring'
  | 'switchboard'
  | 'pump'
  | 'crane';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
  badge?: string;
  isEmergency?: boolean;
}

export const SERVICES: ServiceItem[] = [
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
    description:
      'Electrical emergency assistance for urgent electrical problems.',
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
    description:
      'Water pump installation, repair and alarm system installation.',
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
];

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  caption: string;
  areaNote: string;
}

export const HERO_SLIDES: HeroSlide[] = [
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
];

export interface WorkShowcaseItem {
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export const WORK_SHOWCASE: WorkShowcaseItem[] = [
  {
    title: 'Wiring & Distribution Panels',
    caption: 'Clean, safety-compliant MCB panels and organized wiring for homes & offices.',
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
    caption: 'Control panel diagnostics, pendant repairs, and preventive crane electrical maintenance.',
    image: '/images/work-eot-crane.jpg',
    alt: 'Electrical technician inspecting an industrial EOT overhead crane electrical control panel with safety gear',
  },
];

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: 'professionals' | 'doorstep' | 'solutions' | 'emergency';
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
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
];
