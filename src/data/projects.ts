export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  layout: 'full' | 'half';
  status?: "🟢 Live" | "🟡 In Development" | "Improving" | "Coming Soon" | "Planned";
  coverImage?: string;
  coverLabel?: string;
  githubUrl?: string;
  githubLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
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
    slug: 'kindkai',
    title: 'KindKai',
    summary: 'An AI-assisted food-rescue platform for matching surplus food with suitable recipients.',
    layout: 'full',
    techStack: [
      'Python',
      'FastAPI',
      'Google ADK',
      'React',
      'PostgreSQL',
    ],
    status: "🟡 In Development",
    contributions: [
      'Solution Research & Ideation',
      'MVP Scoping',
      'Matching & Rematching Workflow',
      'Prototype Development',
    ],
    coverImage: "/images/projects/KindKai-cover.png",
    demoUrl: '/Videos/kindkai_demo_video.mp4',
    demoLabel: 'Watch Prototype ↗',
    githubUrl: 'https://github.com/Alanho2025/Woolworth_food_waste',
    githubLabel: 'GitHub ↗',
  },
  {
    slug: 'pokemon-storage-system',
    title: 'Pokémon Storage System',
    summary: 'A full-stack storage app for organising Pokémon across multiple boxes.',
    layout: 'half',
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
    slug: 'oddbrew',
    title: 'Oddbrew',
    summary: 'A playful AI experience that turns everyday wishes into magical solutions — with unexpected side effects.',
    layout: 'half',
    techStack: [],
    status: "🟡 In Development",
    coverLabel: 'Oddbrew',
    coverImage: '/images/projects/oddbrew-cover.png',
    githubUrl: 'https://github.com/alex-fan-dev/Oddbrew',
  },
  {
    slug: 'appointment-system',
    title: 'Appointment System',
    summary: 'A booking management system for handling appointments, availability, and reminders.',
    layout: 'half',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: "Coming Soon",
    coverLabel: 'Booking dashboard',
    githubUrl: 'https://github.com/alex-fan-dev/appointment-reminder-system',
  },
];
