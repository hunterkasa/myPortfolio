export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  label?: string;
}

export interface PlatformHandle {
  platform: string;
  handle: string;
  rating?: string | number;
  rank?: string;
  problemsSolved?: number | string;
  profileUrl: string;
  accentColor?: string;
  highlight?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  placement: string;
  standingNumber: number;
  category: "ICPC" | "National IUPC" | "Intra-University";
  description: string;
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge";
    details?: string;
    isPrimary?: boolean;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Competitive Tools" | "Applied AI" | "Enterprise Backend" | "Object-Oriented Systems" | "Graphics / Low-Level" | "Systems in C";
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    shortName: string;
    handle: string;
    monogram: string;
    title: string;
    tagline: string;
    institution: string;
    institutionShort: string;
    department: string;
    profileImage: string;
    location: {
      city: string;
      country: string;
      lat: number;
      lng: number;
      timezone: string;
    };
    status: {
      availability: string;
      moodText: string;
      subtext: string;
    };
    bio: string[];
    lofiAtmosphere: {
      trackTitle: string;
      artist: string;
      currentTime: string;
      moodQuote: string;
    };
    resumeStatus: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    codeforces: string;
    atcoder: string;
    lightoj: string;
    cses: string;
  };
  metrics: {
    totalProblemsSolved: number;
    cfMaxRating: number;
    cfRank: string;
    cfSolveCount: string;
    atCoderSolveCount: string;
    csesSolveCount: string;
    lightojSolveCount: string;
    tophSolveCount: string;
    icpcRegionalRank: string;
    topIupcFinish: string;
  };
  competitivePlatforms: PlatformHandle[];
  achievements: Achievement[];
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Kazi Shoiab Ahmed Saad",
    shortName: "Saad",
    handle: "hunterkasa",
    monogram: "KS",
    title: "Competitive Programmer & Systems / Backend Developer",
    tagline: "Late night memory allocations, graph algorithms, and 3 AM Accepted verdicts under rainy skies.",
    institution: "American International University-Bangladesh",
    institutionShort: "AIUB",
    department: "Department of Computer Science & Engineering",
    profileImage: "/profile.jpg",
    location: {
      city: "Dhaka",
      country: "Bangladesh",
      lat: 23.8103,
      lng: 90.4125,
      timezone: "Asia/Dhaka",
    },
    status: {
      availability: "Open to Backend, Systems & Software Engineering Opportunities",
      moodText: "High-contrast execution across algorithms and backend architecture",
      subtext: "Over 4,300+ algorithmic problems solved across platforms.",
    },
    bio: [
      "I am an undergraduate Computer Science student at AIUB and an active competitive programmer. My engineering intuition is forged in the silence of late-night contest rounds, navigating strict memory limits, branch prediction, and complex graph flows where a single constant factor separates an Accepted from a Time Limit Exceeded.",
      "Beyond contests, I build full-stack architectures and low-level software in C++, C# (.NET), Java, and Python. Whether crafting custom contest engines, writing OpenGL graphics pipelines, or architecting enterprise .NET MVC backends, I care deeply about deterministic execution, cache locality, and systems that stay reliable under load.",
    ],
    lofiAtmosphere: {
      trackTitle: "Cyan & Twilight Violet // Late-Night Coding Session",
      artist: "hunterkasa (stream_01.wav)",
      currentTime: "03:42 AM",
      moodQuote: "The terminal cursor blinks in the dark. 4,300 problems later, the code still speaks in silence.",
    },
    resumeStatus: "Resume currently being updated (Available on request via email)",
  },

  contact: {
    email: "hunterkasa@gmail.com",
    phone: "01516566669",
    github: "https://github.com/hunterkasa",
    linkedin: "https://www.linkedin.com/in/hunterkasa",
    codeforces: "https://codeforces.com/profile/hunterkasa_",
    atcoder: "https://atcoder.jp/users/Hunterkasa",
    lightoj: "https://lightoj.com/user/hunterkasa",
    cses: "https://cses.fi/user/60812",
  },

  metrics: {
    totalProblemsSolved: 4300,
    cfMaxRating: 1618,
    cfRank: "Expert",
    cfSolveCount: "3,500+",
    atCoderSolveCount: "300+",
    csesSolveCount: "130+",
    lightojSolveCount: "236",
    tophSolveCount: "150+",
    icpcRegionalRank: "35th Online Preliminary (2025)",
    topIupcFinish: "2nd Place (AIUB Intra 2024)",
  },

  competitivePlatforms: [
    {
      platform: "Codeforces",
      handle: "hunterkasa_",
      rating: 1618,
      rank: "Expert",
      problemsSolved: "3,500+",
      profileUrl: "https://codeforces.com/profile/hunterkasa_",
      accentColor: "#22d3ee",
      highlight: "Max Rating 1618 (Expert): 3,500+ Accepted Submissions",
    },
    {
      platform: "AtCoder",
      handle: "Hunterkasa",
      problemsSolved: "300+",
      profileUrl: "https://atcoder.jp/users/Hunterkasa",
      accentColor: "#c084fc",
      highlight: "300+ Problems Solved across ABC and ARC rounds",
    },
    {
      platform: "LightOJ",
      handle: "hunterkasa",
      problemsSolved: 236,
      profileUrl: "https://lightoj.com/user/hunterkasa",
      accentColor: "#22d3ee",
      highlight: "236 Classical Problems Solved (Graph & Dynamic Programming)",
    },
    {
      platform: "CSES Problem Set",
      handle: "User #60812",
      problemsSolved: "130+",
      profileUrl: "https://cses.fi/user/60812",
      accentColor: "#c084fc",
      highlight: "130+ Rigorous Core Algorithm & Data Structure Tasks",
    },
    {
      platform: "Toph",
      handle: "hunterkasa",
      problemsSolved: "150+",
      profileUrl: "https://toph.co",
      accentColor: "#22d3ee",
      highlight: "150+ Problems Solved in National Contests",
    },
  ],

  achievements: [
    {
      title: "ICPC Asia Dhaka Regional 2025",
      organization: "International Collegiate Programming Contest",
      year: "2025",
      placement: "35th Place",
      standingNumber: 35,
      category: "ICPC",
      description: "Secured 35th position in the fiercely contested ICPC Asia Dhaka Regional Online Preliminary round, battling against elite university programming teams nationwide.",
      metrics: "35th Online Preliminary",
    },
    {
      title: "AIUB Intra-University Programming Contest",
      organization: "AIUB Computer Club (AIUBCC)",
      year: "2024",
      placement: "2nd Place (1st Runner-Up)",
      standingNumber: 2,
      category: "Intra-University",
      description: "Finished 2nd overall in the university-wide championship, solving high-difficulty algorithmic challenges under high-pressure on-site conditions.",
      metrics: "Rank 2 Nationwide AIUB Finalist",
    },
    {
      title: "CUET IUPC 2025",
      organization: "Chittagong University of Engineering & Technology",
      year: "2025",
      placement: "15th Place",
      standingNumber: 15,
      category: "National IUPC",
      description: "Ranked 15th overall in the national inter-university contest, demonstrating mastery in advanced tree structures and mathematical problem-solving.",
      metrics: "Top 15 National Placement",
    },
    {
      title: "IUT IUPC 2025",
      organization: "Islamic University of Technology",
      year: "2025",
      placement: "15th Place",
      standingNumber: 15,
      category: "National IUPC",
      description: "15th place on-site finish competing against top-tier competitive programming teams from across Bangladesh.",
      metrics: "Rank 15",
    },
    {
      title: "Metropolitan University IUPC 2025",
      organization: "Metropolitan University, Sylhet",
      year: "2025",
      placement: "19th Place",
      standingNumber: 19,
      category: "National IUPC",
      description: "Top 20 national finish with multi-problem Accepted verdicts in dynamic programming and network flow.",
      metrics: "Rank 19",
    },
    {
      title: "SUST IUPC 2025",
      organization: "Shahjalal University of Science and Technology",
      year: "2025",
      placement: "26th Place",
      standingNumber: 26,
      category: "National IUPC",
      description: "Placed 26th in one of the most competitive national arenas, solving complex combinatorial problems.",
      metrics: "Rank 26",
    },
    {
      title: "NSUCEC Cybernauts IUPC 2025",
      organization: "North South University Computer & Engineering Club",
      year: "2025",
      placement: "29th Place",
      standingNumber: 29,
      category: "National IUPC",
      description: "Top 30 finish in national competition with consistent speed and accuracy.",
      metrics: "Rank 29",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      description: "Core languages used daily for competitive programming, systems tooling, and software engineering.",
      skills: [
        { name: "C++", level: "Advanced", details: "STL internals, competitive templates, fast I/O, cache-conscious data structures", isPrimary: true },
        { name: "C# / .NET", level: "Advanced", details: "ASP.NET Core, .NET MVC, Entity Framework, LINQ, backend architecture", isPrimary: true },
        { name: "Java", level: "Advanced", details: "Object-oriented architecture, design patterns, multi-threaded systems", isPrimary: true },
        { name: "Python", level: "Proficient", details: "Scientific computing, SciBERT embeddings, ML data processing", isPrimary: true },
        { name: "JavaScript", level: "Proficient", details: "Modern ES6+, DOM manipulation, full-stack application logic" },
        { name: "PHP", level: "Proficient", details: "Web application backend logic, MySQL integration" },
        { name: "x86 Assembly", level: "Working Knowledge", details: "Low-level registers, stack frames, CPU instruction understanding" },
      ],
    },
    {
      category: "Backend, Databases & Web",
      description: "Relational persistence, enterprise APIs, and modern responsive interfaces.",
      skills: [
        { name: "ASP.NET / .NET MVC", level: "Advanced", details: "Enterprise exam portals, authentication, controller routing", isPrimary: true },
        { name: "PostgreSQL", level: "Proficient", details: "Relational schema design, complex queries, indexing", isPrimary: true },
        { name: "MySQL", level: "Advanced", details: "Transaction management, foreign keys, database normalization", isPrimary: true },
        { name: "Tailwind CSS", level: "Advanced", details: "Responsive design, high-contrast themes, custom typography scale", isPrimary: true },
        { name: "HTML5 & CSS3", level: "Advanced", details: "Semantic structure, responsive layouts, custom aesthetics" },
      ],
    },
    {
      category: "Systems, Tools & Infrastructure",
      description: "Operating system environments, containerization, and developer toolchains.",
      skills: [
        { name: "Linux / Unix Shell", level: "Advanced", details: "Bash scripting, process control, system utilities, contest environment", isPrimary: true },
        { name: "Docker", level: "Proficient", details: "Containerized environments, repeatable development builds", isPrimary: true },
        { name: "Git & GitHub", level: "Advanced", details: "Version control, branching, release tags, open-source workflow", isPrimary: true },
        { name: "OpenGL / Graphics", level: "Proficient", details: "Render loops, transformation matrices, shader pipelines in C++" },
      ],
    },
    {
      category: "Algorithmic Domains & Theory",
      description: "Mastered algorithmic structures honed across 4,300+ competitive programming contest problems.",
      skills: [
        { name: "Graph Algorithms", level: "Advanced", details: "Max Flow, Bipartite Matching, Bridges, Tarjan SCC, Dijkstra/SPFA", isPrimary: true },
        { name: "Advanced Data Structures", level: "Advanced", details: "Segment Trees with Lazy Propagation, Fenwick Trees, Treaps, DSU", isPrimary: true },
        { name: "Dynamic Programming", level: "Advanced", details: "Tree DP, Bitmask DP, Digit DP, Divide & Conquer Optimization", isPrimary: true },
        { name: "Number Theory & Combinatorics", level: "Advanced", details: "Modular Arithmetic, Fermat's Theorem, Sieve of Eratosthenes, CRT", isPrimary: true },
      ],
    },
  ],

  projects: [
    {
      slug: "codecafe",
      title: "CodeCafe",
      tagline: "Online and offline competitive programming platform inspired by Codeforces.",
      category: "Competitive Tools",
      description: "A comprehensive website where you can solve, create and suggest problems host contest.",
      highlights: [
        "Built problem browsing, editorial suggestions, and contest management workflows.",
        "Engineered offline and online problem repository architecture to enable practice without constant network connectivity.",
        "Designed contest leaderboards and real-time standing calculations simulating live contest environments.",
      ],
      techStack: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Apache"],
      githubUrl: "https://github.com/hunterkasa/codecafe",
      featured: true,
      stats: [
        { label: "Target Domain", value: "Contest Platform" },
        { label: "Mode", value: "Online & Offline" },
        { label: "Inspiration", value: "Codeforces" },
      ],
    },
    {
      slug: "cross-domain-knowledge-mapping-med-ai",
      title: "Cross-Domain Knowledge Mapping for Medical AI",
      tagline: "Unsupervised semantic knowledge mapping between Computer Science/AI and Medicine in Medical Image Segmentation.",
      category: "Applied AI",
      description: "Unsupervised semantic knowledge mapping between Computer Science/AI and Medicine in Medical Image Segmentation using SciBERT embeddings, non-linear dimensionality reduction, and clustering ablation.",
      highlights: [
        "Extracted and mapped high-dimensional biomedical literature representations using SciBERT transformer embeddings.",
        "Implemented non-linear dimensionality reduction (t-SNE / UMAP) to expose latent conceptual bridges between CS algorithms and medical diagnostics.",
        "Conducted clustering ablation studies analyzing domain transferability and terminology divergence.",
      ],
      techStack: ["Python", "SciBERT", "PyTorch", "t-SNE", "UMAP", "NLP", "Scikit-Learn"],
      githubUrl: "https://github.com/hunterkasa/cross-domain-knowledge-mapping-med-ai",
      featured: true,
      stats: [
        { label: "Embeddings", value: "SciBERT" },
        { label: "Method", value: "Clustering Ablation" },
        { label: "Focus", value: "Medical AI" },
      ],
    },
    {
      slug: "online-exam-system",
      title: "Online Exam System",
      tagline: "Advanced enterprise backend online examination system in .NET MVC framework.",
      category: "Enterprise Backend",
      description: "A robust backend online examination portal built in ASP.NET MVC featuring secure candidate authorization, automated timed tests, and question pool management.",
      highlights: [
        "Engineered scalable relational database schema with PostgreSQL/SQL Server for test banks, candidate logs, and auto-graded results.",
        "Implemented role-based security separating administrators, teachers, and examinees with anti-tampering session controls.",
        "Automated grading pipelines calculating percentage metrics, grade distributions, and performance telemetry.",
      ],
      techStack: ["C#", ".NET MVC", "ASP.NET", "PostgreSQL / SQL Server", "Entity Framework", "Bootstrap"],
      githubUrl: "https://github.com/hunterkasa/Online-Exam-System",
      featured: true,
      stats: [
        { label: "Framework", value: ".NET MVC" },
        { label: "Architecture", value: "Role-Based Multi-Tier" },
        { label: "Storage", value: "Relational DB" },
      ],
    },
    {
      slug: "java-oop-factory-system",
      title: "Java OOP Factory Management System",
      tagline: "Modular CLI factory management system in Java demonstrating core OOP and audit logging.",
      category: "Object-Oriented Systems",
      description: "A modular CLI-based Factory Management System in Java demonstrating core OOP principles, interface-driven design, multi-account ledger transactions, and persistent audit logging.",
      highlights: [
        "Designed clean encapsulation boundaries utilizing polymorphism, abstract factories, and interface segregation.",
        "Implemented multi-account ledger transaction verification with rollback-safe state changes.",
        "Engineered persistent audit logging to disk capturing inventory depreciation, raw material intake, and production cycles.",
      ],
      techStack: ["Java", "OOP Principles", "CLI Design", "File I/O", "Persistent Audit Logging"],
      githubUrl: "https://github.com/hunterkasa/Java-OOP-Factory-System",
      featured: true,
      stats: [
        { label: "Paradigms", value: "Strict OOP" },
        { label: "Ledger", value: "Multi-Account" },
        { label: "Audit Log", value: "Disk Persistent" },
      ],
    },
    {
      slug: "space-shooter-opengl",
      title: "Space Shooter OpenGL",
      tagline: "Hardware-accelerated retro arcade combat game built in C++ and raw OpenGL.",
      category: "Graphics / Low-Level",
      description: "A hardware-accelerated 2D/3D retro arcade space combat simulator implemented directly with C++ and raw OpenGL graphics pipelines.",
      highlights: [
        "Programmed custom matrix transformations, projection planes, and camera coordinate models.",
        "Implemented bounding-box collision detection algorithms with high frame-rate stability.",
        "Managed game loop physics, particle effects, and weapon trajectory calculations without third-party game engines.",
      ],
      techStack: ["C++", "OpenGL", "GLUT / GLFW", "Matrix Math", "Real-Time Game Loop"],
      githubUrl: "https://github.com/hunterkasa/space-shooter-opengl",
      featured: false,
      stats: [
        { label: "Renderer", value: "Raw OpenGL" },
        { label: "Language", value: "C++" },
        { label: "Engine", value: "Custom Built" },
      ],
    },
    {
      slug: "cricket-scoreboard-in-c",
      title: "Cricket Scoreboard in C",
      tagline: "Real-time match telemetry and innings tracking engine implemented in pure C.",
      category: "Systems in C",
      description: "A console-based cricket match telemetry system built in procedural C featuring dynamic run-rate calculations, player performance stat sheets, and persistent file logging.",
      highlights: [
        "Implemented dynamic struct allocations and memory management in pure C.",
        "Designed match state machines tracking extras, wickets, overs, and bowler strike rates.",
        "Persisted completed match records to structured files for subsequent inspection and review.",
      ],
      techStack: ["C", "Dynamic Memory", "File Handling", "CLI Interface"],
      githubUrl: "https://github.com/hunterkasa/cricket-scoreboard-in-c",
      featured: false,
      stats: [
        { label: "Language", value: "Pure C" },
        { label: "Memory", value: "Manual malloc/free" },
        { label: "Storage", value: "File Records" },
      ],
    },
  ],
};
