import { projects } from "../data/projects";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section-header">
        <span className="projects-section-title">Projects</span>
        <span className="projects-section-label">Selected Projects</span>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
