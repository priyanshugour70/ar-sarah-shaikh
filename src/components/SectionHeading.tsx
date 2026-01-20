interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  script?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  script,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-12 lg:mb-14 ${centered ? "text-center" : ""} ${className}`}
    >
      {script && (
        <span className="font-[family-name:var(--font-dancing)] text-xl sm:text-2xl md:text-3xl text-[var(--color-primary)] block mb-1 md:mb-2">
          {script}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-dark)] mb-3 md:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-medium)] max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-4 md:px-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}
