import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Furdeen Hasan" },
      { name: "description", content: "Get in touch with Furdeen Hasan for engineering opportunities, collaborations, or research." },
      { property: "og:title", content: "Contact — Furdeen Hasan" },
      { property: "og:description", content: "Let's build something." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="panel-fog border-b border-black/10 py-20 lg:py-28">
                <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
          <p className="label text-muted-foreground mb-6">Reach Out</p>
          <h1 className="font-display text-[14vw] lg:text-[10vw] leading-[0.86] tracking-tightest">
            Let's <span className="text-muted-foreground">Talk.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm always open to discussing engineering roles, research collaborations, or interesting builds.
            The fastest way to reach me is email.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
          <a
            href="mailto:fardeenhasan43@gmail.com"
            className="group relative p-10 lg:p-14 border border-black/15 bg-background hover:border-foreground transition-all overflow-hidden"
          >
            <Mail className="relative h-8 w-8 text-primary" />
            <p className="relative mt-6 label text-muted-foreground">Send an email</p>
            <p className="relative mt-3 font-display text-3xl lg:text-5xl break-all group-hover:opacity-70 transition">
              fardeenhasan43@gmail.com
            </p>
            <span className="relative mt-6 inline-flex items-center gap-2 label text-foreground group-hover:opacity-70">
              Email me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ContactCard
              href="https://www.linkedin.com/in/furdeenhasan"
              icon={Linkedin}
              label="LinkedIn"
              value="@furdeenhasan"
            />
            <ContactCard
              href="https://github.com/"
              icon={Github}
              label="GitHub"
              value="View profile"
            />
            <ContactCard
              href="tel:+15164121104"
              icon={Phone}
              label="Phone"
              value="516.412.1104"
            />
            <ContactCard
              href="#"
              icon={MapPin}
              label="Location"
              value="Newark, DE"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  href, icon: Icon, label, value,
}: { href: string; icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group p-6 lg:p-8 border border-black/15 bg-background hover:border-foreground hover:bg-secondary transition-all"
    >
      <Icon className="h-6 w-6 text-primary" />
      <p className="mt-5 label text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl group-hover:opacity-70 transition">{value}</p>
    </a>
  );
}
