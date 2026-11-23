const contactLinks = [
  { label: 'Email', href: 'mailto:fanweiwei3456@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viviennefan/' },
  { label: 'Download CV', href: '/Vivienne_FAN_CV.pdf' },
];

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 flex-col justify-center px-6 py-20 sm:px-10"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          Contact
        </p>
        <h2 className="text-5xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-6xl">
          Let's build something thoughtful.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
          I'm open to software development opportunities, project conversations,
          and collaborations around practical user-focused products.
        </p>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {contactLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="group flex min-h-24 items-end justify-between rounded-lg border border-emerald-950/15 bg-white/50 p-5 text-left text-xl font-medium text-emerald-950 shadow-sm shadow-emerald-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-950/40 hover:bg-white/75 hover:shadow-xl hover:shadow-emerald-950/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span>{label}</span>
            <span
              aria-hidden="true"
              className="text-base text-emerald-700/40 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-950"
            >
              /
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
