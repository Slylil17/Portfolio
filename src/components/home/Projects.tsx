"use client";

import Section from "@/components/ui/Section";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "crypto-pipeline",
    title: "End-to-End Crypto Market Pipeline & Dashboard",
    subtitle: "Automated ETL Pipeline: Python → PostgreSQL → Power BI",
    description: "A self-sustaining data system that captures real-time crypto snapshots to analyze market cap distribution and supply-side inflation.",
    image: "/images/crypto_project_main.jpg",
    color: "pink",
    tech: ["Python", "PostgreSQL", "Power BI", "SQLAlchemy"],
    features: [
        "Integrated a custom logging system and automated hourly data 'pulses'.",
        "Built a historical time-series from a live API snapshot."
    ],
    href: "/projects/crypto-pipeline"
  },
  {
    id: "spacex",
    title: "SpaceX Launch Trends & Operational Analysis",
    subtitle: "Python & API Data Scraping",
    description: "Automated retrieval of mission data from the SpaceX REST API to analyze mission success rates and fairing recovery trends over time.",
    image: "/images/spacex_launch.png",
    color: "indigo",
    tech: ["Python", "Requests", "Matplotlib", "Pandas"],
    features: [
        "JSON data cleaning and Pandas table merging.",
        "Multi-variable trend visualization for recovery successes."
    ],
    href: "/projects/spacex"
  },
  {
    id: "retail",
    title: "End-to-End Retail Analytics Dashboard Simulation",
    subtitle: "Business Intelligence",
    description: "Synthesized a Generated, multi-table relational database modeled on professional retail environments. This dashboard tracks Profit Margins, Order Volume, and Average Spending.",
    image: "/images/retail_business.png",
    color: "blue",
    tech: ["Power BI", "SQL Joins", "Excel"],
    features: [
        "Star-schema optimization for fast querying.",
        "Interactive Regional Slicers and Drill-down cards."
    ],
    href: "/projects/retail"
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-gray-900/10 relative overflow-hidden">
      <div className="glow-blob w-[600px] h-[600px] bg-blue-600/5 -top-20 -right-20" />
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-blue-500 italic">Analysis</span> Projects
          </h2>
          <p className="text-gray-500 max-w-xl">
            Translating complex data into actionable business intelligence using modern tools and techniques.
          </p>
        </div>
        <a href="https://github.com/Slylil17" target="_blank" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition flex items-center gap-2 mb-2">
            View All Projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group grid md:grid-cols-2 gap-12 items-center relative"
          >
            <div className={cn(
                "absolute -inset-10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10",
                project.color === "pink" && "bg-pink-600/10",
                project.color === "indigo" && "bg-indigo-600/10",
                project.color === "blue" && "bg-blue-600/10"
            )} />
            
            <div className={cn(
                "relative aspect-video rounded-3xl overflow-hidden glass-card p-4 transition-all duration-500",
                index % 2 === 1 ? 'md:order-2' : '',
                project.color === "pink" && "group-hover:border-pink-500/50",
                project.color === "indigo" && "group-hover:border-indigo-500/50",
                project.color === "blue" && "group-hover:border-blue-500/50"
            )}>
               <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-8 relative z-10">
                <div>
                    <span className={cn(
                        "text-xs font-bold uppercase tracking-[0.2em] mb-4 block",
                        project.color === "pink" && "text-pink-500",
                        project.color === "indigo" && "text-indigo-500",
                        project.color === "blue" && "text-blue-500"
                    )}>
                        {project.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="space-y-4">
                    {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className={cn(
                                "w-5 h-5 shrink-0 mt-0.5",
                                project.color === "pink" && "text-pink-500",
                                project.color === "indigo" && "text-indigo-500",
                                project.color === "blue" && "text-blue-500"
                            )} />
                            <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                    ))}
                </div>

                <Link 
                    href={project.href}
                    className={cn(
                        "inline-flex items-center gap-3 px-8 py-4 font-bold rounded-2xl transition-all duration-300 active:scale-95",
                        project.color === "pink" && "bg-pink-600/10 hover:bg-pink-600 border border-pink-600/30 text-pink-400 hover:text-white",
                        project.color === "indigo" && "bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-600/30 text-indigo-400 hover:text-white",
                        project.color === "blue" && "bg-blue-600/10 hover:bg-blue-600 border border-blue-600/30 text-blue-400 hover:text-white"
                    )}
                >
                    Project Deep Dive
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
