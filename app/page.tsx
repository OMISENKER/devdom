import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Projects from "./components/projects";
import SkillsTools from "./components/skills-tools";
import Credentials from "./components/credentials";
import ScrollReveal from "./components/scroll-reveal";
import FabButtons from "./components/fab-buttons";

export default function Home() {
  return (
    <main className="snap-container">
      <ScrollReveal />
      <FabButtons />
      <header className="h-svh w-full snap-start">
        <Hero />
      </header>
      <section id="about" className="h-svh w-full snap-start reveal">
        <AboutMe />
      </section>
      <section id="experience" className="h-svh w-full snap-start reveal">
        <Experience />
      </section>
      <section id="projects" className="h-svh w-full snap-start reveal">
        <Projects />
      </section>
      <section id="skills" className="h-svh w-full snap-start reveal">
        <SkillsTools />
      </section>
      <footer id="credentials" className="h-svh w-full snap-start reveal">
        <Credentials />
      </footer>
    </main>
  );
}
