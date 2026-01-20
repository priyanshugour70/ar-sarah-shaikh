"use client";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 400,
  height = 300,
  text = "Image",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-[var(--color-bg-tan)] flex items-center justify-center ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="text-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-2 opacity-50"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <p className="text-sm text-[var(--color-text-light)]">{text}</p>
      </div>
    </div>
  );
}
