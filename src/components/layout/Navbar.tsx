"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Github, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "./SmoothScroll";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (window.location.pathname === "/") {
        if (lenis) {
          e.preventDefault();
          lenis.scrollTo(`#${hash}`, { offset: 0, duration: 1.5 });
        }
      } else {
        // Just let the link handle it: "/#home" will go to root + scroll
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter group flex items-center gap-2"
          onClick={(e) => {
            if (window.location.pathname === "/") {
               e.preventDefault();
               lenis?.scrollTo("#home");
            }
          }}
        >
          <span className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm font-bold group-hover:rotate-12 transition-transform">
            S
          </span>
          <span className="gradient-text uppercase text-sm tracking-widest">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/assets/resume_portfolio.pdf"
            target="_blank"
            className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition group"
          >
            <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-900/20 active:scale-95"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-950 border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-400"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/5" />
            <div className="flex gap-4">
              <a
                href="/assets/resume_portfolio.pdf"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 p-3 rounded-xl text-sm font-bold"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
              <a
                href="https://github.com/Slylil17"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
