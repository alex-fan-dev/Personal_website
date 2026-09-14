import { useState } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import OtherWork from './OtherWork';
import { projects } from '../data/projects';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  {
    value: '4',
    label: 'Industry Internships',
  },
  {
    value: '2',
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
  { label: 'Download CV', href: '/Vivienne_FAN_CV.pdf' },
];

const skills = ['React', 'TypeScript', 'Software Testing', 'Mobile · Exploring' ];

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
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-14 xl:px-16"
      >
        <div className="grid w-full items-center gap-12 py-12 md:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)] md:gap-8 md:py-14 lg:gap-12 lg:py-16">
          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] md:max-w-[18rem] lg:max-w-[19rem] xl:max-w-[22rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-3 rounded-[2.25rem] border border-emerald-950/10 bg-white/30 shadow-xl shadow-emerald-950/10 backdrop-blur-sm"
            />
            <img
              src="/images/profile.jpg"
              alt="Vivienne Fan by the waterfront"
              className="relative aspect-[3/4] w-full rounded-[2rem] border border-white/60 object-cover shadow-2xl shadow-emerald-950/20"
              fetchPriority="high"
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
              IT STUDENT · SOFTWARE BUILDER
            </p>
            <h1 className="text-6xl font-semibold leading-[0.92] tracking-tight text-emerald-950 drop-shadow-sm sm:text-7xl lg:text-8xl">
              Vivienne Fan
            </h1>
            <p className="mt-6 text-xl font-medium tracking-tight text-emerald-800 sm:text-2xl">
              Full Stack <span className="text-emerald-600/60">•</span> AI{' '}
              <span className="text-emerald-600/60">•</span> Testing
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
              Currently building practical, user-focused software for real-world problems.
            </p>

            <ul aria-label="Core skills" className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-emerald-950/15 bg-white/55 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm shadow-emerald-950/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-950/30 hover:bg-white/75"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="#projects"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-900 hover:shadow-xl hover:shadow-emerald-950/25 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 sm:text-base"
            >
              Explore Projects
              <span aria-hidden="true" className="transition duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl scroll-mt-20 flex-col px-5 pb-20 pt-12 sm:px-8 sm:pt-14 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
            Projects
          </p>
          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
            Selected Projects
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            A curated collection of things I have built, explored, and refined.
          </p>
        </div>

        <ProjectGrid projects={projects} className="mt-8" />
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
            I like learning by building — taking an idea, breaking it into smaller pieces, and figuring things out as I go. I'm naturally curious about how things work and enjoy experimenting with new technologies, ideas, and ways of solving problems.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
            Outside of tech, I enjoy swimming, surfing, and boxing — although probably not as often as this sentence makes it sound.
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

      <OtherWork />

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
