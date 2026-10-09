import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { kolb, methodology, phases } from "@/data/content";

export default function Approach() {
  return (
    <section id="approach" className="bg-ink py-24 text-white">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Our approach</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Experiential learning with a sustaining impact
          </h2>
          <p className="mt-4 text-white/70">
            A three-phase delivery model built on Kolb&apos;s learning cycle, with action learning so participants apply what they learn at work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {phases.map((ph, i) => (
            <Reveal key={ph.phase} delay={i * 100}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{ph.phase}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{ph.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {ph.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-brand">✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="font-display text-xl font-semibold">Kolb&apos;s four-stage learning cycle</h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kolb.map((k, i) => (
              <li key={k.step} className="rounded-2xl bg-white/5 p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-sm font-bold">{i + 1}</span>
                <p className="mt-3 font-semibold">{k.step}</p>
                <p className="mt-1 text-sm text-white/65">{k.text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-white/60">
            Methodology mix: {methodology.join(" · ")} — delivered with case studies, audio-visual aids, group exercises, games and role-plays.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75">After each training or workshop, participant feedback is submitted to the organization. Mentoring, assessment and action plans help connect the learning experience to workplace performance.</p>
        </Reveal>
      </Container>
    </section>
  );
}
