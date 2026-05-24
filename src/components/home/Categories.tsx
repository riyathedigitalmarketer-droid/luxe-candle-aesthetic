import { Reveal } from "./Reveal";
import weddingImg from "@/assets/cat-wedding.jpg";
import anniversaryImg from "@/assets/cat-anniversary.jpg";
import { ArrowUpRight } from "lucide-react";

const small = [
  { title: "Birthday Gifts", caption: "Joyful Tokens", img: anniversaryImg },
  { title: "Home Décor", caption: "Everyday Atmosphere", img: weddingImg },
  { title: "Festive Collection", caption: "Seasonal Glow", img: anniversaryImg },
];

export function Categories() {
  return (
    <section id="categories" className="bg-background py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="grid md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow text-accent">Curated for moments</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-6 leading-[1.05] text-balance">
              Candles for the moments <span className="italic">worth keeping.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-muted-foreground leading-relaxed text-pretty">
            Hand-poured artisan candles, designed to transform spaces and preserve
            the warmth of every celebration — from weddings to quiet evenings at home.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-7">
            <CategoryCard
              title="Wedding Return Gifts"
              caption="The Union Collection"
              img={weddingImg}
              aspect="aspect-[16/11]"
              large
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:mt-24">
            <CategoryCard
              title="Anniversary Editions"
              caption="Milestone Memories"
              img={anniversaryImg}
              aspect="aspect-[4/5]"
            />
          </Reveal>

          {small.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="md:col-span-4">
              <CategoryCard
                title={c.title}
                caption={c.caption}
                img={c.img}
                aspect="aspect-[4/5]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  caption,
  img,
  aspect,
  large,
}: {
  title: string;
  caption: string;
  img: string;
  aspect: string;
  large?: boolean;
}) {
  return (
    <a href="#shop" className="group block">
      <div className={`relative overflow-hidden bg-petal ${aspect}`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-umber/60 via-umber/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-ivory flex justify-between items-end">
          <div>
            <p className="eyebrow text-ivory/70 mb-2">{caption}</p>
            <h3
              className={`font-serif ${
                large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
              } italic`}
            >
              {title}
            </h3>
          </div>
          <ArrowUpRight
            strokeWidth={1.2}
            className="size-7 -translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"
          />
        </div>
      </div>
    </a>
  );
}