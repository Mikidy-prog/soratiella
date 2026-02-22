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
    coverImage:"",
    location: "Australia",
    tripStart: "12-02-2026",
    tripEnd: "12-02-2026",
    content: `
# 900 km, 4 days and amazing company

![Coastal view from the road](${import.meta.env.BASE_URL}images/sea-cliff-bridge.jpg)
Everything tries to kill you in Australia. The spiders, the snakes, the sun. But that's a risk worth taking when the biscuit is this large.


### Highlights

- Seeing the first Wombats and Kangaroos <3
- Meeting locals
- Off-roading near Belmore Falls
- Sleeping under the stars (until it started raining)


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

Have you ever felt like you had life neatly mapped out, only for reality to redraw the whole thing overnight?

I have wanted for a long time to write about those redrawings. Not because I have wisdom to offer but because I suspect future-me will look back and realize how spectacularly I misunderstood things. Writing is a record of how I thought, what I felt, and how I tried to make sense of the strange business of being me.

I tend to move through life at full speed. My apartment is mostly a charging station between adventures, friends, workouts, and half-formed plans. I love it and I've gained a lot of experience for my age through this lifestyle. The obvious downside of that pace is memory erosion. I look at photos from two years ago and struggle to recall the stories behind them. Add social media algorithms to the mix, and experience slowly morphs into content. Content without any soul.

Writing feels like resistance. A way to build memory rather than a profile.

I also want to learn how to tell better stories. Life is already chaotic enough. Shaping experience into narrative forces me to slow down, to decide what mattered and what did not. It is thinking with structure instead of noise.

And perhaps selfishly, I hope this nudges others. I spend plenty of time away from friends whose lives are unfolding in fascinating ways. I would love to read their reflections, their confusions, their growth. So I am starting with my own.

Mostly, this is an exploration so treat it as one. A running commentary from someone still trying to figure things out. Which, as far as I can tell, includes almost everyone.

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
