import { Link, useParams } from 'react-router';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10">
        <Link
          to="/#projects"
          className="mb-8 inline-flex text-sm font-medium text-emerald-800/70 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
        >
          / Projects
        </Link>
        <h1 className="text-5xl font-semibold tracking-tight text-emerald-950">
          Project not found
        </h1>
      </section>
    );
  }

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10">
      <Link
        to="/#projects"
        className="mb-8 inline-flex text-sm font-medium text-emerald-800/70 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
      >
        / Projects
      </Link>
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
        Case Study
      </p>
      <h1 className="text-6xl font-semibold leading-none tracking-tight text-emerald-950 drop-shadow-sm sm:text-8xl">
        {project.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
        Case study content placeholder. GitHub and Demo links will live here when this page is expanded.
      </p>
    </section>
  );
}

export default ProjectDetail;
