import { useEffect, useState } from "react";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function Page() {
  const [theme, setTheme] = useState("dark");
  const { loading, error, data, retry } = usePortfolio();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  if (loading)
    return (
      <div className="app-status" role="status">
        Loading portfolio from PostgreSQL…
      </div>
    );
  if (error)
    return (
      <div className="app-status" role="alert">
        <h2>Could not load portfolio</h2>
        <p>{error}</p>
        <p>
          Check that Express is running on port 5000 and PostgreSQL is
          connected.
        </p>
        <button className="btn btn-primary" onClick={retry}>
          Try again
        </button>
      </div>
    );
  const { personal, skills, experience, projects, education } = data;
  return (
    <>
      <Navbar
        personal={personal}
        theme={theme}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero personal={personal} />
        <About personal={personal} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
        <Contact personal={personal} />
      </main>
      <Footer personal={personal} />
    </>
  );
}
export default function App() {
  return (
    <PortfolioProvider>
      <Page />
    </PortfolioProvider>
  );
}
