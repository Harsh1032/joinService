import React from "react";

/**
 * Props:
 * - text: string to repeat
 * - bg: background color
 * - color: text color
 * - height: css height (e.g. "44px")
 * - speed: seconds per loop
 * - gap: space between repeats
 * - uppercase: boolean
 * - sticky: boolean -> makes the banner sticky at the very top
 * - zIndex: string -> CSS z-index when sticky (default "60")
 */
export default function MarqueeBanner({
  text = "Connected Stroke Care. For Patients. For Families. For Life.",
  bg = "#E8F1FF",          // light blue like your screenshot
  color = "#1E56D9",       // blue text
  height = "44px",
  speed = 20,
  gap = "3rem",
  uppercase = true,
  sticky = false,
  zIndex = "60",
}) {
  const items = Array.from({ length: 8 }).map((_, i) => (
    <span className="marquee__item" key={i} aria-hidden={i !== 0}>
      {text}
    </span>
  ));

  return (
    <div
      className={`marquee ${sticky ? "sticky top-0" : ""}`}
      style={{
        "--marquee-bg": bg,
        "--marquee-color": color,
        "--marquee-h": height,
        "--marquee-speed": `${speed}s`,
        "--marquee-gap": gap,
        ...(sticky ? { zIndex } : {}),
      }}
    >
      <div className={`marquee__track ${uppercase ? "uppercase" : ""}`}>
        {items}
        {items}
      </div>

      <style>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--marquee-bg);
          height: var(--marquee-h);
        }
        .marquee__track {
          display: flex;
          align-items: center;
          height: 100%;
          gap: var(--marquee-gap);
          white-space: nowrap;
          color: var(--marquee-color);
          font-weight: 700;
          letter-spacing: .02em;
          animation: marquee linear var(--marquee-speed) infinite;
          will-change: transform;
          padding: 0 1rem;
        }
        .marquee__item {
          display: inline-block;
          font-size: clamp(12px, 2.2vw, 16px);
        }
        .marquee:hover .marquee__track { animation-play-state: paused; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track { animation: none; }
        }
      `}</style>
    </div>
  );
}
