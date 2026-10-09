import Container from "@/components/ui/Container";
import { stats } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div>
            <p className="eyebrow"><span className="status-dot" /> People. Possibility. Progress.</p>
            <h1 className="hero-title">Growing businesses.<br /> <em>Empowering people.</em></h1>
            <p className="hero-description">Meaningful growth starts with people. We partner with organizations and institutions to build capability, navigate change and create a culture of performance.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">Let’s build your next chapter <span aria-hidden>↗</span></a>
              <a href="#services" className="button-secondary">Explore our expertise <span aria-hidden>↓</span></a>
            </div>
            <p className="hero-note">Human capital consulting & experiential learning</p>
          </div>
          <div className="growth-panel">
            <div className="flex items-center justify-between gap-4"><p className="eyebrow">The Vardhnam perspective</p><span aria-hidden className="growth-star">✳</span></div>
            <p className="growth-heading">Growth<br />never stops<span>.</span></p>
            <div className="growth-steps">
              <div><span>01</span><p>Build<br /><strong>capability</strong></p></div>
              <div><span>02</span><p>Enable<br /><strong>change</strong></p></div>
              <div><span>03</span><p>Sustain<br /><strong>growth</strong></p></div>
            </div>
            <p className="growth-caption">Competence · Motivation · Commitment · Culture</p>
          </div>
        </div>
        <dl className="hero-stats">
          {stats.map((s) => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}
        </dl>
      </Container>
    </section>
  );
}
