import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import HeroSection from '../components/home/HeroSection';
import OtherWorkSection from '../components/home/OtherWorkSection';
import ProjectsSection from '../components/home/ProjectsSection';

function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <OtherWorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;
