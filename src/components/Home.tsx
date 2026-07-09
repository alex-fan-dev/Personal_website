function Home() {
    return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-purple-200 to-green-50 text-slate-900">
        <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">
            <div>
                <h1 className="text-8xl font-black leading-none text-white">
                    Vivienne
                    <br />
                    Fan
                </h1>
            </div>
            
            <div className="grid w-96 grid-cols-2 gap-4">
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    Projects
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    About
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    Resume
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    LinkedIn
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    GitHub
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    Email
                </button>
                <button className="col-span-1 border border-slate-800 px-8 py-6 text-3xl">
                    Contact
                </button>
            </div>
    </section>
    </main>
  );
}

export default Home;