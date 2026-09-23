/* Header: Claude logo kiri, Claude Code + ukuran lebih besar di kanan */
const Header = () => {
  return (
    <header className="top-nav">
      {/* Left: Claude logo static — aligned with sidebar */}
      <div className="top-nav-left">
        <img
          src="/claude-logo.svg"
          alt="Claude logo"
          className="top-nav-logo"
          style={{ imageRendering: "pixelated" } as React.CSSProperties}
        />
      </div>

      {/* Right: Claude Code static SVG — centered, bigger */}
      <div className="top-nav-right">
        <div className="top-nav-center">
          <img
            src="/claudecode.svg"
            alt="Claude Code"
            className="top-nav-claudecode"
            style={{ imageRendering: "pixelated" } as React.CSSProperties}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
