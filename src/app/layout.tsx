import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarahshaikh.com"),
  title: {
    default: "Sarah Shaikh | Creative Designer & Brand Strategist",
    template: "%s | Sarah Shaikh",
  },
  description:
    "I help creative entrepreneurs build stunning brands and websites that attract their dream clients. Specializing in branding, web design, and digital strategy.",
  keywords: [
    "brand designer",
    "web designer",
    "creative entrepreneur",
    "branding services",
    "website design",
    "digital strategy",
    "Sarah Shaikh",
    "creative studio",
  ],
  authors: [{ name: "Sarah Shaikh" }],
  creator: "Sarah Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahshaikh.com",
    siteName: "Sarah Shaikh Studio",
    title: "Sarah Shaikh | Creative Designer & Brand Strategist",
    description:
      "I help creative entrepreneurs build stunning brands and websites that attract their dream clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah Shaikh Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Shaikh | Creative Designer & Brand Strategist",
    description:
      "I help creative entrepreneurs build stunning brands and websites that attract their dream clients.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancing.variable} ${lato.variable} antialiased`}
      >
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
