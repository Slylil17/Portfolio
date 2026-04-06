import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
              S
            </span>
            <span className="font-bold tracking-tighter text-sm">
              SALIL RAJ GUPTA
            </span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Bridging the gap between complex financial logic and data analytics
            to drive business intelligence.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/Slylil17"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:r.salilgupta01@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Salil Raj Gupta. Built with Passion & Data.
          </p>
        </div>
      </div>
    </footer>
  );
}
