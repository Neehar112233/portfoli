import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Please enter a valid email");
    if (!message || message.length > 2000) return toast.error("Message must be 1–2000 characters");

    setLoading(true);
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, message });
    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-14 grid max-w-xl gap-4 rounded-3xl border border-border bg-card/40 p-6 text-left backdrop-blur-md md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Name</span>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</span>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@domain.com"
                className="rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</span>
            <textarea
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your idea…"
              className="resize-none rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.form>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
