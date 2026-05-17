const items = ["React", "TypeScript", "Python", "Node.js", "AI / ML", "Tailwind", "PostgreSQL", "Three.js", "Next.js", "Framer Motion"];

export function Marquee() {
  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((s, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-serif text-4xl italic text-muted-foreground md:text-6xl">{s}</span>
            <span className="text-primary text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
