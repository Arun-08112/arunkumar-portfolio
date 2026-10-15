import { useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];
export default function Navbar({ personal, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">AG</span>
          <span>{personal.name}</span>
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {personal.resume && (
            <a
              className="btn btn-primary nav-resume"
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} /> Resume
            </a>
          )}
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
