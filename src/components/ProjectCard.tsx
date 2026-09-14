import { Link } from 'react-router';
import type { Project } from '../data/projects';
import ProjectCover from './ProjectCover';
import ProjectStatus from './ProjectStatus';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const hasContributions = project.contributions && project.contributions.length > 0;
  const hasHiddenMobileDetails =
    project.techStack.length > 3 || (project.contributions?.length ?? 0) > 2;

  return (
    <article className="group mx-auto w-full overflow-hidden rounded-lg border border-emerald-950/15 bg-white/50 shadow-sm shadow-emerald-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-950/40 hover:bg-white/75 hover:shadow-xl hover:shadow-emerald-950/15">
      <ProjectCover project={project} />

      <div className="p-5 pt-6 sm:p-6 sm:pt-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h2 className="text-2xl font-medium text-emerald-950">{project.title}</h2>
          {project.status ? <ProjectStatus status={project.status} /> : null}
        </div>

        <p className="mt-4 leading-7 text-emerald-900/75">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
          {project.techStack.map((tech, index) => (
            <span
              key={tech}
              className={`${index >= 3 ? 'hidden sm:inline-flex' : 'inline-flex'} rounded-full border border-emerald-950/10 bg-white/50 px-3 py-1 text-xs font-medium text-emerald-900/70`}
            >
              {tech}
            </span>
          ))}
        </div>

        {hasContributions ? (
          <div className="mt-5 border-t border-emerald-950/10 pt-4 sm:mt-6 sm:pt-5">
            <h3 className="text-sm font-semibold text-emerald-950">My Contribution</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-900/75">
              {project.contributions?.map((contribution, index) => (
                <li
                  key={contribution}
                  className={`${index >= 2 ? 'hidden sm:flex' : 'flex'} gap-2`}
                >
                  <span aria-hidden="true" className="text-emerald-700/50">
                    /
                  </span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-950/15 bg-white/50 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              {project.demoLabel ?? 'Live Demo ↗'}
            </a>
          ) : project.demoLabel ? (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed rounded-full border border-emerald-950/10 bg-white/35 px-4 py-2 text-sm font-semibold text-emerald-950/45"
            >
              {project.demoLabel}
            </span>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-950/15 bg-white/50 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              {project.githubLabel ?? 'GitHub ↗'}
            </a>
          ) : project.githubLabel ? (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed rounded-full border border-emerald-950/10 bg-white/35 px-4 py-2 text-sm font-semibold text-emerald-950/45"
            >
              {project.githubLabel}
            </span>
          ) : null}

          {hasHiddenMobileDetails ? (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center px-1 py-2 text-sm font-semibold text-emerald-800/75 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 sm:hidden"
            >
              View Details /
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
