import { useEffect, useState } from "react";

interface Props {
  onDone: () => void;
}

const SplashScreen = ({ onDone }: Props) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // After 2s start fade out, then call onDone after 600ms transition
    const fadeTimer = setTimeout(() => setFading(true), 4000);
    const doneTimer = setTimeout(() => onDone(), 4600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash${fading ? " splash--fade" : ""}`}>
      <div className="splash-row">
        {/* Claude logo — left */}
        <img
          src="/claude-logo.svg"
          alt="Claude logo"
          className="splash-logo"
          style={{ imageRendering: "pixelated" } as React.CSSProperties}
        />

        {/* Loading dots — middle */}
        <img
          src="/loading-dots.svg"
          alt="Loading"
          className="splash-dots"
        />

        {/* Claude Code character — right */}
        <ClaudeCodePixel />
      </div>
    </div>
  );
};

/* Inline pixel-art Claude Code — crisp at any size */
const ClaudeCodePixel = () => (
  <svg
    viewBox="-4 -4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="splash-claudecode"
    style={{ imageRendering: "pixelated", shapeRendering: "crispEdges" } as React.CSSProperties}
  >
    <style>{`
      .s-state { opacity: 0; animation-duration: 6s; animation-iteration-count: infinite; }
      #s-front   { animation-name: s-show-front; }
      #s-side    { animation-name: s-show-side; }
      #s-laptop  { animation-name: s-show-laptop; }
      @keyframes s-show-front {
        0%,19.99%{opacity:1} 20%,84.99%{opacity:0} 85%,100%{opacity:1}
      }
      @keyframes s-show-side {
        0%,19.99%{opacity:0} 20%,24.99%{opacity:1} 25%,44.99%{opacity:0}
        45%,84.99%{opacity:1} 85%,100%{opacity:0}
      }
      @keyframes s-show-laptop {
        0%,24.99%{opacity:0} 25%,44.99%{opacity:1} 45%,100%{opacity:0}
      }
      #s-move { animation: s-gerak 6s infinite; }
      @keyframes s-gerak {
        0%,15%{transform:translate(0,0);animation-timing-function:ease-out}
        20%{transform:translate(-2px,-3px);animation-timing-function:ease-in}
        25%,45%{transform:translate(-4px,0);animation-timing-function:ease-out}
        52%{transform:translate(0,-3px);animation-timing-function:ease-in}
        60%,80%{transform:translate(4px,0);animation-timing-function:ease-out}
        85%{transform:translate(2px,-3px);animation-timing-function:ease-in}
        90%,100%{transform:translate(0,0)}
      }
      #s-dir { transform-origin:12px 12px; animation:s-flip 6s infinite; }
      @keyframes s-flip {
        0%,51.99%{transform:scaleX(1)} 52%,100%{transform:scaleX(-1)}
      }
      .s-blink { animation:s-b 3s infinite; }
      @keyframes s-b {
        0%,45%{opacity:1} 45.1%,50%{opacity:0} 50.1%,100%{opacity:1}
      }
      .s-tl { animation:s-type 0.2s infinite; }
      .s-tr { animation:s-type 0.2s infinite 0.1s; }
      @keyframes s-type {
        0%,49.99%{transform:translateY(0)} 50%,100%{transform:translateY(2px)}
      }
    `}</style>
    <g id="s-move">
      <g id="s-front" className="s-state">
        <path d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z" fill="#D97757" />
      </g>
      <g id="s-side" className="s-state">
        <g id="s-dir">
          <rect x="5" y="5" width="14" height="11" fill="#D97757" />
          <rect x="2" y="8" width="3" height="4" fill="#D97757" />
          <rect x="19" y="11" width="3" height="4" fill="#D97757" />
          <rect x="5" y="16" width="2" height="4" fill="#D97757" />
          <rect x="9" y="16" width="2" height="4" fill="#D97757" />
          <rect x="13" y="16" width="2" height="4" fill="#D97757" />
          <rect x="17" y="16" width="2" height="4" fill="#D97757" />
          <rect x="7" y="10" width="3" height="1" fill="#000" />
          <rect x="14" y="9" width="2" height="2" fill="#000" className="s-blink" />
        </g>
      </g>
      <g id="s-laptop" className="s-state">
        <rect x="4" y="6" width="14" height="11" fill="#D97757" />
        <rect x="4" y="17" width="2" height="2" fill="#D97757" /><rect x="5" y="19" width="2" height="2" fill="#D97757" />
        <rect x="8" y="17" width="2" height="2" fill="#D97757" /><rect x="9" y="19" width="2" height="2" fill="#D97757" />
        <rect x="12" y="17" width="2" height="2" fill="#D97757" /><rect x="13" y="19" width="2" height="2" fill="#D97757" />
        <rect x="16" y="17" width="2" height="2" fill="#D97757" /><rect x="17" y="19" width="2" height="2" fill="#D97757" />
        <rect x="6" y="9" width="2" height="2" fill="#000" /><rect x="13" y="9" width="2" height="2" fill="#000" />
        <rect x="18" y="20" width="6" height="1" fill="#888" />
        <rect x="22" y="18" width="1" height="2" fill="#888" /><rect x="23" y="16" width="1" height="2" fill="#888" />
        <rect x="24" y="14" width="1" height="2" fill="#888" />
        <g className="s-tl"><rect x="15" y="16" width="3" height="2" fill="#D97757" /><rect x="18" y="18" width="2" height="2" fill="#D97757" /></g>
        <g className="s-tr"><rect x="19" y="15" width="2" height="3" fill="#D97757" /><rect x="21" y="18" width="2" height="2" fill="#D97757" /></g>
      </g>
    </g>
  </svg>
);

export default SplashScreen;
