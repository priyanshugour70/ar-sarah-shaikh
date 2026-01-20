export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "style" | "beauty" | "resources" | "business";
  image: string;
  date: string;
  author: string;
  slug: string;
  featured: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Where To Find The Best Locations For Your Brand Photoshoot",
    excerpt:
      "Discover the secret spots and insider tips for finding stunning locations that will make your brand photos stand out from the crowd.",
    content: `
# Where To Find The Best Locations For Your Brand Photoshoot

Finding the perfect location for your brand photoshoot can feel overwhelming, but it doesn't have to be! With a little planning and creativity, you can discover stunning backdrops that perfectly represent your brand.

## Start With Your Brand Story

Before you start scouting locations, think about what story you want to tell. Your location should complement your brand's personality and resonate with your ideal clients.

### Consider These Questions:
- What emotions do you want to evoke?
- What aesthetic matches your brand?
- Where does your ideal client spend their time?

## Top Location Ideas

### 1. Coffee Shops & Cafes
The warm, inviting atmosphere of a well-designed coffee shop can create beautiful, relatable imagery. Look for spots with good natural light and interesting architectural details.

### 2. Botanical Gardens
Nature provides beautiful, ever-changing backdrops. The soft, natural light filtered through plants creates a dreamy quality perfect for many brands.

### 3. Urban Spaces
City streets, murals, and modern architecture can add an edgy, contemporary feel to your photos. Scout for interesting textures and colors.

### 4. Your Own Space
Don't overlook your home or office! A well-styled corner of your workspace can create intimate, authentic imagery.

## Planning Tips

1. **Scout in Advance**: Visit locations at the same time of day you plan to shoot
2. **Check Permits**: Some locations require photography permits
3. **Have a Backup**: Weather and circumstances change – always have a plan B
4. **Consider Lighting**: Natural light is your best friend

## Final Thoughts

The best location is one that feels authentic to your brand and makes you feel confident. Don't be afraid to think outside the box and create something unique!
    `,
    category: "style",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    date: "January 15, 2026",
    author: "Sarah Shaikh",
    slug: "best-brand-photoshoot-locations",
    featured: true,
    tags: ["photography", "branding", "tips"],
  },
  {
    id: "2",
    title: "An Honest Talk About Body Positivity Movement",
    excerpt:
      "Let's have a real conversation about body positivity, self-love, and how it all connects to building an authentic personal brand.",
    content: `
# An Honest Talk About Body Positivity Movement

In a world of perfectly curated feeds and filtered photos, let's have an honest conversation about body positivity and how it intersects with personal branding.

## What Body Positivity Really Means

Body positivity isn't about forcing yourself to love every inch of your body every single day. It's about:

- Respecting your body
- Recognizing that all bodies are worthy
- Challenging unrealistic beauty standards
- Making peace with your physical self

## Why This Matters for Your Brand

When you show up authentically – including your physical self – you attract clients who resonate with the REAL you. Here's why that's powerful:

### Authentic Connection
People connect with people, not perfection. When you embrace your authentic self, you give others permission to do the same.

### Sustainable Business
Maintaining a facade is exhausting. Building a brand on authenticity is sustainable and joyful.

### Attracting Aligned Clients
The clients you attract when being authentic are the ones you actually want to work with.

## Practical Steps Forward

1. **Curate Your Feed**: Follow accounts that make you feel good, not inadequate
2. **Diversify Your Imagery**: Include a variety of photos that show the real you
3. **Challenge Your Thoughts**: Notice when you're being overly critical
4. **Celebrate Others**: Lift up diverse bodies and stories in your content

## The Bottom Line

Your worth isn't determined by your appearance, and neither is your business success. Show up as you are – that's your superpower.
    `,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    date: "January 10, 2026",
    author: "Sarah Shaikh",
    slug: "honest-talk-body-positivity",
    featured: true,
    tags: ["mindset", "authenticity", "personal brand"],
  },
  {
    id: "3",
    title: "5 Signs It's Time To Rebrand Your Business",
    excerpt:
      "Not sure if it's time for a brand refresh? Here are the tell-tale signs that your business is ready for a transformation.",
    content: `
# 5 Signs It's Time To Rebrand Your Business

Your brand should grow and evolve with your business. But how do you know when it's time for a change? Here are five clear signs.

## Sign #1: You've Outgrown Your Brand

If your business has evolved significantly since you first started, your brand might not reflect who you are anymore. This often happens when:

- Your services have changed
- You've niched down
- Your target audience has shifted
- Your prices have increased significantly

## Sign #2: You're Embarrassed to Share Your Website

When you hesitate to share your website or hand out your business card, that's a red flag. Your brand should make you feel proud and confident.

## Sign #3: Your Ideal Clients Aren't Finding You

If you're attracting the wrong type of clients or not getting inquiries at all, your brand might not be speaking to the right people. A strategic rebrand can help you attract your dream clients.

## Sign #4: Your Brand Looks Like Everyone Else's

In a crowded market, standing out is essential. If your brand blends in with competitors, it's time to differentiate.

## Sign #5: Your Business Has Evolved

Growth is good! But if your visual identity hasn't kept up with your business evolution, there's a disconnect that potential clients can sense.

## What To Do Next

If you recognized your business in any of these signs, don't panic. A rebrand is an exciting opportunity to:

1. Realign your visual identity with your values
2. Better connect with your ideal clients
3. Position yourself as the expert you've become
4. Feel confident and proud of your brand again

Ready to explore what a rebrand could look like for you? Let's chat!
    `,
    category: "resources",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    date: "January 5, 2026",
    author: "Sarah Shaikh",
    slug: "signs-time-to-rebrand",
    featured: true,
    tags: ["branding", "business", "strategy"],
  },
  {
    id: "4",
    title: "How to Create a Cohesive Instagram Feed",
    excerpt:
      "Learn the secrets to creating a beautiful, cohesive Instagram aesthetic that attracts your ideal followers and clients.",
    content: `
# How to Create a Cohesive Instagram Feed

A cohesive Instagram feed isn't just about looking pretty – it's a powerful branding tool that helps you stand out and attract your ideal audience.

## Why Cohesion Matters

When someone lands on your profile, they make a split-second decision about whether to follow you. A cohesive feed:

- Builds instant recognition
- Communicates professionalism
- Creates a memorable impression
- Reflects your brand personality

## Elements of a Cohesive Feed

### 1. Consistent Color Palette
Stick to 3-5 main colors that align with your brand. Use these colors consistently across all your posts.

### 2. Similar Editing Style
Whether you use presets or manual editing, keep your editing style consistent. This creates visual harmony across your feed.

### 3. Balanced Content Mix
Plan a mix of content types:
- Photos
- Graphics
- Text posts
- Behind-the-scenes

### 4. Strategic Spacing
Vary your content to create visual interest. Don't post similar images back-to-back.

## Tools to Help

- **Preview Apps**: Plan your feed before posting
- **Presets**: Create consistent editing with Lightroom presets
- **Templates**: Use branded templates for graphics

## Pro Tips

1. Batch create content for consistency
2. Always preview before posting
3. Audit your feed regularly
4. Stay flexible – perfection isn't the goal

Your feed should feel authentic to you while maintaining visual cohesion. Find the balance that works for your brand!
    `,
    category: "style",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80",
    date: "December 28, 2025",
    author: "Sarah Shaikh",
    slug: "create-cohesive-instagram-feed",
    featured: false,
    tags: ["social media", "instagram", "branding"],
  },
  {
    id: "5",
    title: "The Ultimate Guide to Brand Photography",
    excerpt:
      "Everything you need to know about planning and executing a successful brand photoshoot that elevates your business.",
    content: `
# The Ultimate Guide to Brand Photography

Brand photography is one of the most powerful investments you can make in your business. Here's everything you need to know to get it right.

## What is Brand Photography?

Brand photography is professional imagery that visually represents your brand's personality, values, and story. It includes:

- Headshots and portraits
- Lifestyle images
- Product photography
- Behind-the-scenes shots
- Detail shots

## Why It Matters

Quality brand photography:
- Builds trust with potential clients
- Creates consistency across platforms
- Sets you apart from competitors
- Tells your brand story visually

## Planning Your Shoot

### 1. Define Your Goals
What do you need images for? Website, social media, marketing materials? This determines your shot list.

### 2. Create a Mood Board
Collect inspiration for poses, settings, colors, and overall vibe.

### 3. Plan Your Outfits
Choose 3-5 outfits that reflect your brand colors and personality.

### 4. Scout Locations
Find locations that align with your brand aesthetic.

### 5. Create a Shot List
List every type of image you need. Be specific!

## Day-Of Tips

- Get plenty of rest the night before
- Arrive early to settle in
- Bring touch-up supplies
- Relax and have fun!

## Maximizing Your Images

Plan to use your photos for:
- Website headers and pages
- Social media content
- Email marketing
- Advertising
- Press and PR

One photoshoot can provide content for months – plan strategically!
    `,
    category: "resources",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    date: "December 20, 2025",
    author: "Sarah Shaikh",
    slug: "ultimate-guide-brand-photography",
    featured: false,
    tags: ["photography", "branding", "guide"],
  },
  {
    id: "6",
    title: "Setting Boundaries as a Creative Entrepreneur",
    excerpt:
      "Learn how to set healthy boundaries in your business without feeling guilty – your wellbeing depends on it.",
    content: `
# Setting Boundaries as a Creative Entrepreneur

As creative entrepreneurs, we pour our hearts into our work. But without proper boundaries, burnout is inevitable. Let's talk about setting boundaries that protect your energy and your business.

## Why Boundaries Matter

Without boundaries:
- You work 24/7
- Client relationships suffer
- Quality of work decreases
- You lose passion for your business

With boundaries:
- Work-life balance improves
- Client relationships are healthier
- Work quality increases
- Business becomes sustainable

## Essential Business Boundaries

### 1. Working Hours
Set specific hours and stick to them. Communicate these clearly to clients.

### 2. Response Time
You don't need to respond immediately. Set expectations for response times (e.g., within 24-48 hours).

### 3. Scope of Work
Be crystal clear about what's included (and what's not) in your services.

### 4. Payment Terms
Require deposits, set payment schedules, and enforce late fees if needed.

### 5. Revision Limits
Specify how many revisions are included in your packages.

## How to Communicate Boundaries

- Put everything in your contract
- Be clear and confident
- Don't over-explain or apologize
- Stay consistent

## Dealing with Pushback

Some clients will test your boundaries. Stay firm but kind:
- Refer back to your contract
- Offer alternative solutions
- Know when to walk away

Remember: clients who respect your boundaries are the ones you want to work with!

## Self-Care Boundaries

Don't forget boundaries with yourself:
- Take regular breaks
- Unplug on weekends
- Schedule time off
- Protect your creative energy

Your boundaries aren't just good for you – they're good for your clients too. A well-rested, energized creative does their best work!
    `,
    category: "business",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    date: "December 15, 2025",
    author: "Sarah Shaikh",
    slug: "setting-boundaries-creative-entrepreneur",
    featured: false,
    tags: ["business", "mindset", "self-care"],
  },
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};
