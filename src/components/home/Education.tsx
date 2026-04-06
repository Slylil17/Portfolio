"use client";

import Section from "@/components/ui/Section";
import { Award, GraduationCap, School, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    type: "Certificate",
    title: "Google Data Analytics Professional Certificate",
    subtitle: "Coursera | Oct 2025",
    description: "Comprehensive training in the data analysis lifecycle (Ask, Prepare, Process, Analyze, Share, Act).",
    icon: Award,
    color: "blue",
    link: "https://coursera.org/share/4e82668a112b31284c2e9779d951d2eb"
  },
  {
    type: "CA Foundation",
    title: "Chartered Accountancy - Foundation",
    subtitle: "ICAI | Jan 2024 (First Attempt)",
    description: "Built a strong foundation in accounts, corporate reporting and taxation logic.",
    icon: School,
    color: "indigo"
  },
  {
    type: "B.Com",
    title: "B.Com | University of Delhi (SOL)",
    subtitle: "2023 - 2026 (Ongoing) | 8.1 CGPA",
    description: "Specializing in business, financial management and statistical analysis.",
    icon: GraduationCap,
    color: "pink"
  }
];

export default function Education() {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Academics & <span className="text-blue-500 italic">Certifications</span>
        </h2>

        <div className="space-y-12 relative before:absolute before:left-7 md:before:left-1/2 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-7 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl glass-card flex items-center justify-center z-10 bg-gray-950 border-${item.color}-500/30 group-hover:border-${item.color}-500/60 transition-colors shadow-2xl`}>
                <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                <div className={`absolute inset-0 bg-${item.color}-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                <div className="glass-card p-8 rounded-3xl hover:border-white/20 transition-all group relative overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${item.color}-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${item.color}-500 mb-2 relative z-10`}>
                    {item.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-4 font-medium italic relative z-10">
                    {item.subtitle}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                    {item.description}
                  </p>
                  
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      className={`inline-flex items-center gap-2 text-xs font-bold text-${item.color}-500 hover:text-white transition-colors uppercase tracking-widest relative z-10`}
                    >
                      Verify Certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
