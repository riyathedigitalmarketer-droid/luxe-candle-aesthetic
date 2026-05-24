import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="bg-petal/40 py-28 md:py-36 px-6">
      <Reveal className="max-w-xl mx-auto text-center">
        <span className="eyebrow text-accent">Letters by candlelight</span>
        <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-[1.05]">
          Join the <span className="italic">inner circle.</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Early access to seasonal releases, private gifting invitations, and
          stories from the atelier.
        </p>

        <form onSubmit={submit} className="mt-10 flex border-b border-foreground/30">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            maxLength={120}
            className="flex-1 bg-transparent py-4 text-sm font-light focus:outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="eyebrow px-4 hover:text-accent transition-colors"
          >
            {sent ? "Welcome ✦" : "Subscribe"}
          </button>
        </form>
      </Reveal>
    </section>
  );
}