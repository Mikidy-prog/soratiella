import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import TagFilter from "@/components/TagFilter";
import { posts, getAllTags } from "@/content/posts";

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const tags = getAllTags();

export default function Index() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? sorted.filter((p) => p.tags.includes(activeTag))
    : sorted;

  return (
    <Layout>
      {/* Hero */}
      <section className="mb-12">
        <h1 className="font-serif text-4xl font-bold mb-3 text-foreground">
          On the Sora Road
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          Trips, thoughts, and things worth writing down.
        </p>
        <Link
          to="/about"
          className="inline-block mt-3 text-sm text-primary hover:underline underline-offset-2"
        >
          About me →
        </Link>
      </section>

      {/* Tag filter */}
      <section className="mb-6">
        <TagFilter tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />
      </section>

      {/* Posts */}
      <section className="divide-y divide-border">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-muted-foreground text-center">
            No posts found for this tag.
          </p>
        )}
      </section>
    </Layout>
  );
}
