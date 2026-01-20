"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  "Branding",
  "Web Design",
  "Brand Photography Direction",
  "VIP Design Day",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $3,500",
  "$3,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/sarahshaikh",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/sarahshaikh",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 12c0-2.5 1.5-5 4-5s4 2.5 4 5-1.5 5-4 7"></path>
        <line x1="12" y1="17" x2="10" y2="22"></line>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/sarahshaikh",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    referral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        business: "",
        website: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        referral: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-3 md:mb-4">
              Let&apos;s Connect
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-[var(--color-text-medium)] text-base md:text-lg leading-relaxed">
              Ready to elevate your brand? Fill out the form below and I&apos;ll
              get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 xl:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 md:p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[var(--color-text-dark)] mb-2">
                    Thank You!
                  </h2>
                  <p className="text-[var(--color-text-medium)] mb-6 text-sm md:text-base">
                    Your inquiry has been received. I&apos;ll review your
                    project details and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--color-primary)] underline hover:no-underline text-sm md:text-base"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your Business Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Current Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                      >
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full bg-white"
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                    >
                      Ideal Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="e.g., Start in March, Launch by May"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                    >
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Tell me about your business, your goals, and what you're hoping to achieve..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="referral"
                      className="block text-sm font-medium text-[var(--color-text-dark)] mb-2"
                    >
                      How Did You Find Me?
                    </label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Google, Instagram, Referral, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-text-dark)] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <div className="bg-[var(--color-bg-warm)] p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-4">
                  Other Ways to Reach Me
                </h3>
                <div className="space-y-4 text-[var(--color-text-medium)] text-sm md:text-base">
                  <p>
                    <strong className="block mb-1">Email:</strong>
                    <a
                      href="mailto:hello@sarahshaikh.com"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      hello@sarahshaikh.com
                    </a>
                  </p>
                  <p>
                    <strong className="block mb-1">Response Time:</strong>
                    Within 48 hours
                  </p>
                  <p>
                    <strong className="block mb-1">Based In:</strong>
                    Los Angeles, CA
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-bg-warm)] p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-4">
                  Let&apos;s Be Social
                </h3>
                <p className="text-[var(--color-text-medium)] mb-4 text-sm md:text-base">
                  Follow along for behind-the-scenes peeks, tips, and
                  inspiration!
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-medium)] hover:text-[var(--color-primary)] transition-colors p-1"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-tan)]">
        <div className="container">
          <SectionHeading
            script="Questions?"
            title="Before You Reach Out"
            subtitle="Here are some things you might want to know."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                What&apos;s your availability?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm">
                I typically book 2-3 months in advance. Fill out the inquiry
                form to check current availability.
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                Do you offer consultations?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm">
                Yes! After receiving your inquiry, we&apos;ll schedule a free
                15-minute discovery call.
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                What if I&apos;m not sure what I need?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm">
                No problem! Share as much as you can and I&apos;ll help guide
                you to the right solution.
              </p>
            </div>
            <div className="bg-white p-5 md:p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-[var(--color-text-dark)] mb-2">
                What happens after I submit?
              </h3>
              <p className="text-[var(--color-text-medium)] text-sm">
                I&apos;ll review your inquiry and respond within 48 hours with
                next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
