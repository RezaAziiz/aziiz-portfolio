import { useState, useCallback } from "react";
import "./index.css";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashDone = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      <div className={`app${splashDone ? " app--visible" : " app--hidden"}`}>
        {/* Two-column layout: sidebar kiri statis, content kanan scroll */}
        <Sidebar />
        <main className="content">
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
