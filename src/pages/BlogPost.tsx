import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import { getPostBySlug, getAdjacentPosts, formatDate } from "@/content/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/404" replace />;

  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <Layout>
      {/* Back */}
      <Link
        to="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
      >
        ← Back to blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.location && (
            <>
              <span>·</span>
              <span>{post.location}</span>
            </>
          )}
          {post.tripStart && post.tripEnd && (
            <>
              <span>·</span>
              <span>
                {formatDate(post.tripStart)} – {formatDate(post.tripEnd)}
              </span>
            </>
          )}
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          {post.title}
        </h1>
        <p className="text-muted-foreground">{post.description}</p>
        <div className="flex gap-1.5 flex-wrap mt-3">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${tag}`}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-md mb-8"
        />
      )}

      {/* Content */}
      <article className="prose">
        <ReactMarkdown
          components={{
            img: ({ alt, src, ...props }) => (
              <figure className="my-6">
                <img
                  src={src}
                  alt={alt || ""}
                  className="w-full rounded-md"
                  loading="lazy"
                  {...props}
                />
                {alt && (
                  <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                    {alt}
                  </figcaption>
                )}
              </figure>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Navigation */}
      <nav className="border-t border-border mt-12 pt-6 flex justify-between text-sm">
        {prev ? (
          <Link
            to={`/blog/${prev.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/blog/${next.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors text-right"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Layout>
  );
}
