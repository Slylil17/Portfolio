"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLenis } from "@/components/layout/SmoothScroll";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as any,
    },
  },
};

export default function Hero() {
  const lenis = useLenis();
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, { offset: 0, duration: 1.5 });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? [1.2, 1.4, 1.2] : [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: isHovered ? 0.3 : 0.15,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: isHovered ? [1.1, 1.3, 1.1] : [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
            opacity: isHovered ? 0.3 : 0.15,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-bold uppercase tracking-widest text-blue-400 border-blue-500/20">
                Data Analyst | Finance & Accounting Background
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.9]"
            >
              SALIL RAJ <span className="gradient-text">GUPTA</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
            >
              Ex-Chartered Accountancy student pivoting into the tech world. 
              Bridging the gap between <span className="text-white font-medium italic">complex financial logic</span> and 
              <span className="text-white font-medium italic"> data analytics</span> to drive business intelligence.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2 shadow-xl shadow-blue-950/20 active:scale-95 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold transition active:scale-95 cursor-pointer"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-16 flex flex-wrap gap-8 items-center">
               <div className="flex flex-col relative group">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl font-bold text-white relative z-10">Intermediate</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">SQL & Python</span>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="flex flex-col relative group">
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl font-bold text-white relative z-10">Automated</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">ETL Workflows</span>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="flex -space-x-3">
                  {['SQL', 'Python', 'Power BI', 'Excel'].map((skill) => (
                      <div key={skill} className="w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-950 flex items-center justify-center text-[8px] font-bold hover:scale-110 transition-transform hover:z-20 relative">
                          {skill}
                      </div>
                  ))}
               </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden md:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              <motion.div 
                animate={{ 
                    opacity: isHovered ? 0.4 : 0.2,
                    scale: isHovered ? 1.1 : 1
                }}
                className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 blur-2xl -z-10" 
              />
              <motion.div 
                animate={{ 
                    opacity: isHovered ? 0.4 : 0.2,
                    scale: isHovered ? 1.1 : 1
                }}
                className="absolute inset-0 bg-indigo-600 rounded-3xl -rotate-6 blur-2xl -z-10" 
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-4 border-white/20">
                <Image
                  src="/images/anime_avatar_fixed.png"
                  alt="Salil Raj Gupta"
                  fill
                  className="object-cover rounded-2xl transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Scroll</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
