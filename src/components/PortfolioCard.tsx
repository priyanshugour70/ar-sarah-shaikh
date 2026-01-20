import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
  href,
}: PortfolioCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[var(--color-text-dark)]/0 group-hover:bg-[var(--color-text-dark)]/20 transition-colors duration-300" />
      </div>
      <span className="text-xs tracking-widest uppercase text-[var(--color-text-light)] mb-1 block">
        {category.replace("-", " ")}
      </span>
      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
        {title}
      </h3>
    </Link>
  );
}
