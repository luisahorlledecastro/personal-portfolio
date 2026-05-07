import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Code2, Moon, Sun, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LOCALIZED_PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage, Language } from "../contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { name, titles } = LOCALIZED_PORTFOLIO_DATA[language];
  const location = useLocation();

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <Link to="/" className="group">
            <h1 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              {name}
            </h1>
          </Link>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 mt-1">
            {titles.map((title, index) => (
              <span key={index} className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.15em] flex items-center">
                {index > 0 && <span className="mr-3 text-zinc-200">|</span>}
                {title}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="flex items-center gap-2 md:gap-4">
            <Link 
              to="/" 
              className={`flex items-center gap-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all px-3 md:px-4 py-2 rounded-full border-2 ${location.pathname === '/' ? 'bg-zinc-900 text-white border-zinc-900' : 'text-zinc-400 border-transparent hover:border-zinc-100 hover:text-zinc-900'}`}
            >
              <Code2 size={14} /> <span className="hidden sm:inline">{t("nav.projects")}</span>
            </Link>
            <Link 
              to="/cv" 
              className={`flex items-center gap-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all px-3 md:px-4 py-2 rounded-full border-2 ${location.pathname === '/cv' ? 'bg-zinc-900 text-white border-zinc-900' : 'text-zinc-400 border-transparent hover:border-zinc-100 hover:text-zinc-900'}`}
            >
              <FileText size={14} /> <span className="hidden sm:inline">{t("nav.cv")}</span>
            </Link>
            
            <div className="relative group ml-2 flex items-center">
              <Globe size={18} className="text-zinc-500 mr-1" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[10px] font-black text-zinc-900 uppercase focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="pt">PT</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
