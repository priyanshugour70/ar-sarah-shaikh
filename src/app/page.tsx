import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import BlogCard from "@/components/BlogCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSection from "@/components/NewsletterSection";
import { getFeaturedPortfolio } from "@/data/portfolio";
import { getRecentPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const featuredPortfolio = getFeaturedPortfolio();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-[var(--color-bg-brown)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-brown)] via-[var(--color-bg-brown)]/80 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
            alt="Sarah Shaikh Studio"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="container relative z-20 py-20">
          <div className="max-w-xl lg:max-w-2xl">
            <span className="font-[family-name:var(--font-dancing)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] block mb-3 md:mb-4">
              Hi Babe!
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6 leading-tight">
              I am here to guide you to create magic{" "}
              <span className="font-[family-name:var(--font-dancing)] italic text-[var(--color-primary)]">
                in the online space...
              </span>
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Creative design studio helping entrepreneurs and small businesses
              build authentic brands that stand out and attract dream clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/services">Explore Services</Button>
              <Button href="/portfolio" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Navigation Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-[var(--color-text-dark)] mb-2">
              STUDIO
            </h2>
            <span className="font-[family-name:var(--font-dancing)] text-xl md:text-2xl text-[var(--color-primary)]">
              by Sarah
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-10 max-w-3xl mx-auto text-center">
            <Link
              href="/shop"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                The Shop
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                Portfolio
              </span>
            </Link>
            <Link
              href="/blog"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                The Blog
              </span>
            </Link>
            <Link
              href="/services/web-design"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                Web Design
              </span>
            </Link>
            <Link
              href="/services"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                Services
              </span>
            </Link>
            <Link
              href="/services/branding"
              className="group py-3 text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                Branding
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                    alt="Sarah working"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80"
                    alt="Design details"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-6 md:pt-8">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80"
                    alt="Sarah portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-2">
                Hi, I&apos;m Sarah
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] mb-5 md:mb-6">
                Designer & Brand Strategist
              </h2>
              <div className="space-y-4 text-[var(--color-text-medium)] leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                <p>
                  I have made it my mission to help you combine your true
                  strengths and create a strong, timeless brand.
                </p>
                <p>
                  I know from experience how it can feel when you build your
                  brand solo. Create what sets you apart. Designing brands that
                  change lives and design that makes waves in your life and
                  business.
                </p>
                <p>
                  I am here to take this part through all the messiness and am
                  here being your brand listener to the end. Let us be ruthless
                  so you can throw in what can be here, standing right in the
                  online space.
                </p>
              </div>
              <Button href="/about">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Let's Do This"
            title="Together."
            subtitle="Whether you need a complete brand overhaul or a stunning website, I'm here to help bring your vision to life."
          />

          {/* Branding Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Branding work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-6 md:mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80"
                  alt="Branding details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-[var(--color-text-dark)] mb-3 md:mb-4">
                Branding
              </h3>
              <p className="text-[var(--color-text-medium)] leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                Strategic and thoughtful designs to help your business stand out
                in a crowded market with a strong, cohesive brand identity that
                attracts your ideal clients.
              </p>
              <Link
                href="/services/branding"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors group"
              >
                Learn More
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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Web Design Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
                  alt="Web design work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-[var(--color-text-dark)] mb-3 md:mb-4">
                Web Design
              </h3>
              <p className="text-[var(--color-text-medium)] leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                A place for your clients to land, to learn together and bring
                your vision to life. Because it is about all your ideas,
                thoughts, goals in the online space.
              </p>
              <Link
                href="/services/web-design"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors group"
              >
                Learn More
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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Blog Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            title="ON THE BLOG"
            script="Updates"
            subtitle="Tips, insights, and inspiration to help you build your dream brand and business."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-12">
            <Link
              href="/blog?category=style"
              className="text-xs md:text-sm tracking-widest uppercase text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors py-2"
            >
              Style
            </Link>
            <Link
              href="/blog?category=beauty"
              className="text-xs md:text-sm tracking-widest uppercase text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors py-2"
            >
              Beauty
            </Link>
            <Link
              href="/blog?category=resources"
              className="text-xs md:text-sm tracking-widest uppercase text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors py-2"
            >
              Resources
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button href="/blog" variant="outline">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-warm)]">
        <div className="container">
          <SectionHeading
            title="Featured Work"
            script="Portfolio"
            subtitle="A selection of recent projects for incredible clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.images[0]}
                href={`/portfolio/${item.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Button href="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-tan)]">
        <div className="container">
          <SectionHeading
            title="Kind Words"
            script="Testimonials"
            subtitle="Don't just take my word for it – hear what my clients have to say."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
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
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center px-4">
          <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
            Ready to get started?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            I&apos;d love to hear about your project and discuss how we can work
            together to bring your vision to life.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
