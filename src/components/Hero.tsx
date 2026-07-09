import Button from './Button';

type HeroProps = {
  name: string;
  title: string;
};
function Hero({name, title}: HeroProps) {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center">
      <h1>Hello, I'm {name}!👋</h1>
      <h2>{title}</h2>
      <p>
        Passionate about software development, web technologies, and building practical solutions.
      </p>
      <div className="flex gap-4 mt-4">
        <Button text="Download CV" />
        <Button text="Contact Me" />
      </div>
    </section>
  );
}

export default Hero;