import { Mail, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, inView } = useInView(0.1);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;
    setSending(true);
    emailjs.sendForm("service_78fzdzr", "template_zvovbt6", formRef.current, "vqxisGH_HRqyu7-__")
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 3500);
      })
      .catch(() => alert("Couldn't send the message. Please email me directly."))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" ref={ref} className="section-space">
      <div className="section-container">
        <div className="contact-shell">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3">Let's build something useful<span className="title-dot">.</span></h2>
            <p className="section-lead mx-auto mt-4">
              Open to internship opportunities, collaborative projects and conversations about software engineering.
            </p>
            <a href="mailto:jakhotiyaanujj@gmail.com" className="email-link">
              <Mail size={16} /> jakhotiyaanujj@gmail.com <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="user_name" required placeholder="Your name" className="field" />
              <input name="user_email" type="email" required placeholder="Your email" className="field" />
            </div>
            <textarea name="message" required rows={5} placeholder="Tell me a little about what you're working on..." className="field resize-none" />
            <button type="submit" disabled={sending} className="button-primary self-center sm:self-start disabled:opacity-60">
              {submitted ? "Message sent" : sending ? "Sending..." : <>Send message <Send size={15} /></>}
            </button>
          </motion.form>

          <div className="flex justify-center gap-3 mt-8">
            <a className="social-link" href="https://github.com/anujjakhotiya" target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a className="social-link" href="https://www.linkedin.com/in/anuj-jakhotiya-8a1a7733a/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
