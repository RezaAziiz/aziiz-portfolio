import { experiences } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <span className="section-label">Experience</span>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </section>
  );
};

export default Experience;
