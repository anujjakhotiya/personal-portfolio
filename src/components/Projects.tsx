import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Ticket, Hospital, Bus, BarChart3, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TrackBack",
    subtitle: "Lost & Found Platform",
    description: "A MERN platform for reporting lost or found items on public transport, matching reports and letting staff verify claims from one dashboard.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    icon: Ticket,
    repo: "https://github.com/anujjakhotiya/trackback",
  },
  {
    title: "Tourism Growth Storytelling Dashboard",
    subtitle: "Interactive data visualization",
    description: "A Dash and Plotly dashboard exploring global tourism arrivals, the COVID-19 impact and early recovery across 200+ countries.",
    tags: ["Python", "Dash", "Plotly", "Pandas"],
    icon: BarChart3,
    repo: "https://github.com/anujjakhotiya/tourism-dashboard",
  },
  {
    title: "AI Bus Tracker",
    subtitle: "University transport platform",
    description: "A full-stack bus tracking system with a Node/Express API, JWT authentication and seat-reservation logic designed to avoid double booking.",
    tags: ["JavaScript", "Node.js", "Express", "REST API"],
    icon: Bus,
    repo: "https://github.com/anujjakhotiya/Ai-Bus-Tracker",
  },
  {
    title: "MediCare",
    subtitle: "Hospital Management System",
    description: "A desktop hospital management application for patient records, appointments, billing, medicine inventory and PDF reporting.",
    tags: ["Python", "Tkinter", "SQLite"],
    icon: Hospital,
    repo: "https://github.com/anujjakhotiya/Hospital-Management-System",
  },
];

const Projects = () => {
  const { ref, inView } = useInView(0.08);
  return (
    <section id="projects" ref={ref} className="section-space">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Things I've built<span className="title-dot">.</span></h2>
          <p className="section-lead">A selection of projects that show how I approach a problem, from initial design through working implementation.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="project-card group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="card-icon"><Icon size={18} /></div>
                  <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                    <Github size={15} /> Source <ArrowUpRight size={13} />
                  </a>
                </div>
                <div className="mt-7">
                  <p className="project-kicker">{project.subtitle}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-9">
          <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5" href="https://github.com/anujjakhotiya?tab=repositories" target="_blank" rel="noreferrer">
            See all repositories <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
