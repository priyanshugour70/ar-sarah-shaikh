import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { services, getServiceBySlug } from "@/data/services";
import { testimonials } from "@/data/testimonials";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Sarah Shaikh Studio`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase text-[var(--color-primary)] mb-2 block">
                {service.price}
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-6">
                {service.title}
              </h1>
              <p className="text-[var(--color-text-medium)] text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Button href="/contact">Book This Service</Button>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-accent)] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Everything You Need"
            title="What's Included"
            subtitle="Each package is thoughtfully designed to give you everything you need to succeed."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[var(--color-text-dark)] font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process for this service */}
      <section className="py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              script="How It Works"
              title="The Process"
              subtitle={`Here's what to expect when you book ${service.title.toLowerCase()} with me.`}
            />
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-white">
                      1
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-2">
                    Book & Onboard
                  </h3>
                  <p className="text-[var(--color-text-medium)]">
                    Secure your spot with a deposit and complete your onboarding
                    questionnaire. This helps me understand your vision, goals,
                    and preferences.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-white">
                      2
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-2">
                    Strategy & Discovery
                  </h3>
                  <p className="text-[var(--color-text-medium)]">
                    We'll have a discovery call to dive deep into your brand.
                    I'll research your industry and create a strategic plan for
                    your project.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-white">
                      3
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-2">
                    Design & Refine
                  </h3>
                  <p className="text-[var(--color-text-medium)]">
                    I'll present initial concepts for your review. We'll
                    collaborate to refine and perfect every detail until
                    you&apos;re in love with the result.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-white">
                      4
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-text-dark)] mb-2">
                    Launch & Support
                  </h3>
                  <p className="text-[var(--color-text-medium)]">
                    Receive all your final files, brand guidelines, and
                    everything you need to launch. I'm here to support you even
                    after the project ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Client Love"
            title="What They Say"
            subtitle="Don't just take my word for it – here's what my clients have to say."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center">
          <span className="font-[family-name:var(--font-dancing)] text-3xl text-[var(--color-accent-light)] block mb-4">
            Ready to get started?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to invest in {service.title.toLowerCase()}? Fill out my
            inquiry form and I&apos;ll be in touch within 48 hours to discuss
            your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Book {service.title}
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--color-text-dark)]"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
