import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/content/portfolio";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function PortfolioPreview({
  limit = 3,
  offset = 0,
  title = "Programs that moved the needle",
  eyebrow = "Portfolio",
}: {
  limit?: number;
  offset?: number;
  title?: string;
  eyebrow?: string;
}) {
  const items = portfolio.slice(offset, offset + limit);

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description="Selected import programs across retail, hospitality, manufacturing, and energy."
          />
          <ButtonLink href="/portfolio" variant="outline" className="mb-16">
            View portfolio
          </ButtonLink>
        </div>
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.slug}>
              <Link
                href={`/portfolio/${item.slug}`}
                className="group block overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wider text-brand-pink uppercase">
                    {item.category} · {item.origin}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
