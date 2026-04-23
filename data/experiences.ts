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
          "Architected multi-schema PostgreSQL databases with RLS, RPCs, and indexing to support secure, scalable operations across marketplace systems.",
          "Developed real-time messaging systems (WebSockets, Supabase Realtime) with direct/group chats, read receipts, typing indicators, and file attachments.",
          "Integrated Stripe subscription workflows, AWS S3 uploads, and third-party APIs for payments, media handling, and system interoperability.",
          "Implemented authentication (JWT, .edu verification, Supabase Auth, RBAC, RLS) and built admin/moderation tools for platform safety.",
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
