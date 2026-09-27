import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="panel-dark">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-12 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label text-muted-foreground">Available for opportunities</p>
            <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest">
              Let&apos;s build<br />something precise.
            </h2>
            <a
              href="mailto:fardeenhasan43@gmail.com"
              className="mt-8 inline-block text-xl md:text-2xl tracking-tight link-underline"
            >
              fardeenhasan43@gmail.com
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-muted-foreground">Index</p>
            <ul className="mt-5 space-y-2 text-[15px]">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/experience" className="link-underline">Experience</Link></li>
              <li><Link to="/projects" className="link-underline">Projects</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-muted-foreground">Elsewhere</p>
            <ul className="mt-5 space-y-2 text-[15px]">
              <li><a href="https://www.linkedin.com/in/furdeenhasan" target="_blank" rel="noreferrer" className="link-underline">LinkedIn ↗</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="link-underline">GitHub ↗</a></li>
              <li><a href="/FurdeenHasan_Resume.pdf" target="_blank" rel="noreferrer" className="link-underline">Resume ↗</a></li>
              <li className="text-muted-foreground">516.412.1104</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3 label text-muted-foreground">
          <p>© {new Date().getFullYear()} Furdeen Hasan</p>
          <p>Newark, DE — 39.68°N, 75.75°W</p>
        </div>
      </div>
    </footer>
  );
}
