import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Sarah Shaikh Studio website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[var(--color-text-dark)] mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-[var(--color-text-medium)] text-center">
              Last updated: January 20, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-[var(--color-text-medium)]">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Sarah Shaikh Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
                  privacy and is committed to protecting your personal data.
                  This privacy policy explains how we collect, use, and
                  safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Personal information you provide (name, email, business
                    name) when filling out contact forms
                  </li>
                  <li>
                    Usage data collected automatically (IP address, browser
                    type, pages visited)
                  </li>
                  <li>
                    Cookies and similar tracking technologies for website
                    analytics
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Send newsletters and marketing communications (with your consent)</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Third-Party Services
                </h2>
                <p className="leading-relaxed">
                  We may use third-party services such as Google Analytics,
                  email marketing platforms, and payment processors. These
                  services have their own privacy policies governing the use of
                  your information.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this privacy policy or our
                  data practices, please contact us at{" "}
                  <a
                    href="mailto:hello@sarahshaikh.com"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    hello@sarahshaikh.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
