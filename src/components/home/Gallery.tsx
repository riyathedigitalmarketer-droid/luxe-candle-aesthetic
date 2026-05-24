import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";
import a from "@/assets/gallery_pastel_candle_1779622743271.png";
import b from "@/assets/gallery_pearl_candle_1779622756921.png";
import c from "@/assets/hero_ethereal_candle_1779622727329.png";
import d from "@/assets/gallery_pastel_candle_1779622743271.png";
import e from "@/assets/gallery_pearl_candle_1779622756921.png";
import f from "@/assets/hero_ethereal_candle_1779622727329.png";

const tiles = [a, b, c, d, e, f];

export function Gallery() {
  return (
    <section className="bg-ivory py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative blurred background element */}
      <div className="absolute top-0 right-0 size-[800px] bg-petal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-petal tracking-[0.3em]">@lumiereandgrace</span>
          <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05] text-umber">
            From our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-umber via-petal to-umber bg-[length:200%_auto] animate-gradient">atelier.</span>
          </h2>
          <p className="mt-5 text-clay max-w-md mx-auto">
            A glimpse into the ethereal, dreamy, and surreal rituals behind every candle.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {tiles.map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={`relative block overflow-hidden group bg-cream/40 rounded-3xl shadow-soft hover:shadow-glow transition-all duration-[800ms] ${i % 3 === 0 ? 'aspect-square md:translate-y-8' : i % 3 === 1 ? 'aspect-[4/5] md:-translate-y-4' : 'aspect-square md:translate-y-12'}`}
              >
                <img
                  src={img}
                  alt="Ethereal atelier moment"
                  loading="lazy"
                  className="size-full object-cover transition-all duration-[1500ms] group-hover:scale-110 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 bg-umber/0 group-hover:bg-petal/30 transition-colors duration-700 grid place-items-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                  <Instagram
                    strokeWidth={1}
                    className="size-10 text-ivory opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 drop-shadow-md"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}