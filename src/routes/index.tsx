import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImg from "../assets/furdeen-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Furdeen Hasan — Computer Engineer" },
      { name: "description", content: "Computer Engineer from the University of Delaware working across embedded hardware, applied AI, and full-stack software." },
      { property: "og:title", content: "Furdeen Hasan — Computer Engineer" },
      { property: "og:description", content: "Engineering at the intersection of hardware, AI, and human-centered software." },
    ],
  }),
  component: Home,
});

const CAPABILITIES = [
  { n: "01", t: "Embedded & PCB", d: "Custom multilayer boards, analog signal chains, PIC32 and Raspberry Pi firmware, sensor integration." },
  { n: "02", t: "Applied AI", d: "PyTorch classification, explainable AI research, CNN inference served over FastAPI." },
  { n: "03", t: "Full-Stack", d: "React and TypeScript frontends over Python and .NET services, shipped end to end." },
  { n: "04", t: "Systems Software", d: "C/C# desktop tooling, protocol decoding, validation and test in Agile environments." },
];

const FEATURED = [
  { i: "001", title: "ScanProTech", meta: "Capstone · DEVCOM", year: "2025", to: "/projects/scanprotech",
    d: "Compact passive W-band mmWave imager: custom 4-layer PCB, dual-axis scanning, ResNet18 classification over FastAPI." },
  { i: "002", title: "NVM Decoder", meta: "Hologic · Internship", year: "2026",
    d: "C#/WPF desktop tool decoding mammography gantry NVM files across 19 hardware nodes with checksum validation." },
  { i: "003", title: "Trustworthy AI", meta: "UDel Research", year: "2024",
    d: "Explainable AI models in PyTorch classifying underwater terrain and sonar reflections across datasets." },
  { i: "004", title: "FinShark", meta: "Henhacks", year: "2024",
    d: "TypeScript/React finance app with a FastAPI backend delivering AI-driven spending analytics." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="panel-fog relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="flex items-center justify-between label text-muted-foreground">
            <span>Computer Engineer</span>
            <span className="hidden sm:block">Newark, Delaware</span>
            <span>Portfolio / 2026</span>
          </div>

          <h1 className="reveal-up mt-10 font-display text-[13vw] lg:text-[9.5vw] leading-[0.86] tracking-tightest">
            Hardware. Software.<br />
            <span className="text-muted-foreground">Intelligence.</span>
          </h1>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
            <p className="lg:col-span-5 text-lg lg:text-xl leading-relaxed text-foreground/80">
              I&apos;m Furdeen Hasan, a Computer Engineer from the University of Delaware. I build systems
              that cross the line between circuit and code — passive mmWave imagers, custom PCBs, and
              AI-driven applications.
            </p>
            <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-3">
              <Link to="/projects" className="group inline-flex items-center justify-between border-b border-foreground/30 pb-2 text-lg tracking-tight hover:border-foreground">
                Selected work <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center justify-between border-b border-foreground/30 pb-2 text-lg tracking-tight hover:border-foreground">
                Get in touch <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wide image band */}
        <div className="relative mx-auto max-w-[1700px] px-6 lg:px-12 pb-16">
          <div className="relative overflow-hidden h-[46vh] lg:h-[62vh]">
            <img
              src={heroImg}
              alt="Furdeen Hasan"
              className="w-full h-full object-cover object-[center_25%]"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 lg:p-8 bg-gradient-to-t from-black/70 to-transparent">
              <p className="label" style={{ color: "#f5f5f5" }}>B.S. Computer Engineering — University of Delaware</p>
              <p className="label" style={{ color: "#f5f5f5" }}>GPA 3.44 · Dean&apos;s List</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="panel-dark border-y">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 py-6 flex flex-wrap gap-x-10 gap-y-2 label text-muted-foreground">
          <span>C / C++ / C#</span><span>Python</span><span>TypeScript</span><span>PyTorch</span>
          <span>FastAPI</span><span>React</span><span>KiCad</span><span>Cadence</span><span>Verilog</span><span>.NET / WPF</span>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="label text-muted-foreground">(About)</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tightest">
              I take engineering problems from schematic to shipped —
              <span className="text-muted-foreground"> designing the board, writing the firmware, training the model, and building the interface on top of it.</span>
            </h2>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-lg link-underline">
              More about me <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="panel-fog border-y border-black/10">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 py-20 lg:py-28">
          <p className="label text-muted-foreground">(Capabilities)</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 border-t border-black/15">
            {CAPABILITIES.map((c) => (
              <div key={c.n} className="border-b border-black/15 md:border-r last:border-r-0 py-8 md:pr-8 md:pl-0 lg:pl-0">
                <p className="label text-muted-foreground">{c.n}</p>
                <h3 className="mt-4 font-display text-2xl lg:text-3xl">{c.t}</h3>
                <p className="mt-3 pr-4 text-[15px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label text-muted-foreground">(Selected work)</p>
              <h2 className="mt-4 font-display text-5xl lg:text-8xl leading-none tracking-tightest">Projects</h2>
            </div>
            <Link to="/projects" className="text-lg link-underline inline-flex items-center gap-2">
              All projects <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-14 border-t border-black/15">
            {FEATURED.map((f) => {
              const body = (
                <div className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-b border-black/15 transition-colors hover:bg-card">
                  <p className="md:col-span-1 label text-muted-foreground">{f.i}</p>
                  <h3 className="md:col-span-4 font-display text-3xl lg:text-5xl leading-none tracking-tightest">{f.title}</h3>
                  <p className="md:col-span-4 text-[15px] leading-relaxed text-muted-foreground">{f.d}</p>
                  <p className="md:col-span-2 label text-muted-foreground">{f.meta}</p>
                  <p className="md:col-span-1 label text-muted-foreground md:text-right">{f.year}</p>
                </div>
              );
              return f.to ? (
                <Link key={f.i} to={f.to} className="block px-2 -mx-2">{body}</Link>
              ) : (
                <div key={f.i} className="px-2 -mx-2">{body}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-dark">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 py-24 lg:py-36">
          <p className="label text-muted-foreground">(Contact)</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-[8vw] leading-[0.9] tracking-tightest">
            Open to engineering<br />roles &amp; collaborations.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg tracking-tight"
          >
            Start a conversation <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
