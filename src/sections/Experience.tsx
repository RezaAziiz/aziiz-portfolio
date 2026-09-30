import { experiences } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";
import { usePreferences } from "../contexts/PreferencesContext";

const Experience = () => {
  const { copy } = usePreferences();

  return (
    <section id="experience" className="experience-section">
      <span className="section-label">{copy.experience.title}</span>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={exp.id}
          experience={exp}
          translated={copy.experience.items[index]}
        />
      ))}
    </section>
  );
};

export default Experience;
