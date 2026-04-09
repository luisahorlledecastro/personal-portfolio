/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GithubProjects from "./components/GithubProjects";
import CVPage from "./components/CVPage";
import ProjectDetail from "./components/ProjectDetail";
import { PORTFOLIO_DATA } from "./constants";
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

function HomePage() {
  const { contact } = PORTFOLIO_DATA;
  
  return (
    <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full space-y-24">
      {/* GitHub Projects Section */}
      <div id="projects" className="relative">
        <GithubProjects />
      </div>

      {/* Contact Section - Arcade Style */}
      <section id="contact" className="relative py-12 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 text-white rounded-[2rem] p-8 md:p-12 border-[3px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(99,102,241,0.2)] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -mr-24 -mt-24" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -ml-16 -mb-16" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight uppercase">
              Contact <span className="text-indigo-400">Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
              <a 
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 p-4 bg-white/5 border-2 border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-400 transition-all"
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">Email Me</p>
                  <p className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">{contact.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 p-4 bg-white/5 border-2 border-white/10 rounded-2xl hover:bg-white/10 hover:border-pink-400 transition-all"
              >
                <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">Call Me</p>
                  <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors">{contact.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-zinc-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none"
              >
                LinkedIn
              </a>
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-zinc-800 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-700 transition-all border-2 border-zinc-700 active:translate-y-1"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <footer className="py-12 mt-auto p-4">
          <div className="max-w-7xl mx-auto bg-white border-[3px] border-zinc-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-zinc-900">&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}</p>
              <div className="flex gap-6">
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-indigo-600 transition-colors lowercase tracking-normal font-bold">{PORTFOLIO_DATA.contact.email}</a>
                <span className="hidden md:inline text-zinc-200">|</span>
                <span className="text-zinc-500">{PORTFOLIO_DATA.contact.location}</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
              <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
