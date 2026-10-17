import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import LiquidFilter from "../components/LiquidFilter";
import Home from "./Home";
import Identity from "./Identity";
import Thoughts from "./Thoughts";
import Projects from "./Projects";
import Work from "./Work";
import Photography from "./Photography";
import Contact from "./Contact";

// Scroll to top on route change, or smoothly to hash targets.
const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, [hash, pathname]);

  return null;
};

function Portfolio() {
  return (
    <>
      <ScrollToTop />
      <LiquidFilter />
      <Navbar />
      <main style={{ paddingTop: 0, flex: 1 }}>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Thoughts />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/*" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default Portfolio;
