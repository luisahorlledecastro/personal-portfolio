import { PortfolioData } from "./types";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Luísa Hörlle de Castro",
  titles: ["M.Sc. Data Science Student", "Creative Technologist @ Study Battle", "Hapkido Instructor"],
  summary: "Data science student interested in applying machine learning to cognition and health. Motivated by finding solutions to real-world problems. In my free time, I enjoy playing the guitar and practising calisthenics.",
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
      "Docker", "Snakemake", "Figma", "Veed"
    ],
  },
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
      role: "Creative Technologist",
      company: "STUDY BATTLE",
      bullets: [
        "Conceived the original product concept and designed the visual identity, creating a unique \"arcade-retro\" aesthetic with high-fidelity glassmorphism.",
        "Implemented the front-end application using advanced agentic-assisted coding workflows to accelerate development and maintain high code quality.",
        "Architected an AI-native educational platform that transforms static documents into personalised gamified quizzes using LLM parsing."
      ]
    },
    {
      period: "09.2022 – 02.2024",
      role: "Working student / content author",
      company: "ANTON App",
      bullets: [
        "Created explanations and exercises in the subjects of Mathematics, Portuguese and Science.",
        "Created social media content and tutorial videos for app users and wrote periodic newsletters."
      ]
    },
    {
      period: "08.2022 – 04.2024",
      role: "Student council member",
      company: "University of Potsdam",
      bullets: [
        "Actively participated in study board meetings and drove change in the undergraduate program of cognitive science to adapt to students’ needs."
      ]
    },
    {
      period: "09.2021 – 01.2022",
      role: "Development intern",
      company: "Iservport",
      bullets: [
        "Helped develop a game to improve understanding of programming concepts in Brazilian public schools."
      ]
    }
  ],
  projects: [
    {
      id: "bachelor-thesis",
      title: "Finding Patterns in Variability",
      subtitle: "Clustering Skin Conductance Responses",
      description: "Bachelor thesis which aimed to investigate potential groups of participants using K-means clustering on Representational Similarity Matrices containing physiological responses to emotional images.",
      challenge: "Physiological data is notoriously noisy and highly individual. Traditional analysis often averages out the very variability that contains the most interesting psychopathological signals.",
      approach: "I utilized Representational Similarity Analysis (RSA) to preserve the structure of individual responses. By constructing similarity matrices and applying K-means clustering, I was able to identify stable patterns of emotional reactivity across different participant groups.",
      codeLanguage: "python",
      codeSnippet: `def compute_rsm(data):
    """Computes Representational Similarity Matrix using correlation."""
    correlation_matrix = np.corrcoef(data)
    # Convert correlation to distance (1 - r)
    rsm = 1 - correlation_matrix
    return rsm

def cluster_responses(rsm, n_clusters=3):
    """Applies K-means clustering to the similarity structure."""
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    clusters = kmeans.fit_predict(rsm)
    return clusters`,
      highlights: [
        "Investigated physiological response patterns to emotional stimuli",
        "Applied K-means clustering on Representational Similarity Matrices (RSM)",
        "Processed and analyzed complex skin conductance data",
        "Identified distinct psychopathological patterns through variability analysis"
      ],
      technologies: ["Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Git"],
      githubUrl: "https://github.com/luisahorlledecastro/bachelor-thesis-clustering-physiological-data"
    },
    {
      id: "pcos-diagnosis",
      title: "Diagnosing PCOS via ultrasound images",
      subtitle: "Classic computer vision vs. CNN",
      description: "A comparative approach to diagnosing Polycystic Ovary Syndrome using ultrasound imaging, contrasting traditional feature extraction with deep learning architectures.",
      challenge: "Medical ultrasound images are often low-contrast and contain speckle noise, making automated follicle detection difficult for standard algorithms.",
      approach: "I implemented a dual-pipeline: one using classical OpenCV techniques (Canny edge detection, Hough transforms) and another using a custom CNN architecture. This allowed for a direct performance benchmark of 'explainable' vs 'black-box' models.",
      codeLanguage: "python",
      codeSnippet: `class PCOS_CNN(nn.Module):
    def __init__(self):
        super(PCOS_CNN, self).__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(1, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        self.fc_layers = nn.Sequential(
            nn.Linear(64 * 56 * 56, 128),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(128, 1),
            nn.Sigmoid()
        )

    def forward(self, x):
        x = self.conv_layers(x)
        x = x.view(x.size(0), -1)
        return self.fc_layers(x)`,
      highlights: [
        "Implemented traditional computer vision feature extraction techniques",
        "Developed and trained Convolutional Neural Networks (CNN) for medical imaging",
        "Conducted a rigorous comparative analysis between classical and deep learning methods",
        "Focused on improving diagnostic accuracy for PCOS"
      ],
      technologies: ["Pytorch", "OpenCV", "Scikit-learn", "Numpy", "Matplotlib"],
      githubUrl: "https://github.com/luisahorlledecastro/ML2"
    },
    {
      id: "train-delay-prediction",
      title: "Appointment or Disappointment",
      subtitle: "AI-Based Train Delay Prediction",
      description: "Train delay prediction in Berlin, implemented as ANN and OLS models to compare their efficiency.",
      challenge: "Urban transit data is highly non-linear, influenced by weather, time-of-day, and cascading delays from other lines.",
      approach: "I built a data ingestion pipeline to scrape real-time S-Bahn data. I then compared a Linear Regression (OLS) baseline against a multi-layer Artificial Neural Network to capture non-linear temporal patterns.",
      codeLanguage: "python",
      codeSnippet: `def build_ann_model(input_dim):
    """Constructs a deep neural network for non-linear delay prediction."""
    model = Sequential([
        Dense(64, activation='relu', input_dim=input_dim),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dense(16, activation='relu'),
        Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    return model`,
      highlights: [
        "Scraped and processed real-world train schedule data from Berlin",
        "Implemented Artificial Neural Networks (ANN) and Ordinary Least Squares (OLS) models",
        "Evaluated model performance for time-series prediction",
        "Containerized the application for consistent deployment"
      ],
      technologies: ["Tensorflow", "Statsmodels", "Scikit-learn", "Pandas", "Seaborn", "BeautifulSoup", "Git", "Docker"],
      githubUrl: "https://github.com/luisahorlledecastro/AI-CPS"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      subtitle: "Vibe Coding & Agentic AI",
      description: "A clean, modern online portfolio built using agentic coding principles to showcase a journey from Physics to Data Science.",
      challenge: "Creating a professional presence that balances academic rigor with modern technical skills, while experimenting with AI-driven development workflows.",
      approach: "I used a 'vibe coding' approach, collaborating with an AI agent to iterate rapidly on design and implementation. The project features a custom arcade-inspired aesthetic, GitHub API integration, and automated deployment pipelines.",
      codeLanguage: "typescript",
      codeSnippet: `// Example of the GitHub Actions deployment workflow
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install && npm run build
      - uses: actions/deploy-pages@v4`,
      highlights: [
        "Built using Vibe Coding and Agentic AI principles",
        "Custom arcade-inspired UI with Tailwind CSS 4",
        "Automated CI/CD pipeline via GitHub Actions",
        "Responsive design with deep-dive technical case studies"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite", "GitHub Actions"],
      githubUrl: "https://github.com/luisahorlledecastro/portfolio"
    },
    {
      id: "task-meteor",
      title: "Task Meteor",
      subtitle: "Productivity & Velocity",
      description: "A high-performance task management application designed for rapid entry and visual clarity, featuring real-time updates and a meteor-themed UI.",
      challenge: "Balancing complex state management with a lightweight, fast-feeling user experience that encourages consistent usage.",
      approach: "I implemented a custom state synchronization layer to ensure zero-latency UI updates. The interface uses a 'velocity-first' design language, where tasks are treated as high-speed objects with clear trajectories.",
      codeLanguage: "typescript",
      codeSnippet: `// Meteor-inspired task priority calculation
function calculateVelocity(task) {
  const timeWeight = (Date.now() - task.createdAt) / 1000;
  const priorityFactor = task.priority === 'high' ? 2.5 : 1.0;
  return (task.complexity * priorityFactor) / Math.log(timeWeight + 2);
}`,
      highlights: [
        "Real-time state synchronization with zero-latency UI",
        "Meteor-themed visual design with custom animations",
        "High-velocity task entry system",
        "Performance-optimized React architecture"
      ],
      technologies: ["React", "Zustand", "Tailwind CSS", "Motion", "Firebase"],
      githubUrl: "https://github.com/luisahorlledecastro/task-meteor"
    }
  ],
  certificates: [
    {
      title: "Introduction to Electroencephalography",
      institution: "University of Potsdam",
      description: "Practical lab work with EEG and full pipeline of EEG data analysis.",
      category: "Technology"
    },
    {
      title: "Data Scientist with Python Track",
      institution: "DataCamp",
      description: "Data analysis and machine learning techniques including supervised and unsupervised models.",
      category: "Technology"
    },
    {
      title: "Creative Writing Specialization",
      institution: "Wesleyan University through Coursera",
      description: "Five individual courses focusing on different aspects of writing, such as character development and style.",
      category: "Writing"
    },
    {
      title: "Create a Social Media Marketing Campaign",
      institution: "University of Leeds and Institute of Coding",
      description: "Explored how companies use digital marketing and learned what goes into planning and running a successful campaign, including how to create and measure the success of a social media marketing campaign.",
      category: "Marketing"
    }
  ],
  languages: ["English - C2", "German - C1", "Portuguese - native", "French - A2"]
};
