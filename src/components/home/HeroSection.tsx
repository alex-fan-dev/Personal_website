import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const skills = ['React', 'TypeScript', 'Software Testing', 'Mobile · Exploring'];

function CursorGlow() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/25 blur-3xl transition-opacity duration-300 md:block"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    />
  );
}

function HeroSection() {
  return (
    <>
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

      <CursorGlow />

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
              <span className="text-emerald-600/60">•</span> Data
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
    </>
  );
}

export default HeroSection;
