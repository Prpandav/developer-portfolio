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
      title: "Backend",
      description:
        "Server-side architecture, real-time networking, and API design.",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "WebSockets (Socket.IO)",
        "WebRTC & Mediasoup SFU",
        "Server-side logic & Middleware",
      ],
    },
    databases: {
      title: "Databases",
      description: "Data modeling, relationships, persistence, and indexing.",
      items: [
        "MongoDB",
        "Mongoose ODM",
        "SQL",
        "PostgreSQL",
        "Database Schema Design",
        "Data Validation",
      ],
    },
    frontend: {
      title: "Frontend",
      description: "Modern component-driven interfaces and media integrations.",
      items: [
        "React",
        "JavaScript (ES6+)",
        "HTML5 & Semantic Web",
        "CSS3 & Responsive Design",
        "HTML5 Media & Player APIs",
        "State Management",
      ],
    },
    development: {
      title: "Development & Tooling",
      description: "Engineering workflows, version control, and environments.",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions / CI",
        "Postman (API Testing)",
        "Vite & Build Tooling",
        "Linux & VPS Deployment Basics",
      ],
    },
  },
};
