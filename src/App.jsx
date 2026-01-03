import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import LiquidFilter from './components/LiquidFilter';
import ParticleSystem from './components/ParticleSystem';
import Home from './pages/Home';
import Identity from './pages/Identity';
import Thoughts from './pages/Thoughts';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <ParticleSystem />
      <LiquidFilter />
      <Navbar />
      <main style={{ paddingTop: '80px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
