import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "supost",
    company: "SUpost",
    urls: [
      { label: "Capmus", href: "https://capmus.com/" },
      { label: "SUpost", href: "https://supost.com/" },
    ],
    roles: [
      {
        title: "Full-Stack Developer",
        startDate: "July 2024",
        endDate: "Present",
        descriptions: [
          "Built and deployed multiple full-stack marketplace platforms (Next.js, React, TypeScript, Supabase/PostgreSQL) enabling real-time buying, selling, messaging, and payments across university users.",
          "Architected relational and multi-schema PostgreSQL databases (schemas, RLS, RPCs, indexing) to support secure, scalable operations across different marketplace systems.",
          "Designed and implemented API ecosystem supporting authentication, marketplace operations, messaging, payments, and integrations.",
          "Engineered scalable web architecture (SSR, modular components) to deliver high-performance, production-ready applications.",
          "Developed real-time messaging systems (WebSockets, Supabase Realtime) supporting direct/group chats, read receipts, typing indicators, reactions, and file attachments.",
          "Built search and filtering systems (PostgreSQL Full-Text Search + pagination + caching) improving product discovery and user engagement.",
          "Developed multi-step, type-safe form workflows (Zod, React Hook Form) reducing input errors and improving conversion during listing creation.",
          "Implemented ETL pipelines (Python, SQL, GitHub Actions) and automated data workflows to support data migration, ingestion, and system interoperability.",
          "Integrated third-party APIs and external data sources, enabling seamless data exchange and automation across systems.",
          "Integrated Stripe subscription workflows (checkout, billing, webhooks) and AWS S3 file uploads for secure payments and scalable media handling.",
          "Implemented advanced state management (Zustand, TanStack Query) with caching, optimistic updates, and stale-while-revalidate strategies to reduce API load and improve UX.",
          "Implemented authentication and authorization (JWT, .edu verification, Supabase Auth, RBAC, RLS) ensuring secure and role-based system access.",
          "Built admin and moderation systems (audit logs, spam detection, user controls) improving platform safety and operational control.",
          "Developed analytics and monitoring systems (Google Analytics, Vercel, Sentry) to track user behavior, performance, and system reliability.",
          "Led SEO optimization and technical improvements, improving organic visibility and search performance.",
          "Mentored developers and contributed to agile workflows (sprint planning, code reviews) to improve development velocity and code quality.",
        ],
      },
    ],
  },
  {
    id: "jlabs",
    company: "JLabs",
    roles: [
      {
        title: "Software Engineer",
        startDate: "Dec 2025",
        endDate: "March 2026",
        descriptions: [
          "Developed and maintained features across backend services, admin portals, and mobile apps using React, Laravel, Directus, Flutter, and REST APIs.",
          "Improved payment and subscription workflows by implementing monitoring for failed payments, abandoned checkout detection, and subscription status consistency.",
          "Investigated and resolved production issues across web and mobile platforms, including API timeouts, runtime crashes, and data inconsistencies.",
          "Built internal admin tools and reporting features, including subscription visibility, CSV exports, and admin controls for giveaways, referrals, and user data.",
          "Diagnosed and fixed cross-platform issues affecting web, iOS, and Android users, including mobile UI inconsistencies and network error handling.",
        ],
      },
    ],
  },
  {
    id: "3r-shane",
    company: "3R Shane Rice Mill",
    roles: [
      {
        title: "Full-Stack Developer",
        startDate: "Sept 2024",
        endDate: "Sept 2025",
        descriptions: [
          "Developed a full-stack Inventory Management System with POS integration using Next.js, Prisma ORM, and PostgreSQL, reducing manual data entry errors.",
          "Designed a responsive, role-based UI with Next.js and Tailwind CSS, serving admin, sales, and inventory teams with RBAC for permissions management.",
          "Built a real-time analytics dashboard with Recharts for sales and inventory trend visualization, and created a normalized relational database schema.",
          "Delivered on-premise deployment, Purchase Order module for procurement, and secure token-based user authentication.",
          "Conducted user training for 10+ staff, leading to full system adoption within the first week of deployment.",
        ],
      },
    ],
  },
  {
    id: "neust",
    company: "NEUST",
    url: "https://neust.edu.ph/",
    roles: [
      {
        title: "DevOps (Post-OJT Deployment Support)",
        startDate: "May 2025",
        endDate: "June 2025",
        descriptions: [
          "Led Docker-based deployment of the College Schedule Management App across university departments, configuring environments and resolving backend integration issues.",
          "Delivered training sessions and onboarding workshops for faculty and staff, improving system confidence and adoption across multiple colleges.",
          "Investigated and resolved post-deployment bugs, implemented user-requested enhancements, and improved app usability based on feedback.",
        ],
      },
      {
        title: "Full-Stack Developer",
        startDate: "Jan 2025",
        endDate: "May 2025",
        descriptions: [
          "Initiated and led development of the College Schedule Management App beyond official OJT scope, collaborating with department heads and faculty.",
          "Built the application using Next.js, Flask, and PostgreSQL, enabling automated conflict detection for course and classroom scheduling.",
          "Implemented RBAC for administrators, faculty, and staff, and developed backend logic for detecting time/room overlaps with optimized queries.",
          "Translated Figma-based UI designs into a responsive frontend using Tailwind CSS, and delivered complete technical documentation and deployment-ready package.",
        ],
      },
      {
        title: "IT Support Intern",
        startDate: "Jan 2025",
        endDate: "May 2025",
        descriptions: [
          "Provided first-level technical support to students, faculty, and staff, resolving software, hardware, and network-related issues across campus.",
          "Configured and maintained desktop workstations and lab environments, and supported academic events with AV setup and real-time troubleshooting.",
        ],
      },
    ],
  },
];
