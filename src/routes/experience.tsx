import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Furdeen Hasan" },
      { name: "description", content: "Software engineering, research, and leadership experience of Furdeen Hasan — Hologic, DEVCOM, and the University of Delaware." },
      { property: "og:title", content: "Experience — Furdeen Hasan" },
      { property: "og:description", content: "Software engineering, research, and leadership experience." },
    ],
  }),
  component: Experience,
});

const EXPERIENCE = [
  {
    period: "Jun 2026 — Sep 2026 (Expected)",
    role: "Software Engineer Intern",
    org: "Hologic, Inc · Glasgow, DE",
    title: "Mammography Gantry Configuration Tooling",
    points: [
      "Developed a C#/WPF desktop application to decode and process Hologic's Mammography System gantry NVM files, converting raw hexadecimal control data across 19 hardware nodes into readable configuration.",
      "Implemented node identification, checksum/range validation, and NVM file regeneration to verify configuration integrity and support reliable gantry updates.",
      "Collaborated with software, systems, and hardware engineers in an Agile/Scrum environment on node communication, startup/POST sequences, and system-level behavior.",
      "Wrote software test cases verifying NVM decoding accuracy and troubleshot defects using Git and Perforce version control.",
    ],
    tags: ["C#", ".NET", "WPF", "Agile", "Git", "Perforce"],
  },
  {
    period: "Jun 2024 — May 2025",
    role: "DEVCOM Research Intern + Senior Design",
    org: "DEVCOM · University of Delaware",
    title: "Compact Fast-Scanning Passive mmWave Imager",
    points: [
      "Designed a compact, passive imaging device that detects mmWave radiation for security screening.",
      "Developed embedded control software in Python for a Raspberry Pi 5, integrating a Farran radiometer with motorized linear movement and ADC-based data acquisition.",
      "Built a Python GUI and backend workflow for scan control, heatmap generation, and AI-assisted feedback via FastAPI POST endpoints for real-time heuristic threat analysis.",
      "Engineered a custom 4-layer PCB to process low-amplitude mmWave signals, improving signal integrity and strength.",
      "Prepared an academic poster and research paper for the ECE senior design program.",
    ],
    tags: ["Raspberry Pi", "PCB Design", "FastAPI", "PyTorch", "Kivy", "mmWave"],
  },
  {
    period: "Feb 2024 — May 2024",
    role: "Undergraduate Researcher",
    org: "University of Delaware",
    title: "Trustworthy Artificial Intelligence Development",
    points: [
      "Created models to categorize underwater terrain and sonar reflections using Explainable AI (XAI).",
      "Conducted experiments with PyTorch to evaluate model applicability across different datasets.",
    ],
    tags: ["PyTorch", "XAI", "Research", "Python"],
  },
  {
    period: "May 2023 — May 2025",
    role: "Tutor",
    org: "Dept. of Mathematical Sciences · Office of Academic Enrichment",
    title: "Math, Engineering & Science Tutoring",
    points: [
      "Provided one-on-one coaching and group tutoring of up to 30 students in math, engineering, and science courses.",
    ],
    tags: ["Teaching", "Mentorship"],
  },
  {
    period: "Aug 2022 — May 2025",
    role: "Senior Resident Assistant",
    org: "UDel Residence Life & Housing",
    title: "Community Leadership",
    points: [
      "Oversaw a residence hall of 60 residents, providing 24/7 support and conflict resolution.",
      "Promoted to Senior RA to assist with staff training and lead departmental social-media outreach.",
    ],
    tags: ["Leadership", "Communication"],
  },
];

function Experience() {
  return (
    <>
      <section className="panel-fog border-b border-black/10">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="label text-muted-foreground">(Career)</p>
          <h1 className="mt-6 font-display text-[14vw] lg:text-[10vw] leading-[0.86] tracking-tightest">
            Experience
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-foreground/80">
            Engineering, research, and leadership roles that shaped how I build.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
          <ol className="border-t border-black/15">
            {EXPERIENCE.map((e, i) => (
              <li key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-black/15">
                <div className="lg:col-span-3">
                  <p className="label text-muted-foreground">{e.period}</p>
                  <p className="mt-3 text-[15px] text-muted-foreground">{e.org}</p>
                </div>
                <div className="lg:col-span-9">
                  <p className="label text-muted-foreground">{e.role}</p>
                  <h2 className="mt-3 font-display text-3xl lg:text-5xl leading-[1.0] tracking-tightest">{e.title}</h2>
                  <ul className="mt-6 space-y-3 max-w-3xl text-[15px] lg:text-base leading-relaxed text-muted-foreground">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-4">
                        <span className="mt-2.5 h-px w-4 bg-foreground/40 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 border border-black/20 text-[12px] tracking-tight">{t}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
