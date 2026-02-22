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
