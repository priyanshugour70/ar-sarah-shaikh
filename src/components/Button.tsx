import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer text-center";

  const variantStyles = {
    primary:
      "bg-[var(--color-text-dark)] text-white hover:bg-[var(--color-primary)] active:scale-[0.98]",
    outline:
      "bg-transparent border border-[var(--color-text-dark)] text-[var(--color-text-dark)] hover:bg-[var(--color-text-dark)] hover:text-white active:scale-[0.98]",
    accent:
      "bg-[var(--color-accent)] text-[var(--color-text-dark)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-5 sm:px-6 py-3 text-xs sm:text-sm",
    lg: "px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
