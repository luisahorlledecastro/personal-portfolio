import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, GitFork, ExternalLink, Github, Code2, Award, ArrowRight, Search, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchGithubRepos, GithubRepo } from "../services/githubService";
import { PORTFOLIO_DATA } from "../constants";

const FEATURED_COLORS = [
  "bg-[#FFB7CE]", // Soft Neon Pink
  "bg-[#B2F2BB]", // Soft Neon Mint
  "bg-[#D0BFFF]", // Soft Neon Lavender
  "bg-[#FFD8A8]", // Soft Neon Peach
];

export default function GithubProjects() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const username = PORTFOLIO_DATA.contact.github.split("/").pop() || "";

  useEffect(() => {
    async function loadRepos() {
      const data = await fetchGithubRepos(username);
      const featuredUrls = PORTFOLIO_DATA.projects.map(p => p.githubUrl.toLowerCase());
      const filteredRepos = data.filter(repo => !featuredUrls.includes(repo.html_url.toLowerCase()));
      setRepos(filteredRepos);
      setLoading(false);
    }
    loadRepos();
  }, [username]);

  const featuredProjects = PORTFOLIO_DATA.projects;

  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    featuredProjects.forEach(p => p.technologies.forEach(t => techSet.add(t)));
    repos.forEach(r => {
      if (r.language) techSet.add(r.language);
    });
    // Add some from CV skills if not present
    PORTFOLIO_DATA.skills.languages.forEach(l => techSet.add(l));
    PORTFOLIO_DATA.skills.technology.forEach(t => techSet.add(t));
    return Array.from(techSet).sort();
  }, [featuredProjects, repos]);

  const filteredFeatured = useMemo(() => {
    return featuredProjects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTech = !selectedTech || p.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [featuredProjects, searchQuery, selectedTech]);

  const filteredRepos = useMemo(() => {
    return repos.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTech = !selectedTech || r.language === selectedTech;
      return matchesSearch && matchesTech;
    });
  }, [repos, searchQuery, selectedTech]);

  if (loading) {
    return (
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-56 bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-3xl border-4 border-zinc-200 dark:border-zinc-700" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 space-y-12">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white dark:bg-zinc-900 p-6 rounded-[2.5rem] border-[3px] border-zinc-900 dark:border-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          <input 
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-2xl text-sm font-bold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-end items-center">
          <div className="flex items-center gap-2 mr-2 text-zinc-400 dark:text-zinc-500">
            <Filter size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2 max-w-md justify-center md:justify-end">
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-indigo-600 hover:bg-indigo-700 transition-all"
              >
                {selectedTech} <X size={12} />
              </button>
            )}
            <select 
              onChange={(e) => setSelectedTech(e.target.value || null)}
              value={selectedTech || ""}
              className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-indigo-500 dark:text-white cursor-pointer"
            >
              <option value="">All Technologies</option>
              {allTech.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {/* Featured Projects */}
          {filteredFeatured.map((project, index) => {
            const semiFeaturedIds = ['personal-portfolio', 'task-meteor'];
            const isSemiFeatured = semiFeaturedIds.includes(project.id);
            
            if (isSemiFeatured) {
              return (
                <Link key={project.id} to={`/project/${project.id}`} className="block h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="group relative bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border-[3px] border-zinc-900 dark:border-zinc-800 shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[10px_10px_0px_0px_rgba(99,102,241,0.2)] hover:border-indigo-600 transition-all flex flex-col justify-between h-full cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity dark:text-white">
                      <Award size={100} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-3">
                          Vibe coding project
                        </div>
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-500 font-serif italic text-xs mb-3">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      <div className="mb-4 space-y-2">
                        <div className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em]">Tech Stack</div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="text-[8px] font-black text-zinc-500 uppercase bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-zinc-500 font-medium text-xs line-clamp-3 mb-5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t-2 border-zinc-50 dark:border-zinc-800">
                      <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex items-center gap-2">
                        View Case Study <ArrowRight size={14} />
                      </div>
                      <div className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white transition-all border-2 border-zinc-900 dark:border-zinc-700">
                        <Code2 size={16} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            }

            return (
              <Link key={project.id} to={`/project/${project.id}`} className="block h-full">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className={`group relative ${FEATURED_COLORS[index % FEATURED_COLORS.length]} p-6 rounded-[2rem] border-[3px] border-zinc-900 dark:border-zinc-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between overflow-hidden h-full cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-zinc-900">
                    <Award size={100} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-3">
                        Featured
                      </div>
                      <h3 className="text-2xl font-black text-zinc-900 mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-zinc-900/60 font-serif italic text-xs mb-3">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    {/* Skills Spotlight */}
                    <div className="mb-4 space-y-2">
                      <div className="text-[8px] font-black text-zinc-900/40 uppercase tracking-[0.2em]">Skills Spotlight</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[8px] font-black text-zinc-900 uppercase bg-white/30 px-2 py-0.5 rounded-md border border-zinc-900/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-zinc-900 font-medium text-xs line-clamp-3 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t-2 border-zinc-900/10">
                    <div className="text-[10px] font-black text-zinc-900 uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      View Case Study <ArrowRight size={14} />
                    </div>
                    <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Code2 size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}

          {/* Dynamic GitHub Repos */}
          {filteredRepos.map((repo, index) => (
            <motion.div
              layout
              key={repo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border-[3px] border-zinc-900 dark:border-zinc-800 shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[10px_10px_0px_0px_rgba(99,102,241,0.2)] hover:border-indigo-600 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border-2 border-zinc-900 dark:border-zinc-700">
                    <Github size={20} />
                  </div>
                  <div className="flex gap-3 text-zinc-400 text-[10px] font-black">
                    <span className="flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                      <Star size={12} fill="currentColor" className="opacity-20" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                  {repo.name}
                </h3>
                <p className="text-zinc-500 font-medium text-xs line-clamp-2 mb-4 leading-relaxed">
                  {repo.description || "No description provided."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-zinc-50 dark:border-zinc-800">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.15em]">
                  {repo.language || "Markdown"}
                </span>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all border-2 border-transparent hover:border-indigo-100 dark:hover:border-indigo-900"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredFeatured.length === 0 && filteredRepos.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border-4 border-dashed border-zinc-200 dark:border-zinc-800"
        >
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="text-zinc-400" size={24} />
          </div>
          <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2 uppercase tracking-tight">No projects found</h3>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Try adjusting your search or filters</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedTech(null); }}
            className="mt-6 px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </section>
  );
}
