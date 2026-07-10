import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

type MenuItemSize = 'large' | 'default';

type MenuItem = {
  label: string;
  href: string;
  size?: MenuItemSize;
  className?: string;
  external?: boolean;
};

const menuItems: MenuItem[] = [
  { label: 'Projects', href: '#projects', size: 'large' },
  { label: 'About', href: '#about', size: 'large' },
  { label: 'Email', href: 'mailto:fanweiwei3456@gmail.com', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viviennefan/', external: true },
  { label: 'Download CV', href: '/Vivienne_Fan_CV.pdf', external: true },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  {
    value: '3',
    label: 'Industry Internships',
  },
  {
    value: '3',
    label: 'Featured Projects',
  },
  {
    value: '1',
    label: "Master's Degree (In Progress)",
  },
  {
    value: '10+',
    label: 'Technologies Used',
  },
];

const contactLinks = [
  { label: 'Email', href: 'mailto:fanweiwei3456@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viviennefan/' },
  { label: 'Download CV', href: '/Vivienne_Fan_CV.pdf' },
];

const menuItemClass =
  'group flex items-end justify-between overflow-hidden rounded-lg border border-emerald-950/15 bg-white/50 p-5 text-left font-medium text-emerald-950 shadow-sm shadow-emerald-950/10 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-950/50 hover:bg-white/80 hover:shadow-xl hover:shadow-emerald-950/15 active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950';

const menuItemSizes: Record<MenuItemSize, string> = {
  large: 'min-h-32 text-2xl sm:col-span-3 sm:min-h-44 sm:p-6 sm:text-3xl',
  default: 'min-h-20 text-lg sm:col-span-2 sm:min-h-24 sm:text-xl',
};

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      <header className="fixed right-4 top-4 z-30 rounded-full border border-emerald-950/15 bg-white/55 px-3 py-2 shadow-sm shadow-emerald-950/10 backdrop-blur sm:right-6 sm:top-6">
        <nav aria-label="Page navigation" className="flex gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-emerald-900/75 transition hover:bg-white/65 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950 sm:text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/25 blur-3xl transition-opacity duration-300 md:block"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 flex-col justify-center gap-14 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
            Portfolio
          </p>
          <h1 className="text-7xl font-semibold leading-[0.9] tracking-tight text-emerald-950 drop-shadow-sm sm:text-8xl lg:text-9xl">
            Vivienne
            <br />
            Fan
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            Building practical software through curiosity,
            continuous learning, and thoughtful design.
          </p>
        </div>

        <nav aria-label="Portfolio navigation" className="w-full max-w-xl lg:max-w-md">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
            {menuItems.map(({ label, href, size = 'default', className = '', external }) => {
              const itemClass = `${menuItemClass} ${menuItemSizes[size]} ${className}`;
              const content = (
                <>
                  <span>{label}</span>
                  <span
                    aria-hidden="true"
                    className="text-base text-emerald-700/40 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-950"
                  >
                    /
                  </span>
                </>
              );

              return (
                <a
                  key={label}
                  href={href}
                  className={itemClass}
                  target={external && href.startsWith('http') ? '_blank' : undefined}
                  rel={external && href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </nav>
      </section>

<section
        id="projects"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 flex-col justify-center px-6 py-20 sm:px-10"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
            Projects
          </p>
          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
            Selected Projects
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            A curated collection of things I have built, explored, and refined.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 flex-col justify-center gap-14 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
            About Me
          </p>
          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
            Building software with{' '}
            <span className="italic text-emerald-600">curiosity</span>,
            <br />
            learning by doing.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            Computer Science graduate currently pursuing a Master of Information Technology
            at the University of Auckland.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            I enjoy building practical software through full-stack development, software
            testing, and continuous learning. I'm particularly interested in creating
            user-focused applications that solve real-world problems.
          </p>
        </div>

        <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-md">
          {stats.map(({ value, label }) => (
            <article
              key={label}
              className="rounded-lg border border-emerald-950/15 bg-white/50 p-6 shadow-sm shadow-emerald-950/10 backdrop-blur"
            >
              <p className="text-5xl font-semibold leading-none tracking-tight text-emerald-950">
                {value}
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-emerald-800/65">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      

      <section
        id="contact"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 flex-col justify-center px-6 py-20 sm:px-10"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
            Contact
          </p>
          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
            Let's build something thoughtful.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            I'm open to software development opportunities, project conversations,
            and collaborations around practical user-focused products.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group flex min-h-24 items-end justify-between rounded-lg border border-emerald-950/15 bg-white/50 p-5 text-left text-xl font-medium text-emerald-950 shadow-sm shadow-emerald-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-950/40 hover:bg-white/75 hover:shadow-xl hover:shadow-emerald-950/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{label}</span>
              <span
                aria-hidden="true"
                className="text-base text-emerald-700/40 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-950"
              >
                /
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
