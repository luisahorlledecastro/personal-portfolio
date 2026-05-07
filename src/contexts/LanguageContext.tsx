import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "interested.working": "Interested in working together?",
    "scroll.contact": "Scroll to contact details",
    "nav.projects": "Projects",
    "nav.cv": "My CV",
    "search.projects": "Search projects...",
    "filter": "Filter:",
    "all.technologies": "All Technologies",
    "vibe.coding": "Vibe coding project",
    "tech.stack": "Tech Stack",
    "view.case.study": "View Case Study",
    "featured": "Featured",
    "skills.spotlight": "Skills Spotlight",
    "no.description": "No description provided.",
    "no.projects": "No projects found",
    "adjust.search": "Try adjusting your search or filters",
    "clear.filters": "Clear all filters",
    "available": "Available for opportunities",
    "experience": "Experience",
    "education": "Education",
    "technical": "Technical",
    "languages": "Languages",
    "technologies": "Technologies",
    "key.projects": "Key Projects",
    "courses.certificates": "Courses & Certificates",
    "native": "Native",
    "project.not.found": "Project not found",
    "return.home": "Return home",
    "back.projects": "Back to projects",
    "tech.case.study": "Technical Case Study",
    "explore.repo": "Explore Repository",
    "the.challenge": "The Challenge",
    "the.approach": "The Approach",
    "key.highlights": "Key Technical Highlights",
    "code.snippet": "Code Snippet",
    "default.approach": "A systematic data-driven approach focusing on robust feature engineering and model validation."
  },
  de: {
    "interested.working": "Interessiert an einer Zusammenarbeit?",
    "scroll.contact": "Zu den Kontaktdaten scrollen",
    "nav.projects": "Projekte",
    "nav.cv": "Mein Lebenslauf",
    "search.projects": "Projekte suchen...",
    "filter": "Filter:",
    "all.technologies": "Alle Technologien",
    "vibe.coding": "Vibe-Coding-Projekt",
    "tech.stack": "Tech Stack",
    "view.case.study": "Fallstudie ansehen",
    "featured": "Hervorgehoben",
    "skills.spotlight": "Fokus-Fähigkeiten",
    "no.description": "Keine Beschreibung verfügbar.",
    "no.projects": "Keine Projekte gefunden",
    "adjust.search": "Versuchen Sie, Ihre Suche oder Filter anzupassen",
    "clear.filters": "Alle Filter löschen",
    "available": "Für Gelegenheiten verfügbar",
    "experience": "Erfahrung",
    "education": "Bildung",
    "technical": "Technisch",
    "languages": "Sprachen",
    "technologies": "Technologien",
    "key.projects": "Schlüsselprojekte",
    "courses.certificates": "Kurse & Zertifikate",
    "native": "Muttersprache",
    "project.not.found": "Projekt nicht gefunden",
    "return.home": "Zur Startseite zurückkehren",
    "back.projects": "Zurück zu den Projekten",
    "tech.case.study": "Technische Fallstudie",
    "explore.repo": "Repository erkunden",
    "the.challenge": "Die Herausforderung",
    "the.approach": "Der Ansatz",
    "key.highlights": "Wichtigste technische Highlights",
    "code.snippet": "Code-Ausschnitt",
    "default.approach": "Ein systematischer, datengesteuerter Ansatz mit Fokus auf robustes Feature Engineering und Modellvalidierung."
  },
  pt: {
    "interested.working": "Interessado em trabalharmos juntos?",
    "scroll.contact": "Rolar para detalhes de contato",
    "nav.projects": "Projetos",
    "nav.cv": "Meu CV",
    "search.projects": "Buscar projetos...",
    "filter": "Filtro:",
    "all.technologies": "Todas as Tecnologias",
    "vibe.coding": "Projeto Vibe Coding",
    "tech.stack": "Tecnologias",
    "view.case.study": "Ver Estudo de Caso",
    "featured": "Destaque",
    "skills.spotlight": "Foco em Habilidades",
    "no.description": "Nenhuma descrição fornecida.",
    "no.projects": "Nenhum projeto encontrado",
    "adjust.search": "Tente ajustar sua busca ou filtros",
    "clear.filters": "Limpar todos os filtros",
    "available": "Disponível para oportunidades",
    "experience": "Experiência",
    "education": "Educação",
    "technical": "Técnico",
    "languages": "Idiomas",
    "technologies": "Tecnologias",
    "key.projects": "Projetos Principais",
    "courses.certificates": "Cursos e Certificados",
    "native": "Nativo",
    "project.not.found": "Projeto não encontrado",
    "return.home": "Voltar ao início",
    "back.projects": "Voltar aos projetos",
    "tech.case.study": "Estudo de Caso Técnico",
    "explore.repo": "Explorar Repositório",
    "the.challenge": "O Desafio",
    "the.approach": "A Abordagem",
    "key.highlights": "Principais Destaques Técnicos",
    "code.snippet": "Trecho de Código",
    "default.approach": "Uma abordagem sistemática baseada em dados, focada em engenharia robusta de features e validação de modelos."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const langObj = translations[language];
    return (langObj as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
