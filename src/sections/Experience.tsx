import { experiences } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";
import { usePreferences } from "../contexts/PreferencesContext";

interface Props {
  onOpenDetail: (kind: "project" | "experience", id: string) => void;
}

const Experience = ({ onOpenDetail }: Props) => {
  const { copy } = usePreferences();

  return (
    <section id="experience" className="experience-section">
      <span className="section-label">{copy.experience.title}</span>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={exp.id}
          experience={exp}
          translated={copy.experience.items[index]}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </section>
  );
};

export default Experience;
