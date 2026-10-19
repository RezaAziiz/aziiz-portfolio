import { ArrowDown, ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import { experiences } from "../data/experience";
import { localized, workDetails } from "../data/workDetails";
import { projects } from "../data/projects";
import { usePreferences } from "../contexts/PreferencesContext";
import "./WorkDetail.css";

type WorkKind = "project" | "experience";

interface Props {
  route: string;
  onBack: (section: string) => void;
  onOpenDetail: (kind: WorkKind, id: string) => void;
}

const copy = {
  en: {
    project: "Project",
    experience: "Experience",
    backProjects: "Back to projects",
    backExperience: "Back to experience",
    notFound: "This detail page could not be found.",
    overview: "Overview",
    problem: "The problem",
    audience: "Target users",
    solution: "The solution",
    architecture: "System Design & Architecture",
    diagramLabel: "Architecture diagram placeholder",
    decisions: "Architectural Decisions & Request Flow",
    validation: "Validation & Impact",
    imagePlaceholder: "Project image placeholder",
    imageHint: "Replace the placeholder image in src/data/workDetails.ts",
    previous: "Previous",
    next: "Next",
    type: "Type",
    timeline: "Timeline",
    category: "Category",
    role: "Role",
    period: "Period",
    organization: "Organization",
    stack: "Stack",
    moreWork: "More work",
  },
  id: {
    project: "Proyek",
    experience: "Pengalaman",
    backProjects: "Kembali ke proyek",
    backExperience: "Kembali ke pengalaman",
    notFound: "Halaman detail ini tidak ditemukan.",
    overview: "Ringkasan",
    problem: "Masalah",
    audience: "Pengguna sasaran",
    solution: "Solusi",
    architecture: "Desain Sistem & Arsitektur",
    diagramLabel: "Placeholder diagram arsitektur",
    decisions: "Keputusan Arsitektur & Alur Request",
    validation: "Validasi & Dampak",
    imagePlaceholder: "Placeholder gambar proyek",
    imageHint: "Ganti gambar placeholder di src/data/workDetails.ts",
    previous: "Sebelumnya",
    next: "Berikutnya",
    type: "Jenis",
    timeline: "Linimasa",
    category: "Kategori",
    role: "Peran",
    period: "Periode",
    organization: "Organisasi",
    stack: "Teknologi",
    moreWork: "Karya lainnya",
  },
};

const parseRoute = (route: string) => {
  const [kind, id] = route.split("/");
  if ((kind !== "project" && kind !== "experience") || !id) {
    return null;
  }
  return { kind: kind as WorkKind, id };
};

const WorkDetail = ({ route, onBack, onOpenDetail }: Props) => {
  const { language, copy: portfolioCopy } = usePreferences();
  const labels = copy[language];
  const parsed = parseRoute(route);

  if (!parsed) {
    return (
      <main className="work-detail-page">
        <p className="work-detail-missing">{labels.notFound}</p>
        <button className="work-detail-back" onClick={() => onBack("projects")}>
          <ArrowLeft size={15} aria-hidden="true" />
          {labels.backProjects}
        </button>
      </main>
    );
  }

  const { kind, id } = parsed;
  const content = workDetails[`${kind}:${id}`];
  const projectIndex = projects.findIndex((item) => item.id === id);
  const experienceIndex = experiences.findIndex((item) => item.id === id);
  const project = kind === "project" ? projects[projectIndex] : undefined;
  const experience =
    kind === "experience" ? experiences[experienceIndex] : undefined;
  const section = kind === "project" ? "projects" : "experience";
  const otherWork = kind === "project" ? projects : experiences;
  const currentIndex = kind === "project" ? projectIndex : experienceIndex;

  if (!content || (!project && !experience)) {
    return (
      <main className="work-detail-page">
        <p className="work-detail-missing">{labels.notFound}</p>
        <button className="work-detail-back" onClick={() => onBack(section)}>
          <ArrowLeft size={15} aria-hidden="true" />
          {kind === "project" ? labels.backProjects : labels.backExperience}
        </button>
      </main>
    );
  }

  const title =
    project && projectIndex >= 0
      ? portfolioCopy.projects.items[projectIndex]?.title ?? project.title
      : experience && experienceIndex >= 0
        ? portfolioCopy.experience.items[experienceIndex]?.role ?? experience.role
        : "";
  const subtitle =
    project && projectIndex >= 0
      ? portfolioCopy.projects.items[projectIndex]?.subtitle ?? project.subtitle
      : experience
        ? `${experience.company} · ${experience.period}`
        : "";
  const type = project?.category ?? experience?.role ?? "—";
  const tags = project?.tags ?? experience?.tags ?? [];
  const image = content.heroImage;
  const previousIndex = currentIndex - 1;
  const nextIndex = (currentIndex + 1) % otherWork.length;
  const previousTitle =
    previousIndex < 0
      ? null
      : kind === "project"
        ? portfolioCopy.projects.items[previousIndex]?.title ??
          projects[previousIndex]?.title ??
          null
        : portfolioCopy.experience.items[previousIndex]?.role ??
          experiences[previousIndex]?.role ??
          null;
  const nextTitle =
    kind === "project"
      ? portfolioCopy.projects.items[nextIndex]?.title ??
        projects[nextIndex]?.title ??
        ""
      : portfolioCopy.experience.items[nextIndex]?.role ??
        experiences[nextIndex]?.role ??
        "";
  const nextId =
    kind === "project" ? projects[nextIndex]?.id : experiences[nextIndex]?.id;

  return (
    <main className="work-detail-page">
      <div className="work-detail-shell">
        <header className="work-detail-topbar">
          <p className="work-detail-breadcrumb">
            {labels[kind]} <span>/</span> {type}
          </p>
          <button
            className="work-detail-back"
            onClick={() => onBack(section)}
            type="button"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            {kind === "project" ? labels.backProjects : labels.backExperience}
          </button>
        </header>

        <section className="work-detail-hero" aria-labelledby="work-detail-title">
          <p className="work-detail-kind">{labels[kind]}</p>
          <h1 id="work-detail-title">{title}</h1>
          <p className="work-detail-lede">{subtitle}</p>

          <dl className="work-detail-meta">
            <div>
              <dt>{project ? labels.type : labels.role}</dt>
              <dd>{type}</dd>
            </div>
            <div>
              <dt>{project ? labels.timeline : labels.period}</dt>
              <dd>{project ? "—" : experience?.period}</dd>
            </div>
            <div>
              <dt>{project ? labels.category : labels.organization}</dt>
              <dd>{project?.category ?? experience?.company}</dd>
            </div>
          </dl>

          {tags.length > 0 && (
            <div className="work-detail-stack">
              <span>{labels.stack}</span>
              <ul>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <figure className="work-detail-visual">
          {image?.src ? (
            <img
              src={image.src}
              alt={localized(image.alt, language)}
              width="1600"
              height="900"
            />
          ) : (
            <div
              className="work-detail-image-placeholder"
              role="img"
              aria-label={labels.imagePlaceholder}
            >
              <ImageIcon size={28} strokeWidth={1.4} aria-hidden="true" />
              <span>{labels.imagePlaceholder}</span>
              <small>{labels.imageHint}</small>
            </div>
          )}
          <figcaption>
            {image ? localized(image.caption, language) : labels.imagePlaceholder}
          </figcaption>
        </figure>

        <section className="work-detail-section" aria-labelledby="work-detail-overview">
          <h2 id="work-detail-overview">{labels.overview}</h2>
          <div className="work-detail-overview">
            <article>
              <h3>{labels.problem}</h3>
              <p>{localized(content.overview.problem, language)}</p>
            </article>
            <article>
              <h3>{labels.audience}</h3>
              <p>{localized(content.overview.audience, language)}</p>
            </article>
            <article>
              <h3>{labels.solution}</h3>
              <p>{localized(content.overview.solution, language)}</p>
            </article>
          </div>
        </section>

        <section className="work-detail-section" aria-labelledby="work-detail-architecture">
          <h2 id="work-detail-architecture">{labels.architecture}</h2>
          <p className="work-detail-section-intro">
            {localized(content.architecture.introduction, language)}
          </p>
          <div className="work-detail-diagram">
            <div className="work-detail-diagram-heading">
              <span>{labels.diagramLabel}</span>
              <span>EDITABLE FLOW</span>
            </div>
            <div className="work-detail-flow">
              {content.architecture.nodes.map((node, index) => (
                <div className="work-detail-flow-item" key={`${index}-${node.title.en}`}>
                  <article className="work-detail-node">
                    <span className="work-detail-node-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{localized(node.title, language)}</h3>
                    <p>{localized(node.description, language)}</p>
                  </article>
                  {index < content.architecture.nodes.length - 1 && (
                    <>
                      <ArrowRight className="work-detail-flow-arrow" size={18} aria-hidden="true" />
                      <ArrowDown className="work-detail-flow-down" size={18} aria-hidden="true" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="work-detail-decisions">
            <article>
              <h3>{localized(content.architecture.decisionsTitle, language)}</h3>
              <p>{localized(content.architecture.decisions, language)}</p>
            </article>
            <article>
              <h3>{localized(content.architecture.requestFlowTitle, language)}</h3>
              <p>{localized(content.architecture.requestFlow, language)}</p>
            </article>
          </div>
        </section>

        <section className="work-detail-section" aria-labelledby="work-detail-validation">
          <h2 id="work-detail-validation">{labels.validation}</h2>
          <div className="work-detail-metrics">
            {content.validation.metrics.map((metric, index) => (
              <article className="work-detail-metric" key={`${index}-${metric.label.en}`}>
                <h3>{localized(metric.label, language)}</h3>
                <p className="work-detail-metric-value">
                  {metric.value}
                  {metric.unit && <span>{metric.unit}</span>}
                </p>
                <p className="work-detail-metric-note">
                  {localized(metric.note, language)}
                </p>
              </article>
            ))}
          </div>
          <article className="work-detail-protocol">
            <div>
              <h3>{localized(content.validation.protocolTitle, language)}</h3>
              <p>{localized(content.validation.protocol, language)}</p>
            </div>
            <span>VALIDATION / EVIDENCE</span>
          </article>
        </section>

        <nav className="work-detail-pagination" aria-label={labels.moreWork}>
          {previousTitle ? (
            <button
              type="button"
              onClick={() =>
                onOpenDetail(
                  kind,
                  kind === "project"
                    ? projects[previousIndex].id
                    : experiences[previousIndex].id,
                )
              }
              aria-label={`${labels.previous}: ${previousTitle}`}
            >
              <span><ArrowLeft size={14} aria-hidden="true" /> {labels.previous}</span>
              <strong>{previousTitle}</strong>
            </button>
          ) : (
            <span />
          )}
          {nextId && (
            <button
              type="button"
              onClick={() => onOpenDetail(kind, nextId)}
              aria-label={`${labels.next}: ${nextTitle}`}
            >
              <span>{labels.next} <ArrowRight size={14} aria-hidden="true" /></span>
              <strong>{nextTitle}</strong>
            </button>
          )}
        </nav>

        <footer className="work-detail-footer">
          <p>Reza Maulana Aziiz · {new Date().getFullYear()}</p>
          <button type="button" onClick={() => onBack(section)}>
            {kind === "project" ? labels.backProjects : labels.backExperience}
          </button>
        </footer>
      </div>
    </main>
  );
};

export default WorkDetail;
