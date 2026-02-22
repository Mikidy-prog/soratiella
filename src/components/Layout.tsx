import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Search" },
  { to: "/about", label: "About me" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <nav className="max-w-2xl mx-auto px-5 py-5 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-foreground hover:text-primary transition-colors">
            On the Sora Road
          </Link>
          <ul className="flex gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors ${
                    pathname === link.to
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-5 py-10 w-full">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-5 py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} On the Sora Road.
        </div>
      </footer>
    </div>
  );
}
