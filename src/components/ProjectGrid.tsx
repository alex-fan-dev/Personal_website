import CompactProjectCard from './CompactProjectCard';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

const projectLayoutClass: Record<Project['layout'], string> = {
  full: 'lg:col-span-3',
  half: '',
};

function ProjectGrid({ projects, className = 'mt-12' }: ProjectGridProps) {
  return (
    <div className={`${className} grid grid-cols-1 gap-4 lg:grid-cols-3`}>
      {projects.map((project) => (
        <div key={project.slug} className={`${projectLayoutClass[project.layout]} h-full`}>
          {project.layout === 'half' ? (
            <CompactProjectCard project={project} />
          ) : (
            <ProjectCard project={project} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
