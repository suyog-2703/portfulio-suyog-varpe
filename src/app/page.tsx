import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Process } from "@/components/process";
import { Credentials } from "@/components/credentials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
