import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen scroll-smooth bg-gradient-to-br from-emerald-100 via-lime-50 to-green-200 text-emerald-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
