import { MeshBackground } from "@/components/layout/MeshBackground";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { ClientsTestimonials } from "@/components/sections/ClientsTestimonials";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WorkProcess } from "@/components/sections/WorkProcess";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkProcess />
        <Portfolio />
        <CtaBanner />
        <Blog />
        <Services />
        <ClientsTestimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
