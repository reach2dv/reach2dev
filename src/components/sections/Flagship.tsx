import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { flagship } from "@/data/content";

export default function Flagship() {
  return (
    <section id="flagship" className="py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c7dcae]">{flagship.eyebrow} · Flagship program</p>
            <h2 className="mt-3 font-display text-5xl font-semibold italic sm:text-6xl">{flagship.title}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#e1b48b]">{flagship.tagline}</p>

            <p className="mt-8 border-l-4 border-[#e1b48b] pl-5 font-display text-lg italic leading-relaxed text-white/90 sm:text-xl">
              {flagship.poem.map((line) => <span key={line} className="block">{line}</span>)}
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">The program</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/80">
                  {flagship.about.map((t) => <p key={t}>{t}</p>)}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">Inside the book</h3>
                <ul className="mt-4 divide-y divide-white/15 text-sm">
                  {flagship.inside.map((t) => <li key={t} className="py-2.5 text-white/90">{t}</li>)}
                </ul>
              </div>
            </div>

            <p className="mt-10 font-display text-lg italic text-white/90">{flagship.closing}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#e1b48b]">{flagship.footer}</p>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-brand-soft">Bring Dare to Dream to your institution</a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
