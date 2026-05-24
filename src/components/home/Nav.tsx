import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const links = [
  { label: "Collections", href: "#categories" },
  { label: "Bespoke", href: "#customize" },
  { label: "Shop", href: "#shop" },
  { label: "Journal", href: "#journal" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10 eyebrow flex-1">
          {links.slice(0, 2).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/" className="font-serif italic text-2xl md:text-3xl tracking-tight">
          Lumière <span className="text-accent">&amp;</span> Grace
        </a>

        <div className="hidden md:flex items-center gap-8 eyebrow flex-1 justify-end">
          {links.slice(2).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
          <button aria-label="Search" className="hover:text-accent transition-colors">
            <Search className="size-4" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="hover:text-accent transition-colors relative">
            <ShoppingBag className="size-4" strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 size-3.5 rounded-full bg-accent text-[8px] grid place-items-center text-accent-foreground">
              0
            </span>
          </button>
        </div>

        <button
          className="md:hidden p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block eyebrow hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}