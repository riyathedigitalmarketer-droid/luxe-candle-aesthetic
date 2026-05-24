import { Instagram, Facebook, Twitter } from "lucide-react";

const columns = [
  {
    title: "Bespoke",
    links: ["Corporate Gifting", "Wedding Favors", "Custom Engraving", "Fragrance Consult"],
  },
  {
    title: "The Brand",
    links: ["Our Story", "Journal", "Sustainability", "Stockists"],
  },
  {
    title: "Support",
    links: ["Shipping & Returns", "FAQ", "Contact", "Care Guide"],
  },
];

export function Footer() {
  return (
    <footer className="bg-umber text-ivory/80 pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-serif italic text-3xl text-ivory mb-6 tracking-tight">
              Lumière <span className="text-gold">&amp;</span> Grace
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs text-ivory/60">
              Hand-poured luxury candles, crafted in small batches for the world's
              most cherished celebrations.
            </p>
            <div className="flex gap-3 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="size-9 rounded-full border border-ivory/15 grid place-items-center hover:bg-gold hover:border-gold hover:text-umber transition-all duration-500"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h5 className="eyebrow text-ivory mb-6">{col.title}</h5>
              <ul className="space-y-3 text-sm font-light">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-ivory/60 hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h5 className="eyebrow text-ivory mb-6">Atelier</h5>
            <p className="text-sm font-light italic text-ivory/60 leading-relaxed">
              12 Rue des Parfumeurs<br />
              06130 Grasse, France
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 eyebrow text-ivory/40">
          <div>© {new Date().getFullYear()} Lumière &amp; Grace</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}