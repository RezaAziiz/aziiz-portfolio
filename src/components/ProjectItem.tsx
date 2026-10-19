import type { Project } from "../data/projects";

interface Props {
  project: Project;
  translated: { title: string; subtitle: string };
  onOpenDetail: (kind: "project" | "experience", id: string) => void;
}

const ProjectItem = ({ project, translated, onOpenDetail }: Props) => {
  return (
    <a
      className="project-item"
      href={`?detail=project/${encodeURIComponent(project.id)}`}
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        onOpenDetail("project", project.id);
      }}
    >
      {/* Thumbnail placeholder */}
      <div className="project-thumb">
        <div className="project-thumb-placeholder">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="project-info">
        <div className="project-info-title-row">
          <span className="project-info-name">{translated.title}</span>
        </div>

        <p className="project-info-desc">{translated.subtitle}</p>

        <div className="project-info-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
