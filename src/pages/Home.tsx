import { useState } from 'react';
import { Link } from 'react-router';

type MenuItemSize = 'large' | 'default';

type MenuItem = {
  label: string;
  href: string;
  size?: MenuItemSize;
  className?: string;
  external?: boolean;
};

const menuItems: MenuItem[] = [
  { label: 'Projects', href: '/projects', size: 'large' },
  { label: 'About', href: '/about', size: 'large' },
  { label: 'Email', href: 'mailto:fanweiwei3456@gmail.com', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viviennefan/', external: true },
  { label: 'Download CV', href: '/Vivienne_Fan_CV.pdf', external: true },
];

const menuItemClass =
  'group flex items-end justify-between overflow-hidden rounded-lg border border-emerald-950/15 bg-white/50 p-5 text-left font-medium text-emerald-950 shadow-sm shadow-emerald-950/10 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-950/50 hover:bg-white/80 hover:shadow-xl hover:shadow-emerald-950/15 active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950';

const menuItemSizes: Record<MenuItemSize, string> = {
  large: 'min-h-32 text-2xl sm:col-span-3 sm:min-h-44 sm:p-6 sm:text-3xl',
  default: 'min-h-20 text-lg sm:col-span-2 sm:min-h-24 sm:text-xl',
};

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-14 overflow-hidden px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/25 blur-3xl transition-opacity duration-300 md:block"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-emerald-800/70">
          Portfolio
        </p>
        <h1 className="text-7xl font-semibold leading-[0.9] tracking-tight text-emerald-950 drop-shadow-sm sm:text-8xl lg:text-9xl">
          Vivienne
          <br />
          Fan
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-emerald-900/75 sm:text-xl">
          Building thoughtful digital experiences with clean interfaces,
          practical systems, and a strong eye for detail.
        </p>
      </div>

      <nav aria-label="Portfolio navigation" className="relative z-10 w-full max-w-xl lg:max-w-md">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
          {menuItems.map(({ label, href, size = 'default', className = '', external }) => {
            const itemClass = `${menuItemClass} ${menuItemSizes[size]} ${className}`;
            const content = (
              <>
                <span>{label}</span>
                <span
                  aria-hidden="true"
                  className="text-base text-emerald-700/40 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-950"
                >
                  /
                </span>
              </>
            );

            return external ? (
              <a key={label} href={href} className={itemClass}>
                {content}
              </a>
            ) : (
              <Link key={label} to={href} className={itemClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
    </section>
  );
}

export default Home;
