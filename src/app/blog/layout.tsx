import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, tutorials, and insights on branding, web design, and building a business you love.",
  openGraph: {
    title: "Blog | Sarah Shaikh Studio",
    description:
      "Tips, tutorials, and insights on branding, web design, and building a business you love.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
