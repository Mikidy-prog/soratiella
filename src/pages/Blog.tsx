import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import TagFilter from "@/components/TagFilter";
import { posts, getAllTags, searchPosts } from "@/content/posts";

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const tags = getAllTags();

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = query ? searchPosts(query) : sorted;
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }
    return result;
  }, [query, activeTag]);

  return (
    <Layout>
      <h1 className="font-serif text-3xl font-bold mb-6">All Posts</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-2.5 rounded-md text-sm mb-4 outline-none focus:ring-2 focus:ring-primary/30 transition"
      />

      {/* Tags */}
      <div className="mb-6">
        <TagFilter tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />
      </div>

      {/* Posts */}
      <section className="divide-y divide-border">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-muted-foreground text-center">
            No posts match your search.
          </p>
        )}
      </section>
    </Layout>
  );
}
