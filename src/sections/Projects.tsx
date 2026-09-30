import { projects } from "../data/projects";
import ProjectItem from "../components/ProjectItem";
import { usePreferences } from "../contexts/PreferencesContext";

const Projects = () => {
  const { copy } = usePreferences();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section-header">
        <span className="projects-section-title">{copy.projects.title}</span>
        <span className="projects-section-label">{copy.projects.selected}</span>
      </div>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          translated={copy.projects.items[index]}
        />
      ))}
    </section>
  );
};

export default Projects;
