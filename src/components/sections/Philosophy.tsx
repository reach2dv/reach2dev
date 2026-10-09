import Container from "@/components/ui/Container";
import { philosophy } from "@/data/content";

export default function Philosophy() {
  return <section className="philosophy-section"><Container className="grid gap-8 lg:grid-cols-3"><div><p className="eyebrow">Our philosophy</p><h2 className="mt-4 font-display text-3xl">Space to create.<br />Freedom to grow.</h2></div><div className="lg:col-span-2"><blockquote className="font-display text-2xl leading-relaxed sm:text-3xl">“{philosophy}”</blockquote><p className="mt-5 text-sm text-foreground/65">The belief at the heart of Vardhnam Consulting.</p></div></Container></section>;
}
