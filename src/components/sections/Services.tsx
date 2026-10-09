import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="bg-brand-soft/60 py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Three practices, one goal: sustained performance"
          description="From soft-skills training to HR system design and end-to-end outsourcing, each practice is built on researched methods and hands-on support."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.summary}</p>

                <ul className="mt-6 space-y-3">
                  {s.items.map((it) => (
                    <li key={it.name} className="text-sm">
                      <span className="font-semibold text-ocean">{it.name}</span>
                      <span className="text-foreground/65"> — {it.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.expertise.map((e) => (
                    <span key={e} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-dark">
                      {e}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
