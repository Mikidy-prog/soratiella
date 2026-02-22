export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  location?: string;
  tripStart?: string;
  tripEnd?: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "trip-to-japan",
    title: "Two Weeks in Japan",
    date: "2025-11-15",
    description: "From the neon chaos of Tokyo to the quiet temples of Kyoto — a trip that rewired how I think about cities, food, and slowing down.",
    tags: ["trip", "travel", "japan"],
    coverImage: "/images/japan-cover.jpg",
    location: "Japan",
    tripStart: "2025-11-01",
    tripEnd: "2025-11-14",
    content: `
# Two Weeks in Japan

Japan is one of those places that hits differently in person. Every photo I'd seen before the trip was accurate, yet nothing prepared me for the *feeling* of being there.

## Tokyo: Beautiful Overload

We landed at Narita on a grey morning. By noon we were standing in Shibuya, watching hundreds of people cross the intersection in perfect, chaotic harmony.

> "Tokyo is not a city you visit. It's a city that happens to you."

### Things I loved about Tokyo

- The konbini (convenience stores) are genuinely life-changing
- Trains run on time, to the second
- You can eat world-class ramen for $8
- Vending machines everywhere, selling everything

We spent four days exploring neighborhoods — Shimokitazawa for vintage shopping, Yanaka for old-town vibes, and Akihabara for sensory overload.

![Streets of Tokyo](/images/japan-cover.jpg)
*The quiet backstreets of Yanaka, just minutes from the chaos of central Tokyo.*

## Kyoto: The Exhale

After Tokyo's intensity, Kyoto felt like stepping into a painting. We rented bikes and spent three days cycling between temples.

### Highlights

1. **Fushimi Inari** at sunrise — almost no crowds
2. **Arashiyama bamboo grove** — smaller than expected but still magical
3. **Philosopher's Path** — perfect for a slow morning walk

The food in Kyoto was quieter too. Matcha everything. Tofu kaiseki. Simple, precise, beautiful.

## What I Learned

Traveling slowly changes everything. We could have "done" Japan in a week, but spending two weeks meant we could say yes to detours — an unplanned day in Nara feeding deer, a random izakaya where the owner taught us to make okonomiyaki.

**If you go:** bring comfortable shoes, learn a few Japanese phrases, and leave room in your itinerary for nothing.

---

*Next trip: planning something in Portugal for spring 2026.*
`,
  },
  {
    slug: "week-notes-dec-2025",
    title: "Week Notes: December 1–7",
    date: "2025-12-07",
    description: "A quiet week of reading, cooking, and finally fixing my desk setup.",
    tags: ["weeknotes", "journal"],
    content: `
# Week Notes: December 1–7

A slower week after the travel chaos of November. Exactly what I needed.

## Reading

Started **"Four Thousand Weeks"** by Oliver Burkeman. It's one of those books that makes you uncomfortable in a productive way. The core idea — that we'll never have enough time, so we should stop pretending we will — is simple but profound.

Also caught up on some long-form articles:

- [The Age of Average](https://alexmurrell.co.uk/articles/the-age-of-average) — why everything looks the same now
- A great piece on urban cycling infrastructure in the Netherlands

## Cooking

Tried making **shakshuka** from scratch for the first time. Key learnings:

1. Use way more cumin than you think
2. Let the tomato sauce reduce longer — patience pays off
3. Don't break the yolks too early

It turned out great. Will be making this weekly now.

## Desk Setup

Finally mounted my monitor on an arm. The difference is absurd — I should have done this years ago. Current setup:

- 27" 4K display on a gas-spring arm
- Mechanical keyboard (Keychron Q1)
- A single plant that refuses to die

> The best productivity hack is a clean desk. The second best is a monitor at eye level.

## Next Week

- Finish the Burkeman book
- Start outlining a longer blog post about travel photography
- Go for at least three runs
`,
  },
  {
    slug: "on-writing-more",
    title: "On Writing More",
    date: "2025-10-20",
    description: "Why I started this blog and what I hope to get out of writing regularly.",
    tags: ["journal", "writing"],
    content: `
# On Writing More

I've been meaning to write more for years. Not professionally — just for myself. To process ideas, document experiences, and practice the craft of putting thoughts into words.

## Why Now?

Three reasons:

1. **Memory is unreliable.** I traveled to six countries last year and can barely remember the details of half of them. Writing forces me to pay attention.

2. **Thinking is clearer on paper.** There's something about writing that untangles messy thoughts. If I can't explain an idea in writing, I probably don't understand it.

3. **The internet needs more personal blogs.** Social media rewards hot takes and engagement bait. A blog is the opposite — it's slow, thoughtful, and entirely yours.

## What I'll Write About

No strict rules. Probably:

- **Travel journals** — detailed accounts of trips, with photos
- **Week notes** — what I'm reading, cooking, thinking about
- **Essays** — longer pieces on topics I care about
- **Lists** — books, tools, places, recommendations

## The Setup

I kept this blog intentionally simple. Markdown files, minimal design, no analytics, no comments. Just words.

> "The best writing setup is the one that gets out of your way."

If you're reading this and thinking about starting your own blog — just do it. Don't overthink the platform, the design, or the "niche." Write about what interests you. The rest follows.

---

*Thanks for reading. More soon.*
`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag));
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q)
  );
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const idx = sorted.findIndex((p) => p.slug === slug);
  return {
    prev: idx < sorted.length - 1 ? sorted[idx + 1] : undefined,
    next: idx > 0 ? sorted[idx - 1] : undefined,
  };
}
