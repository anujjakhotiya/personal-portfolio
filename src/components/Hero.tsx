import profileImg from "@/assets/profile.png";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const cgpa = useCountUp(9.83, 1400, 2);

  return (
  <section id="home" className="min-h-screen flex items-center relative pt-24 overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 dot-pattern opacity-25" />
    <div className="hero-orb hero-orb-one" />
    <div className="hero-orb hero-orb-two" />

    <div className="section-container relative z-10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="eyebrow"
          >
            Computer Science Undergraduate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="display-title mt-5"
          >
            Anuj Jakhotiya
            <span className="title-dot">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="hero-role"
          >
            Full-Stack Developer · Data Structures & Algorithms
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="hero-copy"
          >
            I build full-stack web platforms, APIs, and data dashboards, with a
            strong foundation in data structures and algorithms and a growing
            focus on cloud infrastructure and applied machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="button-primary"
            >
              View projects <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/Anuj_Jakhotiya_Resume.pdf"
              download
              className="button-secondary"
            >
              <Download size={16} /> Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="flex items-center gap-5 justify-center lg:justify-start mt-8"
          >
            <a className="social-link" href="https://github.com/anujjakhotiya" target="_blank" rel="noreferrer" aria-label="GitHub">
              <motion.span whileHover={{ scale: 1.15, rotate: -4 }} whileTap={{ scale: 0.9 }} className="inline-flex">
                <Github size={17} />
              </motion.span>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/anuj-jakhotiya-8a1a7733a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <motion.span whileHover={{ scale: 1.15, rotate: -4 }} whileTap={{ scale: 0.9 }} className="inline-flex">
                <Linkedin size={17} />
              </motion.span>
            </a>
            <a className="social-link" href="mailto:jakhotiyaanujj@gmail.com" aria-label="Email">
              <motion.span whileHover={{ scale: 1.15, rotate: -4 }} whileTap={{ scale: 0.9 }} className="inline-flex">
                <Mail size={17} />
              </motion.span>
            </a>
            <span className="hero-location">Warangal, Telangana</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="profile-wrap">
            <div className="profile-ring" />
            <div className="profile-image">
              <img src={profileImg} alt="Anuj Jakhotiya" width={512} height={512} />
            </div>
            <div className="profile-note">
              <span className="note-value">{cgpa.toFixed(2)}</span>
              <span className="note-label">CGPA / 10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 6, 0] }}
      transition={{ opacity: { delay: 1, duration: 0.4 }, y: { delay: 1.4, duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      className="scroll-cue"
      aria-label="Scroll to about"
    >
      <ArrowDown size={16} />
      <span>Scroll</span>
    </motion.a>
  </section>
  );
};

export default Hero;
