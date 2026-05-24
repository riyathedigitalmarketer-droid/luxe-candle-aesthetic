import { motion } from "framer-motion";
import heroImg from "@/assets/hero_ethereal_candle_1779622727329.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-cream">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Ethereal luxury candle"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover scale-105 float-particle mix-blend-multiply"
        style={{ animationDuration: '20s' }}
      />
      {/* Dreamy vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-petal/20 to-cream/80 backdrop-blur-[2px]" />
      {/* Ethereal glow */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-ivory/50 glow-flame pointer-events-none mix-blend-screen blur-3xl" />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 size-1 rounded-full bg-gold/70 float-particle pointer-events-none"
          style={{
            left: `${(i * 8 + 6) % 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${7 + (i % 4)}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-umber">
        <motion.span
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.1 }}
          className="eyebrow text-petal mb-8 tracking-[0.4em]"
        >
          Ethereal &amp; Dream-like
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl text-balance drop-shadow-md text-umber"
        >
          Light Up Your <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-umber via-petal to-umber bg-[length:200%_auto] animate-gradient">Dreams</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="mt-8 max-w-lg text-base md:text-lg font-light text-umber/80 text-pretty"
        >
          Hand-poured aesthetic candles that transform your space into a surreal, high-end sanctuary.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.95 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#shop"
            className="group inline-flex items-center gap-3 bg-umber text-ivory px-9 py-4 eyebrow hover:bg-petal hover:text-ivory hover:shadow-glow transition-all duration-700 rounded-full"
          >
            Shop the Collection
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-2" strokeWidth={2} />
          </a>
          <a
            href="#customize"
            className="inline-flex items-center gap-3 border border-umber/30 text-umber px-9 py-4 eyebrow hover:border-umber hover:bg-ivory/50 backdrop-blur-md transition-all duration-700 rounded-full"
          >
            Customize Your Candle
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 eyebrow text-umber/50 tracking-widest"
        >
          Scroll to discover
        </motion.div>
      </div>
    </section>
  );
}