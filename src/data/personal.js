/**
 * Centralized personal profile and engineering metadata.
 * Update values here to propagate across the entire portfolio.
 * NO fabricated claims, metrics, or credentials.
 */

export const personalInfo = {
  name: "Prasiddh Pandav",
  initials: "PP",
  role: "Backend-focused Full-Stack Developer",
  statusBadge: "FINAL-YEAR IT STUDENT",
  headline: "Backend-focused Full-Stack Developer",

  positioningStatement:
    "I build complete web applications with strong backend foundations, REST APIs, databases, and modern frontend technologies.",

  aboutSummary:
    "Final-year Information Technology student with a strong focus on backend architecture, real-time media streaming, and robust API design. Experienced in developing full-stack applications with Node.js, Express, MongoDB, and React, including real-time communication systems using WebSockets and WebRTC SFU technology.",

  education: {
    degree: "B.Tech — Information Technology",
    institution: "GCET (G.H. Patel College of Engineering & Technology)",
    status: "Final-Year Undergraduate",
  },

  contact: {
    email: "prasiddhpandav@gmail.com",
    github: "https://github.com/Prpandav/",
    linkedin: "https://www.linkedin.com/in/prasiddh-pandav",
    leetcode: "https://leetcode.com/u/prpandav/",
    resumeUrl:
      "https://drive.google.com/file/d/1if-aF9dVbjkk6ku8sqZ9tNYi56gKcNYz/view?usp=sharing",
    location: "Surat, Gujarat, India",
  },

  // Engineering competencies grouped strictly by responsibility (Phase 11)
  skills: {
    backend: {
      title: "Backend & Systems",
      description:
        "Server-side architecture, real-time networking, delta sync, and API design.",
      items: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "REST APIs",
        "JWT Authentication",
        "WebSockets (Socket.IO)",
        "WebRTC & Mediasoup SFU",
        "Delta Batch Sync Engines",
      ],
    },
    databases: {
      title: "Databases & Storage",
      description: "Data modeling, relationships, offline persistence, and ORMs.",
      items: [
        "PostgreSQL",
        "SQLite (WAL Mode)",
        "MongoDB",
        "Prisma ORM",
        "Mongoose ODM",
        "SQL Schema Design",
        "Data Validation",
      ],
    },
    frontend: {
      title: "Frontend & Mobile",
      description: "Modern component-driven interfaces, Next.js, and mobile clients.",
      items: [
        "React",
        "Next.js (App Router)",
        "React Native & Expo",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5 & Responsive Web",
      ],
    },
    development: {
      title: "Development & Tooling",
      description: "Engineering workflows, version control, monorepos, and environments.",
      items: [
        "Git & GitHub",
        "npm Workspaces Monorepo",
        "GitHub Actions / CI",
        "Postman (API Testing)",
        "Vite & Next Build Tooling",
        "Linux & Cloud Deployment (Vercel, Render)",
      ],
    },
  },
};
