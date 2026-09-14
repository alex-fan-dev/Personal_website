import type { Project } from '../data/projects';
import ProjectCover from './ProjectCover';
import ProjectStatus from './ProjectStatus';

type CompactProjectCardProps = {
  project: Project;
};

function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-emerald-950/15 bg-white/50 shadow-sm shadow-emerald-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-950/40 hover:bg-white/75 hover:shadow-xl hover:shadow-emerald-950/15">
      <ProjectCover project={project} compact />

      <div className="flex min-h-36 flex-1 flex-col p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-lg font-medium leading-6 text-emerald-950">{project.title}</h2>
          {project.status ? <ProjectStatus status={project.status} /> : null}
        </div>

        <p className="mt-3 text-sm leading-5 text-emerald-900/65">
          {project.techStack.length > 0 ? project.techStack.join(' · ') : project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-800/75 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              Live Demo ↗
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-800/75 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default CompactProjectCard;
