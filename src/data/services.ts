export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  price: string;
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "branding",
    title: "Branding",
    shortDescription:
      "Strategic and thoughtful designs to help your business stand out in a crowded market with a strong, cohesive brand identity.",
    fullDescription:
      "Your brand is so much more than just a logo. It's the entire experience your clients have with your business. I create comprehensive brand identities that communicate your unique story and connect with your ideal clients on an emotional level. From strategy to visual identity, every element is crafted to position you as the expert you are.",
    features: [
      "Brand Strategy & Positioning",
      "Logo Design & Variations",
      "Color Palette & Typography",
      "Brand Guidelines Document",
      "Social Media Templates",
      "Business Card Design",
      "Brand Pattern & Elements",
      "Launch Strategy Support",
    ],
    price: "Starting at $2,500",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    slug: "branding",
  },
  {
    id: "web-design",
    title: "Web Design",
    shortDescription:
      "A place for your clients to land, to learn together and bring your vision to life. Because it is about all your ideas, thoughts, goals in the online space.",
    fullDescription:
      "Your website is your digital home – the place where potential clients come to learn about you and decide if you're the right fit. I design stunning, strategic websites that not only look beautiful but also convert visitors into paying clients. Every element is thoughtfully designed with user experience and your business goals in mind.",
    features: [
      "Custom Website Design",
      "Mobile-Responsive Development",
      "SEO Optimization",
      "Contact Forms & Integration",
      "Blog Setup",
      "Social Media Integration",
      "Analytics Setup",
      "Training & Support",
    ],
    price: "Starting at $3,500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    slug: "web-design",
  },
  {
    id: "brand-photography",
    title: "Brand Photography Direction",
    shortDescription:
      "Curated photo direction to ensure your brand imagery perfectly captures your essence and speaks to your ideal clients.",
    fullDescription:
      "Imagery is one of the most powerful tools in your brand arsenal. I provide comprehensive brand photography direction to ensure every photo perfectly represents your brand and connects with your target audience. From mood boards to shot lists, I'll guide your entire photography process.",
    features: [
      "Brand Photography Strategy",
      "Mood Board Creation",
      "Shot List Development",
      "Styling Recommendations",
      "Photographer Coordination",
      "Image Curation & Selection",
      "Editing Direction",
      "Usage Guidelines",
    ],
    price: "Starting at $800",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    slug: "brand-photography",
  },
  {
    id: "vip-day",
    title: "VIP Design Day",
    shortDescription:
      "An intensive one-day design experience where we tackle your most pressing design needs together.",
    fullDescription:
      "Need something done fast without sacrificing quality? My VIP Design Days are intensive, focused sessions where we tackle your biggest design priorities in just one day. You'll have my undivided attention as we transform your vision into reality. Perfect for those who value their time and want results quickly.",
    features: [
      "Full Day Dedicated to You",
      "Pre-Day Strategy Call",
      "Same-Day Deliverables",
      "Choose Your Focus Area",
      "Rapid Revisions",
      "Post-Day Support",
      "All Source Files",
      "Priority Scheduling",
    ],
    price: "Starting at $1,800",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    slug: "vip-day",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
