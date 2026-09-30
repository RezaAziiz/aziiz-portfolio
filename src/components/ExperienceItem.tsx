import type { Experience } from "../data/experience";

interface Props {
  experience: Experience;
  translated: { role: string; bullets: string[] };
}

const ExperienceItem = ({ experience, translated }: Props) => {
  return (
    <div className="exp-item">
      <div className="exp-item-header">
        <div className="exp-item-title-block">
          <span className="exp-item-role">{translated.role}</span>
          <span className="exp-item-company">
            <a href={experience.companyUrl} target="_blank" rel="noreferrer">
              {experience.company}
              <svg
                className="ext-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          </span>
        </div>
        <span className="exp-item-date">{experience.period}</span>
      </div>

      <div className="exp-item-desc">
        {translated.bullets.map((bullet) => (
          <p key={bullet}>{bullet}</p>
        ))}
      </div>

      <div className="exp-item-tags">
        {experience.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
