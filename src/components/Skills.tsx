import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, LineChart, Server } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = [
  { title: "Languages", icon: Code2, items: ["Python", "C", "JavaScript", "SQL"] },
  { title: "Frontend", icon: Globe, items: ["React", "HTML5", "CSS3", "Responsive UI"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { title: "Data & Analytics", icon: LineChart, items: ["Pandas", "NumPy", "Plotly", "Dash", "Tableau", "Power BI"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL", "SQLite", "Oracle SQL"] },
  { title: "Tools & Cloud", icon: Wrench, items: ["Git", "GitHub", "AWS", "VS Code", "Figma"] },
];

const Skills = () => {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="skills" ref={ref} className="section-space section-tint">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">Technologies I use<span className="title-dot">.</span></h2>
          <p className="section-lead">A practical stack shaped by projects, coursework and continuous experimentation.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="clean-card skill-panel"
              >
                <div className="card-icon"><Icon size={18} /></div>
                <h3 className="card-title">{category.title}</h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  {category.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
