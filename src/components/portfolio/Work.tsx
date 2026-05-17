import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    n: "01",
    title: "NemoChat",
    desc: "A realtime chat experience built with JavaScript — exploring sockets, presence, and the quiet ergonomics of messaging UI.",
    tags: ["JavaScript", "Realtime", "WebSockets"],
    url: "https://github.com/Neehar112233/nemochat",
    accent: "var(--aurora-2)",
  },
  {
    n: "02",
    title: "Image → Story Generator",
    desc: "A Python pipeline that turns a single image into a narrative — vision models, prompt orchestration, generative storytelling.",
    tags: ["Python", "AI / ML", "Vision"],
    url: "https://github.com/Neehar112233/image_to_story_generator",
    accent: "var(--accent)",
  },
  {
    n: "03",
    title: "Attendance System",
    desc: "A lightweight attendance tracker — a focused HTML/web build emphasising clarity over feature bloat.",
    tags: ["HTML", "Web", "UX"],
    url: "https://github.com/Neehar112233/attendence_system",
    accent: "var(--primary)",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ✦ Selected Work
            </div>
            <h2 className="font-display text-5xl font-light tracking-tighter md:text-7xl">
              Things I've <span className="font-serif italic text-primary">built</span>
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card/30 p-8 transition-colors hover:border-primary/40 md:p-12"
      data-cursor-hover
    >
      <div
        className="pointer-events-none absolute h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: project.accent,
          left: pos.x - 144,
          top: pos.y - 144,
        }}
      />

      <div className="relative grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-sm text-muted-foreground">{project.n}</span>
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-display text-3xl font-light tracking-tight md:text-5xl">
            {project.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5">
          <p className="text-balance text-muted-foreground md:text-lg">{project.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-12 flex justify-end md:col-span-1">
          <motion.div
            animate={{ rotate: hover ? 45 : 0, scale: hover ? 1.2 : 1 }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-2xl"
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
