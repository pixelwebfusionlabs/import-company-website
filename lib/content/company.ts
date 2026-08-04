import type { Award, Stat, TeamMember, TimelineEvent } from "@/types";

export const company = {
  name: "SN Factory",
  legalName: "SN Factory (Pvt) Ltd",
  tagline: "One step beyond",
  description:
    "SN Factory is a trusted international importer and distributor specializing in vehicle parts, lift and hoist systems, and premium home accessories, delivering quality products and professional installation services.",
  longDescription:
    "SN Factory is an international import, distribution, supply, and installation company delivering high-quality industrial, automotive, and home improvement solutions. We specialize in sourcing premium products from trusted global manufacturers and providing reliable installation and after-sales support across Sri Lanka.",
  founded: 2016,
  email: "hello@snfactory.lk",
  phone: "+94 11 234 5678",
  whatsapp: "+94 77 123 4567",
  address: {
    street: "42 Lotus Road",
    city: "Colombo",
    region: "Western Province",
    postalCode: "00100",
    country: "Sri Lanka",
    full: "42 Lotus Road, Colombo 00100, Sri Lanka",
  },
  geo: {
    lat: 6.9271,
    lng: 79.8612,
  },
  hours: [
    { day: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: {
    linkedin: "https://linkedin.com/company/snfactory",
    facebook: "https://facebook.com/snfactory",
    instagram: "https://instagram.com/snfactory",
    twitter: "https://x.com/snfactory",
  },
  logo: "/brand/sn-factory-logo.png",
  mission:
    "To deliver internationally sourced, high-quality products with dependable installation, exceptional customer service, and long-term value for businesses and homeowners.",
  vision:
    "To become Sri Lanka's most trusted import and distribution company for automotive, lifting solutions, and home improvement products.",
} as const;

export const stats: Stat[] = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Products Delivered", value: 25000, suffix: "+" },
  { label: "Projects Completed", value: 850, suffix: "+" },
  { label: "Satisfied Clients", value: 1200, suffix: "+" },
  { label: "Countries Sourced", value: 18, suffix: "+" },
];

export const values = [
  {
    title: "Premium quality",
    description:
      "We source genuine and high-grade aftermarket products from trusted international manufacturers.",
    icon: "Award",
  },
  {
    title: "Professional installation",
    description:
      "Experienced technicians deliver safe, standards-aligned installation for lifts, hoists, and related systems.",
    icon: "Wrench",
  },
  {
    title: "Reliable after-sales",
    description:
      "Maintenance contracts, warranty support, and responsive technical service keep your assets running.",
    icon: "Shield",
  },
  {
    title: "Customer-first service",
    description:
      "From quote to delivery and installation, we prioritize clear communication and competitive value.",
    icon: "Handshake",
  },
] as const;

export const timeline: TimelineEvent[] = [
  {
    year: "2016",
    title: "SN Factory founded",
    description:
      "Started in Colombo as a focused importer of automotive parts and industrial supply lines.",
  },
  {
    year: "2018",
    title: "Lift & hoist division",
    description:
      "Expanded into passenger and cargo elevators, industrial hoists, and installation services.",
  },
  {
    year: "2020",
    title: "Home accessories range",
    description:
      "Launched modern home improvement and lifestyle product distribution for retailers and homeowners.",
  },
  {
    year: "2023",
    title: "Nationwide installation network",
    description:
      "Scaled technical teams and service contracts for commercial and residential lifting projects.",
  },
  {
    year: "2025",
    title: "Trusted multi-category partner",
    description:
      "Recognized across automotive, construction, warehousing, and property development for supply and install excellence.",
  },
];

export const leadership: TeamMember[] = [
  {
    name: "Sahan Nirmal",
    role: "Founder & Managing Director",
    bio: "Leads SN Factory’s international sourcing strategy across automotive, lifting systems, and home improvement.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
  },
  {
    name: "Nimali Fernando",
    role: "Head of Automotive Supply",
    bio: "Manages genuine and aftermarket vehicle parts programs for passenger, commercial, and industrial fleets.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
  },
  {
    name: "Arjun Perera",
    role: "Director of Lift & Installation",
    bio: "Oversees elevator and hoist projects from specification and import through installation and maintenance.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
  },
  {
    name: "Ishara Jayasinghe",
    role: "Head of Client Success",
    bio: "Ensures every client receives proactive support from inquiry through delivery, installation, and after-sales.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
  },
];

export const awards: Award[] = [
  {
    title: "Trusted Automotive Importer",
    issuer: "Sri Lanka Auto Trade Forum",
    year: "2024",
  },
  {
    title: "Excellence in Lift Installation",
    issuer: "Building Services Association",
    year: "2023",
  },
  {
    title: "Preferred Industrial Supplier",
    issuer: "Manufacturing Partners Network",
    year: "2022",
  },
  {
    title: "Customer Service Distinction",
    issuer: "National Trade Awards",
    year: "2021",
  },
];

export const certificates = [
  "ISO 9001:2015 Quality Management",
  "Lift Installation Safety Alignment",
  "Authorized Distribution Partner Standards",
  "Occupational Health & Safety Alignment",
] as const;
