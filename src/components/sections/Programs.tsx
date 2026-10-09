"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { programInsights, programSpecifics, programs } from "@/data/content";

export default function Programs() {
  const [active, setActive] = useState(0);
  const p = programs[active];

  return (
    <section id="programs" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Signature programs"
          title="Learning that becomes everyday practice"
          description="Four focused programs that help managers communicate better, take initiative and build stronger working relationships."
        />

        <div role="tablist" aria-label="Signature programs" className="mb-8 flex flex-wrap gap-2">
          {programs.map((prog, i) => (
            <button
              key={prog.title}
              role="tab"
              id={`program-tab-${i}`}
              aria-controls="program-panel"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onKeyDown={(event) => {
                const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
                if (direction || event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  const next = event.key === "Home" ? 0 : event.key === "End" ? programs.length - 1 : (active + direction + programs.length) % programs.length;
                  setActive(next);
                  document.getElementById(`program-tab-${next}`)?.focus();
                }
              }}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                i === active ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-ink/15 hover:ring-ink/40"
              }`}
            >
              {prog.title}
            </button>
          ))}
        </div>

        <Reveal>
          <div id="program-panel" role="tabpanel" aria-labelledby={`program-tab-${active}`} tabIndex={0} className="grid gap-8 rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-accent">{p.duration}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 font-medium text-brand-dark">{p.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{programInsights[active]}</p>
              <blockquote className="mt-6 border-l-4 border-accent pl-4 text-sm italic leading-relaxed text-foreground/70">
                &ldquo;{p.quote}&rdquo;
              </blockquote>

              <dl className="mt-8 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ocean">Batch size</dt>
                  <dd className="text-foreground/70">{programSpecifics.batch}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ocean">Participants</dt>
                  <dd className="text-foreground/70">{programSpecifics.profile}</dd>
                </div>
              </dl>
              <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-brand-dark underline underline-offset-4">Discuss this program ↗</a>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Objectives</h4>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {p.objectives.map((o, i) => (
                  <li key={o.name} className="rounded-2xl bg-brand-soft/70 p-5">
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                    <p className="mt-1 font-semibold text-ink">{o.name}</p>
                    <p className="mt-1 text-sm text-foreground/70">{o.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {programSpecifics.methods.map((m) => (
                  <span key={m} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-foreground/70">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
