import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./styles/white-theme.css";

const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Personal = React.lazy(() => import("./personal/Personal"));
const Dreams = React.lazy(() => import("./dreams/Dreams"));

function Layout() {
  const { pathname } = useLocation();
  const dreams = /^\/dreams\/?$/i.test(pathname);
  const personal =
    !dreams &&
    !/^\/(portfolio(?:\/.*)?|work|blogs|identity|thoughts|project|photography|contact)\/?$/.test(
      pathname,
    );
  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle("personal-mode", personal);
    document.documentElement.classList.toggle("dreams-mode", dreams);
    return () =>
      document.documentElement.classList.remove("dreams-mode", "personal-mode");
  }, [dreams, personal]);
  if (personal)
    return (
      <React.Suspense fallback={<div style={{ padding: 40 }}>Opening…</div>}>
        <Personal />
      </React.Suspense>
    );
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
  return (
    <React.Suspense
      fallback={<div style={{ padding: 40 }}>Opening portfolio…</div>}
    >
      <Portfolio />
    </React.Suspense>
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
