import Container from "@/components/ui/Container";
import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-white/60">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          <span className="font-display text-base text-white">{site.name}</span> — <em>{site.tagline}</em>
        </p>
        <a href="#top" className="text-white/80 hover:text-white">Back to top ↑</a>
      </Container>
    </footer>
  );
}
