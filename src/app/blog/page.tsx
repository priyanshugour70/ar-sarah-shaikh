"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, getPostsByCategory } from "@/data/blog";

const categories = [
  { id: "all", label: "All" },
  { id: "style", label: "Style" },
  { id: "beauty", label: "Beauty" },
  { id: "resources", label: "Resources" },
  { id: "business", label: "Business" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const filteredPosts = getPostsByCategory(activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              Insights & Inspiration
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              The Blog
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              Tips, tutorials, and insights to help you build a brand and
              business you love. Grab a coffee and stay a while.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-12">
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

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--color-text-medium)]">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              script="Stay Updated"
              title="Join the Newsletter"
              subtitle="Get weekly tips, inspiration, and exclusive resources delivered straight to your inbox."
            />
            {isSubscribed ? (
              <p className="text-[var(--color-primary)] font-medium">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--color-text-dark)] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-[var(--color-primary)] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
