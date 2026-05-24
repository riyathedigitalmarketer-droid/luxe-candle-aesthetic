import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The personalized fragrance we chose for our anniversary dinner was breathtaking. It didn't just smell beautiful — it felt like a memory we could hold.",
    name: "Eleanor Vance",
    place: "London",
  },
  {
    quote:
      "Every guest at our wedding left with a candle and a note. Two years later, friends still tell me they light it on special evenings.",
    name: "Priya Mehra",
    place: "Mumbai",
  },
  {
    quote:
      "I ordered fifty for our corporate gala. The packaging alone made our clients gasp — true craft, every detail considered.",
    name: "James Ellison",
    place: "New York",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];

  return (
    <section className="bg-umber text-ivory py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-1.5 mb-10">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="size-3.5 fill-gold text-gold" strokeWidth={0} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-2xl md:text-4xl leading-snug text-balance"
          >
            &ldquo;{r.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-12 eyebrow text-ivory/70">
          {r.name} <span className="text-gold mx-2">·</span> {r.place}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              aria-label={`Review ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-px transition-all duration-500 ${
                i === k ? "w-12 bg-gold" : "w-6 bg-ivory/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}