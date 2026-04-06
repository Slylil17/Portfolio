"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
    ArrowLeft, Github, Calendar, Target, Code2, LineChart, CheckCircle2, 
    ExternalLink, Search, User, Database, Cpu, Layers, X, Maximize2 
} from "lucide-react";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectContentProps {
    project: any;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
                <Link 
                    href="/#projects" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
                <div className="flex gap-3 mb-6">
                    {project.subtitle.split("|").map((s: string) => (
                        <span key={s} className={cn(
                            "px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-widest",
                            project.color === "indigo" && "border-indigo-500/30 text-indigo-400",
                            project.color === "blue" && "border-blue-500/30 text-blue-400",
                            project.color === "pink" && "border-pink-500/30 text-pink-400"
                        )}>
                            {s.trim()}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
                    {project.title.split(" ").map((word: string, i: number) => (
                        word.toLowerCase() === "analysis" || word.toLowerCase() === "dashboard" || word.toLowerCase() === "trends" || word.toLowerCase() === "pipeline"
                        ? <span key={i} className="gradient-text">{word} </span>
                        : word + " "
                    ))}
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                    {project.description}
                </p>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video rounded-3xl overflow-hidden glass-card p-4 shadow-2xl"
            >
                <Image 
                    src={project.heroImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover rounded-2xl"
                    priority
                />
            </motion.div>
        </div>
        
        {/* Background Blur */}
        <div className={cn(
            "absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] -z-10 opacity-20",
            project.color === "indigo" && "bg-indigo-600",
            project.color === "blue" && "bg-blue-600",
            project.color === "pink" && "bg-pink-600"
        )} />
      </div>

      <Section className="py-16 max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
                { label: "Tools", val: project.tools, icon: Code2 },
                { label: "Viz Library", val: project.viz, icon: LineChart },
                { label: "Complexity", val: project.complexity, icon: Target },
                { label: "Focus", val: project.focus, icon: CheckCircle2 }
            ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 rounded-3xl text-center group hover:border-white/20 transition-all relative overflow-hidden">
                    <div className={cn(
                        "absolute -inset-10 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity rounded-full",
                        project.color === "indigo" && "bg-indigo-600/20",
                        project.color === "blue" && "bg-blue-600/20",
                        project.color === "pink" && "bg-pink-600/20"
                    )} />
                    <stat.icon className={cn(
                        "w-5 h-5 mx-auto mb-3 group-hover:scale-110 transition-transform relative z-10",
                        project.color === "indigo" && "text-indigo-400",
                        project.color === "blue" && "text-blue-400",
                        project.color === "pink" && "text-pink-400"
                    )} />
                    <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1 relative z-10">{stat.label}</div>
                    <div className="font-bold text-white text-sm relative z-10">{stat.val}</div>
                </div>
            ))}
        </div>

        {/* Snapshot for Legacy Layout */}
        {project.layoutType === "legacy" && project.snapshot && (
            <div 
                className="glass-card p-2 rounded-3xl mb-24 shadow-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage({ src: project.snapshot, title: "Dashboard Snapshot", detail: "High-Level KPIs & Operational Overview" })}
            >
                <div className="relative aspect-video">
                    <Image src={project.snapshot} alt="Dashboard Snapshot" fill className="object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Maximize2 className="w-12 h-12 text-white" />
                    </div>
                </div>
                <div className="p-4 flex justify-between items-center bg-gray-900/50">
                    <span className="text-xs text-gray-500 italic">High-Level KPIs & Operational Overview</span>
                    <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Interactive Model</span>
                </div>
            </div>
        )}

        {/* Layout rendering */}
        <div className="space-y-24">
            {/* STAR LAYOUT (SpaceX) */}
            {project.layoutType === "star" && (
                <>
                    <section>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{project.situation.label}</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{project.situation.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed prose-text">
                            {project.situation.content}
                        </p>
                    </section>

                    <section>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{project.task.label}</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{project.task.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-4">
                            {project.task.content}
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg pl-2">
                            {project.task.bullets.map((b: string, i: number) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{project.action.label}</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{project.action.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 prose-text">
                            Applying my <strong className="text-white font-bold">Chartered Accountancy background</strong>, {project.action.content}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {project.images.slice(0, 2).map((img: any, i: number) => (
                                <div 
                                    key={i} 
                                    className="glass-card p-8 rounded-3xl group cursor-pointer hover:border-blue-500/30 transition-all"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-tight">{img.title}</h4>
                                    <p className="text-xs text-gray-500 italic mb-6">"{img.desc}"</p>
                                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-gray-900 flex items-center justify-center">
                                        <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <Maximize2 className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] text-gray-500 mt-4">{img.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-12 prose-text">
                            {project.action.subContent}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {project.images.slice(2, 4).map((img: any, i: number) => (
                                <div 
                                    key={i} 
                                    className="glass-card p-8 rounded-3xl group cursor-pointer hover:border-blue-500/30 transition-all"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-tight">{img.title}</h4>
                                    <p className="text-xs text-gray-500 italic mb-6">"{img.desc}"</p>
                                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-gray-900">
                                        <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <Maximize2 className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] text-gray-500 mt-4">{img.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{project.results.label}</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white leading-tight">{project.results.title}</h3>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                {project.results.items.map((res: any, i: number) => (
                                    <div key={i} className={cn(
                                        "p-6 bg-gray-950 rounded-2xl border-l-4 shadow-xl",
                                        res.borderColor === "green" ? "border-green-500" : "border-blue-500"
                                    )}>
                                        <h5 className="font-bold text-white mb-2 text-base">{res.title}</h5>
                                        <p className="text-sm text-gray-400 leading-relaxed">{res.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div 
                                className="glass-card p-4 rounded-3xl cursor-pointer hover:border-indigo-500/30 transition-all group"
                                onClick={() => setSelectedImage({ src: project.results.image, title: project.results.title, detail: project.results.imageCaption })}
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
                                    <Image src={project.results.image} alt="Results visualization" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Maximize2 className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <p className="text-[10px] text-indigo-500 text-center mt-4 font-bold uppercase tracking-widest">{project.results.imageCaption}</p>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* LEGACY LAYOUT (Retail) */}
            {project.layoutType === "legacy" && (
                <>
                    {project.sections.map((sec: any, i: number) => (
                        <section key={i}>
                            {sec.type === "split" ? (
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{sec.left.label}</span>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{sec.left.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{sec.left.content}</p>
                                        <ul className="space-y-3">
                                            {sec.left.bullets.map((b: string, j: number) => (
                                                <li key={j} className="flex items-start text-xs text-gray-400">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 mr-3 shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="glass-card p-6 rounded-3xl bg-blue-600/5 border-blue-500/10 hover:border-blue-500/30 transition-colors relative overflow-hidden group">
                                        <div className="absolute -inset-10 bg-blue-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                        <h4 className="text-sm font-bold text-blue-400 mb-3 uppercase tracking-widest relative z-10">DAX Financial Logic</h4>
                                        <p className="text-[11px] text-gray-400 leading-relaxed italic mb-4 relative z-10">{sec.right.italic}</p>
                                        <div className="space-y-2 bg-black/40 p-4 rounded-xl border border-white/5 relative z-10">
                                            {sec.right.code.map((line: string, j: number) => (
                                                <div key={j} className="text-[9px] text-pink-400 font-mono">{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : sec.features ? (
                                <>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{sec.label}</span>
                                    <h3 className="text-2xl font-bold mb-8 text-white">{sec.title}</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {sec.features.map((f: any, j: number) => (
                                            <div key={j} className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-blue-500/30 transition-colors relative overflow-hidden group">
                                                <div className="absolute -inset-10 bg-blue-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4 relative z-10">
                                                    {f.icon === "search" ? <Search className="w-4 h-4 text-blue-500" /> : <User className="w-4 h-4 text-green-500" />}
                                                </div>
                                                <h4 className="font-bold text-white mb-2 relative z-10">{f.title}</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed mb-3 relative z-10">{f.desc}</p>
                                                {f.code && (
                                                    <div className="bg-black/30 p-2 rounded border border-gray-800 font-mono text-[9px] text-green-400 relative z-10">
                                                        {f.code}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : sec.stats ? (
                                <div className="border-t border-gray-800 pt-16 text-center">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{sec.label}</span>
                                    <h3 className="text-2xl font-bold mb-10 text-white">{sec.title}</h3>
                                    <div className="grid grid-cols-3 gap-6 mb-12">
                                        {sec.stats.map((s: any, j: number) => (
                                            <div key={j}>
                                                <div className={cn(
                                                    "text-3xl font-extrabold mb-1",
                                                    s.color === "blue" && "text-blue-400",
                                                    s.color === "purple" && "text-purple-400",
                                                    s.color === "pink" && "text-pink-400"
                                                )}>{s.val}</div>
                                                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed italic max-w-2xl mx-auto prose-text">
                                        {sec.footer}
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">{sec.label}</span>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{sec.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed prose-text">{sec.content}</p>
                                </>
                            )}
                        </section>
                    ))}
                </>
            )}

            {/* CRYPTO LAYOUT */}
            {project.layoutType === "crypto" && (
                <>
                    {/* Section I: Logic */}
                    <section>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4 block">{project.sections[0].label}</span>
                        <h3 className="text-3xl font-bold mb-6 text-white leading-tight">{project.sections[0].title}</h3>
                        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                            <div className="prose-text text-lg space-y-6">
                                <p>{project.sections[0].content}</p>
                                <p>{project.sections[0].subContent}</p>
                            </div>
                            <div className="glass-card p-6 rounded-3xl bg-pink-600/5 border-pink-500/10 hover:border-pink-500/30 transition-colors relative overflow-hidden group">
                                <div className="absolute -inset-10 bg-pink-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                <h4 className="text-sm font-bold text-pink-400 mb-3 uppercase tracking-widest relative z-10">{project.sections[0].code.title}</h4>
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-[10px] text-red-500 whitespace-pre-wrap relative z-10">
                                    {project.sections[0].code.content}
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-900/50 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute -inset-10 bg-pink-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                            <h4 className="text-xl font-bold text-white mb-4 relative z-10">{project.sections[0].challenge.title}</h4>
                            <p className="text-gray-400 mb-6 relative z-10">{project.sections[0].challenge.content}</p>
                            <div className="flex items-start gap-4 p-4 bg-pink-600/10 rounded-2xl border-l-4 border-pink-500 relative z-10">
                                <CheckCircle2 className="w-5 h-5 text-pink-500 mt-1 shrink-0" />
                                <p className="text-sm text-gray-300 italic">{project.sections[0].challenge.solution}</p>
                            </div>
                        </div>
                    </section>

                    {/* Section II: Architecture */}
                    <section>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4 block">{project.sections[1].label}</span>
                        <h3 className="text-3xl font-bold mb-10 text-white leading-tight">{project.sections[1].title}</h3>
                        <p className="text-gray-400 text-lg mb-12 prose-text">{project.sections[1].content}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {project.sections[1].codeSnippets.map((snip: any, j: number) => (
                                <div key={j} className="glass-card p-6 rounded-3xl bg-gray-900/50 border-white/5 hover:border-pink-500/30 transition-colors relative overflow-hidden group">
                                    <div className="absolute -inset-10 bg-pink-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                    <h4 className="text-sm font-bold text-pink-400 mb-4 uppercase tracking-widest relative z-10">{snip.title}</h4>
                                    <div className="bg-black/60 p-5 rounded-xl border border-white/5 font-mono text-[10px] text-blue-400 whitespace-pre-wrap leading-relaxed overflow-x-auto relative z-10">
                                        {snip.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-6 p-8 glass-card rounded-3xl border-dashed border-white/10 hover:border-pink-500/30 transition-colors relative overflow-hidden group">
                            <div className="absolute -inset-10 bg-pink-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                            <div className="w-16 h-16 bg-pink-600/20 rounded-2xl flex items-center justify-center shrink-0 relative z-10">
                                <Cpu className="w-8 h-8 text-pink-500" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold text-white mb-2">Automation Layer</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.sections[1].automation}</p>
                            </div>
                        </div>
                    </section>

                    {/* Section III: Database */}
                    <section>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4 block">{project.sections[2].label}</span>
                        <h3 className="text-3xl font-bold mb-6 text-white leading-tight">{project.sections[2].title}</h3>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <p className="text-gray-400 text-lg prose-text">{project.sections[2].content}</p>
                            <div className="glass-card p-6 rounded-3xl bg-gray-900/50 border-white/5 hover:border-pink-500/30 transition-colors relative overflow-hidden group">
                                <div className="absolute -inset-10 bg-pink-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                <h4 className="text-sm font-bold text-pink-400 mb-4 uppercase tracking-widest relative z-10">{project.sections[2].code.title}</h4>
                                <div className="bg-black/60 p-5 rounded-xl border border-white/5 font-mono text-[10px] text-green-400 whitespace-pre-wrap leading-relaxed relative z-10">
                                    {project.sections[2].code.content}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section IV: Visuals (4-Quadrant) */}
                    <section className="pt-12 border-t border-white/5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4 block">Power BI Showcase</span>
                        <h3 className="text-3xl font-bold mb-12 text-white leading-tight">Interactive Insights Dashboard</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.visuals.map((vis: any, j: number) => (
                                <div 
                                    key={j} 
                                    className="glass-card p-3 rounded-3xl cursor-pointer hover:border-pink-500/30 transition-all group overflow-hidden"
                                    onClick={() => setSelectedImage(vis)}
                                >
                                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-2">
                                        <Image src={vis.src} alt={vis.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <Maximize2 className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-white group-hover:text-pink-400 transition-colors">{vis.title}</h4>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-1 italic">Click to expand details</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* GitHub CTA */}
            <section className="text-center pt-24 border-t border-white/5">
                <h3 className="text-3xl font-bold mb-4">{project.cta.title}</h3>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">{project.cta.desc}</p>
                <a 
                    href={project.github} 
                    target="_blank" 
                    className={cn(
                        "inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-extrabold rounded-2xl transition-all transform active:scale-95 shadow-2xl hover:text-white",
                        project.color === "indigo" && "hover:bg-indigo-600",
                        project.color === "blue" && "hover:bg-blue-600",
                        project.color === "pink" && "hover:bg-pink-600"
                    )}
                >
                    <Github className="w-6 h-6" />
                    Explore Repository
                    <ExternalLink className="w-4 h-4" />
                </a>
            </section>
        </div>
      </Section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gray-950/98 backdrop-blur-2xl"
                onClick={() => setSelectedImage(null)}
            >
                <button 
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                    onClick={() => setSelectedImage(null)}
                >
                    <X className="w-8 h-8" />
                </button>

                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full h-full max-w-[95vw] max-h-[90vh] bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full md:w-[75%] h-full bg-black/60 flex items-center justify-center">
                        <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-contain p-4" />
                    </div>
                    <div className="w-full md:w-[25%] p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 bg-gray-900 overflow-y-auto">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className={cn(
                                "text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block",
                                project.color === "indigo" && "text-indigo-400",
                                project.color === "blue" && "text-blue-400",
                                project.color === "pink" && "text-pink-400"
                            )}
                        >
                            Detailed View
                        </motion.span>
                        <motion.h4 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight"
                        >
                            {selectedImage.title}
                        </motion.h4>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 leading-relaxed text-base md:text-lg"
                        >
                            {selectedImage.detail || selectedImage.desc}
                        </motion.p>
                        
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => setSelectedImage(null)}
                            className="mt-10 self-start text-sm font-bold text-white flex items-center gap-2 group hover:text-blue-400 transition-colors"
                        >
                            Close Preview
                            <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
