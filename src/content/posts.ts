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
    slug: "first-roadtrip",
    title: "Wollongong roadtrip",
    date: "2025-11-15",
    description: "First adventure, camping with a 4 by 4",
    tags: ["roadtrip", "exchange", "Sydney"],
    coverImage: "/images/sea-cliff-bridge.jpg",
    location: "Australia",
    tripStart: "12-02-2026",
    tripEnd: "12-02-2026",
    content: `
# 900 km, 4 days and amazing company

Everything tries to kill you in Australia. The spiders, the snakes, the sun. But that's a risk worth taking when the biscuit is this large.


### Highlights

- Seeing the first Wombats and Kangaroos <3
- Meeting locals
- Off-roading near Belmore Falls
- Sleeping under the stars (until it started raining)


`,
  },
  {
    slug: "week-notes-jan-2025",
    title: "Week Notes: January 1–7",
    date: "01-01-2026",
    description: "A quiet week.",
    tags: ["weeknotes", "journal"],
    content: `
# Week Notes: January 1–7

lorem ipsum.


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
