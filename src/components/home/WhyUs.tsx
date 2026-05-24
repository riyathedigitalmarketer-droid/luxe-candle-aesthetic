import { Reveal } from "./Reveal";
import { Flame, Leaf, Sparkles, Gift } from "lucide-react";

const pillars = [
  { icon: Flame, title: "Hand-Poured", desc: "Small-batch artistry in our atelier. No machines, no shortcuts." },
  { icon: Leaf, title: "Eco-Friendly Wax", desc: "Pure soy & coconut blends with lead-free cotton wicks." },
  { icon: Sparkles, title: "Bespoke Engraving", desc: "Hand-foiled names, dates, and messages on every vessel." },
  { icon: Gift, title: "Atelier Packaging", desc: "Linen-lined boxes, silk ribbons — gift-ready from the door." },
];

export function WhyUs() {
  return (
    <section className="bg-background py-28 md:py-40 px-6 md:px-12 border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-20 max-w-2xl mx-auto">
          <span className="eyebrow text-accent">Why Lumière &amp; Grace</span>
          <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05] text-balance">
            A quieter kind of <span className="italic">luxury.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="text-center group">
                <div className="size-16 mx-auto mb-6 rounded-full bg-petal/60 grid place-items-center group-hover:bg-accent transition-colors duration-500">
                  <p.icon strokeWidth={1.2} className="size-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed text-pretty">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}