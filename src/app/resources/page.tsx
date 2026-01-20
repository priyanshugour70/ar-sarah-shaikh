"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const freeResources = [
  {
    id: "1",
    title: "5 Lightroom Editing Tips",
    description:
      "Transform your photography with these professional editing secrets. Perfect for beginners and intermediate photographers.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    type: "PDF Guide",
  },
  {
    id: "2",
    title: "Brand Strategy Workbook",
    description:
      "Define your brand's foundation with this comprehensive workbook. Includes exercises for mission, values, and positioning.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
    type: "Workbook",
  },
  {
    id: "3",
    title: "Website Launch Checklist",
    description:
      "Don't miss a thing! This 50-point checklist ensures your website launch goes smoothly from start to finish.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    type: "Checklist",
  },
];

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent, resourceId: string) => {
    e.preventDefault();
    console.log(`Downloading resource ${resourceId} for ${email}`);
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedResource(null);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              Free Downloads
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              Resources
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              Tools, templates, and guides to help you elevate your brand and
              business. All completely free!
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <SectionHeading
            script="Grab These"
            title="Free Resources"
            subtitle="Enter your email to unlock instant access to these valuable resources."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {freeResources.map((resource) => (
              <div key={resource.id} className="bg-white overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--color-accent)] text-[var(--color-text-dark)] text-xs px-3 py-1 uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-medium)] mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  {selectedResource === resource.id ? (
                    isSubmitted ? (
                      <div className="bg-green-50 text-green-700 p-3 text-sm text-center">
                        Check your inbox for the download link!
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => handleSubmit(e, resource.id)}
                        className="space-y-3"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full px-3 py-2.5 text-sm"
                        />
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            className="flex-1 bg-[var(--color-text-dark)] text-white px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-[var(--color-primary)] transition-colors"
                          >
                            Download
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedResource(null)}
                            className="px-4 py-2.5 text-xs text-[var(--color-text-medium)] hover:text-[var(--color-text-dark)]"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )
                  ) : (
                    <button
                      onClick={() => setSelectedResource(resource.id)}
                      className="w-full bg-[var(--color-text-dark)] text-white px-4 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-primary)] transition-colors"
                    >
                      Get Free Access
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              Want More?
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
              Join the Newsletter
            </h2>
            <p className="text-[var(--color-text-medium)] mb-6 md:mb-8 text-sm md:text-base">
              Get weekly tips, exclusive resources, and first access to new
              freebies delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center px-4">
          <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
            Ready for more?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            Love the free resources? Imagine what we could create together.
            Let&apos;s talk about your brand!
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
