import { motion } from "framer-motion";
import { useState } from "react";

const education = [
  { d: "B.Tech — Computer Science & AI", s: "Sri Vasavi Engineering College", g: "CGPA 7.5" },
  { d: "Intermediate", s: "Sri Chaitanya Junior College", g: "86%" },
];

const certs = [
  "AWS Certified Cloud Practitioner",
  "Microsoft Certified: Azure AI Engineer Associate",
  "MongoDB Certified Associate Developer",
  "Microsoft Certified: Azure Fundamentals",
];

const experience = [
  {
    role: "AI & Cloud Intern",
    org: "IBM · Edunet Foundation",
    when: "Jul – Aug 2025",
    desc: "4-week internship on SkillsBuild & IBM Cloud Platform in emerging technologies (AI & Cloud), in collaboration with AICTE.",
  },
  {
    role: "AI & Data Analytics Intern",
    org: "Shell India · Edunet Foundation",
    when: "Oct – Nov 2025",
    desc: "Virtual internship on Artificial Intelligence and Data Analytics focused on Green Skills under the Skills4Future program.",
  },
];

const skills = {
  Languages: ["Java", "Python", "C"],
  Web: ["HTML", "CSS", "JavaScript"],
  Databases: ["MongoDB", "MySQL"],
  Platforms: ["Salesforce"],
};

export function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section id="resume" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ✦ Resume
            </div>
            <h2 className="font-display text-5xl font-light tracking-tighter md:text-7xl">
              On <span className="font-serif italic text-primary">paper</span>.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Neehar_Resume.pdf"
              download="Navele_Neehar_Resume.pdf"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              data-cursor-hover
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <button
              onClick={() => setShowPdf((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium transition-colors hover:bg-secondary"
              data-cursor-hover
            >
              {showPdf ? "Hide PDF" : "View PDF"} ↗
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Header card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 lg:col-span-12"
          >
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Student · AI</div>
                <h3 className="mt-2 font-display text-4xl font-light tracking-tight md:text-5xl">Navele Neehar</h3>
                <p className="mt-3 max-w-xl text-balance text-muted-foreground">
                  CS student specializing in Artificial Intelligence — passionate about building
                  AI-driven applications and solving real problems with efficient algorithms.
                </p>
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                <div>naveleneehar2006@gmail.com</div>
                <div>+91 79899 70791</div>
                <div>Bhimavaram, Andhra Pradesh</div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <ResumeCard title="Experience" className="lg:col-span-7">
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.role} className="border-l-2 border-primary/40 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-xl">{e.role}</h4>
                    <span className="font-mono text-xs text-muted-foreground">{e.when}</span>
                  </div>
                  <div className="font-serif italic text-primary">{e.org}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </ResumeCard>

          {/* Skills */}
          <ResumeCard title="Skills" className="lg:col-span-5">
            <div className="space-y-5">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k}>
                  <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="flex flex-wrap gap-2">
                    {v.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeCard>

          {/* Education */}
          <ResumeCard title="Education" className="lg:col-span-7">
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.d} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="font-display text-lg">{e.d}</div>
                    <div className="text-sm text-muted-foreground">{e.s}</div>
                  </div>
                  <span className="font-serif italic text-primary">{e.g}</span>
                </div>
              ))}
            </div>
          </ResumeCard>

          {/* Certifications */}
          <ResumeCard title="Certifications" className="lg:col-span-5">
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </ResumeCard>
        </div>

        {/* PDF Embed */}
        <motion.div
          initial={false}
          animate={{ height: showPdf ? "auto" : 0, opacity: showPdf ? 1 : 0, marginTop: showPdf ? 24 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              src="/Neehar_Resume.pdf#view=FitH"
              title="Navele Neehar Resume"
              className="h-[85vh] w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResumeCard({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`rounded-3xl border border-border bg-card/40 p-8 ${className}`}
    >
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-px w-8 bg-primary" />
        {title}
      </div>
      {children}
    </motion.div>
  );
}
