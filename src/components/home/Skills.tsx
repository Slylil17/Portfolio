"use client";

import Section from "@/components/ui/Section";
import { BarChart3, Code2, Scale } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Visualization",
    icon: BarChart3,
    color: "blue",
    items: [
      "Power BI (DAX & Data Modeling)",
      "Intermediate MS Excel",
      "Interactive Dashboards",
      "Report Automation",
    ],
  },
  {
    category: "Programming",
    icon: Code2,
    color: "indigo",
    items: [
      "Python (Pandas/Matplotlib/SQLAlchemy)",
      "SQL (Joins, Views, Queries, CTE's)",
      "API Data Extraction (Requests, BeautifulSoup)",
      "Script Automation (.bat scripting, Task Scheduler)",
    ],
  },
  {
    category: "Financial Core",
    icon: Scale,
    color: "pink",
    items: [
      "Accounting Standards (AS)",
      "Corporate Taxation (GST/IT)",
      "Financial Statement Analysis",
      "Strategic Management",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Technical <span className="gradient-text">Competencies</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          A blend of financial rigor and data-driven technological capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="glass-card p-10 rounded-3xl group relative overflow-hidden transition-colors"
          >
            <div className={`w-14 h-14 bg-${skill.color}-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
              <skill.icon className={`w-7 h-7 text-${skill.color}-500`} />
              <div className={`absolute inset-0 bg-${skill.color}-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>

            <h3 className={`text-2xl font-bold mb-6 text-${skill.color}-400 relative z-10`}>
              {skill.category}
            </h3>

            <ul className="space-y-4 relative z-10">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 group/item">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500/50 group-hover/item:scale-150 transition-transform`} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className={`absolute -bottom-10 -right-10 w-48 h-48 bg-${skill.color}-600/10 blur-3xl rounded-full group-hover:bg-${skill.color}-600/20 transition-colors`} />
            <div className={`absolute -top-10 -left-10 w-32 h-32 bg-${skill.color}-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
