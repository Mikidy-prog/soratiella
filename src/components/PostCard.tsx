import { Link } from "react-router-dom";
import { Post, formatDate } from "@/content/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="py-6 first:pt-0">
      <Link to={`/blog/${post.slug}`} className="group block">
        {post.coverImage && (
          <div className="mb-3 overflow-hidden rounded-md">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.location && (
            <>
              <span>·</span>
              <span>{post.location}</span>
            </>
          )}
        </div>
        <h2 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
          {post.description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
