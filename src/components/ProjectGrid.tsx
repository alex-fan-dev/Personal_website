import CompactProjectCard from './CompactProjectCard';
import type { Project } from '../data/projects';

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

const projectLayoutClass: Record<Project['layout'], string> = {
  full: 'md:col-span-3',
  half: 'md:col-span-2',
};

function ProjectGrid({ projects, className = 'mt-12' }: ProjectGridProps) {
  return (
    <div className={`${className} grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-6`}>
      {projects.map((project) => (
        <div key={project.slug} className={`${projectLayoutClass[project.layout]} h-full`}>
          <CompactProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
