import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "automotive",
    title: "Automotive",
    shortDescription:
      "Genuine and quality aftermarket parts for passenger, commercial, and industrial vehicles.",
    description:
      "SN Factory supplies workshops, dealers, and fleet operators with engine parts, brakes, suspension, filters, bearings, clutch components, electrical systems, lighting, body parts, and performance components.",
    icon: "Car",
    challenges: ["Parts availability", "Quality consistency", "Fitment accuracy"],
    solutions: [
      "Broad SKU coverage",
      "Trusted manufacturer sourcing",
      "Technical identification support",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop",
  },
  {
    slug: "construction",
    title: "Construction",
    shortDescription:
      "Lifting equipment and project supply for construction sites and building programs.",
    description:
      "We support contractors with elevators, hoists, and related equipment supply plus installation coordination aligned to construction milestones.",
    icon: "HardHat",
    challenges: ["Project deadlines", "Site access", "Equipment specification"],
    solutions: [
      "Project consultation",
      "Phased delivery & install",
      "Maintenance readiness",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    shortDescription:
      "Industrial hoists and warehouse lifting solutions for efficient material handling.",
    description:
      "Equip warehouses with electric hoists, chain hoists, and lifting systems designed for safer, faster load movement.",
    icon: "Warehouse",
    challenges: ["Throughput pressure", "Safety compliance", "Equipment downtime"],
    solutions: [
      "Right-capacity hoist supply",
      "Installation & training",
      "Service contracts",
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Industrial equipment and spare supply that keeps production lines moving.",
    description:
      "Factories rely on SN Factory for industrial lifting equipment, maintenance support, and critical spare parts programs.",
    icon: "Factory",
    challenges: ["Line-down risk", "Spare lead times", "Safety standards"],
    solutions: [
      "Priority spare supply",
      "Industrial hoist systems",
      "Technical after-sales",
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a99b0f0d0b1?w=1200&h=800&fit=crop",
  },
  {
    slug: "residential",
    title: "Residential",
    shortDescription:
      "Home elevators, platform lifts, and premium home accessories for modern living.",
    description:
      "Homeowners and residential developers source residential elevators, platform lifts, and quality home improvement products with professional installation support.",
    icon: "Home",
    challenges: ["Space constraints", "Finish quality", "After-sales trust"],
    solutions: [
      "Residential lift options",
      "Curated home accessories",
      "Warranty-backed install",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
  },
  {
    slug: "commercial-buildings",
    title: "Commercial Buildings",
    shortDescription:
      "Passenger elevators, goods lifts, and building equipment for commercial properties.",
    description:
      "We supply and install elevators and related systems for offices, mixed-use developments, and commercial facilities.",
    icon: "Building2",
    challenges: ["Occupant safety", "Traffic capacity", "Service uptime"],
    solutions: [
      "Passenger & cargo elevators",
      "Professional installation",
      "Annual maintenance plans",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
  },
  {
    slug: "hotels",
    title: "Hotels",
    shortDescription:
      "Lift systems and home-grade accessories for hospitality properties.",
    description:
      "Hotels and resorts partner with SN Factory for passenger elevators, service lifts, and quality interior accessories with dependable service coverage.",
    icon: "Hotel",
    challenges: ["Guest experience", "Quiet operation", "Service windows"],
    solutions: [
      "Hospitality-grade lifts",
      "Coordinated installation",
      "Priority maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    shortDescription:
      "Reliable lift solutions and supply support for healthcare facilities.",
    description:
      "Healthcare facilities require dependable vertical transport and responsive maintenance — we deliver both with professional installation and service contracts.",
    icon: "HeartPulse",
    challenges: ["Critical uptime", "Patient safety", "Compliance"],
    solutions: [
      "Healthcare-ready lifts",
      "Rapid service response",
      "Documented maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=800&fit=crop",
  },
  {
    slug: "factories",
    title: "Factories",
    shortDescription:
      "Industrial hoists, lifting equipment, and automotive/industrial parts supply.",
    description:
      "From plant floor lifting systems to spare parts programs, SN Factory supports factory operations with durable equipment and reliable supply.",
    icon: "Cog",
    challenges: ["Heavy loads", "Shift continuity", "Safety"],
    solutions: [
      "Industrial hoist supply",
      "Installation support",
      "Spare parts pipeline",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
  },
  {
    slug: "government-projects",
    title: "Government Projects",
    shortDescription:
      "Compliant supply and installation for public-sector and institutional projects.",
    description:
      "We support government and institutional projects with documented supply, commercial elevators, industrial equipment, and professional installation services.",
    icon: "Landmark",
    challenges: ["Tender compliance", "Documentation", "Delivery schedules"],
    solutions: [
      "Full documentation packs",
      "Project-based delivery",
      "Installation & handover",
    ],
    image:
      "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200&h=800&fit=crop",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
