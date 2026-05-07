/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import GithubProjects from "./components/GithubProjects";
import CVPage from "./components/CVPage";
import ProjectDetail from "./components/ProjectDetail";
import { PORTFOLIO_DATA } from "./constants";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

function HomePage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full">
      <GithubProjects />
      
      {/* Mini-contact indicator at bottom of projects */}
      <div className="mt-20 border-t-2 border-zinc-100 pt-12 text-center">
        <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Interested in working together?</p>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs font-black text-indigo-500 hover:text-indigo-600 uppercase tracking-widest"
        >
          Scroll to contact details
        </a>
      </div>
    </main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Catch-all route to redirect back to home if path not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-50 transition-colors duration-300">
        <Header />
        
        <AnimatedRoutes />

        <footer id="footer" className="py-12 mt-auto p-4">
          <div className="max-w-7xl mx-auto bg-white border-[3px] border-zinc-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative z-10">
              <p className="text-zinc-900">&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}</p>
              <div className="flex gap-6">
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-indigo-600 transition-colors lowercase tracking-normal font-bold">{PORTFOLIO_DATA.contact.email}</a>
                <span className="hidden md:inline text-zinc-200">|</span>
                <span className="text-zinc-500">{PORTFOLIO_DATA.contact.location}</span>
              </div>
            </div>
            <div className="flex gap-8 relative z-10">
              <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
              <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
