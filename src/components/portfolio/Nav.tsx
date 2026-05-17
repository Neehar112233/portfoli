import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2">
        <a href="#top" className="px-4 py-1.5 text-sm font-medium tracking-tight">NN<span className="text-primary">.</span></a>
        <div className="mx-1 h-4 w-px bg-border" />
        {links.map((l) => (
          <a key={l.href} href={l.href} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
