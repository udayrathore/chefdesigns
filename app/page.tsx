/* oxlint-disable next/no-img-element */
import { SectionNav } from "@/components/section-nav";
import { AgencyDetails } from "@/components/agency-details";

const stages = [
  {
    number: "01",
    date: "10 – 16 Sep 2026",
    title: "Research",
    duration: "1 week",
    paragraphs: [
      "We will study Chef Designs' ideal clientele, competitors and the broader market in which the company operates.",
      "This will help us understand how similar businesses position themselves, what works within the category and what opportunities exist for the proposed website.",
    ],
    deliverable: "Research findings and proposed positioning direction.",
  },
  {
    number: "02",
    date: "17 – 23 Sep 2026",
    title: "Wireframing & User Experience",
    duration: "1 week",
    paragraphs: [
      "We will define the sitemap, page structure, wireframes, user flows and key user journeys.",
      "This will help establish how different audiences should navigate the proposed website and how the service and product sides of the business should work together.",
    ],
    deliverable: "Proposed sitemap, wireframes and user-flow definitions.",
  },
  {
    number: "03",
    date: "24 Sep – 7 Oct 2026",
    title: "Visual Design",
    duration: "2 weeks",
    paragraphs: [
      "Based on the proposed structure and wireframes, we will develop the visual direction and interface design in Figma.",
      "This will cover the proposed website's typography, layout, visual hierarchy, imagery, product presentation and responsive behaviour.",
      "The project includes up to four consolidated rounds of design revisions.",
    ],
    deliverable: "High-fidelity responsive interface designs in Figma.",
  },
  {
    number: "04",
    date: "8 Oct – 10 Nov 2026",
    title: "Development & Testing",
    duration: "4 weeks",
    paragraphs: [
      "Once the proposed designs are confirmed for development, we will proceed with responsive website development, implementation of the product catalogue and enquiry workflows, and the proposed CMS functionality.",
      "The proposed website will be deployed to a staging environment for User Acceptance Testing before launch.",
    ],
    deliverable: "Responsive proposed website on a staging environment for testing.",
  },
];

const scheduleWeeks = ["10 Sep", "17 Sep", "24 Sep", "1 Oct", "8 Oct", "15 Oct", "22 Oct", "29 Oct"];

const scheduleTracks = [
  { number: "01", title: "Research", start: 1, span: 1 },
  { number: "02", title: "Wireframing", start: 2, span: 1 },
  { number: "03", title: "Visual Design", start: 3, span: 2 },
  { number: "04", title: "Development & Testing", start: 5, span: 4 },
];

const scopeItems = [
  {
    number: "01",
    title: "Hospitality Solutions",
    paragraphs: ["The proposed website will showcase Chef Designs' capabilities across:"],
    list: [
      "Hotel interiors",
      "Back-of-house setup",
      "Kitchen planning and setup",
      "Consulting",
      "Kitchen sourcing",
      "Other proposed hospitality services",
    ],
    closingParagraphs: [
      "A dedicated projects and portfolio section will allow Chef Designs to demonstrate relevant work and experience.",
    ],
  },
  {
    number: "02",
    title: "Products & Trade",
    paragraphs: [
      "The proposed website will include a structured catalogue of Chef Designs' professional kitchen products.",
      "Products will be organised into relevant categories, and individual product pages will allow visitors to explore product information, imagery, specifications and other relevant details.",
    ],
    closingParagraphs: [
      "The proposed catalogue is intended to support a large and growing product range.",
    ],
  },
  {
    number: "03",
    title: "RFQ & Product Enquiries",
    paragraphs: [
      "Visitors will be able to explore products and submit enquiries for specific products.",
      "The proposed RFQ flow will allow visitors to identify the products they are interested in and submit their contact details and requirements. These enquiries will be routed to the designated Chef Designs email or inbox.",
      "This is an enquiry-generation system, not an e-commerce system.",
    ],
  },
  {
    number: "04",
    title: "White-Label / Trade Enquiries",
    paragraphs: [
      "The proposed website will provide a clear pathway for vendors and businesses interested in sourcing or white-labelling Chef Designs' products.",
      "Visitors will be able to enquire about relevant products and commercial opportunities directly through the proposed website.",
    ],
  },
  {
    number: "05",
    title: "WhatsApp Integration",
    paragraphs: [
      "WhatsApp is proposed as a supporting enquiry channel at relevant points across the website, particularly for product and general enquiries.",
      "It will remain a supporting touchpoint rather than a visually prominent feature.",
    ],
  },
];

const boundaries = [
  "Shopping cart",
  "Checkout",
  "Online payments",
  "Automated ordering",
  "Inventory management",
  "Customer accounts",
  "E-commerce order management",
];

const technical = [
  "Laravel",
  "TailwindCSS",
  "GSAP",
  "Supporting JavaScript technologies",
];

const loaderImages = [
  "/chef-designs-bar-interior.avif",
  "/chef-designs-blue-lounge.avif",
  "/chef-designs-interior-kitchen.avif",
  "/chef-designs-light-lounge.avif",
  "/chef-designs-wood-interior.avif",
];

const support = [
  "The proposed scope includes one month of post-launch bug-fix support.",
  "Bugs are issues where delivered functionality deviates from the proposed design or proposed scope.",
  "New features, enhancements or additional development are outside the proposed scope and will be scoped separately.",
  "ArtWorksIT proposes to recommend, configure and manage the hosting infrastructure based on the proposed website's load, requirements and assets. The appropriate server environment will be assessed as part of the implementation.",
];

const terms = [
  {
    title: "Project Deliverables & Code Ownership",
    body: "ArtWorksIT assures that all code and design components created for the Client's platform are original and tailored to the project's requirements. Code and documentation will be versioned and securely managed through GitHub, providing Client access to code versions and updates as needed. Upon full payment, the Client will have ownership of the custom website or application code, design files and project-specific deliverables created by ArtWorksIT, excluding third-party software, libraries, frameworks, fonts, plugins, stock assets and other components subject to their respective licences. ArtWorksIT reserves the right to showcase the completed project in its portfolio and marketing materials unless otherwise agreed upon in writing.",
  },
  {
    title: "Confidentiality & Data Security",
    body: "Both parties agree to keep all shared information confidential and will not disclose it to third parties without prior written consent. This provision will remain effective after the project's completion.",
  },
  {
    title: "Client Responsibilities & Project Scope",
    body: "The Client is responsible for providing all necessary project details, business rules, content, vendor information and timely feedback required for the project. The Client will provide timely access to relevant stakeholders for product decisions, approvals and clarification of workflows. Delays in requirements, content, approvals, feedback or other Client dependencies may result in corresponding changes to the project timeline.",
  },
  {
    title: "Payment Terms & Financial Conditions",
    body: "All payments are due Net 7 days from the invoice date, and all prices are exclusive of GST. The total project fee excludes costs for external services that may be required. Work will begin once the initial payment is received. If there are delays in payments, work may be paused temporarily and resumed once outstanding payments are cleared. The platform will be scheduled for go-live upon receipt of the applicable go-live stage payment.",
  },
  {
    title: "Termination, Dispute Resolution & Governing Law",
    body: "Either party may terminate the agreement in the event of a material breach by providing written notice. If terminated, Client agrees to compensate ArtWorksIT for services rendered and any applicable expenses. Disputes will first be addressed through good-faith negotiations. If unresolved, both parties consent to submit to the exclusive jurisdiction of the courts in Bangalore. This Agreement is governed by and construed under the laws of India, with Bangalore courts having exclusive jurisdiction.",
  },
  {
    title: "Modifications & Entire Agreement",
    body: "This document contains the full understanding between the parties and supersedes previous agreements. Any modifications must be in writing and signed by both parties.",
  },
  {
    title: "Assumptions",
    body: "The Client is responsible for providing the final requirements, business rules, content guidelines and necessary assets. Data entry and migration of extensive product, project or service data will be the responsibility of the Client unless specifically included in the proposed scope. Hosting and infrastructure management will be defined as part of the proposed implementation and commercial arrangement. Functionality not explicitly included in the proposed scope may be considered for a subsequent phase.",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <img className={inverse ? "brand-logo inverse" : "brand-logo"} src="/chef-designs-logo-white.svg" alt="Chef Designs logo" width="287" height="72" />;
}

function DeliverableIcon({ stage }: { stage: string }) {
  const paths: Record<string, React.ReactNode> = {
    "01": <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
    "02": <><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18M9 9v11" /></>,
    "03": <><circle cx="12" cy="12" r="9" /><circle cx="8.5" cy="10" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="15.5" cy="10" r="1" /><path d="M12 21c1.7 0 2.4-1.4 1.5-2.6-.7-1 .1-2.4 1.4-2.4H17a4 4 0 0 0 4-4" /></>,
    "04": <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    "05": <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.7 2.7L16.5 9" /></>,
  };

  return <svg className="deliverable-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[stage]}</svg>;
}

export default function Home() {
  return (
    <>
      <div data-load-wrap className="crisp-loader-overlay is--hidden" aria-hidden="true">
        <div className="crisp-loader__wrap">
          <div className="crisp-loader__groups">
            <div className="crisp-loader__group is--duplicate">
              {loaderImages.map((src) => (
                <div className="crisp-loader__single" key={`duplicate-${src}`}>
                  <div className="crisp-loader__media">
                    <img src={src} alt="" className="crisp-loader__cover-img" />
                  </div>
                </div>
              ))}
            </div>
            <div className="crisp-loader__group is--relative">
              {loaderImages.map((src, index) => (
                <div className="crisp-loader__single" key={src}>
                  <div className={index === 2 ? "crisp-loader__media is--scaling is--radius" : "crisp-loader__media"}>
                    <img src={src} alt="" className={index === 2 ? "crisp-loader__cover-img" : "crisp-loader__cover-img is--scale-down"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="crisp-loader__fade" />
          <div className="crisp-loader__fade is--duplicate" />
        </div>
      </div>
      <main>
      <header className="masthead">
        <a className="logo-link" href="#top" aria-label="Chef Designs proposal home"><Logo /></a>
        <p>Proposal</p>
        <p className="masthead-date">31 August 2026</p>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Proposed</p>
          <h1 data-hero-heading>
            Hospitality<br className="hero-break-mobile" /> Solutions &amp;<br className="hero-break-desktop" /> Professional<br className="hero-break-mobile" /> Kitchen Products
          </h1>
        </div>
        <div className="hero-meta">
          <div><span>Prepared by</span><strong>ArtWorksIT</strong></div>
          <div><span>Project start</span><strong>10th September 2026</strong></div>
          <div><span>Project completion</span><strong>10th November 2026</strong></div>
          <div><span>Project timeline</span><strong>2 months</strong></div>
        </div>
      </section>

      <SectionNav />

      <section className="section paper" id="overview">
        <div className="section-index">01 / Project Objective</div>
        <div className="section-content intro-grid">
          <h2>Project Objective</h2>
          <div className="measure">
            <p className="lead">Chef Designs is a hospitality-focused company working across hotel interiors, back-of-house setup, consulting, kitchen solutions and the manufacture and sale of professional kitchen products.</p>
            <p>The proposed website will bring these capabilities together under one umbrella website, allowing Chef Designs to showcase its expertise to hospitality businesses while also presenting its product range to vendors and businesses interested in sourcing and white-labelling these products.</p>
            <p>The proposed website will serve two primary audiences: hospitality businesses looking for Chef Designs&apos; services and expertise, and vendors and businesses interested in sourcing or white-labelling Chef Designs&apos; products.</p>
            <div className="founders-note">
              <span>Client contact</span>
              <p>Vishal Sharma</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-index">02 / Project Scope &amp; Timelines</div>
        <div className="section-content section-heading">
          <h2>Project Scope &amp; Timelines</h2>
          <p>We propose a structured process that brings the service and product sides of Chef Designs together within one clear, responsive website experience.</p>
        </div>
        <div className="timeline-summary">
          <div><span>Proposed project start</span><strong>10th September 2026</strong></div>
          <div><span>Proposed project completion</span><strong>10th November 2026</strong></div>
          <div><span>Project timeline</span><strong>2 months</strong></div>
        </div>
        <div className="parallel-timeline" aria-label="Proposed project schedule from 10 September to 10 November 2026">
          <div className="schedule-scroll">
            <div className="schedule-chart">
              <div className="schedule-corner">Phase</div>
              <div className="schedule-weeks">
                {scheduleWeeks.map((week) => <span key={week}>{week}</span>)}
              </div>
              {scheduleTracks.map((track) => (
                <div className="schedule-row" key={track.number}>
                  <div className="schedule-label"><span>{track.number}</span><strong>{track.title}</strong></div>
                  <div className="schedule-grid" aria-hidden="true">
                    <span className={`schedule-bar track-${track.number}`} style={{ gridColumn: `${track.start} / span ${track.span}` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="schedule-note">The proposed timeline covers research in Week 1, wireframing in Week 2, visual design in Weeks 3 to 4, and development and testing in Weeks 5 to 8.</p>
        </div>
        <div className="stage-list" data-step-timeline-init="" data-step-timeline-activation="0.5">
          <div className="step-timeline__line" data-step-timeline-line=""><div className="step-timeline__fill" data-step-timeline-fill="" /></div>
          {stages.map((stage) => (
            <article className="stage" key={stage.number} data-step-timeline-item="">
              <div className="timeline-marker" data-step-timeline-marker=""><span>{stage.date}</span></div>
              <div className="stage-body step-timeline__content">
                <div className="stage-head"><h3>{stage.title}</h3><p>{stage.duration}</p></div>
                <div className="stage-copy">{stage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                <div className="deliverable"><DeliverableIcon stage={stage.number} /><div><span>Deliverables</span><p>{stage.deliverable}</p></div></div>
                {stage.uat && <div className="uat-note"><span>UAT</span><p>{stage.uat}</p></div>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="platform">
        <div className="section-index">03 / The Website</div>
        <div className="section-content platform-title">
          <h2>The Website</h2>
          <div className="platform-summary">
            <p>The proposed website will bring together two connected sides of Chef Designs&apos; business: hospitality solutions and professional kitchen products.</p>
            <p>It is proposed as a corporate and product catalogue website with enquiry-generation capabilities for hospitality businesses, vendors and trade buyers.</p>
          </div>
        </div>
        <div className="scope-list">
          {scopeItems.map((item) => (
            <article className="scope-item" key={item.number}>
              <span className="scope-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <div className="scope-copy">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {item.list && <ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul>}
                {item.closingParagraphs && <div className="scope-copy scope-closing">{item.closingParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
              </div>
            </article>
          ))}
        </div>
        <div className="system-overview" aria-labelledby="system-overview-title">
          <div className="system-overview-heading">
            <span>System overview</span>
            <h3 id="system-overview-title">The connected business</h3>
          </div>
          <div className="operations-layer">
            <div className="operations-label">
              <span>Business layer</span>
              <strong>Chef Designs</strong>
              <p>Showcases &amp; responds</p>
            </div>
            <div className="ecosystem-flow">
              <div className="flow-node flow-customer">
                <span>01</span>
                <strong>Hospitality Business</strong>
                <p>Explores services &amp; expertise</p>
              </div>
              <div className="flow-core">
                <span>Chef Designs</span>
                <strong>Corporate website &amp; product catalogue</strong>
              </div>
              <div className="flow-branches">
                <div className="flow-node">
                  <span>02</span>
                  <strong>Products</strong>
                  <p>Catalogue &amp; RFQ</p>
                </div>
                <div className="flow-node">
                  <span>03</span>
                  <strong>Trade Buyer</strong>
                  <p>Sourcing &amp; white-labelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blue-section" id="boundaries">
        <div className="section-index">04 / Scope Boundaries</div>
        <div className="section-content boundary-grid">
          <h2 className="sticky-section-heading">Scope Boundaries</h2>
          <div>
            <p className="boundary-lead">The proposed website is primarily intended as a corporate and product catalogue website with enquiry-generation capabilities. The RFQ functionality is intended to capture enquiries and route them to the Chef Designs team for further discussion. The following are outside the proposed scope:</p>
            <ol className="boundary-list">{boundaries.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="section paper" id="technical">
        <div className="section-index">05 / Proposed Tech Stack</div>
        <div className="section-content technical-grid">
          <h2>Proposed Tech Stack</h2>
          <div>
            <ol className="technical-list">
              {technical.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section paper pricing-section" id="timeline">
        <div className="section-index">06 / Pricing &amp; Milestones</div>
        <div className="section-content pricing-layout">
          <div className="pricing-heading">
            <h2>Pricing &amp; Milestones</h2>
            <div className="pricing-summary">
            <p>The total proposed project fee is <strong>₹3,50,000 + GST.</strong></p>
            <p>The proposed payment structure consists of three milestones.</p>
            </div>
          </div>
          <table className="milestone-table">
            <caption className="sr-only">Payment milestones</caption>
            <thead><tr className="table-row table-head"><th>Milestone</th><th>Timeline</th><th>Payment</th></tr></thead>
            <tbody>
              <tr className="table-row"><th>Initiation</th><td>10th September 2026</td><td>₹1,15,500 (33%)</td></tr>
              <tr className="table-row"><th>Design Handoff</th><td>Following completion of visual design</td><td>₹1,15,500 (33%)</td></tr>
              <tr className="table-row"><th>Go-Live</th><td>10th November 2026</td><td>₹1,19,000 (34%)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="section-index">07 / Support &amp; Maintenance</div>
        <div className="section-content support-grid">
          <h2 className="sticky-section-heading">Support &amp; Maintenance</h2>
          <ol className="support-list">{support.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="section terms-section" id="terms">
        <div className="section-index">08 / Terms &amp; Assumptions</div>
        <div className="section-content terms-grid">
          <div className="terms-heading">
            <h2>Terms &amp; Assumptions</h2>
          </div>
          <div className="terms-list">
            {terms.map((term, index) => (
              <details key={term.title}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{term.title}<i aria-hidden="true">+</i></summary>
                <p>{term.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="outro-section" data-section-dock-hide="20">
        <div className="outro-top">
          <div className="outro-top-right">
            <div className="agency-group">
              <img src="/artworksit-logo.png" alt="ArtWorksIT logo" width="828" height="823" />
              <div>
                <a className="agency-name" href="https://artworksit.com" target="_blank" rel="noopener noreferrer">ArtWorksIT</a>
                <AgencyDetails />
              </div>
            </div>
            <a className="download-link" href="#" aria-label="Add proposal PDF before enabling download" title="Add your proposal PDF">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" /></svg>
              <span><small>PDF document</small>Download proposal</span>
            </a>
          </div>
          <div className="signatory-group">
            <img src="/uday-rathore-signature.png" alt="Uday Rathore signature" width="871" height="477" />
            <div className="signatory-details">
              <div>
                <span>Prepared by</span>
                <strong>Uday Rathore</strong>
                <a className="phone-link" href="tel:+918792745204" aria-label="Call Uday Rathore at +91 87927 45204">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.54 3.6.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.18 2.46.54 3.6a1 1 0 0 1-.25 1L6.6 10.8Z" /></svg>
                  <span>+91 87927 45204</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="artworksit-footer-word" data-artworksit-word aria-label="ARTWORKSIT">
          {Array.from("ARTWORKSIT").map((letter, index) => <span key={`${letter}-${index}`} aria-hidden="true">{letter}</span>)}
        </div>
      </section>
      </main>
    </>
  );
}
