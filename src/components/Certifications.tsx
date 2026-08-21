import { Award, Cloud, Shield, Code, Brain, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const certs = [
  ["AWS Academy Graduate — Cloud Developing", "AWS Academy · Credly", Cloud, "https://www.credly.com/badges/8910daa5-39c1-4b1f-9702-7981d35729f5/public_url"],
  ["AWS Academy Graduate — Cloud Foundations", "AWS Academy · Credly", Cloud, "https://www.credly.com/badges/bc48d7af-206b-4026-aec8-c9f396def593/public_url"],
  ["Cisco Certified Network Associate (CCNA)", "Cisco · Credly", Shield, "https://www.credly.com/badges/05457bf1-baaf-4d4d-9326-ee6257a80fa2/public_url"],
  ["CS205: Building with Artificial Intelligence", "Saylor Academy", Brain, "https://learn.saylor.org/admin/tool/certificate/index.php?code=7374359480AJ"],
  ["Introduction to Cryptography and Network Security", "Saylor Academy", Lock, "https://learn.saylor.org/course/view.php?id=328"],
  ["Dynamic Programming Camp", "AlgoUniversity", Code, "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/anuj-jakhotiya.png"],
  ["Python (Basic)", "HackerRank", Code, "https://www.hackerrank.com/certificates/8a64ce6adcdd"],
] as const;

const Certifications = () => {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="certifications" ref={ref} className="section-space section-tint">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-heading">
          <p className="eyebrow">Credentials</p>
          <h2 className="section-title">Certifications<span className="title-dot">.</span></h2>
          <p className="section-lead">Verified learning milestones across cloud, networking, programming and AI.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(([name, issuer, Icon, url], index) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="cert-card group"
            >
              <div className="card-icon"><Icon size={17} /></div>
              <div className="mt-5">
                <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1.5"><Award size={13} /> {issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
