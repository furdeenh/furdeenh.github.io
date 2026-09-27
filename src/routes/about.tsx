import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portrait from "../assets/furdeen-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Furdeen Hasan" },
      { name: "description", content: "Computer Engineer from the University of Delaware. Skills across embedded systems, applied AI, and full-stack development." },
      { property: "og:title", content: "About — Furdeen Hasan" },
      { property: "og:description", content: "Computer Engineer. Hardware. AI. Full-stack." },
    ],
  }),
  component: About,
});

const LANGUAGES = [
  "C++", "C", "C#", "Python", "JavaScript", "TypeScript", "MATLAB", "HTML", "Verilog", "SQL", "CSS", "Shell", "JSON/YAML",
];
const TECH = [
  "PyTorch", "FastAPI", "React", "OpenAI", "Docker", "Git", ".NET", "WPF", "Cadence", "Mirage", "KiCad",
  "MongoDB", "Linux", "Arduino", "Simulink", "AutoCAD", "Gemini", "Kivy", "MPLAB X IDE",
];

const FACTS = [
  { k: "Degree", v: "B.S. Computer Engineering" },
  { k: "Minors", v: "Computer Science & Cybersecurity" },
  { k: "University", v: "University of Delaware, 2021—2025" },
  { k: "GPA", v: "3.44 / 4.0 · Dean's List ×4" },
  { k: "Based in", v: "Newark, DE · open to relocation" },
];

function About() {
  return (
    <>
      <section className="panel-fog border-b border-black/10">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="label text-muted-foreground">(About)</p>
          <h1 className="mt-6 font-display text-[14vw] lg:text-[10vw] leading-[0.86] tracking-tightest">
            Furdeen Hasan
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-foreground/80">
            Computer Engineer working across embedded hardware, applied machine learning,
            and the software that ties them together.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Furdeen Hasan portrait"
              className="w-full aspect-[4/5] object-cover"
            />
            <dl className="mt-8 border-t border-black/15">
              {FACTS.map((f) => (
                <div key={f.k} className="flex justify-between gap-6 py-3.5 border-b border-black/15">
                  <dt className="label text-muted-foreground">{f.k}</dt>
                  <dd className="text-[15px] text-right">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tightest">
              I like problems that don&apos;t stay inside one discipline.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I graduated from the University of Delaware in May 2025 with a B.S. in Computer Engineering
                and minors in Computer Science and Cybersecurity. My work sits where physical hardware meets
                intelligent software — and I&apos;m usually happiest when a project requires both.
              </p>
              <p>
                Over the last few years I designed a <span className="text-foreground">compact passive mmWave imager</span> for
                a DEVCOM-sponsored capstone, researched <span className="text-foreground">Explainable AI</span> for underwater
                terrain classification, and built full-stack applications with React, TypeScript, FastAPI and
                the Gemini API. At <span className="text-foreground">Hologic</span> I&apos;m building C#/WPF tooling that decodes
                mammography gantry configuration data across 19 hardware nodes.
              </p>
              <p>
                Alongside engineering, I tutored math and engineering for two years — coaching groups of up to
                30 students — and served four years in residence life, ending as a Senior Resident Assistant.
                Explaining hard things simply is a skill I take back into every technical team I join.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/FurdeenHasan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-[15px] tracking-tight"
              >
                Download resume <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-black/20 px-7 py-3.5 text-[15px] tracking-tight hover:bg-card"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="panel-fog border-y border-black/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
          <p className="label text-muted-foreground">(Stack)</p>
          <h2 className="mt-4 font-display text-5xl lg:text-8xl leading-none tracking-tightest">Skills</h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="label text-muted-foreground border-b border-black/15 pb-3">Languages</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <span key={l} className="px-3 py-1.5 border border-black/20 text-[13px] tracking-tight">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="label text-muted-foreground border-b border-black/15 pb-3">Technologies &amp; Tools</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span key={t} className="px-3 py-1.5 border border-black/20 text-[13px] tracking-tight">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
