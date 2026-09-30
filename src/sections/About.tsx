import { usePreferences } from "../contexts/PreferencesContext";

const About = () => {
  const { copy } = usePreferences();

  return (
    <section id="about" className="about-section">
      {copy.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
};

export default About;
