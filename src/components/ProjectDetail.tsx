import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Code2, Target, Lightbulb, Zap, Terminal } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PORTFOLIO_DATA } from "../constants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Project not found</h2>
        <Link to="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white underline">Return home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-6"
    >
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-black text-zinc-400 hover:text-indigo-600 mb-8 transition-colors group uppercase tracking-[0.2em]"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to projects
      </Link>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border-[3px] border-zinc-900 dark:border-zinc-800 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] transition-colors duration-300">
        {/* Hero Section */}
        <div className="bg-zinc-900 dark:bg-zinc-950 p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border-2 border-indigo-500/30">
              Technical Case Study
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 relative z-10 leading-tight">{project.title}</h1>
          <p className="text-xl md:text-2xl text-indigo-300 italic mb-10 relative z-10 font-serif">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 rounded-2xl font-black hover:bg-indigo-400 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              <Github size={20} /> Explore Repository
            </a>
          </div>
        </div>

        <div className="p-8 md:p-16 space-y-20">
          {/* Stack */}
          <section className="pb-12 border-b-4 border-zinc-900 dark:border-zinc-800">
            <h2 className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-8">Technical Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-5 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full text-xs font-black border-[3px] border-zinc-900 dark:border-zinc-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Overview & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFB7CE] border-[3px] border-zinc-900 dark:border-zinc-800 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Target size={20} className="text-zinc-900" />
                </div>
                The Challenge
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm font-medium">
                {project.challenge || project.description}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#B2F2BB] border-[3px] border-zinc-900 dark:border-zinc-800 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Lightbulb size={20} className="text-zinc-900" />
                </div>
                The Approach
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm font-medium">
                {project.approach || "A systematic data-driven approach focusing on robust feature engineering and model validation."}
              </p>
            </section>
          </div>

          {/* Technical Highlights */}
          <section>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 border-[3px] border-zinc-900 dark:border-zinc-700 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle2 size={24} className="text-zinc-900 dark:text-zinc-100" />
              </div>
              Key Technical Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white dark:bg-zinc-800 rounded-2xl border-[3px] border-zinc-900 dark:border-zinc-700 shadow-[4px_4px_0px_0px_rgba(228,228,231,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group">
                  <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-xs font-black text-white dark:text-zinc-900">
                    {index + 1}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Code Snippet Section */}
          {project.codeSnippet && (
            <section className="pt-12 border-t-4 border-zinc-900 dark:border-zinc-800">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-950 border-[3px] border-zinc-900 dark:border-zinc-800 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(99,102,241,0.3)]">
                  <Terminal size={24} className="text-white" />
                </div>
                Code Snippet
              </h2>
              <div className="rounded-3xl border-[3px] border-zinc-900 dark:border-zinc-800 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-zinc-800 dark:bg-zinc-950 px-6 py-3 border-b-2 border-zinc-900 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    {project.codeLanguage || 'code'}
                  </span>
                </div>
                <div className="text-sm">
                  <SyntaxHighlighter 
                    language={project.codeLanguage || 'javascript'} 
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      padding: '2rem',
                      background: '#18181b',
                    }}
                  >
                    {project.codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </motion.div>
  );
}
