const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <span className="section-label" style={{ marginBottom: 0 }}>Contact</span>
        <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>Get In Touch</span>
      </div>

      <div className="contact-card">
        <h2 className="contact-card-title">Let's build something thoughtful.</h2>
        <p className="contact-card-desc">
          Whether you are designing a high-concurrency distributed backend, architecting an end-to-end product, or looking for an engineering partner who values craft and systems design — my inbox is always open.
        </p>

        <div className="contact-buttons">
          <a href="mailto:rezamaulanaziiz@example.com" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            rezamaulanaziiz@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Connect on LinkedIn
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
            </svg>
          </a>
        </div>

        <div className="contact-footer">
          <span>Designed with editorial restraint. Handcrafted code.</span>
          <span>Jakarta, Indonesia · UTC+7</span>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 32 }}>
        Inspired by brittanychiang.com
      </p>
    </section>
  );
};

export default Contact;
