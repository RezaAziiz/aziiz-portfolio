import { useEffect, useRef } from "react";

/**
 * Cursor spotlight — radial gradient that follows the mouse.
 * Attaches to .content (right scrollable column) and the full page.
 */
const CursorSpotlight = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = `${e.clientX}px`;
      spotRef.current.style.top  = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={spotRef} className="cursor-spotlight" aria-hidden="true" />
  );
};

export default CursorSpotlight;
