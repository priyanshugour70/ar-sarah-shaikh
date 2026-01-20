"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const products = [
  {
    id: "1",
    title: "Brand Strategy Template Bundle",
    description:
      "Everything you need to DIY your brand strategy. Includes workbooks, templates, and video tutorials.",
    price: "$97",
    originalPrice: "$147",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
    category: "Templates",
    featured: true,
  },
  {
    id: "2",
    title: "Social Media Templates",
    description:
      "50+ customizable Canva templates for Instagram posts, stories, and Reels covers.",
    price: "$47",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    category: "Templates",
    featured: true,
  },
  {
    id: "3",
    title: "Website Copy Guide",
    description:
      "Learn how to write website copy that converts. Includes templates and examples.",
    price: "$37",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    category: "Guides",
    featured: false,
  },
  {
    id: "4",
    title: "Lightroom Preset Pack",
    description:
      "15 professional Lightroom presets for bright, airy, and editorial photography styles.",
    price: "$29",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    category: "Presets",
    featured: true,
  },
  {
    id: "5",
    title: "Client Welcome Packet Template",
    description:
      "Make a great first impression with this professionally designed welcome packet template.",
    price: "$27",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    category: "Templates",
    featured: false,
  },
  {
    id: "6",
    title: "Brand Mood Board Template",
    description:
      "Create stunning mood boards for your brand or clients with this easy-to-use Canva template.",
    price: "$17",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "Templates",
    featured: false,
  },
];

const categories = ["All", "Templates", "Guides", "Presets"];

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              DIY Your Brand
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              The Shop
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              Templates, guides, and tools to help you build a stunning brand on
              your own timeline and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Best Sellers"
            title="Featured Products"
            subtitle="Our most popular resources to help you elevate your brand."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products
              .filter((p) => p.featured)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white overflow-hidden group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white text-xs px-3 py-1 uppercase tracking-wider">
                          Sale
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 md:p-6">
                    <span className="text-xs tracking-widest uppercase text-[var(--color-text-light)] mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-medium)] mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--color-text-dark)]">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-[var(--color-text-light)] line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="text-sm text-[var(--color-primary)] hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <SectionHeading
            title="All Products"
            subtitle="Browse our complete collection of templates, guides, and tools."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="text-xs md:text-sm tracking-widest uppercase text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors py-2"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-xs tracking-widest uppercase text-[var(--color-text-light)] mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-medium)] mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[var(--color-text-dark)]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-[var(--color-text-light)] line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-[var(--color-text-dark)] text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-[var(--color-primary)] transition-colors whitespace-nowrap">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Work CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
                Need Something Custom?
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-[var(--color-text-medium)] leading-relaxed mb-6 text-sm md:text-base">
                Templates are great for DIYers, but if you&apos;re ready for a
                custom brand or website designed just for you, I&apos;d love to
                help. Check out my services or get in touch to discuss your
                project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button href="/services">View Services</Button>
                <Button href="/contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Custom design work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
