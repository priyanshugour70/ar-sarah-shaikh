"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-warm)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <span className="font-[family-name:var(--font-dancing)] text-xl sm:text-2xl md:text-3xl text-[var(--color-primary)] block mb-2">
              Want to Upgrade Your
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] mb-4">
              Editing Game?
            </h2>
            <p className="text-[var(--color-text-medium)] mb-6 leading-relaxed text-sm md:text-base">
              Use my top 5 Lightroom editing tips to transform your photography!
              Get instant access to my free guide and start creating stunning
              images today.
            </p>
            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded text-sm">
                Thank you! Check your inbox for the free guide.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-[var(--color-bg-tan)] focus:border-[var(--color-primary)] outline-none text-sm md:text-base"
                />
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Get Free Guide
                </Button>
              </form>
            )}
          </div>
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md">
              <div className="absolute inset-0 bg-[var(--color-accent)] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
              <div className="relative h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80"
                  alt="Lightroom Editing Tips Guide"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-dark)]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs tracking-widest uppercase opacity-80 block mb-1">
                    Free Download
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-1">
                    5 Lightroom
                  </h3>
                  <p className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl">
                    Editing Tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
