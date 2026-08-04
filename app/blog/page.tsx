import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description: "Trade insights, landed cost guides, and logistics tips from the SN Factory team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides for smarter importing"
        description="Practical writing from operators who live freight, customs, and supplier management every day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-brand-pink uppercase">
                      {post.category} · {post.readingTime}
                    </p>
                    <h2 className="mt-2 font-display text-2xl">{post.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-muted-foreground">
                      {post.author} · {new Date(post.date).toLocaleDateString("en-LK", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
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
