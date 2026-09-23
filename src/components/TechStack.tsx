import { techStack } from "../data/stack";

const TechStack = () => {
  return (
    <div className="stack-grid">
      {techStack.map((tech) => (
        <div key={tech.name} className="stack-item">
          <img src={tech.icon} alt={tech.name} />
          <span className="stack-tooltip">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
