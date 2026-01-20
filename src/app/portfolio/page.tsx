"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, getPortfolioByCategory } from "@/data/portfolio";

const categories = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "web-design", label: "Web Design" },
  { id: "photography", label: "Photography" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems = getPortfolioByCategory(activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              My Work
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              Portfolio
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              A collection of brands and websites I&apos;ve had the pleasure of
              creating for incredible clients. Each project is crafted with
              strategy, intention, and lots of love.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-10 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-xs md:text-sm tracking-widest uppercase transition-colors py-2 px-1 ${
                  activeCategory === category.id
                    ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                    : "text-[var(--color-text-medium)] hover:text-[var(--color-primary)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-text-dark)]/0 group-hover:bg-[var(--color-text-dark)]/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs md:text-sm tracking-widest uppercase">
                      View Project
                    </span>
                  </div>
                </div>
                <span className="text-xs tracking-widest uppercase text-[var(--color-text-light)] mb-1 block">
                  {item.category.replace("-", " ")}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center px-4">
          <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
            Like what you see?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Let&apos;s Create Yours
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            Ready to have your business featured here? I&apos;d love to help you
            create a brand that you&apos;re proud to show off.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-text-dark)] px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
