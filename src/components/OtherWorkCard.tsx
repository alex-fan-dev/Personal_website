import type { OtherWorkItem } from '../data/OtherWorkCard';

type OtherWorkCardProps = {
  item: OtherWorkItem;
};

function OtherWorkCard({ item }: OtherWorkCardProps) {
  const { title, description, type, href } = item;

  return (
    <article className="group rounded-lg border border-emerald-950/10 bg-white/40 p-5 shadow-sm shadow-emerald-950/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-950/30 hover:bg-white/65 hover:shadow-md hover:shadow-emerald-950/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {type ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800/60">
              {type}
            </p>
          ) : null}
          <h3 className="mt-2 text-xl font-medium text-emerald-950">{title}</h3>
          {description ? (
            <p className="mt-3 max-w-3xl leading-7 text-emerald-900/70">{description}</p>
          ) : null}
        </div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-950/15 bg-white/45 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:border-emerald-950/40 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
          >
            <span>View</span>
            <span
              aria-hidden="true"
              className="text-emerald-700/45 transition group-hover:translate-x-0.5 group-hover:text-emerald-950"
            >
              /
            </span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default OtherWorkCard;
