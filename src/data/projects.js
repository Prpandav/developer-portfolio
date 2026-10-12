/**
 * Project repository data layer.
 * Only verified project data is populated.
 * No fabricated features, user statistics, or false claims.
 */

export const projects = [
  {
    id: "mov2night",
    slug: "mov2night",
    title: "Mov2night",
    category: "Full-Stack / Real-Time Systems",
    featured: true,
    tagline:
      "Watch Together, Feel Together — Real-time synchronized cinema experience powered by WebRTC SFU and WebSockets.",

    shortDescription:
      "Watch movies and shows in perfect sync with your friends. Mov2night brings the cinema experience to your living room together no matter the distance, supporting YouTube synchronization, local file streaming via Mediasoup SFU, screen sharing, live chat, and voice communication.",

    description:
      "Mov2night is a full-stack real-time collaboration application designed to bring people together for synchronized video viewing. Built with an authoritative host-and-guest architecture, it coordinates YouTube playback via the YouTube IFrame API and routes local video files and screen shares through a custom Mediasoup WebRTC Selective Forwarding Unit (SFU) without requiring users to upload video files to cloud storage.",

    status: "Active / Deployed",
    image: "/projects/mov2night.png",

    technologies: [
      "Node.js",
      "Express 5",
      "React 19",
      "Mediasoup (WebRTC SFU)",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Vite",
      "YouTube IFrame API",
    ],

    techCategories: {
      backend: ["Node.js", "Express 5", "Socket.IO", "Mediasoup SFU", "JWT"],
      database: ["MongoDB", "Mongoose"],
      frontend: [
        "React 19",
        "Vite",
        "Socket.IO Client",
        "mediasoup-client",
        "YouTube IFrame API",
      ],
      networking: [
        "WebRTC Transport (RTP/RTCP)",
        "DTLS-SRTP Encryption",
        "WebSockets",
      ],
    },

    highlights: [
      "Mediasoup SFU Real-time WebRTC",
      "Host-Authoritative Playback Sync",
      "Late-Join State Reconciliation",
      "Live Chat & Voice Communication",
    ],

    architecturePills: [
      { label: "Signaling", value: "Socket.IO Rooms" },
      { label: "Media Transport", value: "Mediasoup SFU (DTLS-SRTP)" },
      { label: "Playback Authority", value: "Host-Only Controlled" },
    ],

    links: {
      live: "https://mov2night.vercel.app/",
      github: "https://github.com/Prpandav/Watch-Party-app",
    },

    keyFeatures: [
      {
        title: "YouTube Playback Synchronization",
        description:
          "Enables participants to watch YouTube videos in unison with host-authoritative play, pause, and seek commands synchronized over WebSockets.",
      },
      {
        title: "Local File Streaming via Mediasoup SFU",
        description:
          "Streams local browser video files directly to room participants via a Mediasoup SFU worker without uploading media to application storage.",
      },
      {
        title: "Screen Sharing Broadcast",
        description:
          "Allows hosts to share browser tabs, application windows, or desktop screens through real-time WebRTC media tracks.",
      },
      {
        title: "Authoritative Host Control Model",
        description:
          "Prevents state desynchronization and race conditions by restricting playback control actions strictly to the room host.",
      },
      {
        title: "Late-Join State Reconciliation",
        description:
          "Ensures newly connected participants immediately receive the current media source, playback state, timestamp, and room context upon entry.",
      },
      {
        title: "Real-Time Room Chat & Voice",
        description:
          "Facilitates interactive discussions with live chat (restoring room history on join), voice communication, and real-time emoji reactions.",
      },
      {
        title: "Room Codes & Direct Link Sharing",
        description:
          "Streamlined room joining using unique 6-character room codes or shareable direct URLs with SPA client routing.",
      },
      {
        title: "Mobile Autoplay Handling",
        description:
          "Detects restrictive mobile browser autoplay policies and provides interactive fallback prompts to initiate audio/video playback.",
      },
    ],

    caseStudy: {
      problem:
        "Watching video content remotely with friends typically presents two major obstacles: noticeable playback drift across participants on third-party video platforms, and severe bandwidth or storage friction when attempting to watch local video files together. Traditional peer-to-peer WebRTC mesh architectures require the sender to upload multiple duplicate streams (O(N) bandwidth per client), while cloud upload workflows require long processing times, hefty storage costs, and privacy concerns.",

      solution:
        "Mov2night addresses this with a dual-pipeline architecture: a lightweight WebSocket signaling layer for synchronized state events, paired with a server-side Mediasoup Selective Forwarding Unit (SFU). For YouTube, the host broadcasts authoritative play/pause/seek events to guests. For local media and screen sharing, the host streams a single media track to the SFU, which efficiently forwards RTP packets to all connected room participants with sub-second latency.",

      architectureOverview:
        "The system separates state signaling from heavy media transport. Express and Socket.IO manage room lifecycles, user authentication (JWT), chat persistence in MongoDB, and playback coordination. Mediasoup SFU handles high-bandwidth WebRTC audio/video routing via dedicated worker threads, ensuring encrypted DTLS-SRTP transport and optimal CPU efficiency.",

      challenges: [
        {
          title: "SFU (Selective Forwarding Unit) vs. P2P Mesh Architecture",
          problem:
            "A peer-to-peer WebRTC mesh requires the host to upload separate video tracks to every guest (O(N) bandwidth), which saturates consumer upload speeds. Cloud upload approaches cause massive delays and storage bills.",
          solution:
            "Implemented Mediasoup SFU on a dedicated worker thread. The host publishes a single media track (O(1) bandwidth), and the server efficiently forwards encrypted RTP packets to all room participants with sub-second latency.",
        },
        {
          title: "Authoritative Playback Synchronization & Drift Correction",
          problem:
            "Network jitter caused video playback to drift between participants, while naive synchronization resulted in endless seek loops and jarring player stutters.",
          solution:
            "Enforced strict server-side host playback authority. The client player compares local time against host periodic sync pulses, tolerating minor variance with a 1.5-second deadband before triggering an idempotent seek operation.",
        },
        {
          title: "Zero-Cloud Local Video Streaming via HTML5 captureStream()",
          problem:
            "Users wanted to watch personal video files together without uploading multi-gigabyte files to cloud storage or risking file persistence on third-party servers.",
          solution:
            "Leveraged HTML5 captureStream() on the host's video player to create a live MediaStream, publishing it directly into the Mediasoup SFU pipeline to distribute RTP packets in real time without storing files on disk.",
        },
      ],
    },
  },
  {
    id: "dev-power-systems",
    slug: "dev-power-systems",
    title: "DEV Power Systems",
    category: "Full-Stack / B2B Industrial Platform",
    featured: true,
    tagline:
      "Industrial LiFePO₄ battery solutions, specification catalog, and administrative operations portal for inventory CRUD & inquiry tracking.",

    shortDescription:
      "A full-stack industrial platform for custom LiFePO₄ battery packs across solar, agriculture, and backup power. Features a specification catalog, direct WhatsApp inquiry routing, and an authenticated administrative dashboard for battery product CRUD, customer inquiry tracking, and basic business analytics.",

    description:
      "DEV Power Systems is a full-stack web application built for a custom lithium iron phosphate (LiFePO₄) battery manufacturing business. Alongside a customer-facing catalog with direct WhatsApp lead routing, it features an authenticated administrative portal with full CRUD capabilities to manage battery models and specifications live, track incoming inquiries, and monitor basic product analytics backed by a Node.js/Express REST API on Render.",

    status: "Active / Deployed",
    image: "/projects/dev-power.png",

    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "REST API",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "Lucide React",
      "WhatsApp Business API",
      "Vercel",
      "Render",
    ],

    techCategories: {
      frontend: ["React", "Vite", "Tailwind CSS", "Lucide React", "Axios"],
      backend: [
        "Node.js",
        "Express REST API",
        "Session Authentication",
        "Axios Interceptors (401 Redirect)",
      ],
      adminOperations: [
        "Product CRUD Engine",
        "Inquiry Management Pipeline",
        "Catalog & Inquiries Analytics",
      ],
      integrations: ["WhatsApp Click-to-Chat API", "Direct Phone Protocol"],
      deployment: ["Vercel (Frontend SPA)", "Render (REST API)", "Git CI/CD"],
    },

    highlights: [
      "Admin Product CRUD Operations",
      "Inquiry Tracking & Basic Analytics",
      "Session Auth & 401 Interceptors",
      "LiFePO₄ Specs & WhatsApp Routing",
    ],

    architecturePills: [
      { label: "Frontend", value: "React + Vite (Vercel)" },
      { label: "Backend API", value: "Node/Express (Render)" },
      { label: "Admin Suite", value: "Auth, CRUD & Inquiries" },
    ],

    links: {
      live: "https://devlithiumbattry.vercel.app/",
      github: "https://github.com/Prpandav/Battery_App",
      admin: "https://devlithiumbattry.vercel.app/admin/login",
    },

    architectureFlow: [
      {
        phase: "Client Portal",
        title: "Catalog & WhatsApp Routing",
        description:
          "Customers filter battery packs by application (agriculture, solar, inverters) and initiate direct WhatsApp inquiries with pre-filled technical specifications.",
      },
      {
        phase: "REST API Services",
        title: "Express Backend on Render",
        description:
          "Node.js/Express REST API on Render (/api/v1) handles product catalog endpoints, session authentication, and centralized inquiry submission storage.",
      },
      {
        phase: "Admin Operations",
        title: "Product CRUD & Analytics",
        description:
          "Authenticated operations dashboard at /admin allows the owner to create, update, or remove battery products, monitor incoming customer inquiries, and review catalog analytics.",
      },
    ],

    keyFeatures: [
      {
        title: "Authenticated Admin Operations Portal",
        description:
          "Secure /admin portal with session authentication and Axios response interceptors that automatically handle session expiry and 401 redirects.",
      },
      {
        title: "Live Product CRUD Management",
        description:
          "Complete Create, Read, Update, and Delete engine allowing business operators to add new battery models, update voltages, and edit prices without code deployments.",
      },
      {
        title: "Centralized Inquiry Tracking",
        description:
          "Admin dashboard to review and manage customer leads submitted across the platform to ensure prompt quote responses.",
      },
      {
        title: "Basic Operational Analytics",
        description:
          "High-level metrics tracking total customer inquiries, popular battery categories, and catalog engagement.",
      },
      {
        title: "Application-Based Battery Catalog",
        description:
          "Browse battery solutions organized by real-world use: Agriculture Sprayer Pumps, Solar Storage, Home Inverters/UPS, and Custom Packs.",
      },
      {
        title: "Detailed Technical Specifications",
        description:
          "Transparent display of nominal voltage, amp-hour (Ah) capacity, cell chemistry, cycle life, and continuous discharge ratings.",
      },
      {
        title: "Build Quality & Manufacturing Standards",
        description:
          "Highlights Grade-A LiFePO₄ cells, heavy-duty spot welding, and integrated Battery Management Systems (BMS) with overcharge and short-circuit protection.",
      },
      {
        title: "Direct WhatsApp Inquiry Flow",
        description:
          "Pre-populates battery model details directly into a WhatsApp chat for fast technical consultation and pricing.",
      },
    ],

    caseStudy: {
      problem:
        "Running an industrial battery business involves two challenges: customers need exact technical specifications before inquiring, and business owners need an easy way to manage battery inventory and track customer leads without editing code or rebuilding the website whenever a model or price changes.",

      solution:
        "DEV Power Systems combines a customer-facing specification catalog with a secure administrative operations dashboard (/admin). Customers get transparent build quality details and a direct WhatsApp inquiry button. The business owner gets a private admin portal to manage battery products (full CRUD), review customer inquiries, and track basic catalog analytics backed by a Node.js/Express REST API on Render.",

      architectureOverview:
        "The platform uses a decoupled full-stack architecture. The frontend is a fast React Single Page Application hosted on Vercel. It communicates with a Node.js/Express REST API deployed on Render (/api/v1). Axios interceptors handle session validation and automatically redirect expired sessions to /admin/login.",

      challenges: [
        {
          title: "Dynamic Inventory Management Without Frontend Re-deployments",
          problem:
            "Hardcoding battery specifications in the frontend meant any price, model, or voltage change required code commits and redeploying the site.",
          solution:
            "Built a dedicated Node.js/Express REST API with full CRUD endpoints and an authenticated admin panel so the business owner can manage inventory live from any browser.",
        },
        {
          title: "Handling Session Expiry and Protected Admin Routes",
          problem:
            "Unauthenticated or expired requests to admin endpoints could cause blank screens or uncaught errors in the frontend.",
          solution:
            "Implemented global Axios response interceptors that catch 401 responses, clear invalid session state, and cleanly redirect to /admin/login with a session expiration notice.",
        },
        {
          title: "High-Ticket Inquiries vs Shopping Cart Friction",
          problem:
            "Standard e-commerce checkout carts caused customer hesitation because industrial batteries require custom sizing and consultation.",
          solution:
            "Replaced checkout carts with pre-filled WhatsApp consultation buttons that initiate direct conversations with zero friction.",
        },
      ],
    },
  },
  {
    id: "invoice-app",
    slug: "invoice-app",
    title: "InvoiceApp",
    category: "Offline-First Systems / Full-Stack & Mobile",
    featured: true,
    tagline:
      "Offline-first Point-of-Sale (POS), GST compliance suite, and Khata ledger with bi-directional SQLite-to-PostgreSQL delta sync.",

    shortDescription:
      "An offline-first billing and Point-of-Sale (POS) system engineered for Indian retail counters and mobile field operations. Features 100% offline local SQLite writes with WAL mode, delta batch synchronization to a PostgreSQL cloud backend, an integer-paise financial math engine eliminating floating-point rounding errors, automated CGST/SGST/IGST tax calculation, Rule-46 compliant A4 invoices, 58mm thermal ESC/POS receipt generation, and GSTR-1 CSV exports.",

    description:
      "InvoiceApp is an enterprise-grade monorepo billing system designed to withstand erratic internet connectivity at retail checkout counters. It pairs an offline-first React Native Android companion app and a Next.js 15 web terminal with a Node.js/Express and PostgreSQL backend. Local mutations are written instantly to SQLite with PRAGMA foreign keys and WAL mode, queuing delta batches that bi-directionally reconcile with cloud PostgreSQL via timestamp-based sync. Built with a strict integer-paise math engine and state-aware GST calculator, it automates tax compliance, customer credit (Udhar Khata), and day-end cash drawer reconciliation (Z-Reports).",

    status: "Active / Monorepo Architecture",
    image: "/projects/invoiceapp.png",

    technologies: [
      "Next.js 15",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "SQLite (WAL Mode)",
      "Expo SDK 50",
      "Tailwind CSS",
      "Integer-Paise Math",
      "ESC/POS Thermal Printing",
    ],

    techCategories: {
      frontend: [
        "Next.js 15 (App Router)",
        "React 19",
        "Tailwind CSS v4",
        "TanStack React Query",
        "Lucide React",
      ],
      mobile: [
        "React Native 0.73",
        "Expo SDK 50",
        "NativeWind",
        "expo-sqlite (WAL Mode)",
        "expo-secure-store",
        "expo-print",
      ],
      backend: [
        "Node.js",
        "Express",
        "TypeScript",
        "Prisma ORM 5.9",
        "JWT Authentication",
        "Express Rate Limit",
        "Helmet Security",
      ],
      financialEngine: [
        "Integer-Paise Currency Engine",
        "Automated CGST/SGST/IGST Splitter",
        "Rule-46 A4 Tax Invoices",
        "58mm ESC/POS Plaintext Receipt Engine",
        "GSTR-1 CSV Reporting",
      ],
      database: [
        "PostgreSQL (Cloud Central Truth)",
        "SQLite (Local-First Offline WAL)",
        "Prisma Migrations",
      ],
      architecture: [
        "npm Workspaces Monorepo",
        "Bi-directional Delta Batch Sync",
        "Authoritative Cloud Timestamping",
        "Offline DAO Mutation Queues",
      ],
      deployment: [
        "Vercel (Web Dashboard)",
        "Render (Express Cloud API)",
        "Android APK / Expo Go",
      ],
    },

    highlights: [
      "Offline-First SQLite WAL Storage",
      "Bi-directional Delta Batch Sync",
      "Integer-Paise Math (Zero Floating-Point Error)",
      "Dual Engine: A4 PDF & 58mm Thermal Print",
    ],

    architecturePills: [
      { label: "Client DB", value: "SQLite (WAL + FK ON)" },
      { label: "Cloud DB", value: "PostgreSQL (Prisma ORM)" },
      { label: "Sync Engine", value: "Delta Batch (Push / Pull)" },
      { label: "Precision", value: "Integer-Paise (0-Error)" },
    ],

    links: {
      live: "https://invoice-web-app-five.vercel.app",
      github: "https://github.com/Prpandav/InvoiceApp",
      api: "https://invoiceapp-backend-fmhf.onrender.com/api/v1",
    },

    architectureFlow: [
      {
        phase: "Offline POS & Local SQLite",
        title: "Zero-Latency Local Mutations",
        description:
          "Retail checkout registers and mobile clients execute instant writes against local SQLite (WAL mode, foreign keys enabled), recording transactions with is_synced=0 even without internet connectivity.",
      },
      {
        phase: "Delta Sync & Conflict Engine",
        title: "Bi-Directional Batch Push / Pull",
        description:
          "Upon connectivity, SyncEngine packages pending mutations into delta batches (/sync/push). Once acknowledged, it fetches remote changes created after the last sync timestamp (/sync/pull?since=ts) and upserts them locally.",
      },
      {
        phase: "Cloud Source of Truth & Compliance",
        title: "PostgreSQL Ledger & GSTR-1 Exports",
        description:
          "Express backend orchestrates multi-tenant transactions in PostgreSQL via Prisma 5.9, verifying integer-paise math integrity, updating customer credit ledgers (Khata), and exporting GSTR-1 compliant CSV reports.",
      },
    ],

    keyFeatures: [
      {
        title: "Bi-Directional Delta Batch Sync Engine",
        description:
          "Synchronizes data between edge SQLite databases and central PostgreSQL via HTTP batch endpoints (/sync/push and /sync/pull), transferring only delta modifications since the client's last synchronization timestamp.",
      },
      {
        title: "Integer-Paise Financial Math Engine",
        description:
          "Eliminates IEEE-754 floating-point rounding errors by calculating and storing all monetary values strictly in integer paise (e.g. ₹1,250.50 represented as 125050 paise) across shared models, mobile DAOs, and database columns.",
      },
      {
        title: "State-Aware GST Calculation Engine",
        description:
          "Dynamically compares business and customer state codes to split taxes into CGST and SGST for intra-state transactions (preventing 1-paise rounding leaks with asymmetric remainder subtraction) or single IGST for inter-state transactions.",
      },
      {
        title: "Dual Printing Architecture (A4 PDF & 58mm Thermal ESC/POS)",
        description:
          "Generates official Rule-46 compliant A4 Tax Invoices using vector PDF templates alongside high-speed 58mm plain-text ESC/POS receipts formatted with byte-aligned column wrappers for direct counter thermal printing.",
      },
      {
        title: "Khata Customer Credit & Ledger Tracking",
        description:
          "Maintains running balances for wholesale and retail parties with in-place installment settlement, payment history tracking, and automated reminder formatting.",
      },
      {
        title: "Day-End Cash Drawer Reconciliation (Z-Reports)",
        description:
          "Provides shop owners with end-of-shift operational audits, breaking down expected vs. counted drawer cash, UPI collections, and credit bills to eliminate cashier discrepancies.",
      },
      {
        title: "GSTR-1 Compliance & Audit CSV Export",
        description:
          "Generates government-format GSTR-1 CSV exports detailing B2B and B2C sales, HSN/SAC summaries, and document issue series directly from PostgreSQL query aggregates.",
      },
      {
        title: "Shared Domain Monorepo Architecture",
        description:
          "Leverages npm workspaces with @invoice/shared package to enforce unified TypeScript interfaces, validation schemas, and tax calculation formulas identically between Next.js, React Native, and Express.",
      },
    ],

    caseStudy: {
      problem:
        "Indian retail counters and wholesale distributors face frequent internet outages and high counter rush. Traditional cloud billing SaaS solutions lock checkout counters when connectivity drops, causing customer walkouts. Conversely, naive desktop billing software lacks remote multi-device synchronization and produces floating-point rounding discrepancies during GST tax calculations that fail tax audits.",

      solution:
        "InvoiceApp implements an offline-first monorepo architecture combining an edge-first SQLite database (WAL mode) on client terminals with a central PostgreSQL cloud backend. Checkout operations execute with sub-5-second latency 100% offline. When internet is detected, an automated delta batch engine reconciles changes bi-directionally without race conditions, while a shared integer-paise math engine guarantees exact tax precision down to a single paisa.",

      architectureOverview:
        "The system is structured as an npm monorepo (@invoice/shared, apps/web, apps/mobile, apps/server). Client terminals interact with local SQLite DAOs and queue offline mutations. SyncEngine coordinates HTTP delta batches against an Express REST API backed by Prisma 5.9 and PostgreSQL. All currency operations strictly enforce integer paise representations across all tiers.",

      challenges: [
        {
          title: "Offline-First Bi-Directional Delta Synchronization",
          problem:
            "Transmitting full database snapshots over intermittent mobile cellular networks causes excessive bandwidth consumption, high battery drain, and write lock contention in SQLite.",
          solution:
            "Engineered a timestamped delta sync mechanism using is_synced flags and ISO timestamp markers. The client pushes uncommitted rows in atomic batches (/sync/push) and pulls remote changes created since its last known checkpoint (/sync/pull?since=ts), applying changes via idempotent upserts.",
        },
        {
          title: "Eliminating IEEE-754 Floating-Point Financial Discrepancies",
          problem:
            "Standard JavaScript Number types introduce binary floating-point inaccuracies (e.g. 0.1 + 0.2 = 0.30000000000000004), accumulating fractional-rupee errors across multi-item invoices that violate GST Rule-46 compliance.",
          solution:
            "Implemented an Integer-Paise Math Engine within @invoice/shared. All prices, discounts, line totals, and taxes are rounded and stored as integer paise. During 50/50 CGST/SGST splits, the secondary tax is computed as (totalTax - cgst) to prevent 1-paise rounding leaks.",
        },
        {
          title: "Dual Hardware Output: High-Res A4 vs 58mm Plain-Text Thermal",
          problem:
            "Counter cashiers require instantaneous 58mm thermal receipts on low-memory ESC/POS printers, whereas business accountants demand detailed Rule-46 compliant A4 PDFs with tax breakdowns and HSN codes.",
          solution:
            "Developed two dedicated printing pipelines: an HTML/CSS vector engine utilizing expo-print for multi-page A4 PDF documents, and a zero-dependency monospace text formatter that pads strings and generates byte-aligned ESC/POS commands for rapid counter printing.",
        },
      ],
    },
  },
  {
    id: "habit-tracker",
    slug: "habit-tracker",
    title: "Habit Tracker Pro",
    category: "Full-Stack / MERN Architecture",
    featured: true,
    tagline:
      "Consistency tracking, streak calculation algorithms, and progress visualization powered by the MERN stack.",

    shortDescription:
      "A full-stack MERN application engineered for daily habit discipline and long-term consistency. Features interactive goal check-offs, automated daily streak monitoring, dynamic radial progress visualization, weekly performance trend analytics, and authenticated MongoDB user isolation.",

    description:
      "Habit Tracker Pro represents my foundational milestone into full-stack MERN engineering. Built to transform personal consistency into quantifiable data, it coordinates a React Single Page Application with a Node.js/Express REST API and MongoDB. The system calculates continuous habit streaks across midnight boundaries, tracks real-time daily completion percentages, renders weekly performance curves, and guarantees secure, private user sessions using JWT authentication.",

    status: "Active / Deployed",
    image: "/projects/habit-tracker.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
      "REST API",
      "Vercel",
    ],

    techCategories: {
      frontend: [
        "React",
        "React Router",
        "Axios",
        "SVG Progress Gauge",
        "Trend Charting",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Streak Calculation Engine",
        "JWT Authentication",
        "bcrypt",
      ],
      database: ["MongoDB", "Mongoose ODM", "Data Validation"],
      architecture: [
        "Decoupled MERN Architecture",
        "Optimistic State Updates",
        "Protected Route Guards",
      ],
      deployment: [
        "Vercel (Frontend SPA)",
        "Render / Cloud (Express API)",
      ],
    },

    highlights: [
      "Daily Streak Calculation Engine",
      "Dynamic Radial Completion Gauge",
      "Weekly Performance Trend Chart",
      "JWT-Protected User Sessions",
    ],

    architecturePills: [
      { label: "Architecture", value: "Decoupled MERN" },
      { label: "Database", value: "MongoDB (Mongoose)" },
      { label: "Auth", value: "JWT + bcrypt" },
      { label: "Analytics", value: "Daily Streaks & Trends" },
    ],

    links: {
      live: "https://habit-tracker-pro-theta.vercel.app/",
      github: "https://github.com/Prpandav/Habit-Tracker-Pro",
    },

    architectureFlow: [
      {
        phase: "Client Interface",
        title: "Goal Tracking & Visual Feedback",
        description:
          "React Single Page Application renders real-time daily progress rings, interactive checklist toggles, and weekly performance curves with optimistic UI updates.",
      },
      {
        phase: "Express REST Services",
        title: "Habit CRUD & Streak Algorithms",
        description:
          "Node.js/Express backend handles habit CRUD endpoints, token verification middleware, and automated streak evaluation logic that prevents multi-check exploitation.",
      },
      {
        phase: "Database Persistence",
        title: "MongoDB Schemas & Aggregation",
        description:
          "Mongoose models record completion timestamps, calculate ongoing streaks, and aggregate historical completions for performance trend visualization.",
      },
    ],

    keyFeatures: [
      {
        title: "Daily Habit Checklist & Goal Creation",
        description:
          "Intuitive interface for creating, editing, and managing daily habits with instant checkbox toggles and optimistic client-side feedback.",
      },
      {
        title: "Automated Streak Calculation Engine",
        description:
          "Monitors daily completion dates to award continuous streaks (🔥 X Days) while resetting or maintaining counts based on consecutive 24-hour activity.",
      },
      {
        title: "Radial Daily Completion Progress Ring",
        description:
          "Dynamic SVG circular progress ring that calculates real-time completion ratios (e.g. 56% Done across 9 total goals) on the dashboard.",
      },
      {
        title: "Weekly Performance Trend Charting",
        description:
          "Visualizes daily task completion volume across the week (Wed through Mon) with interactive data tooltips showing exact daily counts.",
      },
      {
        title: "JWT-Secured User Isolation",
        description:
          "Stateless JSON Web Token authentication with password hashing via bcrypt ensures each user's habit routines and progress remain strictly confidential.",
      },
      {
        title: "Decoupled MERN Deployment",
        description:
          "Frontend SPA hosted on Vercel communicating with a cloud Node.js/Express REST API backed by MongoDB Atlas.",
      },
    ],

    caseStudy: {
      problem:
        "Building a reliable habit tracking tool requires more than simple checkboxes. Developers must address date-boundary reconciliation across timezones to calculate honest streaks, provide immediate visual progress feedback to keep users motivated, and ensure that authentication and state updates remain synchronous between client and server.",

      solution:
        "Habit Tracker Pro resolves this with a decoupled MERN architecture. The client uses optimistic state toggles and SVG gauges for zero-latency feedback, while the Express API enforces date normalization algorithms that evaluate consecutive calendar days for streak integrity backed by MongoDB persistence.",

      architectureOverview:
        "The architecture separates concerns into a responsive React frontend and a Node.js/Express REST backend. Requests are authenticated via JWT bearer tokens. Habit toggles trigger atomic database updates, updating both daily completion logs and continuous streak fields within MongoDB.",

      challenges: [
        {
          title: "Streak Calculation Logic Across Date Boundaries",
          problem:
            "Naive streak counters increment on every completion regardless of date, causing users to falsely inflate streaks or lose progress due to local timezone discrepancies.",
          solution:
            "Engineered date normalization logic that standardizes completion timestamps to UTC midnight boundaries, verifying consecutive day intervals before incrementing streaks.",
        },
        {
          title: "JWT Authentication State & Protected Route Lifecycle",
          problem:
            "Managing token persistence, automatic session restore on page reloads, and redirecting expired sessions without jarring layout flashes.",
          solution:
            "Built an authentication context provider in React with Axios interceptors that attach bearer tokens to requests and automatically guard private dashboard routes.",
        },
        {
          title: "Optimistic UI Updates with Server State Synchronization",
          problem:
            "Waiting for network responses when checking off a daily goal introduced perceptible lag in progress circle animations.",
          solution:
            "Implemented optimistic state updates in React that immediately update checkbox state and recalculate the radial progress ring, automatically reverting if the API call fails.",
        },
      ],
    },
  },
];

/**
 * Placeholder schema for upcoming projects.
 * Notice: No fabricated claims, metrics, or achievements.
 * These will be populated as real project code is completed.
 */
export const upcomingProjects = [
  {
    id: "aptitude-platform",
    title: "Aptitude Learning Platform",
    category: "Educational System",
    description:
      "Assessment, question bank, and structured technical learning portal.",
    status: "Planned",
  },
  {
    id: "mvc-blog",
    title: "Node/EJS MVC Blog",
    category: "Backend / MVC Architecture",
    description:
      "Classic server-side rendered application demonstrating MVC patterns and authentication.",
    status: "Completed / Archival",
  },
];
