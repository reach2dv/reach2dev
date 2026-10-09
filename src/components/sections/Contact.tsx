import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-soft/60 py-24">
      <Container>
        <SectionHeading eyebrow="Start a conversation" title="Your next chapter starts here." description="Looking to develop your people, strengthen your HR systems or support your institution? Let’s explore what growth could look like for you." />

        <Reveal>
          <div className="grid gap-8 rounded-3xl bg-ink p-6 text-white sm:grid-cols-2 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Address</p>
              <p className="mt-1 text-sm text-white/80">{site.address}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-white underline underline-offset-4">Find us on the map ↗</a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Phone</p>
              {site.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`} className="mt-1 block text-sm text-white/80 hover:text-white">
                  {p}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block break-words text-sm text-white/80 hover:text-white">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Web</p>
              <a href={`https://${site.website}`} className="mt-1 block break-words text-sm text-white/80 hover:text-white">{site.website}</a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
