"use client";

import { LampContainer } from "./ui/Lamp";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <LampContainer>
        <div className="text-center space-y-8 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            James Tan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="space-y-4"
          >
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>
            <p className="text-lg text-slate-300/70 font-light">
              Creative, Driven, and Innovative
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex justify-center space-x-8 text-sm font-light"
          >
            <a
              href="/about_me"
              className="hover:text-slate-300/70 transition-colors border-transparent hover:border-slate-300/70 text-slate-300"
            >
              About Me
            </a>
            <a
              href="/experience"
              className="hover:text-slate-300/70 transition-colors border-transparent hover:border-slate-300/70 text-slate-300"
            >
              Experience
            </a>
            <a
              href="/contact"
              className="hover:text-slate-300/70 transition-colors border-transparent hover:border-slate-300/70 text-slate-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
}
