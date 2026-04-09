import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star, GitFork, ExternalLink, Github, Code2, Award, ArrowRight } from "lucide-react";
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

  if (loading) {
    return (
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-56 bg-zinc-100 animate-pulse rounded-3xl border-4 border-zinc-200" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Projects from CV - Neal.fun style */}
        {featuredProjects.map((project, index) => (
          <Link key={project.id} to={`/project/${project.id}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative ${FEATURED_COLORS[index % FEATURED_COLORS.length]} p-6 rounded-[2rem] border-[3px] border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between overflow-hidden h-full cursor-pointer`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
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
        ))}

        {/* Dynamic GitHub Repos - Neal.fun style */}
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            transition={{ duration: 0.4, delay: (index + featuredProjects.length) * 0.1 }}
            className="group relative bg-white p-6 rounded-[2rem] border-[3px] border-zinc-900 shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] hover:shadow-[10px_10px_0px_0px_rgba(99,102,241,0.2)] hover:border-indigo-600 transition-all flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-zinc-100 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border-2 border-zinc-900">
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
              
              <h3 className="text-xl font-black text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                {repo.name}
              </h3>
              <p className="text-zinc-500 font-medium text-xs line-clamp-2 mb-4 leading-relaxed">
                {repo.description || "No description provided."}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-zinc-50">
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.15em]">
                {repo.language || "Markdown"}
              </span>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all border-2 border-transparent hover:border-indigo-100"
                aria-label={`View ${repo.name} on GitHub`}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
