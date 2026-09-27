import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";

type Detail = {
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  overview: string;
  highlights: { h: string; p: string }[];
  stack: string[];
  links?: { label: string; href: string }[];
};

const DETAILS: Record<string, Detail> = {
  scanprotech: {
    title: "ScanProTech",
    tagline: "Compact Passive mmWave Imager",
    category: "ECE Capstone · DEVCOM Sponsored Research",
    year: "2024 — 2025",
    role: "Hardware + Software Engineer",
    overview:
      "ScanProTech is a portable, affordable passive millimeter-wave (mmWave) imager designed for non-invasive detection in security screening, healthcare diagnostics, and industrial monitoring. The system leverages ambient thermal emissions in the W-band spectrum (90–100 GHz) to passively image objects and classify them in real time using AI — without harmful radiation.",
    highlights: [
      {
        h: "20×20 px Dual-Axis Scanning",
        p: "High-resolution passive imaging using a W-band Farran radiometer on a synchronized two-axis NEMA-17 stepper platform with Adafruit motor bonnets, focused via an aspherical Rexolite lens.",
      },
      {
        h: "Custom 4-Layer Baseband PCB",
        p: "Three-stage chopping circuit: band-pass filter + low-noise amplifier (~17 dB gain peaking at 200 kHz), mixer/clock recovery, and integrator stage. Split supply and ground-plane copper pour preserve signal integrity for low-amplitude mmWave signals.",
      },
      {
        h: "Real-Time GUI on Raspberry Pi 5",
        p: "Python + Kivy GUI for parameter control, live ADC and motor telemetry, and automatic heatmap rendering with Seaborn — built natively to integrate tightly with the hardware pipeline.",
      },
      {
        h: "AI Classification via FastAPI",
        p: "Pre-trained ResNet18 CNN classifies objects from heatmap distributions. A lightweight heuristic analyzer evaluates brightness and Laplacian sharpness for confidence scoring. Served from a local FastAPI REST API for low-latency feedback.",
      },
      {
        h: "Portable Custom Enclosure",
        p: "Aluminum T-slot extrusion frame with transparent acrylic panels and a single-point lens-access front face. Designed for durability across deployment environments.",
      },
    ],
    stack: [
      "Raspberry Pi 5", "Python", "FastAPI", "PyTorch", "ResNet18", "Kivy",
      "Custom 4-Layer PCB", "Farran W-band Radiometer", "NEMA-17 Steppers", "Aspherical Rexolite Lens",
    ],
    links: [
      { label: "Research Poster (PDF)", href: "/ScanProtech_Poster.pdf" },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const d = DETAILS[params.slug];
    const title = d ? `${d.title} — Furdeen Hasan` : "Project — Furdeen Hasan";
    const desc = d?.overview.slice(0, 155) ?? "Project case study by Furdeen Hasan.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const d = DETAILS[params.slug];
    if (!d) throw notFound();
    return { detail: d };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-7xl text-primary">Not Found</h1>
        <p className="mt-3 text-muted-foreground">We couldn't find that project.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 label text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProjectDetail() {
  const { detail: d } = Route.useLoaderData() as { detail: Detail };


  return (
    <>
      <section className="panel-fog border-b border-black/10 py-20 lg:py-28">
                <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link to="/projects" className="inline-flex items-center gap-2 label text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <p className="label text-muted-foreground mb-6">{d.category}</p>
          <h1 className="font-display text-6xl lg:text-[9rem] leading-[0.85]">{d.title}</h1>
          <p className="mt-4 label text-muted-foreground">{d.tagline}</p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl">
            <Meta label="Year" value={d.year} />
            <Meta label="Role" value={d.role} />
            <Meta label="Status" value="Shipped" />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 space-y-16">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-primary">Overview</h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">{d.overview}</p>
          </div>

          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-primary">Highlights</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {d.highlights.map((h) => (
                <div key={h.h} className="p-7 border border-black/15 bg-card/60">
                  <h3 className="font-display text-2xl text-foreground">{h.h}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{h.p}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-primary">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {d.stack.map((t) => (
                <span key={t} className="px-3 py-2 border border-black/20 label">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {d.links && (
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-primary">Resources</h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {d.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 label font-bold hover:bg-primary/90"
                  >
                    <FileText className="h-4 w-4" /> {l.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-black/15 bg-background p-4">
      <p className="label text-muted-foreground">{label}</p>
      <p className="font-display text-2xl mt-1">{value}</p>
    </div>
  );
}
