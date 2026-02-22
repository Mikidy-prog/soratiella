interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagClick }: TagFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onTagClick(null)}
        className={`text-xs px-3 py-1 rounded-full transition-colors ${
          activeTag === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-primary/10"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag === activeTag ? null : tag)}
          className={`text-xs px-3 py-1 rounded-full transition-colors ${
            activeTag === tag
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
