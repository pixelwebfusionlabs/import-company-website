import type {
  BlogPost,
  Capability,
  CareerRole,
  FaqItem,
  PricingTier,
  ProcessStep,
  Testimonial,
} from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ruwan Silva",
    role: "Project Director",
    company: "Summit Builders Lanka",
    quote:
      "SN Factory delivered our commercial elevators on schedule and handled installation with real discipline. That is rare on construction timelines.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Kasun Mendis",
    role: "Operations Manager",
    company: "AutoCare Partners",
    quote:
      "Our workshops finally have consistent access to quality vehicle parts. Fitment support and delivery reliability have improved our turnaround times.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Dilani Wijesinghe",
    role: "Development Manager",
    company: "Harbor Property Group",
    quote:
      "From residential lifts to interior accessories, SN Factory gave us one accountable partner for supply and installation across our projects.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Priya Fernando",
    role: "Homeowner",
    company: "Private Residence, Colombo",
    quote:
      "The home elevator installation was clean, professional, and fully explained. After-sales support has been just as reliable.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    name: "Anura Jayasuriya",
    role: "Plant Manager",
    company: "Lanka Precision Manufacturing",
    quote:
      "Industrial hoists from SN Factory improved our floor safety and throughput. The maintenance contract keeps downtime under control.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    id: "6",
    name: "Marcus Chen",
    role: "Facilities Director",
    company: "Cinnamon Bay Hotels",
    quote:
      "Guest lift upgrades were completed with minimal disruption. Service response has been prompt whenever we need support.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What products does SN Factory import and supply?",
    answer:
      "We specialize in vehicle spare parts, lift and hoist systems (passenger elevators, cargo lifts, industrial hoists, and more), and premium home accessories including kitchen, bathroom, lighting, and interior products.",
    category: "General",
  },
  {
    question: "Do you install elevators and hoists?",
    answer:
      "Yes. SN Factory provides professional installation for passenger elevators, cargo elevators, goods lifts, hydraulic lifts, electric and chain hoists, platform lifts, residential elevators, and warehouse lifting equipment.",
    category: "Installation",
  },
  {
    question: "Do you offer maintenance and after-sales service?",
    answer:
      "We offer after-sales maintenance, annual service contracts, warranty support, and technical assistance to keep your equipment performing reliably.",
    category: "Service",
  },
  {
    question: "Can workshops and dealers order vehicle parts in bulk?",
    answer:
      "Absolutely. We support bulk and commercial supply for workshops, dealers, and fleet operators across engine, brake, suspension, electrical, and related categories.",
    category: "Automotive",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Automotive, construction, warehousing, manufacturing, residential, commercial buildings, hotels, hospitals, factories, government projects, and retail partners.",
    category: "General",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use our contact form with your inquiry type — vehicle parts, elevators, hoists, home accessories, installation, maintenance, or bulk orders — or email hello@snfactory.lk. We typically respond within one business day.",
    category: "Commercial",
  },
  {
    question: "Where do you source products from?",
    answer:
      "We source from trusted manufacturers across multiple countries, selecting partners based on quality, compliance, and long-term reliability.",
    category: "Sourcing",
  },
  {
    question: "Do you deliver island-wide in Sri Lanka?",
    answer:
      "Yes. We distribute across Sri Lanka and coordinate project-site deliveries for installation and commercial supply programs.",
    category: "Logistics",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Inquire",
    description:
      "Tell us what you need — parts, lifts, hoists, home products, or a full install project.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Specify",
    description:
      "We match specifications, capacity, and budget with the right international products.",
    icon: "FileCheck",
  },
  {
    step: 3,
    title: "Import",
    description:
      "We source, ship, and clear goods through our trusted global supplier network.",
    icon: "Ship",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "Products are distributed to your site, workshop, warehouse, or showroom on schedule.",
    icon: "Truck",
  },
  {
    step: 5,
    title: "Install & Support",
    description:
      "Professional installation, commissioning, warranty support, and maintenance when required.",
    icon: "Wrench",
  },
];

export const capabilities: Capability[] = [
  {
    name: "Vehicle Parts Catalog",
    category: "Automotive",
    description: "Engine, brake, suspension, electrical, lighting, and body components.",
    icon: "Car",
  },
  {
    name: "Passenger Elevators",
    category: "Lifts",
    description: "Supply and installation for commercial and residential buildings.",
    icon: "Building2",
  },
  {
    name: "Cargo & Goods Lifts",
    category: "Lifts",
    description: "Heavy-duty vertical transport for commercial and industrial sites.",
    icon: "Package",
  },
  {
    name: "Industrial Hoists",
    category: "Industrial",
    description: "Electric hoists, chain hoists, and warehouse lifting equipment.",
    icon: "Factory",
  },
  {
    name: "Hydraulic & Platform Lifts",
    category: "Lifts",
    description: "Specialized lift solutions for accessibility and service applications.",
    icon: "ArrowUpDown",
  },
  {
    name: "Home Accessories Range",
    category: "Home",
    description: "Kitchen, bathroom, lighting, storage, and interior products.",
    icon: "Home",
  },
  {
    name: "Professional Installation",
    category: "Service",
    description: "Experienced technicians for elevators, hoists, and related systems.",
    icon: "Wrench",
  },
  {
    name: "Maintenance Contracts",
    category: "Service",
    description: "Annual service plans and after-sales technical support.",
    icon: "Settings",
  },
  {
    name: "Bulk Commercial Supply",
    category: "Supply",
    description: "Volume programs for dealers, contractors, and institutions.",
    icon: "Boxes",
  },
  {
    name: "International Sourcing",
    category: "Sourcing",
    description: "Trusted manufacturer network across 18+ countries.",
    icon: "Globe",
  },
  {
    name: "Warranty Support",
    category: "Service",
    description: "Clear warranty handling and genuine spare availability.",
    icon: "ShieldCheck",
  },
  {
    name: "Project Consultation",
    category: "Advisory",
    description: "Specification and capacity guidance before you buy.",
    icon: "Lightbulb",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Product Supply",
    price: "Quote-based",
    description: "Import and distribution of parts, accessories, or equipment.",
    features: [
      "International sourcing",
      "Quality product selection",
      "Island-wide delivery",
      "Technical product support",
    ],
    cta: "Request a quote",
  },
  {
    name: "Supply & Install",
    price: "Project quote",
    description: "Best for elevators, hoists, and turnkey lifting projects.",
    features: [
      "Specification consultation",
      "Import & delivery",
      "Professional installation",
      "Commissioning & handover",
      "Warranty activation",
    ],
    highlighted: true,
    cta: "Start a project",
  },
  {
    name: "Service Partnership",
    price: "Annual contract",
    description: "Ongoing maintenance and commercial supply relationships.",
    features: [
      "Annual service contracts",
      "Priority maintenance",
      "Bulk order pricing",
      "Dedicated account support",
      "Spare parts pipeline",
    ],
    cta: "Talk to us",
  },
];

export const whyUs = [
  {
    title: "International sourcing",
    description:
      "Premium products from trusted global manufacturers across automotive, lifting, and home categories.",
    icon: "Globe",
  },
  {
    title: "Premium quality products",
    description:
      "Genuine and high-quality aftermarket lines selected for durability, safety, and performance.",
    icon: "Award",
  },
  {
    title: "Professional installation",
    description:
      "Experienced technicians install elevators, hoists, and related systems to professional standards.",
    icon: "Wrench",
  },
  {
    title: "Experienced technical team",
    description:
      "Specialists who understand vehicle parts, lifting capacity, and site installation requirements.",
    icon: "Users",
  },
  {
    title: "Reliable after-sales service",
    description:
      "Maintenance contracts, warranty support, and responsive technical assistance after handover.",
    icon: "ShieldCheck",
  },
  {
    title: "Fast delivery",
    description:
      "Efficient distribution across Sri Lanka for workshops, sites, retailers, and project locations.",
    icon: "Truck",
  },
  {
    title: "Competitive pricing",
    description:
      "Strong supplier relationships that help you access quality products at competitive landed value.",
    icon: "Receipt",
  },
  {
    title: "Customer-first approach",
    description:
      "Clear communication from inquiry through delivery, installation, and ongoing support.",
    icon: "Heart",
  },
  {
    title: "Warranty support",
    description:
      "Documented warranty handling and access to genuine service parts when you need them.",
    icon: "BadgeCheck",
  },
  {
    title: "Trusted supplier network",
    description:
      "Long-term manufacturer relationships that protect quality and supply continuity.",
    icon: "Globe2",
  },
] as const;

export const clients = [
  "Summit Builders",
  "AutoCare Partners",
  "Harbor Property Group",
  "Island Logistics Hub",
  "Cinnamon Bay Hotels",
  "Lanka Precision",
  "Metro Care Hospitals",
  "Urban Living Stores",
  "GreenWatt Energy",
  "Nova Interiors",
  "Pacific Foods",
  "Campus Equip Co.",
] as const;

export const careers: CareerRole[] = [
  {
    id: "automotive-sales",
    title: "Automotive Parts Sales Executive",
    department: "Automotive",
    location: "Colombo",
    type: "Full-time",
    description:
      "Grow workshop and dealer relationships for vehicle parts distribution across Sri Lanka.",
  },
  {
    id: "lift-technician",
    title: "Lift & Hoist Installation Technician",
    department: "Installation",
    location: "Colombo / Field",
    type: "Full-time",
    description:
      "Install and commission elevators, platform lifts, and industrial hoist systems.",
  },
  {
    id: "service-engineer",
    title: "Maintenance Service Engineer",
    department: "After-Sales",
    location: "Colombo / Field",
    type: "Full-time",
    description:
      "Deliver preventive maintenance and breakdown support for lift and hoist clients.",
  },
  {
    id: "sourcing-coordinator",
    title: "Import & Sourcing Coordinator",
    department: "Operations",
    location: "Colombo",
    type: "Full-time",
    description:
      "Coordinate international orders, documentation, and inbound shipments across product lines.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-vehicle-parts",
    title: "How to Choose Quality Vehicle Spare Parts for Your Workshop",
    excerpt:
      "A practical guide to genuine vs aftermarket quality, fitment checks, and supplier reliability.",
    content: `Quality spare parts protect your reputation and your customers’ vehicles.

## Start with trusted sources

SN Factory sources genuine and high-quality aftermarket parts from established manufacturers — reducing counterfeit risk and fitment issues.

## Match the application

Passenger, commercial, and industrial vehicles have different duty cycles. Confirm engine, brake, suspension, and electrical requirements before ordering.

## Plan replenishment

High-velocity SKUs such as filters, brake components, and common electrical parts should sit on a recurring supply schedule.`,
    author: "Nimali Fernando",
    date: "2025-11-12",
    category: "Automotive",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop",
    readingTime: "5 min",
  },
  {
    slug: "elevator-vs-platform-lift",
    title: "Elevator or Platform Lift: Which Solution Fits Your Building?",
    excerpt:
      "Key differences for residential, commercial, and accessibility projects in Sri Lanka.",
    content: `Choosing the right vertical transport system depends on traffic, space, and use case.

## Passenger elevators

Ideal for multi-storey commercial buildings, hotels, and apartments with regular passenger traffic.

## Platform lifts

Often suited to accessibility needs and lower-rise residential applications with tighter space constraints.

## Plan installation early

Shaft readiness, power supply, and maintenance access should be designed before equipment arrives on site.`,
    author: "Arjun Perera",
    date: "2026-01-08",
    category: "Lifts",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    readingTime: "6 min",
  },
  {
    slug: "warehouse-hoist-safety",
    title: "Industrial Hoist Safety Essentials for Warehouses",
    excerpt:
      "Capacity matching, operator training, and maintenance habits that prevent accidents.",
    content: `Industrial hoists raise productivity — when specified and maintained correctly.

## Match capacity to the load

Undersized equipment creates risk. Oversized equipment wastes budget. SN Factory helps you specify correctly.

## Train operators

Safe lifting practices matter as much as hardware quality.

## Maintain on schedule

Annual service contracts catch wear before failures interrupt operations.`,
    author: "Sahan Nirmal",
    date: "2026-02-20",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
    readingTime: "4 min",
  },
  {
    slug: "home-accessories-trends",
    title: "Home Accessories Trends for Modern Sri Lankan Interiors",
    excerpt:
      "Kitchen, bathroom, lighting, and storage products that elevate residential and hospitality spaces.",
    content: `Homeowners and developers increasingly expect international-quality finishes.

## Focus categories

Kitchen accessories, bathroom fittings, lighting, storage, and smart home accessories continue to drive demand.

## Quality over novelty

Durable hardware and reliable finishes reduce callbacks and returns.

## Supply consistency

Retailers benefit from partners who can restock bestsellers without long gaps.`,
    author: "Ishara Jayasinghe",
    date: "2026-03-15",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop",
    readingTime: "5 min",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const navigation = {
  company: [
    { title: "About Us", href: "/about", description: "Our story, mission, and leadership" },
    { title: "Why Choose Us", href: "/why-us", description: "Quality, install & after-sales" },
    { title: "Our Process", href: "/process", description: "From inquiry to installation" },
    { title: "Capabilities", href: "/capabilities", description: "Parts, lifts, home & service" },
    { title: "Clients", href: "/clients", description: "Partners who trust SN Factory" },
  ],
  services: [
    { title: "All Services", href: "/services", description: "Import, distribute, install, maintain" },
    { title: "Import Services", href: "/services/import-services", description: "Global product sourcing" },
    { title: "Installation Services", href: "/services/installation-services", description: "Elevators & hoists" },
    { title: "Maintenance Services", href: "/services/maintenance-services", description: "Service contracts" },
    { title: "Bulk & Commercial Supply", href: "/services/bulk-commercial-supply", description: "Volume programs" },
  ],
  industries: [
    { title: "All Industries", href: "/industries", description: "Sectors we serve" },
    { title: "Automotive", href: "/industries/automotive", description: "Vehicle parts supply" },
    { title: "Construction", href: "/industries/construction", description: "Lifts & project supply" },
    { title: "Warehousing", href: "/industries/warehousing", description: "Industrial hoists" },
    { title: "Hotels", href: "/industries/hotels", description: "Hospitality lift systems" },
  ],
  insights: [
    { title: "Portfolio", href: "/portfolio", description: "Selected supply & install projects" },
    { title: "Case Studies", href: "/case-studies", description: "Client success stories" },
    { title: "Testimonials", href: "/testimonials", description: "What clients say" },
    { title: "Blog", href: "/blog", description: "Guides & industry insights" },
    { title: "FAQ", href: "/faq", description: "Common questions answered" },
  ],
} as const;
