import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LiquidFilter from './components/LiquidFilter';
import Home from './pages/Home';
import Identity from './pages/Identity';
import Thoughts from './pages/Thoughts';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Photography from './pages/Photography';
import Contact from './pages/Contact';
import './styles/white-theme.css';

// Scroll to top on route change, or smoothly to hash targets.
const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LiquidFilter />
      <Navbar />
      <main style={{ paddingTop: 0, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Thoughts />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
