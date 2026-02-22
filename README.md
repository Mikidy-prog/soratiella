# the journal — Personal Blog

A minimal personal blog. Posts are stored as TypeScript data in `src/content/posts.ts` — no database needed.

## Run Locally

```bash
npm install
npm run dev
```

## Add a New Post

1. Open `src/content/posts.ts`
2. Add a new object to the `posts` array:

```ts
{
  slug: "my-post",
  title: "My Post",
  date: "2026-01-15",
  description: "Short excerpt.",
  tags: ["journal"],
  coverImage: "/images/cover.jpg",  // optional
  content: `
# My Post

Markdown here. **Bold**, *italic*, lists, blockquotes, images all supported.

![Caption](/images/photo.jpg)
  `,
}
```

3. Save — post appears instantly.

## Images

Put images in `public/images/`, reference as `/images/filename.jpg`. Alt text becomes caption.

## Deploy

- **Vercel:** `npx vercel`
- **Netlify:** `npm run build` → upload `dist/`
