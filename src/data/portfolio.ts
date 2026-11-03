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
    cgpa: string;
    expectedGraduation: string;
    highSchool: string;
    secondarySchool: string;
    profileImage: string;
    resumeUrl: string;
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
    coachingRole: {
      title: string;
      organization: string;
      period: string;
      details: string[];
    };
    lofiAtmosphere: {
      trackTitle: string;
      artist: string;
      currentTime: string;
      moodQuote: string;
    };
  };
  contact: {
    email: string;
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
    title: "Competitive Programmer, Trainee ACM Coach & Software Engineer",
    tagline: "Late night memory allocations, graph algorithms, and 3 AM Accepted verdicts under rainy skies.",
    institution: "American International University-Bangladesh",
    institutionShort: "AIUB",
    department: "Department of Computer Science & Engineering (Information Systems)",
    cgpa: "3.60 / 4.00",
    expectedGraduation: "Expected April 2027",
    highSchool: "Adamjee Cantonment College (ACC) | H.S.C. Science (GPA: 5.00 / 5.00)",
    secondarySchool: "Adamjee Cantonment Public School (ACPS) | S.S.C. Science (GPA: 5.00 / 5.00)",
    profileImage: "/profile.jpg",
    resumeUrl: "/resume.pdf",
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
      "I am an undergraduate Computer Science student at AIUB, a competitive programmer, and a Trainee ACM Coach. My engineering intuition is forged in the silence of late-night contest rounds, navigating strict memory limits, branch prediction, and complex graph flows where a single constant factor separates an Accepted from a Time Limit Exceeded.",
      "Beyond contests, I build scalable full-stack architectures and low-level software in C++, C# (.NET), Python, and PHP. Whether crafting custom contest engines, writing OpenGL graphics pipelines, or architecting enterprise .NET MVC backends, I care deeply about deterministic execution, cache locality, and systems that stay reliable under load.",
    ],
    coachingRole: {
      title: "Competitive Programming Trainee Coach / Student Mentor",
      organization: "AIUB ACM Coaching Program",
      period: "2024 to Present",
      details: [
        "Assist in training junior competitors in fundamental data structures, graph theory, and dynamic programming algorithms.",
        "Participate in contest preparation, problem-set curation, and review sessions for collegiate ICPC bootcamps.",
      ],
    },
    lofiAtmosphere: {
      trackTitle: "Twilight Violet // Late-Night Coding Session",
      artist: "hunterkasa (stream_01.wav)",
      currentTime: "03:42 AM",
      moodQuote: "The terminal cursor blinks in the dark. 4,300 problems later, the code still speaks in silence.",
    },
  },

  contact: {
    email: "hunterkasa@gmail.com",
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
      accentColor: "#c084fc",
      highlight: "Max Rating 1618 (Expert): 3,500+ Accepted Submissions",
    },
    {
      platform: "AtCoder",
      handle: "Hunterkasa",
      rating: "300+",
      problemsSolved: "300+",
      profileUrl: "https://atcoder.jp/users/Hunterkasa",
      accentColor: "#a855f7",
      highlight: "Regular participant in AtCoder Beginner & Regular Contests",
    },
    {
      platform: "CSES Problem Set",
      handle: "User #60812",
      problemsSolved: "130+",
      profileUrl: "https://cses.fi/user/60812",
      accentColor: "#c084fc",
      highlight: "Advanced Tree Algorithms, Dynamic Programming, Mathematics & Graph Theory",
    },
    {
      platform: "LightOJ",
      handle: "hunterkasa",
      problemsSolved: "236",
      profileUrl: "https://lightoj.com/user/hunterkasa",
      accentColor: "#a855f7",
      highlight: "236 Solves: Classical Dynamic Programming, Number Theory, Geometry",
    },
    {
      platform: "Toph",
      handle: "hunterkasa",
      problemsSolved: "150+",
      profileUrl: "https://toph.co/u/hunterkasa",
      accentColor: "#c084fc",
      highlight: "150+ Solved in National Arenas and Community Contests",
    },
  ],

  achievements: [
    {
      title: "ICPC Asia Dhaka Regional Preliminary Contest 2025",
      organization: "International Collegiate Programming Contest",
      year: "2025",
      placement: "35th Place",
      standingNumber: 35,
      category: "ICPC",
      description: "Ranked 35th nationally among top university teams across Bangladesh in the rigorous regional preliminary stage.",
      metrics: "Rank 35 (National Preliminary)",
    },
    {
      title: "AIUB Intra University Programming Contest 2024",
      organization: "American International University-Bangladesh",
      year: "2024",
      placement: "Runner-Up (2nd Place)",
      standingNumber: 2,
      category: "Intra-University",
      description: "Secured 2nd place overall in the premier competitive programming championship at AIUB.",
      metrics: "Runner-Up Finalist",
    },
    {
      title: "CUET IUPC 2025",
      organization: "Chittagong University of Engineering & Technology",
      year: "2025",
      placement: "15th Place",
      standingNumber: 15,
      category: "National IUPC",
      description: "15th place in national collegiate contest against premier engineering institutions across Bangladesh.",
      metrics: "Rank 15 (National Division)",
    },
    {
      title: "IUT IUPC",
      organization: "Islamic University of Technology",
      year: "2025",
      placement: "15th Place",
      standingNumber: 15,
      category: "National IUPC",
      description: "Ranked 15th in the competitive programming battle hosted by IUT.",
      metrics: "Top 15 Finish",
    },
    {
      title: "Metropolitan University IUPC 2025",
      organization: "Metropolitan University, Sylhet",
      year: "2025",
      placement: "19th Place",
      standingNumber: 19,
      category: "National IUPC",
      description: "Top-20 national standing among competitive collegiate programmers.",
      metrics: "Rank 19",
    },
    {
      title: "SUST IUPC 2025",
      organization: "Shahjalal University of Science and Technology",
      year: "2025",
      placement: "26th Place",
      standingNumber: 26,
      category: "National IUPC",
      description: "Competed in the prestigious SUST on-site championship.",
      metrics: "Rank 26",
    },
    {
      title: "NSUCEC Cybernauts IUPC",
      organization: "North South University",
      year: "2025",
      placement: "29th Place",
      standingNumber: 29,
      category: "National IUPC",
      description: "Achieved 29th place in the timed multi-problem national arena.",
      metrics: "Rank 29",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      description: "Languages with direct memory control, compile-time rigor, and daily algorithmic contest usage.",
      skills: [
        { name: "C++ (C++17/20/STL)", level: "Advanced", details: "Core competitive programming language: pointers, memory layouts, custom allocators, templates", isPrimary: true },
        { name: "C# (.NET Core)", level: "Advanced", details: "Enterprise backend architecture, LINQ, async/await pipelines, multi-tier services", isPrimary: true },
        { name: "Java (OOP / SE)", level: "Proficient", details: "Object-oriented design patterns, concurrency, manufacturing domain systems", isPrimary: true },
        { name: "Python", level: "Proficient", details: "Data analysis, machine learning pipelines, embedding representations", isPrimary: false },
        { name: "JavaScript", level: "Proficient", details: "Modern ES6+, DOM events, Web Audio API, async client engines", isPrimary: false },
        { name: "PHP", level: "Proficient", details: "Contest platforms, server-side scripting, authentication layers", isPrimary: false },
        { name: "x86 Assembly", level: "Working Knowledge", details: "Low-level registers, stack frames, processor instruction sets", isPrimary: false },
      ],
    },
    {
      category: "Backend, Databases & Web",
      description: "Relational persistence, API architectures, and enterprise web engines.",
      skills: [
        { name: "ASP.NET Core & MVC", level: "Advanced", details: "Entity Framework Core, dependency injection, role-based security", isPrimary: true },
        { name: "PostgreSQL", level: "Proficient", details: "Relational modeling, indexing, schema normalization, ACID guarantees", isPrimary: true },
        { name: "MySQL", level: "Proficient", details: "Contest platform schemas, optimized queries, connection pooling", isPrimary: false },
        { name: "Tailwind CSS", level: "Advanced", details: "Responsive utility styling, custom themes, dark-mode color tokens", isPrimary: true },
        { name: "HTML5 & CSS3", level: "Advanced", details: "Semantic structure, responsive layouts, audio APIs", isPrimary: false },
        { name: "RESTful Architectures", level: "Advanced", details: "API contracts, stateless auth, status code discipline", isPrimary: true },
      ],
    },
    {
      category: "Systems, Tools & Infrastructure",
      description: "Developer environments, version control, and system tooling.",
      skills: [
        { name: "Linux (CLI / Bash)", level: "Advanced", details: "Process management, shell scripting, POSIX environments, permissions", isPrimary: true },
        { name: "Docker", level: "Proficient", details: "Containerized reproducible execution environments", isPrimary: true },
        { name: "Git & GitHub", level: "Advanced", details: "Branching strategies, code reviews, rebasing, issue tracking", isPrimary: true },
        { name: "OpenGL (GLUT)", level: "Proficient", details: "Graphics pipeline, real-time rendering loop, vertex transformation", isPrimary: false },
      ],
    },
    {
      category: "Algorithmic Domains & Theory",
      description: "Theoretical mastery applied under real-time contest time limits.",
      skills: [
        { name: "Graph Theory", level: "Advanced", details: "Dijkstra, Floyd-Warshall, Bridges/AP, Bipartite matching, Topological sort", isPrimary: true },
        { name: "Dynamic Programming", level: "Advanced", details: "Bitmask DP, Digit DP, Tree DP, Knapsack variants, Memoization", isPrimary: true },
        { name: "Data Structures", level: "Advanced", details: "Segment Trees, Fenwick Trees, Disjoint Set Union (DSU), Sparse Tables", isPrimary: true },
        { name: "Number Theory & Math", level: "Proficient", details: "Modular arithmetic, Sieve of Eratosthenes, GCD/LCM, Combinatorics", isPrimary: false },
      ],
    },
  ],

  projects: [
    {
      slug: "codecafe",
      title: "CodeCafe: Online & Offline Competitive Programming Platform",
      tagline: "A comprehensive website where you can solve, create, and suggest problems and host contests.",
      category: "Competitive Tools",
      description: "Engineered a full-featured Codeforces-inspired platform supporting complete problem lifecycle management. Features contest creation modules, scoreboard standings, and custom test-case submission validation.",
      highlights: [
        "Role-based access controls distinguishing admins, problem setters, and contestants",
        "Timed contest engine with automatic scoreboard ranking and penalty calculation",
        "Problem submission validation supporting custom sample test inputs",
        "Offline contest host mode designed for local collegiate club bootcamps",
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/hunterkasa/codecafe",
      featured: true,
      stats: [
        { label: "Architecture", value: "Multi-tier" },
        { label: "Judge Model", value: "Online & Offline" },
        { label: "Security", value: "Role RBAC" },
      ],
    },
    {
      slug: "online-exam-system",
      title: "Online Examination Management System",
      tagline: "Enterprise .NET platform enabling examiners to schedule time-delimited assessments with automated grading.",
      category: "Enterprise Backend",
      description: "Advanced ASP.NET Core MVC examination platform designed for university-scale assessment delivery. Implemented real-time submission tracking, role-based controls, and relational database schema normalization.",
      highlights: [
        "ASP.NET Core MVC architecture with Entity Framework Core data layer",
        "Automated objective grading engine with instant result computation",
        "Relational schema normalized for concurrent student assessment sessions",
        "Security-hardened role management separating faculty from students",
      ],
      techStack: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "PostgreSQL"],
      githubUrl: "https://github.com/hunterkasa/Online-Exam-System",
      featured: true,
      stats: [
        { label: "Framework", value: "ASP.NET Core" },
        { label: "ORM", value: "EF Core" },
        { label: "Security", value: "Role Claims" },
      ],
    },
    {
      slug: "cross-domain-knowledge-mapping-med-ai",
      title: "Cross-Domain Knowledge Mapping for Medical AI",
      tagline: "Graph and vector mapping linking heterogeneous clinical concepts across disjoint medical domains.",
      category: "Applied AI",
      description: "Research codebase investigating knowledge representation across distinct clinical databases. Preprocessed structured biomedical datasets to analyze semantic similarity and improve domain-specific diagnostic retrieval.",
      highlights: [
        "Constructed concept graphs bridging disparate medical vocabularies",
        "Vector embedding computations for high-dimensional semantic similarity queries",
        "Reproducible data pipeline cleaning raw medical terminology tables",
        "Evaluated retrieval precision across multi-domain medical contexts",
      ],
      techStack: ["Python", "Machine Learning Libraries", "Data Analysis", "Graph Theory"],
      githubUrl: "https://github.com/hunterkasa/cross-domain-knowledge-mapping-med-ai",
      featured: true,
      stats: [
        { label: "Domain", value: "Clinical AI" },
        { label: "Method", value: "Graph & Vector" },
        { label: "Language", value: "Python" },
      ],
    },
    {
      slug: "space-shooter-opengl",
      title: "Space Shooter Engine in OpenGL",
      tagline: "Low-level 2D graphics engine with real-time rendering loop, custom shaders, and particle states.",
      category: "Graphics / Low-Level",
      description: "Real-time game engine written in C++ using OpenGL and GLUT. Features deterministic physics tick, bounding-box collision detection, sprite transformations, and particle explosion emitters.",
      highlights: [
        "Low-level OpenGL vertex pipeline and 2D coordinate projections",
        "AABB (Axis-Aligned Bounding Box) collision detection system",
        "Manual memory lifecycle and game state machine in pure C++",
        "Smooth real-time particle effects for projectile and explosion rendering",
      ],
      techStack: ["C++", "OpenGL", "GLUT", "Computer Graphics"],
      githubUrl: "https://github.com/hunterkasa/space-shooter-opengl",
      featured: false,
      stats: [
        { label: "Render API", value: "OpenGL" },
        { label: "Framerate", value: "60 FPS Locked" },
        { label: "Language", value: "Pure C++" },
      ],
    },
    {
      slug: "java-oop-factory-system",
      title: "Java OOP Factory System",
      tagline: "Industrial manufacturing workflow management applying classic Gang of Four object-oriented design patterns.",
      category: "Object-Oriented Systems",
      description: "Comprehensive software modeling project implementing Factory Method, Singleton, and Observer design patterns to simulate an automated factory assembly pipeline.",
      highlights: [
        "Strict adherence to SOLID principles across production line modules",
        "Factory pattern dynamic instantiation of assembly components",
        "Observer pattern notifying downstream stations of inventory events",
        "Modular class hierarchy with abstract definitions and unit tests",
      ],
      techStack: ["Java", "OOP Design Patterns", "JUnit", "Software Architecture"],
      githubUrl: "https://github.com/hunterkasa/Java-OOP-Factory-System",
      featured: false,
      stats: [
        { label: "Patterns", value: "Factory, Observer" },
        { label: "Language", value: "Java SE" },
        { label: "Discipline", value: "SOLID OOP" },
      ],
    },
    {
      slug: "cricket-scoreboard-in-c",
      title: "Cricket Scoreboard Engine in C",
      tagline: "Fast terminal-based match simulator with manual dynamic memory allocation and structured file persistence.",
      category: "Systems in C",
      description: "Lightweight, memory-efficient match scoring system written in standard C. Implements ball-by-ball state transitions, run rate calculators, and binary/text match archiving.",
      highlights: [
        "Engineered in standard C with manual memory allocation (malloc/free)",
        "Zero memory leaks verified under rigorous execution paths",
        "Structured file I/O operations for persistent match scorecards",
        "Clean terminal interface with formatted statistical tables",
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
