import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your branding or web design project. I'd love to hear about your business and help bring your vision to life.",
  openGraph: {
    title: "Contact | Sarah Shaikh Studio",
    description:
      "Get in touch to discuss your branding or web design project.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
