import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "import-services",
    title: "Import Services",
    shortDescription:
      "International sourcing of vehicle parts, lift systems, and home accessories from trusted manufacturers.",
    description:
      "SN Factory manages end-to-end import of premium automotive, industrial lifting, and home improvement products. We coordinate supplier selection, documentation, shipping, and clearance so your inventory arrives on schedule.",
    icon: "Globe",
    features: [
      "Global manufacturer sourcing",
      "Documentation & compliance",
      "Freight coordination",
      "Customs support",
    ],
    benefits: [
      "Access to trusted international brands",
      "Fewer supply delays",
      "Transparent landed-cost planning",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
  },
  {
    slug: "product-distribution",
    title: "Product Distribution",
    shortDescription:
      "Reliable island-wide distribution for automotive parts, lifting equipment, and home products.",
    description:
      "We supply workshops, contractors, developers, retailers, and project sites with consistent stock availability and scheduled deliveries across Sri Lanka.",
    icon: "Truck",
    features: [
      "Island-wide delivery",
      "Dealer & workshop supply",
      "Project site drops",
      "Inventory replenishment",
    ],
    benefits: [
      "Faster fulfillment",
      "Dependable stock continuity",
      "Single distribution partner",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc1da5d9a?w=1200&h=800&fit=crop",
  },
  {
    slug: "project-consultation",
    title: "Project Consultation",
    shortDescription:
      "Technical guidance for elevator, hoist, and commercial supply projects.",
    description:
      "Our team helps you specify the right lift, hoist, or equipment package for residential, commercial, warehouse, and industrial environments — before you commit to purchase.",
    icon: "Lightbulb",
    features: [
      "Site assessment support",
      "Specification matching",
      "Budget planning",
      "Vendor comparison",
    ],
    benefits: [
      "Right-sized equipment choices",
      "Reduced project risk",
      "Clearer investment decisions",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
  },
  {
    slug: "installation-services",
    title: "Installation Services",
    shortDescription:
      "Professional installation for passenger elevators, cargo lifts, hoists, and related systems.",
    description:
      "SN Factory’s technical teams install elevators, goods lifts, hydraulic systems, electric and chain hoists, platform lifts, and warehouse lifting equipment with safety and precision.",
    icon: "Wrench",
    features: [
      "Passenger & cargo elevators",
      "Hydraulic & platform lifts",
      "Industrial & warehouse hoists",
      "Residential elevator install",
    ],
    benefits: [
      "Certified installation practices",
      "On-schedule project handover",
      "Safety-first commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    shortDescription:
      "After-sales maintenance and annual service contracts for lifts and industrial equipment.",
    description:
      "Keep elevators and hoists performing reliably with scheduled inspections, preventive maintenance, and priority response for service calls.",
    icon: "Settings",
    features: [
      "Annual service contracts",
      "Preventive maintenance",
      "Breakdown response",
      "Spare parts availability",
    ],
    benefits: [
      "Longer equipment lifespan",
      "Fewer unexpected stoppages",
      "Documented service history",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    shortDescription:
      "Expert guidance for product selection, fitment, and operational troubleshooting.",
    description:
      "Whether you need the correct vehicle spare part, hoist capacity guidance, or home accessory fitment advice, our technical team supports you before and after purchase.",
    icon: "Headphones",
    features: [
      "Parts identification support",
      "Capacity & fitment advice",
      "Warranty assistance",
      "On-site technical visits",
    ],
    benefits: [
      "Fewer incorrect orders",
      "Faster issue resolution",
      "Confidence in every purchase",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
  },
  {
    slug: "bulk-commercial-supply",
    title: "Bulk & Commercial Supply",
    shortDescription:
      "Volume supply programs for dealers, contractors, hotels, factories, and government projects.",
    description:
      "SN Factory fulfills bulk orders and commercial contracts with competitive pricing, consolidated shipping, and dependable delivery schedules.",
    icon: "Boxes",
    features: [
      "Bulk order fulfillment",
      "Dealer pricing programs",
      "Contract supply",
      "Consolidated shipments",
    ],
    benefits: [
      "Better unit economics",
      "Predictable replenishment",
      "Dedicated account support",
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
  },
  {
    slug: "industrial-equipment-supply",
    title: "Industrial Equipment Supply",
    shortDescription:
      "Supply of industrial lifting equipment and related systems for factories and warehouses.",
    description:
      "From electric and chain hoists to warehouse lifting solutions, we supply and support industrial equipment that keeps operations productive and safe.",
    icon: "Factory",
    features: [
      "Electric & chain hoists",
      "Industrial lifting systems",
      "Warehouse equipment",
      "Installation & training support",
    ],
    benefits: [
      "Safer material handling",
      "Higher operational uptime",
      "One partner for supply and service",
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a99b0f0d0b1?w=1200&h=800&fit=crop",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
