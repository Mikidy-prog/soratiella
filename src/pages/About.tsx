import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="font-serif text-3xl font-bold mb-6">About</h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
      <img
        src={`${import.meta.env.BASE_URL}images/profile.jpg`}
        alt="Profile photo"
        className="w-24 h-24 rounded-full object-cover flex-shrink-0"
      />
        <div>
          <p className="text-foreground leading-relaxed mb-4">
            Hi, I write about my trips, reflections,
            and whatever else is on my mind. I started this blog to have a place
            to document my adventures and practice writing regularly. I hope it
            can be a space for honest storytelling and thoughtful reflections for me
            and entertainment for you :)
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am currently on an exchange in Sydney, Australia, and will be traveling
            around the country for the next few months. I also have a long list of other
            trips and topics I want to write about, so stay tuned!
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://www.instagram.com/soratienmikko/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2"
            >
              Instagram
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
