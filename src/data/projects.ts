export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  status?: "Completed" | "In Progress" | "Planned";
  coverImage?: string;
  coverLabel?: string;
  githubUrl?: string;
  demoUrl?: string;
  contributions?: string[];
};

export const projects: Project[] = [
  {
    slug: 'cityquest',
    title: 'CityQuest',
    summary: 'A location-based challenge platform designed for exploring Auckland.',
    techStack: ['React', 
      'TypeScript', 
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Supabase',
    ],
    status: "Completed",
    contributions: [
    "Challenge Pages",
    "API Integration",
    "Frontend Testing",
    "Notification Features",
],
    coverImage: "/images/projects/cityquest-cover.png"

    // githubUrl: "...",

    // demoUrl: "...",
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    summary: 'A minimal portfolio with a unified green visual system and simple project storytelling.',
    techStack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS'],
    status: "In Progress",
    coverLabel: 'Portfolio homepage',
  },
  {
    slug: 'appointment-system',
    title: 'Appointment System',
    summary: 'A scheduling workflow concept for booking, managing, and reviewing appointments.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: "Planned",
    coverLabel: 'Booking dashboard',
  },
];
