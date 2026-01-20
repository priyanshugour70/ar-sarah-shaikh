import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Sarah Shaikh, a passionate brand designer and strategist helping creative entrepreneurs build authentic brands that attract their dream clients.",
  openGraph: {
    title: "About Sarah Shaikh",
    description:
      "Learn more about Sarah Shaikh, a passionate brand designer and strategist helping creative entrepreneurs build authentic brands.",
  },
};

const values = [
  {
    title: "Authenticity",
    description:
      "Your brand should be a true reflection of who you are. I believe in creating designs that feel genuine and connect with your audience on a deeper level.",
  },
  {
    title: "Strategy",
    description:
      "Beautiful design is important, but it needs to work for your business. Every decision is made with your goals and target audience in mind.",
  },
  {
    title: "Collaboration",
    description:
      "The best brands are created together. I value open communication and partnership throughout the entire design process.",
  },
  {
    title: "Excellence",
    description:
      "I'm committed to delivering work that exceeds expectations. Every detail matters, and I won't rest until it's perfect.",
  },
];

const funFacts = [
  "Obsessed with vintage markets and thrift finds",
  "Can't start the day without oat milk latte",
  "Always planning my next travel adventure",
  "Proud plant mom to 20+ houseplants",
  "Believe good design can change the world",
  "Night owl who does best work after midnight",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            <div className="relative order-last lg:order-first">
              <div className="relative aspect-[4/5] overflow-hidden max-w-md mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Sarah Shaikh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-[var(--color-accent)] -z-10 hidden sm:block" />
            </div>
            <div>
              <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-2">
                Nice to meet you!
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-[var(--color-text-dark)] mb-5 md:mb-6">
                I&apos;m Sarah Shaikh
              </h1>
              <div className="space-y-4 text-[var(--color-text-medium)] leading-relaxed text-sm md:text-base">
                <p>
                  I&apos;m a brand designer and strategist with a passion for
                  helping creative entrepreneurs build businesses they love. I
                  believe that everyone deserves a brand that truly represents
                  who they are and attracts their dream clients.
                </p>
                <p>
                  After spending years working in corporate design, I realized
                  my true calling was helping small business owners and
                  entrepreneurs who pour their hearts into their work but
                  struggle to communicate their value through their brand.
                </p>
                <p>
                  Now, I get to wake up every day and do what I love – creating
                  beautiful, strategic brands that help my clients stand out,
                  connect with their audience, and grow their businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-cream)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              script="My Story"
              title="How It All Started"
              centered={true}
            />
            <div className="space-y-5 md:space-y-6 text-[var(--color-text-medium)] leading-relaxed text-sm md:text-base">
              <p>
                My journey into design started when I was just a kid, spending
                hours drawing and creating in my room. I was always the one
                making birthday cards, decorating for parties, and redesigning
                my bedroom every few months.
              </p>
              <p>
                After studying graphic design in college, I landed my dream job
                at a prestigious design agency. While I learned so much during
                that time, I also realized that my heart wasn&apos;t in creating
                designs for big corporations – I wanted to help real people with
                real dreams.
              </p>
              <p>
                In 2019, I took the leap and started my own studio. It was
                terrifying and exhilarating all at once. Since then, I&apos;ve
                had the privilege of working with hundreds of incredible
                entrepreneurs, helping them bring their visions to life.
              </p>
              <p>
                What I love most about my work is seeing the transformation that
                happens when someone finally has a brand that represents who
                they truly are. It&apos;s not just about pretty logos and
                colors – it&apos;s about confidence, clarity, and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-tan)]">
        <div className="container">
          <SectionHeading
            script="What I Believe"
            title="My Values"
            subtitle="These core beliefs guide everything I do and every brand I create."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[var(--color-text-dark)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-text-medium)] leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            <div>
              <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-primary)] block mb-2">
                Beyond the Brand
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-dark)] mb-5 md:mb-6">
                A Few Fun Facts
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {funFacts.map((fact, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--color-text-medium)] text-sm md:text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80"
                  alt="Coffee lifestyle"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden mt-6 md:mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80"
                  alt="Travel adventure"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80"
                  alt="Plants"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden mt-6 md:mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80"
                  alt="Working"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-text-dark)] text-white">
        <div className="container text-center px-4">
          <span className="font-[family-name:var(--font-dancing)] text-2xl md:text-3xl text-[var(--color-accent-light)] block mb-3 md:mb-4">
            Let&apos;s work together
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            I&apos;d love to learn more about you and your business. Let&apos;s
            chat about how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Get In Touch
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--color-text-dark)]"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
