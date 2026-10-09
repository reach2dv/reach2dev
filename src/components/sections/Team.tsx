import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { team, teamStrengths } from "@/data/content";

export default function Team() {
  return (
    <section id="team" className="py-24">
      <Container>
        <SectionHeading eyebrow="The people behind the progress" title="Practical experience. A personal commitment." description="Meet the practitioners who bring an understanding of people, business and education to every engagement." />
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article className="team-card">
                <div className="team-profile">
                  <Image src={m.image} alt={m.name} width={110} height={133} className="team-portrait" />
                  <div><p className="eyebrow mb-2">Vardhnam Consulting</p><h3 className="font-display text-2xl font-semibold text-ink">{m.name}</h3><p className="mt-2 text-sm font-medium text-brand-dark">{m.role}</p></div>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">{m.bio.map((b) => <p key={b}>{b}</p>)}</div>
                <ul className="team-highlights">{m.highlights.map((h) => <li key={h}><span aria-hidden>↗</span>{h}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="team-strengths">{teamStrengths.map((s) => <div key={s.title}><h3 className="font-semibold text-ink">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p></div>)}</div>
      </Container>
    </section>
  );
}
