import { BrowserRouter, Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-gradient-to-br from-emerald-100 via-lime-50 to-green-200 text-emerald-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
