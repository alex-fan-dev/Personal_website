import type { Project } from '../data/projects';

type ProjectCoverProps = {
  project: Project;
  compact?: boolean;
};

function ProjectCover({ project, compact = false }: ProjectCoverProps) {
  const cover = project.coverImage ? (
      <img
        src={project.coverImage}
        alt={project.title}
        className="block aspect-video w-full object-cover object-top"
      />
  ) : (
    <div
      className={`flex aspect-video items-end overflow-hidden bg-gradient-to-br from-emerald-200/80 via-lime-100/80 to-white/60 ${compact ? 'p-3' : 'p-4 sm:p-5'}`}
    >
      <p
        className={`${compact ? 'text-xs' : 'text-sm'} font-medium uppercase tracking-[0.2em] text-emerald-900/60`}
      >
        {project.coverLabel ?? project.title}
      </p>
    </div>
  );

  if (!project.githubUrl) {
    return cover;
  }

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub`}
      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
    >
      {cover}
    </a>
  );
}

export default ProjectCover;
