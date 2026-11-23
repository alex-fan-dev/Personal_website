import ProjectGrid from '../ProjectGrid';
import { projects } from '../../data/projects';

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl scroll-mt-20 flex-col px-5 pb-20 pt-12 sm:px-8 sm:pt-14 lg:px-10"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          Projects
        </p>
        <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
          Selected Projects
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
          A curated collection of things I have built, explored, and refined.
        </p>
      </div>

      <ProjectGrid projects={projects} className="mt-8" />
    </section>
  );
}

export default ProjectsSection;
