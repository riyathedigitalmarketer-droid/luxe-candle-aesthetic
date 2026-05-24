import { Reveal } from "./Reveal";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import { Heart, Plus } from "lucide-react";

const products = [
  { name: "Amber & Oakwood", note: "Aged Woods · Suede", price: "$42", img: p1, tag: "Bestseller" },
  { name: "Smoked Santal", note: "Bespoke Engraving", price: "$56", img: p2, tag: "New" },
  { name: "The Curated Trio", note: "Festival Gift Set", price: "$120", img: p3, tag: "Gift" },
  { name: "Velvet Rose", note: "Anniversary Edition", price: "$48", img: p4, tag: "Limited" },
];

export function Bestsellers() {
  return (
    <section id="shop" className="bg-background py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow text-accent">Most Loved Creations</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05]">
              Lustrous <span className="italic">essentials.</span>
            </h2>
          </div>
          <a
            href="#"
            className="eyebrow border-b border-foreground/30 pb-1 self-start hover:border-accent hover:text-accent transition-colors"
          >
            View All Products
          </a>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <ProductCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  name,
  note,
  price,
  img,
  tag,
}: {
  name: string;
  note: string;
  price: string;
  img: string;
  tag: string;
}) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-petal/50 mb-5">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-gold/15 via-transparent to-transparent" />

        <span className="absolute top-4 left-4 eyebrow bg-ivory/90 backdrop-blur-sm px-3 py-1 text-umber">
          {tag}
        </span>

        <button
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 size-9 rounded-full bg-ivory/90 backdrop-blur-sm grid place-items-center text-umber hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Heart className="size-3.5" strokeWidth={1.5} />
        </button>

        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-umber text-ivory eyebrow py-3 hover:bg-accent transition-colors flex items-center justify-center gap-2">
            <Plus className="size-3.5" strokeWidth={2} /> Quick Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-baseline gap-2">
        <div className="min-w-0">
          <h3 className="font-serif text-lg md:text-xl truncate">{name}</h3>
          <p className="text-xs text-muted-foreground italic mt-0.5">{note}</p>
        </div>
        <span className="font-serif text-base md:text-lg shrink-0">{price}</span>
      </div>
    </div>
  );
}