import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import { portfolioItems, getPortfolioBySlug } from "@/data/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sarah Shaikh Portfolio`,
      description: project.description,
      images: project.images,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextProject =
    portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/portfolio"
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
              Back to Portfolio
            </Link>
            <span className="text-xs tracking-widest uppercase text-[var(--color-primary)] mb-2 block">
              {project.category.replace("-", " ")}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4">
              {project.title}
            </h1>
            <p className="text-[var(--color-text-medium)] text-lg mb-2">
              Client: {project.client}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-[var(--color-bg-cream)]">
        <div className="container py-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                About the Project
              </h2>
              <p className="text-[var(--color-text-medium)] leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-3">
                The Challenge
              </h3>
              <p className="text-[var(--color-text-medium)] leading-relaxed mb-8">
                {project.challenge}
              </p>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-3">
                The Solution
              </h3>
              <p className="text-[var(--color-text-medium)] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <div className="bg-[var(--color-bg-warm)] p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-4">
                  Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[var(--color-text-medium)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-[var(--color-bg-cream)]">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <TestimonialCard
                quote={project.testimonial.quote}
                name={project.testimonial.name}
                title={project.testimonial.title}
              />
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-sm text-[var(--color-text-light)] block mb-2">
                Next Project
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[var(--color-text-dark)]">
                {nextProject.title}
              </h2>
            </div>
            <Button href={`/portfolio/${nextProject.slug}`}>View Project</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center">
          <span className="font-[family-name:var(--font-dancing)] text-3xl text-[var(--color-accent-light)] block mb-4">
            Ready for your transformation?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            I&apos;d love to help you achieve similar results. Get in touch to
            discuss your project.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
