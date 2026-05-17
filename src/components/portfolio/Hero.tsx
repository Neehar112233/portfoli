import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = "NEEHAR";

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-32 md:px-16">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-12 bg-primary" />
          Developer · Builder · Engineer
        </motion.div>

        <h1 className="font-display text-[clamp(3.5rem,14vw,14rem)] font-light leading-[0.85] tracking-tighter">
          <span className="block">
            <span className="font-serif italic text-muted-foreground">Hi, I'm</span>{" "}
            <span className="font-serif italic">Navele</span>
          </span>
          <span className="block overflow-hidden">
            {word.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block glow-text"
                style={{ color: i % 2 === 0 ? "var(--primary)" : "var(--foreground)" }}
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 max-w-xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          A curious engineer crafting interfaces, intelligent systems and small
          experiments that live somewhere between code and curiosity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
            View selected work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="https://github.com/Neehar112233" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-medium transition-colors hover:bg-secondary">
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          Scroll ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
