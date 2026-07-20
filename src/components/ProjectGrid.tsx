import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

const projectLayoutClass: Record<Project['layout'], string> = {
  full: 'lg:col-span-2',
  half: '',
};

function ProjectGrid({ projects, className = 'mt-12' }: ProjectGridProps) {
  return (
    <div className={`${className} grid grid-cols-1 gap-4 lg:grid-cols-2`}>
      {projects.map((project) => (
        <div key={project.slug} className={projectLayoutClass[project.layout]}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
