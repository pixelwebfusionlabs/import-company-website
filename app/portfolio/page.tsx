import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/content/portfolio";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description: "Selected SN Factory projects — vehicle parts distribution, elevator and hoist installations, and home accessories supply.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Supply and installation projects that deliver"
        description="A selection of automotive, lift, industrial hoist, and home accessory engagements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-brand-pink uppercase">
                      {item.category}
                    </p>
                    <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
