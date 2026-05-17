import { createFileRoute } from "@tanstack/react-router";
import { Aurora } from "@/components/portfolio/Aurora";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Navele Neehar — Developer & Builder" },
      { name: "description", content: "Portfolio of Navele Neehar — developer crafting interfaces, intelligent systems, and small experiments in code." },
      { property: "og:title", content: "Navele Neehar — Developer & Builder" },
      { property: "og:description", content: "Interfaces, AI, and small experiments in code." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen grain">
      <Aurora />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Resume />
      <Contact />
    </main>
  );
}
