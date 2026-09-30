import { Languages, Sun, Moon, Download } from "lucide-react";
import cvUrl from "../../Assets/Reza_Maulana_Aziiz_CV_Ind_Java.pdf";
import { usePreferences } from "../contexts/PreferencesContext";

const Navbar = () => {
  const { language, setLanguage, theme, setTheme } = usePreferences();

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
      </div>
    </nav>
  );
};

export default Navbar;
