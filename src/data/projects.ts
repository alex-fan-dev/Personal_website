export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  layout: 'full' | 'half';
  status?: "🟢 Live" | "Improving" | "Coming Soon" | "Planned";
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
    status: "🟢 Live",
    contributions: [
    "Challenge Pages",
    "API Integration",
    "Frontend Testing",
    "Notification Features",
],
    coverImage: "/images/projects/cityquest-cover.png",

    githubUrl: "https://github.com/UOA-CS732-S1-2026/group-project-shimmering-shrews",

    demoUrl: "https://project-gbq3d.vercel.app/",
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
  
    status: "🟢 Live",
   
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
    status: "Coming Soon",
    coverLabel: 'Booking dashboard',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    summary: 'A personal portfolio built to showcase my projects and experience, while demonstrating my frontend development skills.',
    layout: 'half',
    techStack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS'],
    status: "Improving",
    coverLabel: 'Portfolio homepage',
    coverImage: "/images/projects/personal-website-cover.png"
  },
];
