import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--color-bg-cream)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-[family-name:var(--font-dancing)] text-6xl text-[var(--color-accent)] block mb-4">
            Oops!
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-dark)] mb-6">
            Page Not Found
          </h1>
          <p className="text-[var(--color-text-medium)] text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/">Back to Home</Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
