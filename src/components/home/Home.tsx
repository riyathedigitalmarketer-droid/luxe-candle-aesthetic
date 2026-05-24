import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Categories } from "./Categories";
import { Customization } from "./Customization";
import { Bestsellers } from "./Bestsellers";
import { Testimonials } from "./Testimonials";
import { Gallery } from "./Gallery";
import { WhyUs } from "./WhyUs";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Customization />
        <Bestsellers />
        <Testimonials />
        <Gallery />
        <WhyUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}