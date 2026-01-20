export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sarah has an incredible ability to take your vision and transform it into something even more beautiful than you imagined. My brand finally feels like ME!",
    name: "Emily Richardson",
    title: "Founder, Bloom & Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: "2",
    quote:
      "Working with Sarah was the best investment I've made in my business. She truly understands how to create brands that connect with your ideal clients.",
    name: "Jessica Chen",
    title: "Wellness Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    id: "3",
    quote:
      "I'm now booked solid with dream clients who are willing to pay my rates. Sarah's strategic approach to design completely transformed my business.",
    name: "Amanda Thompson",
    title: "Interior Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
  },
  {
    id: "4",
    quote:
      "Sarah doesn't just create beautiful designs – she creates experiences. My clients constantly compliment my website and brand.",
    name: "Rachel Green",
    title: "Skincare Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
  },
  {
    id: "5",
    quote:
      "The brand Sarah created for me has opened so many doors. I've been featured in publications I never thought possible!",
    name: "Sarah Martinez",
    title: "Photographer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
];
