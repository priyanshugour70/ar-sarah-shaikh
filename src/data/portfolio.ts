export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "branding" | "web-design" | "photography";
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
  slug: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Bloom & Co",
    client: "Emily Richardson",
    category: "branding",
    description:
      "A complete brand identity for a luxury floral design studio, capturing the elegance and artistry of botanical beauty.",
    challenge:
      "Emily needed a brand that would position her floral studio as a premium, luxury service while still feeling approachable and warm to potential clients.",
    solution:
      "We developed a sophisticated brand identity using soft, muted colors paired with elegant typography. The result is a brand that feels both luxurious and inviting.",
    results: [
      "150% increase in inquiry rate",
      "Average order value increased by 40%",
      "Featured in 3 wedding publications",
    ],
    images: [
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    ],
    testimonial: {
      quote:
        "Sarah completely transformed my business. The brand she created captures exactly who I am and attracts my dream clients effortlessly.",
      name: "Emily Richardson",
      title: "Founder, Bloom & Co",
    },
    slug: "bloom-and-co",
    featured: true,
  },
  {
    id: "2",
    title: "Mindful Maven",
    client: "Jessica Chen",
    category: "web-design",
    description:
      "A calming, user-focused website for a wellness coach that guides visitors through their transformation journey.",
    challenge:
      "Jessica needed a website that would effectively communicate her services and convert visitors into coaching clients while maintaining a serene, calming aesthetic.",
    solution:
      "We created a strategic, conversion-focused website with soothing colors and intuitive navigation. Every element was designed to build trust and encourage bookings.",
    results: [
      "200% increase in consultation bookings",
      "Average session time increased by 65%",
      "Email list grew by 300%",
    ],
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    ],
    testimonial: {
      quote:
        "My new website has completely changed my business. I'm booking dream clients consistently and my inbox is full of inquiries.",
      name: "Jessica Chen",
      title: "Wellness Coach, Mindful Maven",
    },
    slug: "mindful-maven",
    featured: true,
  },
  {
    id: "3",
    title: "Golden Hour Studio",
    client: "Sarah Martinez",
    category: "branding",
    description:
      "Brand identity for a boutique photography studio specializing in golden hour portraits and lifestyle photography.",
    challenge:
      "Sarah wanted a brand that would reflect the warm, dreamy quality of her photography while standing out in a saturated market.",
    solution:
      "We crafted a warm, golden-toned brand identity with custom illustrations that perfectly capture the magic of golden hour light.",
    results: [
      "Fully booked for 6 months",
      "Increased pricing by 50%",
      "Social media following doubled",
    ],
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    slug: "golden-hour-studio",
    featured: true,
  },
  {
    id: "4",
    title: "The Styled Home",
    client: "Amanda Thompson",
    category: "web-design",
    description:
      "An elegant e-commerce website for an interior design shop featuring curated home decor collections.",
    challenge:
      "Amanda needed an online presence that would showcase her curated collections while providing a seamless shopping experience.",
    solution:
      "We designed a sophisticated e-commerce site with beautiful product displays, easy navigation, and a streamlined checkout process.",
    results: [
      "Online sales increased by 180%",
      "Cart abandonment reduced by 35%",
      "Customer retention improved by 45%",
    ],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    slug: "the-styled-home",
    featured: false,
  },
  {
    id: "5",
    title: "Nourish Kitchen",
    client: "Lisa Park",
    category: "branding",
    description:
      "Complete brand identity for a health-focused meal prep service combining clean aesthetics with approachable warmth.",
    challenge:
      "Lisa wanted to position her meal prep service as premium while keeping it accessible to busy professionals seeking healthier options.",
    solution:
      "We created a fresh, clean brand identity with organic elements that communicates health and quality without feeling clinical.",
    results: [
      "Subscriber base grew by 250%",
      "Partnership opportunities increased",
      "Brand recognition improved significantly",
    ],
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    ],
    slug: "nourish-kitchen",
    featured: false,
  },
  {
    id: "6",
    title: "Sage & Honey",
    client: "Rachel Green",
    category: "photography",
    description:
      "Brand photography direction for a natural skincare line, capturing the essence of botanical beauty.",
    challenge:
      "Rachel needed cohesive brand imagery that would work across all platforms while highlighting the natural ingredients in her products.",
    solution:
      "We developed a comprehensive photography direction including mood boards, shot lists, and styling guides that created stunning, cohesive imagery.",
    results: [
      "Social engagement increased by 175%",
      "Product photography used in retail partnerships",
      "Consistent brand imagery across all channels",
    ],
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&q=80",
    ],
    slug: "sage-and-honey",
    featured: false,
  },
];

export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return portfolioItems.filter((item) => item.featured);
};

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioItems.find((item) => item.slug === slug);
};

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
};
