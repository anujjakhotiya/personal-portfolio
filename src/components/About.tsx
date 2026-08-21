import { GraduationCap, Trophy, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    content: (
      <div className="space-y-5 text-base">
        <div>
          <p className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</p>
          <p className="text-muted-foreground">SR University, Warangal · 2024–2028</p>
          <p className="text-primary text-sm font-medium mt-1">CGPA 9.83 / 10</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Senior Secondary</p>
          <p className="text-muted-foreground">SR Junior College · 2022–2024 · 97.4%</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Secondary School</p>
          <p className="text-muted-foreground">St. Peter's Central Public School · 2012–2022 · 96.6%</p>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "What I'm learning",
    content: (
      <div>
        <p className="text-base text-muted-foreground leading-relaxed mb-5">
          My coursework and self-directed learning focus on software engineering fundamentals and modern application development.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Data Structures", "Machine Learning", "Web Development", "Cyber Security", "Cloud Computing", "HCI"].map((item) => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Trophy,
    title: "Beyond coursework",
    content: (
      <ul className="space-y-4 text-base text-muted-foreground">
        <li>
          Selected as <span className="text-foreground font-medium">Batch Representative</span> for the 2025–26 academic year, recognized as the top-performing representative for coordinating between students and faculty.
        </li>
        <li>
          Named to the <span className="text-foreground font-medium">Vice Chancellor's List</span> for academic excellence at SR University.
        </li>
        <li>
          Completed <span className="text-foreground font-medium">four consecutive semesters of Night Hackathons</span>, building prototype solutions under time pressure.
        </li>
        <li>
          Took part in <span className="text-foreground font-medium">Discursus Dominus</span> at SR University.
        </li>
      </ul>
    ),
  },
  {
    icon: Target,
    title: "What I'm working toward",
    content: (
      <p className="text-base text-muted-foreground leading-relaxed">
        I'm working toward becoming a well-rounded software engineer who can take a problem from concept to a reliable, maintainable product, with a particular interest in full-stack systems, cloud infrastructure, and applied AI.
      </p>
    ),
  },
];

const About = () => {
  const { ref, inView } = useInView(0.12);

  return (
    <section id="about" ref={ref} className="section-space">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-heading">
          <p className="eyebrow">About</p>
          <h2 className="section-title">A little context<span className="title-dot">.</span></h2>
          <p className="section-lead">
            I'm a Computer Science undergraduate at SR University with a strong foundation in data structures, algorithms, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="clean-card"
              >
                <div className="card-icon"><Icon size={18} /></div>
                <h3 className="card-title">{card.title}</h3>
                <div className="mt-5">{card.content}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
