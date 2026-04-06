"use client";

import Section from "@/components/ui/Section";
import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-gray-900/30 py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className="flex justify-center items-center gap-12">
          <a 
            href="https://github.com/Slylil17"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-blue-500/50">
                <Github className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">GitHub</span>
          </a>

          <a 
            href="mailto:r.salilgupta01@gmail.com"
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-pink-600/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-pink-500/50">
                <Mail className="w-8 h-8 text-gray-400 group-hover:text-pink-500 transition-colors" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Email Me</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
