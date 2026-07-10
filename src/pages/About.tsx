import { Link } from 'react-router';

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

function About() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-14 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
      <div className="max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-emerald-800/70 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
        >
          / Home
        </Link>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          About Me
        </p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
  Building software with{" "}
  <span className="text-emerald-600 italic">curiosity</span>,
  <br />
  learning by doing.
</h1>
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
  );
}

export default About;
