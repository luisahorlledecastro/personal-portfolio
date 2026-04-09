import { motion } from "motion/react";
import { GraduationCap, Briefcase, Code, Languages, Award, Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

export default function CVPage() {
  const { education, experience, projects, skills, languages, summary } = PORTFOLIO_DATA;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-6"
    >
      <div className="bg-white border-[3px] border-zinc-900 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* CV Header */}
        <div className="bg-zinc-900 text-white p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -mr-24 -mt-24" />
          <h1 className="text-3xl md:text-4xl font-black mb-3 relative z-10 leading-tight">{PORTFOLIO_DATA.name}</h1>
          <div className="flex flex-wrap gap-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-6 relative z-10">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-indigo-400" /> {PORTFOLIO_DATA.contact.location}</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} className="text-indigo-400" /> Available for opportunities</span>
          </div>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl italic relative z-10 font-serif">
            "{summary}"
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-16">
          {/* Experience */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b-4 border-zinc-900 pb-6">
              <div className="w-12 h-12 bg-[#FFB7CE] border-[3px] border-zinc-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Briefcase className="text-zinc-900" size={24} />
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Experience</h2>
            </div>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-10 border-l-[3px] border-zinc-900">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-[3px] border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 leading-tight">{exp.role}</h3>
                      <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.15em] mt-1">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1.5 rounded-full border-2 border-zinc-200 mt-3 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-3 text-zinc-600 text-sm">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 leading-relaxed">
                        <span className="mt-2 w-2 h-2 bg-zinc-900 rounded-full flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b-4 border-zinc-900 pb-6">
              <div className="w-12 h-12 bg-[#B2F2BB] border-[3px] border-zinc-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <GraduationCap className="text-zinc-900" size={24} />
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Education</h2>
            </div>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 border-l-[3px] border-zinc-900">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-[3px] border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 leading-tight">{edu.degree}</h3>
                      <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.15em] mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1.5 rounded-full border-2 border-zinc-200 mt-3 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section>
              <div className="flex items-center gap-4 mb-8 border-b-4 border-zinc-900 pb-4">
                <div className="w-10 h-10 bg-[#D0BFFF] border-[3px] border-zinc-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Code className="text-zinc-900" size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Technical</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map(s => (
                      <span key={s} className="px-4 py-1.5 bg-white text-zinc-900 rounded-full text-xs font-black border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technology.map(s => (
                      <span key={s} className="px-4 py-1.5 bg-zinc-50 text-zinc-600 border-2 border-zinc-200 rounded-full text-xs font-bold">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8 border-b-4 border-zinc-900 pb-4">
                <div className="w-10 h-10 bg-[#FFD8A8] border-[3px] border-zinc-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Languages className="text-zinc-900" size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang} className="flex justify-between items-center p-4 bg-zinc-50 rounded-2xl border-2 border-zinc-100">
                    <span className="text-zinc-900 font-black text-sm">{lang.split(' - ')[0]}</span>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest bg-white px-2 py-1 rounded-lg border-2 border-zinc-200">{lang.split(' - ')[1] || 'Native'}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Projects (Academic/Key) */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b-4 border-zinc-900 pb-6">
              <div className="w-12 h-12 bg-indigo-100 border-[3px] border-zinc-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Award className="text-zinc-900" size={24} />
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Key Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="p-8 bg-white rounded-[2rem] border-[3px] border-zinc-900 shadow-[6px_6px_0px_0px_rgba(228,228,231,1)] hover:shadow-[10px_10px_0px_0px_rgba(99,102,241,0.1)] transition-all group">
                  <h3 className="text-xl font-black text-zinc-900 mb-1 group-hover:text-indigo-600 transition-colors leading-tight">{project.title}</h3>
                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-4">{project.subtitle}</p>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[9px] font-black text-zinc-400 uppercase border-2 border-zinc-100 px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Courses & Certificates */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b-4 border-zinc-900 pb-6">
              <div className="w-12 h-12 bg-[#FFD8A8] border-[3px] border-zinc-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Award className="text-zinc-900" size={24} />
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Courses & Certificates</h2>
            </div>
            <div className="space-y-8">
              {PORTFOLIO_DATA.certificates.map((cert, index) => (
                <div key={index} className="p-6 bg-zinc-50 rounded-2xl border-[3px] border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-black text-zinc-900 leading-tight">{cert.title}</h3>
                      <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.15em] mt-1">{cert.institution}</p>
                    </div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest bg-white px-2 py-1 rounded-lg border-2 border-zinc-200 mt-2 md:mt-0">
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
