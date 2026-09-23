import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ExternalIcon = () => (
  <svg
    width="12" height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

const ProjectItem = ({ project }: Props) => {
  return (
    <article className="project-item">
      {/* Thumbnail placeholder */}
      <div className="project-thumb">
        <div className="project-thumb-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="project-info">
        <div className="project-info-title-row">
          <span className="project-info-name">
            {project.title}
          </span>
          <div className="project-info-links">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-ext-link" onClick={(e) => e.stopPropagation()}>
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <p className="project-info-desc">{project.subtitle}</p>

        <div className="project-info-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
