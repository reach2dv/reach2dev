import { About, Approach, Contact, Flagship, Footer, Hero, Navbar, Programs, Services, Team } from "@/components/sections";
import Philosophy from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Programs />
        <Flagship />
        <Approach />
        <Team />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
