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

function AboutSection() {
  return (
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
          I like learning by building — taking an idea, breaking it into smaller pieces, and figuring
          things out as I go. I'm naturally curious about how things work and enjoy experimenting
          with new technologies, ideas, and ways of solving problems.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
          Outside of tech, I enjoy swimming, surfing, and boxing — although probably not as often as
          this sentence makes it sound.
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
  );
}

export default AboutSection;
