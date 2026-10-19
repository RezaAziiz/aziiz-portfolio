import { useState, useCallback, useEffect } from "react";
import "./index.css";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import { PreferencesProvider } from "./contexts/PreferencesContext";
import WorkDetail from "./components/WorkDetail";

type WorkKind = "project" | "experience";

const getDetailRoute = () => new URLSearchParams(window.location.search).get("detail");

function App() {
  const [detailRoute, setDetailRoute] = useState(getDetailRoute);
  const [splashDone, setSplashDone] = useState(() => getDetailRoute() !== null);
  const handleSplashDone = useCallback(() => setSplashDone(true), []);

  useEffect(() => {
    const syncDetailRoute = () => setDetailRoute(getDetailRoute());
    window.addEventListener("popstate", syncDetailRoute);
    return () => window.removeEventListener("popstate", syncDetailRoute);
  }, []);

  useEffect(() => {
    if (detailRoute) return;

    const section = window.location.hash.slice(1);
    if (section) {
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({ block: "start" });
      });
    }
  }, [detailRoute]);

  const handleOpenDetail = useCallback((kind: WorkKind, id: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("detail", `${kind}/${id}`);
    url.hash = "";
    window.history.pushState(null, "", `${url.pathname}${url.search}`);
    setDetailRoute(`${kind}/${id}`);
  }, []);

  const handleBackToPortfolio = useCallback((section: string) => {
    window.history.pushState(null, "", `${window.location.pathname}#${section}`);
    setDetailRoute(null);
    setSplashDone(true);
  }, []);

  return (
    <PreferencesProvider>
      {detailRoute ? (
        <WorkDetail
          route={detailRoute}
          onBack={handleBackToPortfolio}
          onOpenDetail={handleOpenDetail}
        />
      ) : (
        <>
          {!splashDone && <SplashScreen onDone={handleSplashDone} />}
          <div className={`app${splashDone ? " app--visible" : " app--hidden"}`}>
            <Navbar />
            <Sidebar />
            <main className="content">
              <About />
              <Experience onOpenDetail={handleOpenDetail} />
              <Projects onOpenDetail={handleOpenDetail} />
              <Stack />
              <Contact />
            </main>
          </div>
        </>
      )}
    </PreferencesProvider>
  );
}

export default App;
