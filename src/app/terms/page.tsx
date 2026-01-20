import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Sarah Shaikh Studio website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-20 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[var(--color-text-dark)] mb-6 text-center">
              Terms of Service
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
                  Agreement to Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing or using the Sarah Shaikh Studio website, you
                  agree to be bound by these Terms of Service. If you disagree
                  with any part of these terms, you may not access the website
                  or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Services
                </h2>
                <p className="leading-relaxed">
                  Sarah Shaikh Studio provides branding, web design, and related
                  creative services. Specific terms for individual projects will
                  be outlined in separate contracts and proposals.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Intellectual Property
                </h2>
                <p className="leading-relaxed mb-4">
                  Unless otherwise stated in a project contract:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All content on this website is the property of Sarah Shaikh
                    Studio
                  </li>
                  <li>
                    Client work ownership transfers upon final payment as
                    specified in project contracts
                  </li>
                  <li>
                    Portfolio rights are retained for promotional purposes
                    unless otherwise agreed
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Payment Terms
                </h2>
                <p className="leading-relaxed mb-4">
                  For design services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A 50% deposit is required to secure your project date</li>
                  <li>
                    Remaining balance is due before final files are delivered
                  </li>
                  <li>Payment plans are available for qualifying projects</li>
                  <li>All sales are final; deposits are non-refundable</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Project Timelines
                </h2>
                <p className="leading-relaxed">
                  Project timelines are estimates based on timely client
                  feedback. Delays in providing content, feedback, or approvals
                  may extend the project timeline. Rush fees may apply for
                  expedited timelines.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Revisions
                </h2>
                <p className="leading-relaxed">
                  Each package includes a specified number of revision rounds as
                  outlined in your project proposal. Additional revisions beyond
                  the included amount will be billed at our hourly rate.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  Sarah Shaikh Studio shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your use of our services or website.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Changes to Terms
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting to this
                  page. Your continued use of the website constitutes acceptance
                  of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-text-dark)] mb-4">
                  Contact
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at{" "}
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
