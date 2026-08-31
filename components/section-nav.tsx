const items = [
  ["overview", "Overview"],
  ["process", "Process"],
  ["platform", "Platform"],
  ["boundaries", "Boundaries"],
  ["technical", "Tech Stack"],
  ["timeline", "Pricing"],
  ["support", "Support"],
  ["terms", "Terms"],
];

export function SectionNav() {
  return (
    <nav data-section-dock-init="" aria-label="Proposal sections" className="section-dock">
      <div data-section-dock-pill="" className="section-dock__pill">
        <button data-section-dock-toggle="" aria-label="Open proposal sections" aria-expanded="false" aria-controls="section-dock-list" className="section-dock__toggle">
          <span data-section-dock-label-wrap="" className="section-dock__label-wrap">
            <span className="section-dock__label">
              <span className="section-dock__link-num">01</span>
              <span>Overview</span>
            </span>
          </span>
        </button>
        <div data-section-dock-list="" id="section-dock-list" className="section-dock__list">
          <div data-section-dock-indicator="" className="section-dock__indicator" />
          <ul className="section-dock__items">
            {items.map(([id, label], index) => (
              <li key={id}>
                <a
                  data-section-dock-link=""
                  data-active={index === 0 ? "" : undefined}
                  aria-current={index === 0 ? "location" : undefined}
                  href={`#${id}`}
                  className="section-dock__link"
                >
                  <span className="section-dock__link-num">{String(index + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
