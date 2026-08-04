"use client";

import { company } from "@/lib/content/company";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query = encodeURIComponent(company.address.full);
  const embedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
    : `https://maps.google.com/maps?q=${query}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-[16/11] w-full bg-muted">
        <iframe
          title={`${company.name} location map`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-5 text-brand-pink" />
          <div>
            <p className="font-semibold">Visit us</p>
            <p className="text-sm text-muted-foreground">{company.address.full}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 size-5 text-brand-pink" />
          <div>
            <p className="font-semibold">Call</p>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {company.phone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 size-5 text-brand-pink" />
          <div>
            <p className="font-semibold">Email</p>
            <a
              href={`mailto:${company.email}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {company.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 size-5 text-brand-pink" />
          <div>
            <p className="font-semibold">Business hours</p>
            <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
              {company.hours.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
