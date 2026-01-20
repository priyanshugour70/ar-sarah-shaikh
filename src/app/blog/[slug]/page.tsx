import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getPostBySlug, getRecentPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  // Convert markdown-like content to HTML-friendly format
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("# ")) {
          return (
            <h1
              key={index}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 mt-8"
            >
              {line.replace("# ", "")}
            </h1>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4 mt-8"
            >
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[var(--color-text-dark)] mb-3 mt-6"
            >
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <li
              key={index}
              className="text-[var(--color-text-medium)] ml-4 mb-2"
            >
              {line.replace("- ", "")}
            </li>
          );
        }
        if (line.match(/^\d+\. /)) {
          return (
            <li
              key={index}
              className="text-[var(--color-text-medium)] ml-4 mb-2 list-decimal"
            >
              {line.replace(/^\d+\. /, "")}
            </li>
          );
        }
        if (line.trim() === "") {
          return <div key={index} className="h-4" />;
        }
        return (
          <p
            key={index}
            className="text-[var(--color-text-medium)] leading-relaxed mb-4"
          >
            {line}
          </p>
        );
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-widest uppercase text-[var(--color-primary)]">
                {post.category}
              </span>
              <span className="text-xs text-[var(--color-text-light)]">•</span>
              <span className="text-xs text-[var(--color-text-light)]">
                {post.date}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] mb-6">
              {post.title}
            </h1>
            <p className="text-[var(--color-text-medium)] text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-[var(--color-bg-cream)]">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-[var(--color-bg-cream)]">
        <div className="container">
          <article className="max-w-3xl mx-auto prose prose-lg">
            {formatContent(post.content)}
          </article>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[var(--color-bg-tan)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--color-text-light)]">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[var(--color-bg-warm)] text-[var(--color-text-medium)] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="max-w-3xl mx-auto mt-8 p-8 bg-[var(--color-bg-warm)]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-xl text-white">
                  S
                </span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg text-[var(--color-text-dark)]">
                  {post.author}
                </p>
                <p className="text-sm text-[var(--color-text-medium)]">
                  Brand Designer & Strategist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[var(--color-bg-tan)]">
          <div className="container">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[var(--color-text-dark)] text-center mb-12">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  category={relatedPost.category}
                  image={relatedPost.image}
                  date={relatedPost.date}
                  slug={relatedPost.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center">
          <span className="font-[family-name:var(--font-dancing)] text-3xl text-[var(--color-accent-light)] block mb-4">
            Enjoyed this post?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to create a brand that stands out? Get in touch to start your
            transformation.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
