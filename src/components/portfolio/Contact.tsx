import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          ✦ Let's build something
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-[clamp(3rem,12vw,12rem)] font-light leading-[0.85] tracking-tighter"
        >
          <span className="font-serif italic">Say</span> hello<span className="text-primary">.</span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-xl text-balance text-lg text-muted-foreground">
          Got a project, an idea, or just want to nerd out about generative systems?
          My inbox is open.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://github.com/Neehar112233" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
            Find me on GitHub
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>

        <div className="mt-32 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <div>© 2026 Navele Neehar</div>
          <div className="font-mono">Crafted with care · Hosted on Lovable</div>
        </div>
      </div>
    </section>
  );
}
