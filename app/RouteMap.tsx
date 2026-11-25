"use client";
import { useEffect, useState } from "react";

const PATH = "M30 190 C 140 30, 300 30, 410 120";

export default function RouteMap() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <svg className="route" viewBox="0 0 440 240" role="img" aria-label="Ruta de vuelo desde Madrid">
      <path className="path" d={PATH} />
      <path className="trail" d={PATH} />
      <circle cx="30" cy="190" r="5" fill="currentColor" />
      <text x="30" y="215">Madrid</text>
      <circle cx="410" cy="120" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <g className="plane" transform={reduced ? "translate(410 120) rotate(35)" : undefined}>
        <path d="M0 -9 L5 6 L0 3 L-5 6 Z" transform="rotate(90)" />
        {!reduced && (
          <animateMotion dur="3.2s" begin=".3s" fill="freeze" rotate="auto" path={PATH} />
        )}
      </g>
    </svg>
  );
}
