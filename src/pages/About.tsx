import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="font-serif text-3xl font-bold mb-6">About</h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="w-24 h-24 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-2xl text-muted-foreground">
          ✦
        </div>
        <div>
          <p className="text-foreground leading-relaxed mb-4">
            Hi, I'm the person behind this journal. I write about trips, weekly reflections,
            and whatever else is on my mind. This blog is intentionally simple — just
            words, images, and the occasional list.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When I'm not writing, I'm probably cooking, reading, cycling, or planning
            the next trip. I believe in traveling slowly, writing honestly, and keeping
            things uncomplicated.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-primary hover:underline underline-offset-2"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
