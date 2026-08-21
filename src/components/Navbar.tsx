import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Skills", "Projects", "Certifications", "Contact"];

const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently most in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.55 }} className={`fixed top-0 w-full z-50 ${scrolled ? "nav-glass" : ""}`}>
      <div className="section-container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="brand" aria-label="Go home">AJ<span>.</span></button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="nav-link relative"
                aria-current={isActive ? "true" : undefined}
              >
                <span className={isActive ? "text-foreground" : ""}>{link}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <button onClick={() => setDark(!dark)} className="theme-button" aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={dark ? "sun" : "moon"} initial={{ opacity: 0, rotate: -60 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 60 }}>
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)} className="theme-button" aria-label="Toggle theme">{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
          <button onClick={() => setOpen(!open)} className="theme-button" aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mobile-menu md:hidden">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} className={`mobile-link ${active === link.toLowerCase() ? "text-foreground" : ""}`}>
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
