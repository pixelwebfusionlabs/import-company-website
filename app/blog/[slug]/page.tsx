import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Reveal, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 font-display text-3xl">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.includes("=")) {
      return (
        <p key={i} className="mt-4 rounded-2xl bg-muted p-4 text-sm font-medium">
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (/^\d+\./.test(block)) {
      const lines = block.split("\n");
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          {lines.map((line) => (
            <li key={line}>{line.replace(/^\d+\.\s*/, "")}</li>
          ))}
        </ol>
      );
    }
    if (block.startsWith("- ")) {
      const lines = block.split("\n");
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {lines.map((line) => (
            <li key={line}>{line.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
        {block.replace(/\*\*(.*?)\*\*/g, "$1")}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="800px" priority />
            </div>
            <p className="text-sm text-muted-foreground">
              {post.author} · {new Date(post.date).toLocaleDateString("en-LK", { year: "numeric", month: "long", day: "numeric" })} · {post.readingTime}
            </p>
            <article className="mt-2">{renderContent(post.content)}</article>
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
