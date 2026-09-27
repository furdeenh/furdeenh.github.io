import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-black/10">
      <div className="mx-auto max-w-[1700px] flex items-center justify-between px-6 lg:px-12 h-16 lg:h-[72px]">
        <Link
          to="/"
          className="font-display text-[17px] tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Furdeen Hasan
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[15px] tracking-tight link-underline transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/FurdeenHasan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] tracking-tight text-foreground border-b border-foreground/40 hover:border-foreground"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-background">
          <nav className="flex flex-col px-6 py-5 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/FurdeenHasan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 label text-muted-foreground"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
