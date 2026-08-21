import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
    <footer className="site-footer">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Anuj Jakhotiya</span>
        <span>Built with React · TypeScript · Tailwind</span>
      </div>
    </footer>
  </div>
);

export default Index;
