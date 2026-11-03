# Kazi Shoiab Ahmed Saad (@hunterkasa) — Portfolio

Production-grade personal portfolio and competitive programming platform for **Kazi Shoiab Ahmed Saad** (`@hunterkasa_`), engineered with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Built strictly with an **Anti-AI-Slop / Impeccable standard**:
- **Lofi Sad Vibe & Sad Purple Aesthetics**: Deep midnight dusk base (`#0b0914`), melancholic violet-slate cards, hairline borders (`#2a2442`), and a **Sad Purple** accent (`#a78bfa` / `#9333ea`) with vinyl tape and lofi atmospheric accents.
- **Cropped Portrait Integration**: Integrated portrait from AIUB (`/profile.jpg`) with an editorial film frame and metadata reticle.
- **Interactive 3D Cobe Globe**: Lightweight HTML5 Canvas / WebGL dot-matrix globe rendered with sad purple dots and Dhaka pin (`23.8103° N, 90.4125° E`).
- **Real, Verified Contest Records**:
  - **4,300+ Problems Solved** across Codeforces, AtCoder, CSES, LightOJ, and Toph.
  - **Codeforces**: Max Rating **1618** (Expert), **3,500+** Accepted Submissions.
  - **ICPC Asia Dhaka Regional 2025 Online Preliminary**: **35th Place**.
  - **AIUB Intra-University 2024**: **2nd Place (1st Runner-Up)**.
  - **CUET IUPC 2025**: **15th Place**.
  - **IUT IUPC 2025**: **15th Place**.
  - **Metropolitan University IUPC 2025**: **19th Place**.
  - **SUST IUPC 2025**: **26th Place**.
  - **NSUCEC Cybernauts IUPC 2025**: **29th Place**.
- **Real Projects from GitHub**:
  - `codecafe`: Online & offline contest platform like Codeforces.
  - `cross-domain-knowledge-mapping-med-ai`: Unsupervised knowledge mapping between CS/AI and Medicine using SciBERT.
  - `Online-Exam-System`: Enterprise .NET MVC automated exam portal.
  - `Java-OOP-Factory-System`: Modular OOP factory workflow system in Java.
  - `space-shooter-opengl`: Hardware-accelerated 2D/3D arcade shooter in C++ and raw OpenGL.
  - `cricket-scoreboard-in-c`: Console-based real-time match telemetry in pure C.
- **Decoupled Data Layer**: All data isolated in `src/data/portfolio.ts` with strict TypeScript types.

---

## 🛠 Project Structure

```
├── public/
│   ├── profile.jpg               # Cropped portrait photo
│   ├── resume.pdf                # Resume placeholder / download
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css           # Lofi sad purple theme, custom grid, scrollbars
│   │   ├── layout.tsx            # Metadata, OpenGraph, Twitter tags, fonts
│   │   └── page.tsx              # Clean single-page assembly
│   ├── components/
│   │   ├── Header.tsx            # Sticky navigation & lofi status
│   │   ├── Hero.tsx              # Portrait photo, credentials, globe HUD
│   │   ├── Globe.tsx             # Interactive 3D Cobe globe in sad purple
│   │   ├── ExperiencePhilosophy.tsx # Academic focus (AIUB) & CP work ethic
│   │   ├── CompetitiveProgramming.tsx # 4,300+ solves, handles & IUPC standings
│   │   ├── TechnicalArsenal.tsx  # Categorized skills (Languages, .NET, Linux, DBs)
│   │   ├── FeaturedProjects.tsx  # GitHub repositories with direct descriptions
│   │   ├── ContactFooter.tsx     # Direct email, phone, live clock & links
│   │   └── Icons.tsx             # Clean SVG icons (GitHub, Codeforces, LinkedIn)
│   └── data/
│       └── portfolio.ts          # Strictly typed portfolio data repository
├── package.json
└── tsconfig.json
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build and start production server
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
