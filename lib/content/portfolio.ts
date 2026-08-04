import type { PortfolioItem } from "@/types";

export const portfolio: PortfolioItem[] = [
  {
    slug: "vehicle-parts-distribution",
    title: "Vehicle Parts Distribution",
    category: "Automotive",
    origin: "Japan, Korea & Europe",
    description:
      "Island-wide distribution of genuine and quality aftermarket vehicle spare parts for workshops and dealers.",
    longDescription:
      "SN Factory built a recurring vehicle parts supply program covering engine parts, suspension, brakes, filters, bearings, clutch components, electrical systems, lighting, body parts, and performance components for passenger and commercial fleets.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop",
    technologies: ["Engine Parts", "Brake Systems", "Electrical"],
    results: [
      "Expanded SKU coverage across major vehicle categories",
      "Faster replenishment for partner workshops",
      "Reduced counterfeit risk via trusted suppliers",
    ],
  },
  {
    slug: "commercial-elevator-installation",
    title: "Commercial Elevator Installation",
    category: "Lifts",
    origin: "China & Europe",
    description:
      "Passenger and goods elevator supply and installation for a multi-storey commercial building.",
    longDescription:
      "End-to-end delivery of passenger elevators and cargo lifts including specification, import, professional installation, commissioning, and handover training for building operations staff.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    technologies: ["Passenger Elevators", "Goods Lifts", "Installation"],
    results: [
      "On-time installation aligned to fit-out schedule",
      "Safety commissioning completed without rework",
      "Annual maintenance contract activated",
    ],
  },
  {
    slug: "warehouse-hoist-installation",
    title: "Warehouse Hoist Installation",
    category: "Industrial",
    origin: "China & Germany",
    description:
      "Electric and chain hoist systems installed for a high-throughput distribution warehouse.",
    longDescription:
      "Supplied and installed industrial hoists and warehouse lifting equipment with capacity matching, safety training, and a preventive maintenance plan for continuous operations.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
    technologies: ["Electric Hoists", "Chain Hoists", "Maintenance"],
    results: [
      "Improved material handling speed",
      "Safer load operations on the floor",
      "Documented service schedule in place",
    ],
  },
  {
    slug: "residential-lift-projects",
    title: "Residential Lift Projects",
    category: "Residential",
    origin: "Europe & Asia",
    description:
      "Home elevators and platform lifts for residential developments and private residences.",
    longDescription:
      "SN Factory delivered residential elevators and platform lifts with compact footprints, quality finishes, professional installation, and after-sales warranty support for homeowners and developers.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    technologies: ["Residential Elevators", "Platform Lifts", "Warranty"],
    results: [
      "Smooth install in constrained spaces",
      "Homeowner training completed",
      "Warranty and service plan activated",
    ],
  },
  {
    slug: "luxury-home-accessories-supply",
    title: "Luxury Home Accessories Supply",
    category: "Home",
    origin: "Italy, Turkey & China",
    description:
      "Premium kitchen, bathroom, lighting, and interior accessories for retailers and developers.",
    longDescription:
      "Curated import program covering kitchen and bathroom accessories, storage solutions, lighting, smart home accessories, furniture hardware, decorative items, and organization products.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop",
    technologies: ["Kitchen", "Bathroom", "Lighting"],
    results: [
      "Expanded retailer assortments",
      "Consistent quality across categories",
      "Reliable restock cycles",
    ],
  },
  {
    slug: "commercial-building-equipment-supply",
    title: "Commercial Building Equipment Supply",
    category: "Commercial",
    origin: "Multi-origin",
    description:
      "Combined lift systems and building equipment supply for a mixed-use commercial development.",
    longDescription:
      "Coordinated import and installation of elevators plus complementary building equipment and accessories for a commercial property, with bulk supply logistics and project consultation.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    technologies: ["Elevators", "Bulk Supply", "Consultation"],
    results: [
      "Single-partner project coordination",
      "Consolidated shipments reduced cost",
      "Handover completed with service plan",
    ],
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}
