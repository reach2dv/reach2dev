import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { aboutPoints, codes, institutionFocus, site } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              An entrepreneurial initiative focused on people processes
            </h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/70">
            Vardhnam is led by professionals with proven expertise in Organizational Development and Change Management. We believe growth is a continuous process that succeeds when tapped timely and judiciously.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <ul className="space-y-4">
              {aboutPoints.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/80">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {codes.map((c) => (
                <div key={c.title} className="rounded-2xl border border-ink/10 bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-ocean">{c.title}</h3>
                  <p className="mt-1 text-sm italic text-accent">{c.lead}…</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.items.map((i) => (
                      <span key={i} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-3xl bg-ink p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our vision</p>
              <p className="mt-3 font-display text-2xl italic leading-snug">&ldquo;{site.vision}&rdquo;</p>
            </div>

            <div className="flex-1 rounded-3xl border border-ink/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Institution focus</p>
              <p className="mt-2 text-sm text-foreground/65">Universities, engineering, MBA, MCA and science colleges, and professional institutes.</p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-ink">
                {institutionFocus.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand">→</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
