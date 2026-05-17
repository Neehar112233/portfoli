import { motion } from "framer-motion";

const stats = [
  { k: "3+", v: "Public repos" },
  { k: "∞", v: "Curiosity" },
  { k: "AI", v: "Focus area" },
  { k: "24/7", v: "Building" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ✦ About
          </div>
          <h2 className="font-display text-5xl font-light leading-[0.9] tracking-tighter md:text-7xl">
            A builder<br />
            <span className="font-serif italic text-primary">who ships.</span>
          </h2>
        </div>

        <div className="space-y-8 md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-balance text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            I'm <span className="text-foreground">Navele Neehar</span> — a developer who lives at the
            intersection of <span className="font-serif italic text-foreground">interfaces</span>,{" "}
            <span className="font-serif italic text-foreground">intelligence</span>, and the{" "}
            <span className="font-serif italic text-foreground">quiet craft</span> of making things work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-lg leading-relaxed text-muted-foreground"
          >
            I prototype with Python, ship with JavaScript, and obsess over the small details
            that make software feel inevitable. Currently exploring generative AI, realtime
            systems, and the spaces in between.
          </motion.p>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/50 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6"
              >
                <div className="font-serif text-4xl italic text-primary">{s.k}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
