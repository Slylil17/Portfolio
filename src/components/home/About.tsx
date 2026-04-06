"use client";

import Section from "@/components/ui/Section";
import { Server, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" className="relative bg-gray-900/20 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-blue-600/20 -top-20 -left-20" />
      <div className="glow-blob w-[300px] h-[300px] bg-indigo-600/20 -bottom-20 -right-20" />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            The <span className="text-blue-500 italic">Pivot</span> Story
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              After clearing <span className="text-white font-medium">CA Foundation on my first attempt</span> and 
              dedicating years to mastering Accounting Standards, Taxation, and Law, I realized my true 
              passion lies in the technology that powers financial decisions.
            </p>
            <p>
              I don't just see numbers on a spreadsheet; I see the underlying business narrative. 
              My background allows me to understand <span className="text-white border-b border-blue-500/30">Accountability</span> while 
              my technical skills allow me to deliver <span className="text-white border-b border-indigo-500/30">Scalability</span>.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl group hover:border-blue-500/50 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform origin-left relative z-10">8.1</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">B.Com CGPA</div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600/10 blur-xl rounded-full" />
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:border-indigo-500/50 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-bold text-indigo-400 mb-1 group-hover:scale-110 transition-transform origin-left relative z-10">1st Attempt</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">CA Foundation</div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-600/10 blur-xl rounded-full" />
            </div>
          </div>
        </div>

        <motion.div 
            whileHover={{ y: -5 }}
            className="relative glass-card p-10 rounded-3xl overflow-hidden group border-white/10 hover:border-blue-500/30 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
                <Server className="w-7 h-7 text-blue-500" />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              Tech Tinkerer
            </h3>
            
            <p className="text-gray-400 italic mb-8 border-l-2 border-blue-500/50 pl-4">
              "Beyond data analysis, I enjoy building systems that automate and simplify life."
            </p>
            
            <ul className="space-y-4">
              {[
                "Prompt Engineering, Ability to Use AI in CLI For Better Context.",
                "Self-hosted Home Server, Storage Server, Basic Linux & WSL.",
                "Knowledge of Network Port Forwarding & Mesh Networking.",
                "Passionate about integrating modern tech into legacy finance workflows."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
