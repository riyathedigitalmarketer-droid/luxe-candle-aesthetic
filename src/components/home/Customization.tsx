import { Reveal } from "./Reveal";
import customImg from "@/assets/customization.jpg";

const steps = [
  {
    n: "01",
    title: "Select Your Vessel",
    desc: "Hand-blown frosted glass or artisan stoneware in five silhouettes.",
  },
  {
    n: "02",
    title: "Compose The Scent",
    desc: "Twelve signature essential oil blends, layered to your taste.",
  },
  {
    n: "03",
    title: "Personal Engraving",
    desc: "Add names, dates, or a heartfelt message in gold or rose-gold foil.",
  },
  {
    n: "04",
    title: "Gift Wrapping",
    desc: "Silk-ribboned linen boxes hand-tied in our atelier.",
  },
];

export function Customization() {
  return (
    <section id="customize" className="bg-petal/40 py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-card shadow-[var(--shadow-soft)]">
            <img
              src={customImg}
              alt="Personalized gold engraving on luxury candle"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-10 -right-10 size-48 backdrop-blur-md bg-ivory/80 border border-gold/20 p-6 flex-col justify-center">
            <div className="eyebrow text-accent mb-2">Personalized</div>
            <div className="font-serif italic text-2xl leading-tight">
              Signature No. 04
            </div>
            <div className="text-xs text-muted-foreground mt-2 font-light">
              Amber · Vanilla · Oud
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow text-accent">The Art of Personalization</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05] text-balance">
              Make it uniquely <span className="italic">theirs.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              From bespoke scent profiles to custom laser-engraved messages, every
              candle becomes a gift that speaks long after the flame is gone.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="flex gap-6 items-start group">
                  <div className="size-10 shrink-0 rounded-full border border-gold/40 text-accent grid place-items-center text-xs font-medium group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {s.n}
                  </div>
                  <div className="border-b border-border pb-6 flex-1">
                    <h4 className="font-serif text-xl mb-1">{s.title}</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a
              href="#"
              className="mt-12 inline-block bg-primary text-primary-foreground px-9 py-4 eyebrow hover:bg-accent transition-all duration-500"
            >
              Start Customizing
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}