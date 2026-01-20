import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 h-full flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="var(--color-accent-light)"
        className="mb-4 md:mb-6 flex-shrink-0"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-[var(--color-text-medium)] leading-relaxed mb-6 italic text-sm sm:text-base flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
        {image && (
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-[var(--color-text-dark)] text-sm sm:text-base">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-[var(--color-text-light)]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
