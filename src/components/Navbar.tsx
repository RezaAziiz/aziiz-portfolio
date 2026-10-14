import { Languages, Sun, Moon, Download } from "lucide-react";
import cvUrl from "../../Assets/Reza_Maulana_Aziiz_CV_Ind_Java.pdf";
import { usePreferences } from "../contexts/PreferencesContext";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const { language, setLanguage, theme, setTheme } = usePreferences();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" aria-label="Portfolio settings">
      <div className="navbar-controls">
        <button
          className="navbar-button navbar-language"
          type="button"
          onClick={() => setLanguage(language === "en" ? "id" : "en")}
          aria-label={
            language === "en"
              ? "Ganti bahasa ke Bahasa Indonesia"
              : "Switch language to English"
          }
          title={language === "en" ? "Bahasa Indonesia" : "English"}
        >
          <Languages size={18} aria-hidden="true" />
          <span>{language.toUpperCase()}</span>
        </button>
        <button
          className="navbar-button"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? (
            <Sun size={18} aria-hidden="true" />
          ) : (
            <Moon size={18} aria-hidden="true" />
          )}
        </button>
        <a
          className="navbar-button navbar-download"
          href={cvUrl}
          download="Reza_Maulana_Aziiz_CV.pdf"
          aria-label={language === "id" ? "Unduh CV" : "Download CV"}
          title={language === "id" ? "Unduh CV" : "Download CV"}
        >
          <Download size={18} aria-hidden="true" />
          <span>{language === "id" ? "Unduh CV" : "Download CV"}</span>
        </a>

        {/* Profile / Account Dropdown Menu */}
        <div className="navbar-profile-dropdown" ref={dropdownRef}>
          <button
            className="navbar-profile-btn"
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Account menu"
            aria-expanded={dropdownOpen}
          >
            <img
              src="/Assets/Foto_Portfolio_2.png"
              alt="Reza Maulana Aziiz"
              className="navbar-profile-img"
              style={{ imageRendering: "pixelated" } as React.CSSProperties}
            />
          </button>

          {dropdownOpen && (
            <div className="navbar-dropdown-menu">
              <div className="navbar-dropdown-header">
                <img
                  src="/Assets/Foto_Portfolio_2.png"
                  alt="Reza Maulana Aziiz"
                  className="navbar-dropdown-avatar"
                  style={{ imageRendering: "pixelated" } as React.CSSProperties}
                />
                <div>
                  <div className="navbar-dropdown-name">Reza Maulana Aziiz</div>
                  <div className="navbar-dropdown-role">
                    Fullstack Developer
                  </div>
                </div>
              </div>
              <div className="navbar-dropdown-divider" />
              <div className="navbar-dropdown-item">
                <span>Status:</span>{" "}
                <span className="status-online">● Available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
