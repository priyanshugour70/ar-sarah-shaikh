"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[var(--color-text-dark)] text-white py-2 px-4 text-center relative">
      <div className="container flex items-center justify-center gap-2">
        <span className="text-sm tracking-wide">
          Sign up to receive my FREE Lightroom Editing Tips!
        </span>
        <Link
          href="/resources"
          className="text-sm font-semibold underline underline-offset-2 hover:text-[var(--color-accent-light)] transition-colors"
        >
          Grab it here
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--color-accent-light)] transition-colors"
        aria-label="Close announcement"
      >
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
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
