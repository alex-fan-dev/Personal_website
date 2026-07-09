import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero name="Vivienne" title="Full Stack Developer" />
      <About />
      <Footer />
    </>
  )
}

export default App;