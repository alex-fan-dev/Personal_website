import { Link } from 'react-router';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

const statusClass: Record<NonNullable<Project['status']>, string> = {
  Completed: 'border-emerald-700/20 bg-emerald-100/70 text-emerald-900',
  'In Progress': 'border-lime-700/20 bg-lime-100/70 text-lime-900',
  Planned: 'border-teal-700/20 bg-teal-100/70 text-teal-900',
};

function ProjectCard({ project }: ProjectCardProps) {
  const hasContributions = project.contributions && project.contributions.length > 0;

  return (
    <article className="group overflow-hidden rounded-lg border border-emerald-950/15 bg-white/50 shadow-sm shadow-emerald-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-950/40 hover:bg-white/75 hover:shadow-xl hover:shadow-emerald-950/15">
      {project.coverImage ? (
        <img
          src={project.coverImage}
          alt={project.title}
          className="block h-auto w-full"
        />
      ) : (
        <div className="flex aspect-[16/7] items-end overflow-hidden bg-gradient-to-br from-emerald-200/80 via-lime-100/80 to-white/60 p-5">
          <div className="flex w-full items-end gap-4">
            {project.coverLabel ? (
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-900/60">
                {project.coverLabel}
              </p>
            ) : (
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-900/60">
                {project.title}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="p-6 pt-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h2 className="text-2xl font-medium text-emerald-950">{project.title}</h2>
          {project.status ? (
            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusClass[project.status]}`}
            >
              {project.status}
            </span>
          ) : null}
        </div>

        <p className="mt-4 leading-7 text-emerald-900/75">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-950/10 bg-white/50 px-3 py-1 text-xs font-medium text-emerald-900/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasContributions ? (
          <div className="mt-6 border-t border-emerald-950/10 pt-5">
            <h3 className="text-sm font-semibold text-emerald-950">My Contribution</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-900/75">
              {project.contributions?.map((contribution) => (
                <li key={contribution} className="flex gap-2">
                  <span aria-hidden="true" className="text-emerald-700/50">
                    /
                  </span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-950/15 bg-white/50 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              Live Demo ↗
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-950/15 bg-white/50 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              GitHub ↗
            </a>
          ) : null}

          {!project.demoUrl && !project.githubUrl ? (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex rounded-full border border-emerald-950/15 bg-white/50 px-4 py-2 text-sm font-semibold text-emerald-950 transition group-hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              View Case Study /
            </Link>
          ) : null}
        </div>
      </div>

    </article>
  );
}

export default ProjectCard;
