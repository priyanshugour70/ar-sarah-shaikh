import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  href,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reverse ? "lg:direction-rtl" : ""
      }`}
    >
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/5] overflow-hidden group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className={`${reverse ? "lg:order-1 lg:text-right" : ""}`}>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[var(--color-text-dark)] mb-4">
          {title}
        </h3>
        <p className="text-[var(--color-text-medium)] leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href={href}
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
  );
}
