import type { Project } from '../data/projects';

type ProjectStatusProps = {
  status: NonNullable<Project['status']>;
};

const statusClass: Record<ProjectStatusProps['status'], string> = {
  '🟢 Live': 'border-emerald-700/20 bg-emerald-100/70 text-emerald-900',
  '🔵 In Development': 'border-blue-700/20 bg-blue-100/70 text-blue-900',
  Improving: 'border-lime-700/20 bg-lime-100/70 text-lime-900',
  'Coming Soon': 'border-teal-700/20 bg-teal-100/70 text-teal-900',
  Planned: 'border-purple-700/20 bg-purple-100/70 text-purple-900',
};

function ProjectStatus({ status }: ProjectStatusProps) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${statusClass[status]}`}
    >
      {status}
    </span>
  );
}

export default ProjectStatus;
