import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "construction-elevator-handover",
    title: "Delivering Commercial Elevators On a Fixed Construction Schedule",
    client: "Summit Builders Lanka",
    industry: "Construction",
    summary:
      "How SN Factory supplied and installed passenger and goods lifts without delaying a commercial fit-out.",
    challenge:
      "The contractor needed passenger and cargo elevators installed to a fixed handover date, with no float for import delays.",
    solution:
      "We locked manufacturer lead times early, managed import and clearance, and staged installation crews to match building readiness floors.",
    results: [
      { label: "On-time handover", value: "100%" },
      { label: "Install rework", value: "0" },
      { label: "Maintenance start", value: "Day 1" },
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
    year: "2024",
  },
  {
    slug: "automotive-parts-availability",
    title: "Stabilizing Spare Parts Supply for a Regional Workshop Network",
    client: "AutoCare Partners",
    industry: "Automotive",
    summary:
      "A recurring parts program that reduced stockouts across engine, brake, and electrical categories.",
    challenge:
      "Workshops faced inconsistent availability of quality aftermarket parts and long waits on critical SKUs.",
    solution:
      "SN Factory built a multi-origin parts pipeline with priority replenishment for high-velocity engine, brake, filter, and electrical lines.",
    results: [
      { label: "Stockout reduction", value: "38%" },
      { label: "SKU expansion", value: "2.4x" },
      { label: "Reorder cycle", value: "Faster" },
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop",
    year: "2024",
  },
  {
    slug: "warehouse-hoist-uptime",
    title: "Raising Warehouse Throughput with Industrial Hoist Systems",
    client: "Island Logistics Hub",
    industry: "Warehousing",
    summary:
      "Electric and chain hoist installation with training and a service contract for continuous operations.",
    challenge:
      "Manual handling limited throughput and created safety risks during peak inbound volumes.",
    solution:
      "We supplied capacity-matched industrial hoists, completed installation and operator training, and activated preventive maintenance.",
    results: [
      { label: "Handling speed", value: "+32%" },
      { label: "Safety incidents", value: "Down" },
      { label: "Service coverage", value: "Annual" },
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
    year: "2025",
  },
  {
    slug: "hotel-lift-refresh",
    title: "Upgrading Guest Lifts for a Boutique Hotel Property",
    client: "Cinnamon Bay Hotels",
    industry: "Hotels",
    summary:
      "Passenger lift supply, installation, and quiet-operation commissioning for hospitality standards.",
    challenge:
      "Aging lifts affected guest experience and required a controlled replacement with minimal disruption.",
    solution:
      "SN Factory sequenced installation during off-peak windows, commissioned quieter passenger elevators, and set a priority maintenance plan.",
    results: [
      { label: "Guest complaints", value: "-70%" },
      { label: "Downtime window", value: "Minimized" },
      { label: "Service SLA", value: "Priority" },
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    year: "2023",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
