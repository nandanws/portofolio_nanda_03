"use client";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* FOTO PROFIL */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-40 animate-pulse"></div>
          <Image
            src="/nanda.jpg"
            alt="Nanda"
            width={140}
            height={140}
            className="rounded-full border-4 border-blue-500 shadow-lg relative z-10"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mt-6">
          Hi, I'm <span className="text-blue-400">Nanda</span> 👋
        </h1>
        <p className="text-gray-300 mt-2 text-center">
          Information Systems Student who loves{" "}
          <span className="text-blue-300">technology</span>,{" "}
          <span className="text-blue-300">design</span>, and{" "}
          <span className="text-blue-300">innovation</span>.
        </p>
      </motion.div>

      {/* ABOUT ME */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-10 text-center max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a university student passionate about{" "}
          <span className="text-white font-medium">Information Systems</span>{" "}
          and exploring how technology can create better solutions in business,
          learning, and digital experience. Currently learning{" "}
          <span className="text-white font-medium">CSS</span> and{" "}
          <span className="text-white font-medium">React.js</span> to improve my web development skills.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Skills</h2>
        <div className="flex justify-center gap-6 text-4xl mt-4">
          <SiHtml5 className="text-orange-500 hover:scale-125 transition-transform duration-300" />
          <SiCss3 className="text-blue-500 hover:scale-125 transition-transform duration-300" />
          <SiJavascript className="text-yellow-400 hover:scale-125 transition-transform duration-300" />
          <SiReact className="text-cyan-400 hover:scale-125 transition-transform duration-300" />
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Contact</h2>
        <p className="text-gray-400 mb-6">
          Let’s collaborate and build something impactful together 🚀
        </p>
        <a
          href="mailto:nanda@example.com"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 font-medium"
        >
          Email Me
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className="mt-16 text-sm text-gray-500">
        © 2025 Nanda. Crafted with using Next.js.
      </footer>
    </main>
  );
}
