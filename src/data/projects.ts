export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  layout: 'full' | 'half';
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
    layout: 'full',
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
    slug: 'pokemon-storage-system',
    title: 'Pokémon Storage System',
    summary: 'A full-stack Pokémon storage manager featuring drag-and-drop interactions, cross-box transfers, and a RESTful backend built with React, Express, and MongoDB.',
    layout: 'full',
    techStack: ['React', 
      'Express',
      'MongoDB',
      
    ],
  
    status: "Completed",
   
    coverImage: "/images/projects/pokemon-storage-system-cover.png",

    githubUrl: "https://github.com/alex-fan-dev/pokemon-box-storage-system",
    demoUrl: "https://pokemon-box-phi.vercel.app",
  },
  {
    slug: 'appointment-system',
    title: 'Appointment System',
    summary: 'A scheduling workflow concept for booking, managing, and reviewing appointments.',
    layout: 'half',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: "Planned",
    coverLabel: 'Booking dashboard',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    summary: 'A minimal portfolio with a unified green visual system and simple project storytelling.',
    layout: 'half',
    techStack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS'],
    status: "In Progress",
    coverLabel: 'Portfolio homepage',
  },
];
