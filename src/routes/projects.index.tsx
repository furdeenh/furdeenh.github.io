import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Furdeen Hasan" },
      { name: "description", content: "Hardware, AI, and full-stack projects by Furdeen Hasan including ScanProTech mmWave imager, FinShark, FireGuard, and more." },
      { property: "og:title", content: "Projects — Furdeen Hasan" },
      { property: "og:description", content: "Selected hardware, AI, and full-stack work." },
    ],
  }),
  component: Projects,
});

type Project = {
  slug?: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  tags: string[];
  external?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "scanprotech",
    title: "ScanProTech",
    category: "Capstone · DEVCOM Research",
    year: "2024 — 2025",
    desc: "Compact passive W-band mmWave imager with custom 4-layer PCB, baseband chain, Raspberry Pi 5 control, Kivy GUI, and FastAPI-served CNN (ResNet18) for real-time object classification.",
    tags: ["Raspberry Pi", "PCB", "Python", "FastAPI", "PyTorch", "Kivy"],
  },
  {
    title: "Trustworthy AI — Underwater Terrain",
    category: "Undergraduate Research",
    year: "2024",
    desc: "Explainable AI models in PyTorch for categorizing underwater terrain and sonar reflections, with grid-based mapping refinement to improve classification accuracy.",
    tags: ["PyTorch", "XAI", "Research"],
  },
  {
    title: "AI Interview Coach",
    category: "Henhacks 2025",
    year: "2025",
    desc: "Full-stack web app helping users improve public-speaking skills with real-time AI feedback on speeches, powered by the Google Gemini API.",
    tags: ["React", "JavaScript", "Gemini API"],
  },
  {
    title: "FinShark — Personal Finance",
    category: "Henhacks 2024",
    year: "2024",
    desc: "Personal finance application to track expenses and monitor transactions with AI-based spending analytics. TypeScript/React frontend, FastAPI backend.",
    tags: ["TypeScript", "React", "FastAPI"],
  },
  {
    title: "FireGuard — Fire Safety & Detection",
    category: "Embedded Systems",
    year: "2023",
    desc: "Fire detection system on Raspberry Pi using thermal cameras, with a Python GUI for real-time temperature monitoring and SMS alerting.",
    tags: ["Python", "Raspberry Pi", "IoT"],
  },
  {
    title: "Path-Tracking Autonomous Robot",
    category: "Embedded Systems",
    year: "2023",
    desc: "Self-driving robot in C on a PIC32 microcontroller, integrating IR sensor input, motor control, and real-time path-following algorithms.",
    tags: ["C", "PIC32", "Robotics"],
  },
  {
    title: "IoT Accelerometer & Temperature Sensor",
    category: "PCB Design",
    year: "2023",
    desc: "Custom PCB built around Arduino combining motion sensing, temperature tracking, and an on-board display, streaming real-time data via Adafruit IO.",
    tags: ["KiCad", "Arduino", "Adafruit IO"],
  },
  {
    title: "4-Bit VLSI ALU",
    category: "VLSI · Cadence",
    year: "2024",
    desc: "Hierarchical CMOS design of a 4-bit Arithmetic Logic Unit. Verified with DRC, LPE, and Layout vs. Schematic comparison.",
    tags: ["Cadence", "CMOS", "VLSI"],
  },
];

function Projects() {
  return (
    <>
      <section className="panel-fog border-b border-black/10 py-20 lg:py-28">
                <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
          <p className="label text-muted-foreground mb-6">Selected Work</p>
          <h1 className="font-display text-[14vw] lg:text-[10vw] leading-[0.86] tracking-tightest">Projects.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A mix of capstone research, hackathon builds, embedded systems, and full-stack apps —
            spanning hardware, AI, and software.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => {
            const inner = (
              <article className="group relative h-full p-8 lg:p-10 border border-black/15 hover:border-foreground transition-all overflow-hidden">
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="label text-foreground">{p.category}</p>
                    <p className="label text-muted-foreground mt-1">{p.year}</p>
                  </div>
                  {p.slug && <ArrowUpRight className="h-5 w-5 text-foreground/60 group-hover:opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </div>
                <h3 className="relative mt-5 font-display text-3xl lg:text-4xl leading-[1.0] tracking-tightest group-hover:opacity-70 transition">
                  {p.title}
                </h3>
                <p className="relative mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 border border-black/20 label">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
            if (p.slug) {
              return (
                <Link key={p.title} to="/projects/$slug" params={{ slug: p.slug }} className="block">
                  {inner}
                </Link>
              );
            }
            return <div key={p.title}>{inner}</div>;
          })}
        </div>
      </section>
    </>
  );
}
