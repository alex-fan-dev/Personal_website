import { Link } from 'react-router';
import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-emerald-800/70 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
        >
          / Home
        </Link>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          Projects
        </p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
          Selected Projects
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
          A curated collection of things I have built, explored, and refined.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </section>
  );
}

export default Projects;
