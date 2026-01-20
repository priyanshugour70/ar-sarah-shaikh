import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of brand identity, web design, and creative projects for entrepreneurs and small businesses.",
  openGraph: {
    title: "Portfolio | Sarah Shaikh Studio",
    description:
      "Explore our portfolio of brand identity, web design, and creative projects.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
