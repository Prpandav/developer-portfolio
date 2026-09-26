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
        "Mov2nigh addresses this with a dual-pipeline architecture: a lightweight WebSocket signaling layer for synchronized state events, paired with a server-side Mediasoup Selective Forwarding Unit (SFU). For YouTube, the host broadcasts authoritative play/pause/seek events to guests. For local media and screen sharing, the host streams a single media track to the SFU, which efficiently forwards RTP packets to all connected room participants with sub-second latency.",

      architectureOverview:
        "The system separates state signaling from heavy media transport. Express and Socket.IO manage room lifecycles, user authentication (JWT), chat persistence in MongoDB, and playback coordination. Mediasoup SFU handles high-bandwidth WebRTC audio/video routing via dedicated worker threads, ensuring encrypted DTLS-SRTP transport and optimal CPU efficiency.",

      technicalImplementation: [
        {
          heading: "Authoritative Host-Guest Playback Model",
          content:
            "To prevent conflicting playback instructions and infinite feedback loops, playback commands (play, pause, seek) are validated on the backend. Guests only receive state reconciliation directives; if a guest attempts to manipulate synchronized controls, the interface provides clear host-only feedback without sending unauthorized socket events.",
        },
        {
          heading: "Mediasoup SFU WebRTC Pipeline",
          content:
            "Using mediasoup-client and Mediasoup server workers, the host establishes a WebRTC transport to publish local media or screen capture tracks. The server router assigns consumers for each connected guest, transmitting RTP media packets with minimal latency and eliminating the need to store video files on disk.",
        },
        {
          heading: "Client-Side Drift Correction",
          content:
            "The client player monitors elapsed time against host periodic synchronization pulses (`video_sync`). Minor differences (< 1.5 seconds) are tolerated to prevent jarring micro-stutters, while substantial divergence triggers a discrete seek to re-align playback seamlessly.",
        },
        {
          heading: "Room Lifecycle & State Persistence",
          content:
            "MongoDB stores user records, room configurations, and recent chat history. Socket.IO room management tracks active participant presence, handling connection drops and restoring context when participants reconnect or join late.",
        },
      ],

      challenges: [
        {
          title: "YouTube Player Re-render and Seek Loops",
          problem:
            "Initial implementations suffered from player jumping or restarting when state updates caused React components to remount or issue redundant seekTo() calls.",
          solution:
            "Isolated drift correction into a single player controller component, decoupled state updates from component keys (ensuring currentTime is never used as a component key), and implemented an idempotency threshold before executing seek operations.",
        },
        {
          title: "Streaming Local Media Without Server Uploads",
          problem:
            "Users wanted to watch personal video files without waiting for lengthy cloud uploads or risking file persistence on a third-party server.",
          solution:
            "Leveraged HTML5 captureStream() on the host's local video element to produce a WebRTC MediaStream, routing it directly through the Mediasoup SFU to distribute it in real time to peers.",
        },
        {
          title: "WebRTC Transport & Firewall Traversal",
          problem:
            "Mediasoup requires dedicated UDP and TCP media port ranges (e.g., 40000-41000) and explicit announced IP configurations for proper ICE candidate exchange in production environments.",
          solution:
            "Documented and configured clear environment separation between local development and production cloud VPS deployments, ensuring correct public IP announcement and DTLS handshake completion.",
        },
      ],

      decisions: [
        {
          decision: "SFU (Selective Forwarding Unit) instead of Mesh WebRTC",
          rationale:
            "A peer-to-peer Mesh topology requires the host to upload separate video tracks to each guest, severely limiting scalability on domestic internet connections. An SFU requires the host to upload only once to the server, which then duplicates and forwards packets to consumers.",
        },
        {
          decision: "Separation of Signaling and Media Transport",
          rationale:
            "Using Socket.IO for signaling (room joining, chat, play/pause commands) leverages battle-tested WebSocket fallbacks and simple JSON messaging, while reserving Mediasoup purely for high-performance audio/video RTP streaming.",
        },
        {
          decision: "Strict Server-Side Host Validation",
          rationale:
            "Validating that incoming playback and producer events originate from the verified room host prevents malicious or accidental playback disruption by room guests.",
        },
      ],

      lessons: [
        "In real-time synchronized applications, strict separation of controller authority is critical to avoiding feedback loops and race conditions.",
        "WebRTC media pipelines require careful lifecycle management of producers and consumers to prevent memory leaks and orphaned network transports.",
        "Drift correction in media players must incorporate hysteresis and deadband thresholds to avoid jarring visual jumps for end users.",
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
    id: "invoice-app",
    title: "Invoice Web & Mobile",
    category: "Full-Stack Application",
    description: "Multi-platform invoicing and billing management system.",
    status: "Planned / In Development",
  },
  {
    id: "dev-battery",
    title: "DEV Lithium Battery Platform",
    category: "Web Application",
    description:
      "Industrial product catalog and technical specification portal.",
    status: "Planned",
  },
  {
    id: "aptitude-platform",
    title: "Aptitude Learning Platform",
    category: "Educational System",
    description:
      "Assessment, question bank, and structured technical learning portal.",
    status: "Planned",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    category: "Productivity Web App",
    description:
      "Consistency tracking with progress visualization and streak monitoring.",
    status: "In Development",
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
