import OtherWorkCard from '../components/OtherWorkCard';
import { otherWork } from '../data/OtherWorkCard';

function OtherWork() {
  if (otherWork.length === 0) {
    return null;
  }

  return (
    <section
      id="other-work"
      className="relative z-10 mx-auto flex w-full max-w-7xl scroll-mt-24 flex-col justify-center px-6 py-20 sm:px-10"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          Other Work
        </p>
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-5xl">
          Supporting Work
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-emerald-900/70 sm:text-lg">
          Additional work that adds context to my project experience.
        </p>
      </div>

      <div className="mt-10 grid gap-3">
        {otherWork.map((item) => (
          <OtherWorkCard key={item.href || item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default OtherWork;
