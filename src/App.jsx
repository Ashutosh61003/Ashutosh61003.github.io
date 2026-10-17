import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LiquidFilter from "./components/LiquidFilter";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Identity from "./pages/Identity";
import Thoughts from "./pages/Thoughts";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import "./styles/white-theme.css";

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

const Dreams = React.lazy(() => import("./dreams/Dreams"));

function Layout() {
  const { pathname } = useLocation();
  const dreams = /^\/dreams\/?$/i.test(pathname);
  const personal = pathname === "/" || /^\/story\/?$/.test(pathname);
  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle("personal-mode", personal);
    document.documentElement.classList.toggle("dreams-mode", dreams);
    return () => document.documentElement.classList.remove("dreams-mode", "personal-mode");
  }, [dreams, personal]);
  if (personal) return <><ScrollToTop />{pathname === "/" ? <Landing /> : <Story />}</>;
  if (dreams)
    return (
      <React.Suspense
        fallback={
          <div style={{ padding: 40, color: "#292724" }}>Opening Dreams…</div>
        }
      >
        <Dreams />
      </React.Suspense>
    );
  return <Portfolio />;
}

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
