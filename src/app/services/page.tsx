import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our branding, web design, and creative services designed to help entrepreneurs and small businesses build authentic brands that stand out.",
  openGraph: {
    title: "Services | Sarah Shaikh Studio",
    description:
      "Explore our branding, web design, and creative services designed to help entrepreneurs build authentic brands.",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your business, goals, and vision. This is where the magic begins.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our discovery, I develop a strategic plan that will guide your entire brand or website design.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "This is where your vision comes to life. I create multiple concepts and refine until it's perfect.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "I deliver all your final files and assets, along with guidelines and support as you launch!",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              What I Offer
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              Services & Packages
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              Whether you&apos;re starting from scratch or ready for a refresh,
              I offer a range of services to help you build a brand and online
              presence that attracts your dream clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center ${
                index !== services.length - 1 ? "mb-16 md:mb-20 lg:mb-24" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden group max-w-md mx-auto lg:max-w-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs tracking-widest uppercase text-[var(--color-primary)] mb-2 block">
                  {service.price}
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                  {service.title}
                </h2>
                <p className="text-[var(--color-text-medium)] leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                  {service.fullDescription}
                </p>
                <h4 className="font-semibold text-[var(--color-text-dark)] mb-3 text-sm md:text-base">
                  What&apos;s Included:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 md:mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-text-medium)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button href={`/services/${service.slug}`}>Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <SectionHeading
            script="How It Works"
            title="My Process"
            subtitle="Every project follows a proven process designed to deliver results you'll love."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
                  {step.number}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--color-text-medium)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Questions?"
            title="FAQs"
            subtitle="Here are answers to some common questions."
          />
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm md:text-base">
                Brand identity projects typically take 4-6 weeks, while website
                projects take 6-8 weeks. VIP Days are completed in just one day!
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                What if I don&apos;t know what I want?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm md:text-base">
                That&apos;s completely normal! My discovery process is designed
                to help you uncover your vision. I&apos;ll guide you every step.
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm md:text-base">
                Yes! All packages can be split into 2-3 payments. A 50% deposit
                is required to book your project.
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                Can I see more examples of your work?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm md:text-base">
                Absolutely! Head over to my{" "}
                <Link
                  href="/portfolio"
                  className="text-[var(--color-primary)] underline hover:no-underline"
                >
                  portfolio page
                </Link>{" "}
                to see detailed case studies of past projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center px-4">
          <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
            Ready to get started?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Let&apos;s Create Your Dream Brand
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            I&apos;d love to hear about your project. Fill out my contact form
            and I&apos;ll be in touch within 48 hours.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
