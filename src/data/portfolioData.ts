import { PortfolioData } from "./types";
import { Language } from "./contexts/LanguageContext";

const baseData = {
  name: "Luísa Hörlle de Castro",
  contact: {
    email: "luisa@iservport.com",
    phone: "+49 174 9913 774",
    location: "Berlin, Germany",
    linkedin: "https://linkedin.com/in/luisahorlledecastro",
    github: "https://github.com/luisahorlledecastro",
  },
  skills: {
    languages: ["Python", "R", "SQL", "bash", "ASP", "Scala", "Rocq"],
    technology: [
      "Git", "Scikit-learn", "Numpy", "Pandas", "Statsmodels", 
      "Tensorflow", "Pytorch", "NLTK", "OpenCV", "PsychoPy", 
      "Docker", "Snakemake", "Figma", "Veed", "Prompt engineering", "Agentic workflows"
    ],
  },
};

export const LOCALIZED_PORTFOLIO_DATA: Record<Language, PortfolioData> = {
  en: {
    ...baseData,
    titles: ["M.Sc. Data Science Student", "Developer/Creative Technologist @ Iservport + Study Battle", "Hapkido Instructor"],
    summary: "Data science student interested in applying machine learning to cognition and health. Motivated by finding solutions to real-world problems. In my free time, I enjoy playing the guitar and practising calisthenics.",
    education: [
      {
        period: "10.2024 - present",
        degree: "M.Sc. Data Science",
        institution: "University of Potsdam",
        description: "Classes on machine learning, including deep learning, statistics, Bayesian inference, sequence bioinformatics, bioimaging and functional programming."
      },
      {
        period: "10.2021 - 09.2024",
        degree: "B.Sc. Cognitive Science (grade 1.5)",
        institution: "University of Potsdam",
        description: "Classes on informatics, mathematics, psychology and linguistics, including mathematical modelling of cognitive processes, experimental psychology, biopsychological methods and computational linguistics."
      },
      {
        period: "10.2018 - 09.2020",
        degree: "Undergraduate studies in Physics",
        institution: "Humboldt-Universität zu Berlin",
        description: "Classes on experimental physics and mathematics, as well as practical laboratory experience."
      },
      {
        period: "2015 - 2017",
        degree: "International Baccalaureate Diploma (High school)",
        institution: "Swiss School Curitiba",
        description: ""
      }
    ],
    experience: [
      {
        period: "02.2026 – Present",
        role: "Developer/Creative Technologist",
        company: "Iservport + Study Battle",
        bullets: [
          "Conceived the original product concept and designed the visual identity, creating a unique learning platform to promote joy in learning.",
          "Implemented the front-end application using advanced agentic-assisted coding workflows.",
          "Architected an AI-native educational platform using LLM parsing."
        ]
      },
      {
        period: "09.2022 – 02.2024",
        role: "Working student / content author",
        company: "ANTON App",
        bullets: [
          "Created explanations and exercises in Mathematics, Portuguese and Science.",
          "Created social media content and tutorial videos for app users.",
          "Implemented a sprint-like system for the team."
        ]
      },
      {
        period: "08.2022 – 04.2024",
        role: "Student council member",
        company: "University of Potsdam",
        bullets: [
          "Actively participated in study board meetings and drove change in the undergraduate program."
        ]
      },
      {
        period: "09.2021 – 01.2022",
        role: "Development intern",
        company: "Iservport",
        bullets: [
          "Helped develop a game to improve understanding of programming concepts."
        ]
      }
    ],
    projects: [
      {
        id: "bachelor-thesis",
        title: "Finding Patterns in Variability",
        subtitle: "Clustering Skin Conductance Responses",
        description: "Bachelor thesis investigating potential groups of participants using clustering on physiological responses.",
        challenge: "Physiological data is notoriously noisy and highly individual.",
        approach: "Utilized Representational Similarity Analysis to preserve structure of individual responses.",
        codeLanguage: "python",
        codeSnippet: "def compute_rsm(data):\n    correlation_matrix = np.corrcoef(data)\n    return 1 - correlation_matrix",
        highlights: [
          "Investigated response patterns to emotional stimuli",
          "Applied K-means clustering on RSM",
          "Processed complex skin conductance data"
        ],
        technologies: ["Scikit-learn", "Pandas", "Numpy"],
        githubUrl: "https://github.com/luisahorlledecastro/bachelor-thesis-clustering-physiological-data"
      },
      {
        id: "pcos-diagnosis",
        title: "Diagnosing PCOS via ultrasound images",
        subtitle: "Classic computer vision vs. CNN",
        description: "Diagnosing Polycystic Ovary Syndrome using ultrasound imaging.",
        challenge: "Medical ultrasound images are often low-contrast.",
        approach: "Implemented classical OpenCV techniques and a custom CNN architecture.",
        codeLanguage: "python",
        codeSnippet: "class PCOS_CNN(nn.Module):\n    def __init__(self):\n        super(PCOS_CNN, self).__init__()",
        highlights: [
          "Implemented traditional CV feature extraction",
          "Developed and trained CNNs",
          "Conducted comparative analysis"
        ],
        technologies: ["Pytorch", "OpenCV"],
        githubUrl: "https://github.com/luisahorlledecastro/ML2"
      },
      {
        id: "train-delay-prediction",
        title: "Appointment or Disappointment",
        subtitle: "AI-Based Train Delay Prediction",
        description: "Train delay prediction in Berlin via ANN and OLS.",
        challenge: "Urban transit data is highly non-linear.",
        approach: "Data ingestion pipeline to scrape real-time data to compare OLS vs ANN.",
        codeLanguage: "python",
        codeSnippet: "def build_ann_model(input_dim):\n    model = Sequential()",
        highlights: [
          "Scraped valid data",
          "Implemented ANN and OLS",
          "Evaluated time-series prediction"
        ],
        technologies: ["Tensorflow", "Statsmodels"],
        githubUrl: "https://github.com/luisahorlledecastro/AI-CPS"
      },
      {
        id: "personal-portfolio",
        title: "Personal Portfolio",
        subtitle: "Vibe Coding & Agentic AI",
        description: "Modern online portfolio built using agentic coding.",
        challenge: "Balancing academic rigor with modern technical skills.",
        approach: "Collaborated with an AI agent to iterate rapidly.",
        codeLanguage: "typescript",
        codeSnippet: "name: Deploy to GitHub Pages",
        highlights: [
          "Built using Vibe Coding",
          "Custom arcade UI",
          "CI/CD pipeline"
        ],
        technologies: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/luisahorlledecastro/portfolio"
      },
      {
        id: "task-meteor",
        title: "Task Meteor",
        subtitle: "Productivity & Velocity",
        description: "Task management application designed for rapid entry.",
        challenge: "Balancing complex state with fast UX.",
        approach: "Velocity-first design language.",
        codeLanguage: "typescript",
        codeSnippet: "function calculateVelocity(task) {}",
        highlights: [
          "Real-time sync",
          "Meteor-themed design",
          "High velocity entry"
        ],
        technologies: ["React", "Zustand"],
        githubUrl: "https://github.com/luisahorlledecastro/task-meteor"
      }
    ],
    certificates: [
      {
        title: "Introduction to Electroencephalography",
        institution: "University of Potsdam",
        description: "Practical lab work with EEG and full pipeline.",
        category: "Technology"
      },
      {
        title: "Data Scientist with Python Track",
        institution: "DataCamp",
        description: "Data analysis and machine learning techniques.",
        category: "Technology"
      },
      {
        title: "Creative Writing Specialization",
        institution: "Wesleyan University",
        description: "Focusing on different aspects of writing.",
        category: "Writing"
      },
      {
        title: "Social Media Marketing",
        institution: "University of Leeds",
        description: "Marketing campaign planning.",
        category: "Marketing"
      }
    ],
    languages: ["English - C2", "German - C1", "Portuguese - native", "French - A2"]
  },
  de: {
    ...baseData,
    titles: ["M.Sc. Data Science Studentin", "Entwicklerin/Creative Technologist @ Iservport + Study Battle", "Hapkido-Lehrerin"],
    summary: "Data Science Studentin mit Interesse an der Anwendung von Machine Learning auf Kognition und Gesundheit. Motiviert durch die Suche nach Lösungen für reale Probleme. In meiner Freizeit spiele ich gerne Gitarre und trainiere Calisthenics.",
    education: [
      {
        period: "10.2024 - heute",
        degree: "M.Sc. Data Science",
        institution: "Universität Potsdam",
        description: "Kurse in maschinellem Lernen inkl. Deep Learning, Statistik, Bayes'sche Inferenz, Bioinformatik, Bildgebung und funktionale Programmierung."
      },
      {
        period: "10.2021 - 09.2024",
        degree: "B.Sc. Cognitive Science (Note 1.5)",
        institution: "Universität Potsdam",
        description: "Kurse in Informatik, Mathematik, Psychologie und Linguistik, einschließlich mathematischer Modellierung kognitiver Prozesse."
      },
      {
        period: "10.2018 - 09.2020",
        degree: "Grundstudium Physik",
        institution: "Humboldt-Universität zu Berlin",
        description: "Kurse in Experimentalphysik und Mathematik sowie Laborerfahrung."
      },
      {
        period: "2015 - 2017",
        degree: "International Baccalaureate Diploma",
        institution: "Swiss School Curitiba",
        description: ""
      }
    ],
    experience: [
      {
        period: "02.2026 – Heute",
        role: "Entwicklerin/Creative Technologist",
        company: "Iservport + Study Battle",
        bullets: [
          "Konzeption der Produktidee und Design der visuellen Identität zur Förderung der Lernfreude.",
          "Implementierung des Front-Ends mit agentenunterstützten Workflows.",
          "Architektur einer KI-nativen Bildungsplattform mit LLM."
        ]
      },
      {
        period: "09.2022 – 02.2024",
        role: "Werkstudentin / Autorin",
        company: "ANTON App",
        bullets: [
          "Erstellung von Inhalten für Mathematik, Portugiesisch und Naturwissenschaften.",
          "Erstellung von Social-Media-Inhalten.",
          "Einführung agiler Workflows ins Team."
        ]
      },
      {
        period: "08.2022 – 04.2024",
        role: "Fachschaftsmitglied",
        company: "Universität Potsdam",
        bullets: [
          "Aktive Teilnahme an Studienkommissionen und Mitverbesserung des Studiengangs."
        ]
      },
      {
        period: "09.2021 – 01.2022",
        role: "Praktikantin in der Entwicklung",
        company: "Iservport",
        bullets: [
          "Mitentwicklung eines Spiels zur Förderung von Programmierkompetenzen."
        ]
      }
    ],
    projects: [
      {
        id: "bachelor-thesis",
        title: "Muster in der Variabilität",
        subtitle: "Clustering von Hautleitwert-Reaktionen",
        description: "Bachelorarbeit zur Untersuchung potenzieller Teilnehmergruppen durch Clustering physiologischer Antworten.",
        challenge: "Physiologische Daten sind sehr verrauscht und individuell.",
        approach: "Verwendung der Repräsentationalen Ähnlichkeitsanalyse zur Bewahrung der individuellen Struktur.",
        codeLanguage: "python",
        codeSnippet: "def compute_rsm(data):\n    correlation_matrix = np.corrcoef(data)\n    return 1 - correlation_matrix",
        highlights: [
          "Untersuchung von Reaktionsmustern auf emotionale Reize",
          "Anwendung von K-Means-Clustering",
          "Verarbeitung komplexer Hautleitwertdaten"
        ],
        technologies: ["Scikit-learn", "Pandas", "Numpy"],
        githubUrl: "https://github.com/luisahorlledecastro/bachelor-thesis-clustering-physiological-data"
      },
      {
        id: "pcos-diagnosis",
        title: "PCOS-Diagnose via Ultraschall",
        subtitle: "Klassische CV vs. CNN",
        description: "Diagnose des polyzystischen Ovarsyndroms mittels Ultraschallbildern.",
        challenge: "Medizinische Ultraschallbilder sind oft kontrastarm.",
        approach: "Vergleich klassischer OpenCV-Methoden mit einer CNN-Architektur.",
        codeLanguage: "python",
        codeSnippet: "class PCOS_CNN(nn.Module):\n    def __init__(self):\n        super(PCOS_CNN, self).__init__()",
        highlights: [
          "Klassische Merkmalsextraktion",
          "Entwicklung von CNNs für medizinische Bilder",
          "Vergleichende Analyse"
        ],
        technologies: ["Pytorch", "OpenCV"],
        githubUrl: "https://github.com/luisahorlledecastro/ML2"
      },
      {
        id: "train-delay-prediction",
        title: "Appointment or Disappointment",
        subtitle: "KI-basierte Vorhersage von Zugverspätungen",
        description: "Zugverspätungsvorhersage in Berlin mit ANN und OLS.",
        challenge: "Städtische Verkehrsdaten sind extrem nichtlinear.",
        approach: "Daten-Pipeline zum Abrufen von S-Bahn-Daten. Vergleich zwischen OLS und ANN.",
        codeLanguage: "python",
        codeSnippet: "def build_ann_model(input_dim):\n    model = Sequential()",
        highlights: [
          "Echte Verkehrsdaten geskipped",
          "Implementierung von ANN und OLS",
          "Evaluierung der Zeitreihenvorhersagen"
        ],
        technologies: ["Tensorflow", "Statsmodels"],
        githubUrl: "https://github.com/luisahorlledecastro/AI-CPS"
      },
      {
        id: "personal-portfolio",
        title: "Persönliches Portfolio",
        subtitle: "Vibe Coding & Agentic AI",
        description: "Modernes Portfolio erstellt mit KI-Agenten.",
        challenge: "Balance zwischen akademischer Strenge und modernen technischen Fähigkeiten.",
        approach: "Zusammenarbeit mit einem KI-Agenten für schnelle Iteration.",
        codeLanguage: "typescript",
        codeSnippet: "name: Deploy to GitHub Pages",
        highlights: [
          "Vibe Coding",
          "Arcade UI Design",
          "CI/CD Pipeline"
        ],
        technologies: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/luisahorlledecastro/portfolio"
      },
      {
        id: "task-meteor",
        title: "Task Meteor",
        subtitle: "Produktivität & Geschwindigkeit",
        description: "Hochleistungs-Taskmanager für schnelle Eingaben.",
        challenge: "Komplexes Zustandsmanagement mit flüssiger UX verknüpfen.",
        approach: "Geschwindigkeitsorientierte Designsprache.",
        codeLanguage: "typescript",
        codeSnippet: "function calculateVelocity(task) {}",
        highlights: [
          "Echtzeit-Synchronisation",
          "Meteor-Design",
          "Schnelle Task-Erfassung"
        ],
        technologies: ["React", "Zustand"],
        githubUrl: "https://github.com/luisahorlledecastro/task-meteor"
      }
    ],
    certificates: [
      {
        title: "Einführung in EEG",
        institution: "Universität Potsdam",
        description: "Praktische Laborarbeit mit EEG und Datenanalyse.",
        category: "Technology"
      },
      {
        title: "Data Scientist in Python",
        institution: "DataCamp",
        description: "Datenanalyse und Machine Learning.",
        category: "Technology"
      },
      {
        title: "Kreatives Schreiben",
        institution: "Wesleyan University",
        description: "Fokussiert auf verschiedene Aspekte des Schreibens.",
        category: "Writing"
      },
      {
        title: "Social Media Marketing",
        institution: "University of Leeds",
        description: "Planung von Marketingkampagnen.",
        category: "Marketing"
      }
    ],
    languages: ["Englisch - C2", "Deutsch - C1", "Portugiesisch - Muttersprache", "Französisch - A2"]
  },
  pt: {
    ...baseData,
    titles: ["Estudante de Mestrado em Ciência de Dados", "Desenvolvedora/Creative Technologist @ Iservport + Study Battle", "Instrutora de Hapkido"],
    summary: "Estudante de ciência de dados interessada em aplicar aprendizado de máquina à cognição e saúde. Motivada por encontrar soluções para problemas práticos. No meu tempo livre, gosto de tocar violão e praticar calistenia.",
    education: [
      {
        period: "10.2024 - presente",
        degree: "M.Sc. Ciência de Dados",
        institution: "Universidade de Potsdam",
        description: "Aulas focadas em machine learning, deep learning, inferência bayesiana e bioinformática."
      },
      {
        period: "10.2021 - 09.2024",
        degree: "B.Sc. Ciência Cognitiva (Nota 1.5)",
        institution: "Universidade de Potsdam",
        description: "Aulas de informática, matemática, psicologia e linguística, modelagem matemática de processos cognitivos."
      },
      {
        period: "10.2018 - 09.2020",
        degree: "Graduação Incompleta em Física",
        institution: "Universidade Humboldt de Berlim",
        description: "Aulas experimentais e teóricas de física e matemática."
      },
      {
        period: "2015 - 2017",
        degree: "Ensino Médio e Curriculo Internacional",
        institution: "Escola Suíço-Brasileira de Curitiba",
        description: ""
      }
    ],
    experience: [
      {
        period: "02.2026 – Presente",
        role: "Desenvolvedora/Creative Technologist",
        company: "Iservport + Study Battle",
        bullets: [
          "Concepção original do sistema com identidade visual para incentivar gosto pelo aprendizado.",
          "Implementação completa via Agentic AI workflows.",
          "Criação de plataforma nativa-IA com LLMs."
        ]
      },
      {
        period: "09.2022 – 02.2024",
        role: "Autora de Conteúdo",
        company: "ANTON App",
        bullets: [
          "Criação de explicações e exercícios de Matemática, Ciências e Português.",
          "Produção de conteúdo para redes sociais.",
          "Adoção de métodos ágeis (Sprint) na equipe."
        ]
      },
      {
        period: "08.2022 – 04.2024",
        role: "Conselheira Estudantil",
        company: "Universidade de Potsdam",
        bullets: [
          "Participação ativa para aprovar pautas estudantis visando melhorias no currículo."
        ]
      },
      {
        period: "09.2021 – 01.2022",
        role: "Estagiária de Desenvolvimento",
        company: "Iservport",
        bullets: [
          "Desenvolvimento de jogo educacional em escolas públicas brasileiras."
        ]
      }
    ],
    projects: [
      {
        id: "bachelor-thesis",
        title: "Encontrando Padrões na Variabilidade",
        subtitle: "Clustering de respostas fisiológicas",
        description: "Tese de bacharelado: Análise de matrizes de respostas à imagens emocionais usando k-means clustering.",
        challenge: "Dados fisiológicos têm muito ruído e variabilidade inter-sujeitos alta.",
        approach: "RSA para preservar as estruturas individuais entre os estímulos.",
        codeLanguage: "python",
        codeSnippet: "def compute_rsm(data):\n    correlation_matrix = np.corrcoef(data)\n    return 1 - correlation_matrix",
        highlights: [
          "Modelagem da atividade galvânica (EDA)",
          "Pipelines customizados com scikit-learn",
          "K-means na matriz RSA"
        ],
        technologies: ["Scikit-learn", "Pandas", "Numpy"],
        githubUrl: "https://github.com/luisahorlledecastro/bachelor-thesis-clustering-physiological-data"
      },
      {
        id: "pcos-diagnosis",
        title: "Diagnóstico de SOP",
        subtitle: "Redes Neurais com Pytorch",
        description: "Comparação de arquiteturas de modelos visuais clássicos versus Redes Neurais para síndromes ováricas.",
        challenge: "Falta de contraste e alto ruído nos ultrassons.",
        approach: "Canny edge em oposição ao uso de camadas lineares em redes convolucionais.",
        codeLanguage: "python",
        codeSnippet: "class PCOS_CNN(nn.Module):\n    def __init__(self):\n        super(PCOS_CNN, self).__init__()",
        highlights: [
          "Extração de características OpenCv",
          "Aprendizado Profundo (CNN)",
          "Análise das Acurácias"
        ],
        technologies: ["Pytorch", "OpenCV"],
        githubUrl: "https://github.com/luisahorlledecastro/ML2"
      },
      {
        id: "train-delay-prediction",
        title: "Atrasos em Trens (Berlim)",
        subtitle: "Previsões via Inteligência Artificial",
        description: "Prevendo atrasos operacionais usando ANN vs Regressões.",
        challenge: "Os fluxos dos trens dependem de inúmeros fatores cruzando-se de forma não-linear.",
        approach: "APIs abertas raspadas, ingestão em rede neural densas versus OLS.",
        codeLanguage: "python",
        codeSnippet: "def build_ann_model(input_dim):\n    model = Sequential()",
        highlights: [
          "BeautifulSoup em tempo real",
          "Comparativos baseados (MAE)",
          "Visualizações Temporais"
        ],
        technologies: ["Tensorflow", "Statsmodels"],
        githubUrl: "https://github.com/luisahorlledecastro/AI-CPS"
      },
      {
        id: "personal-portfolio",
        title: "Portfólio Pessoal",
        subtitle: "Vibe Coding & IA Agentes",
        description: "Meu currículo codificado pela IA em poucas interações dinâmicas.",
        challenge: "Design robusto porém criativo num layout focado a desktop e celulares.",
        approach: "Prática contínua orientando a IA via fluxos interativos (Vibe Coding).",
        codeLanguage: "typescript",
        codeSnippet: "name: Deploy to GitHub Pages",
        highlights: [
          "Código via Agentes IA",
          "Fluxos complexos do React",
          "Automação no GitHub"
        ],
        technologies: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/luisahorlledecastro/portfolio"
      },
      {
        id: "task-meteor",
        title: "Gerenciador Meteórico",
        subtitle: "App Produtivo de Alta Velocidade",
        description: "Um quadro de tarefas temático para lançamentos velozes e rastreamento em tempo real do fluxo diário.",
        challenge: "Zero latência associado com estado distribuído robusto.",
        approach: "Persistência unificada localmente reativo orientada.",
        codeLanguage: "typescript",
        codeSnippet: "function calculateVelocity(task) {}",
        highlights: [
          "Sincronização do estado em microssegundos",
          "Tematização visual avançada",
          "Eficiência motora na captura"
        ],
        technologies: ["React", "Zustand"],
        githubUrl: "https://github.com/luisahorlledecastro/task-meteor"
      }
    ],
    certificates: [
      {
        title: "Introdução à Eletroencefalografia",
        institution: "Universidade de Potsdam",
        description: "Trabalhos complexos para análises fisiológicas com base no EEG.",
        category: "Tecnologia"
      },
      {
        title: "Trilha Cientista de Dados (Python)",
        institution: "DataCamp",
        description: "Certificado abrangendo análises descritivas até técnicas avançadas de machine learning.",
        category: "Tecnologia"
      },
      {
        title: "Escrita Criativa",
        institution: "Universidade Wesleyan",
        description: "Cursos sobre narrativas de histórias.",
        category: "Escrita"
      },
      {
        title: "Marketing Digital em Mídias Sócias",
        institution: "Universidade de Leeds",
        description: "Técnicas contemporâneas para alcance de público em massa online.",
        category: "Marketing"
      }
    ],
    languages: ["Inglês - C2", "Alemão - C1", "Português - nativo", "Francês - A2"]
  }
};
