import TechStack from "../components/TechStack";
import { usePreferences } from "../contexts/PreferencesContext";

const Stack = () => {
  const { copy } = usePreferences();

  return (
    <section id="stack" className="stack-section">
      <span className="section-label">{copy.nav.stack}</span>
      <TechStack />
    </section>
  );
};

export default Stack;
