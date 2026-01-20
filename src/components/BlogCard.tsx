import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  image,
  date,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
        <span className="text-xs tracking-widest uppercase text-[var(--color-primary)]">
          {category}
        </span>
        <span className="text-xs text-[var(--color-text-light)] hidden sm:inline">
          •
        </span>
        <span className="text-xs text-[var(--color-text-light)]">{date}</span>
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-medium)] line-clamp-2 leading-relaxed">
        {excerpt}
      </p>
    </Link>
  );
}
