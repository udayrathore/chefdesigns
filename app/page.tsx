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
      "We will study Chef Designs' business, services, products, audiences, competitors and wider hospitality market context.",
      "This will help us understand what different visitors need to know, what actions they should be able to take and how the website should present the breadth of the business clearly.",
    ],
    deliverable: "Research findings, audience needs and proposed positioning direction.",
  },
  {
    number: "02",
    date: "17 – 23 Sep 2026",
    title: "Wireframing & User Experience",
    duration: "1 week",
    paragraphs: [
      "We will define the sitemap, content hierarchy, navigation, page structure, wireframes and key user flows.",
      "This will determine what information appears where and help hospitality clients, product buyers and trade contacts find relevant information and understand what they can do next.",
    ],
    deliverable: "Proposed sitemap, content structure, wireframes and user-flow definitions.",
  },
  {
    number: "03",
    date: "24 Sep – 7 Oct 2026",
    title: "Visual Design",
    duration: "2 weeks",
    paragraphs: [
      "Once the website structure is established, we will develop the visual direction and responsive interface design in Figma.",
      "Design decisions will consider information hierarchy, readability, navigation, content structure, product presentation, responsive behaviour and visual consistency.",
      "The interface will make the website clear and easy to use while communicating the quality and nature of Chef Designs' work in a distinctive and memorable way.",
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
      "Once the designs are approved, we will proceed with responsive website development, the product catalogue, enquiry and RFQ forms, and the approved content-management functionality.",
      "The website will be deployed to a staging environment for functional, responsive and browser testing, followed by Client review before launch.",
    ],
    deliverable: "Responsive website on a staging environment for testing and Client review.",
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
    title: "Hospitality Services & Consulting",
    paragraphs: ["The website will present Chef Designs' capabilities across the hospitality sector, including:"],
    list: [
      "Hotel interiors",
      "Back-of-house setup",
      "Kitchen planning and setup",
      "Consulting",
      "Kitchen sourcing",
      "Other hospitality services confirmed as part of the project",
    ],
    closingParagraphs: [
      "This area will help potential hospitality clients understand what Chef Designs can help them with and explore relevant capabilities and projects.",
    ],
  },
  {
    number: "02",
    title: "Projects & Experience",
    paragraphs: [
      "Relevant projects and completed work will be presented to help visitors understand Chef Designs' experience and capabilities.",
      "Project information will be organised so visitors can connect the work shown with the services or requirements relevant to them.",
    ],
  },
  {
    number: "03",
    title: "Professional Kitchen Products",
    paragraphs: [
      "The product catalogue will be a practical discovery tool, not simply a list of products. Visitors will be able to browse relevant categories, understand what each product is and identify products that may suit their requirements.",
      "Product pages will present available imagery, specifications and relevant information supplied by Chef Designs, with a clear route to enquire.",
    ],
    list: [
      "Clear product categorisation",
      "Product discovery and information",
      "Product imagery and specifications",
      "Product enquiries and RFQ submission",
    ],
  },
  {
    number: "04",
    title: "Product Enquiries & RFQs",
    paragraphs: [
      "This is not an e-commerce website. There will be no shopping cart, checkout, online payment, automated ordering, customer account system or e-commerce order management.",
      "Visitors can explore products and submit an enquiry or RFQ for products they are interested in. The form can capture relevant contact details and requirements and route the enquiry to the Chef Designs team for a response.",
    ],
  },
  {
    number: "05",
    title: "Trade & White-Label Enquiries",
    paragraphs: [
      "Businesses interested in sourcing products, discussing trade requirements or exploring white-label opportunities will have a clear way to contact Chef Designs.",
      "The website will capture the initial enquiry and relevant requirement without introducing a separate account area or automated workflow.",
    ],
  },
  {
    number: "06",
    title: "Supporting Contact Channels",
    paragraphs: [
      "Clear contact forms will provide the primary routes for service, product, RFQ, trade and white-label enquiries.",
      "WhatsApp may be used as a supporting contact option where it is appropriate for the visitor and enquiry type.",
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
  "Nuxt.js",
  "TailwindCSS",
  "GSAP",
  "MySQL, where applicable",
];

const loaderImages = [
  "/chef-designs-bar-interior.avif",
  "/chef-designs-blue-lounge.avif",
  "/chef-designs-interior-kitchen.avif",
  "/chef-designs-light-lounge.avif",
  "/chef-designs-wood-interior.avif",
];

const support = [
  "ArtWorksIT will recommend, configure and manage the hosting environment required for the website. Hosting for the first 12 months after launch is included in the project fee of ₹3,50,000 + GST.",
  "The proposed scope also includes one month of post-launch bug-fix support for delivered functionality that does not operate as defined in the approved design or scope.",
  "From the second year onwards, hosting and maintenance will be charged at ₹35,000 per year, which is 10% of the proposed project fee.",
  "The annual service includes hosting management, basic website health checks, routine maintenance needed to keep the delivered website and hosting environment operational, and basic troubleshooting related to the delivered website.",
  "Maintenance covers routine upkeep of the delivered website. New features, substantial changes, redesigns, new modules, major integrations and functionality outside the approved scope will be quoted separately.",
];

const terms = [
  {
    title: "Project Deliverables & Code Ownership",
    body: "ArtWorksIT assures that all custom code and design components created for the Client's website will be original and tailored to the project's requirements. Code and documentation will be versioned and securely managed through GitHub, with Client access to code versions and updates as needed. Upon full payment, the Client will own the custom website code, design files and project-specific deliverables created by ArtWorksIT. Third-party software, libraries, frameworks, fonts, plugins, stock assets and other components governed by their own licences are excluded from this ownership. ArtWorksIT reserves the right to showcase the completed project in its portfolio and marketing materials unless otherwise agreed in writing.",
  },
  {
    title: "Confidentiality & Data Security",
    body: "Both parties agree to keep all shared information confidential and will not disclose it to third parties without prior written consent. This provision will remain effective after the project's completion.",
  },
  {
    title: "Client Responsibilities & Project Scope",
    body: "The Client is responsible for providing final content, required business information, product information, product images, specifications and other assets needed for the website. The Client will provide timely feedback, approvals and access to relevant stakeholders for decisions and clarification. Delays in requirements, content, approvals, feedback or other Client dependencies may result in corresponding changes to the project timeline.",
  },
  {
    title: "Payment Terms & Financial Conditions",
    body: "All payments are due Net 7 days from the invoice date, and all prices are exclusive of GST. The project fee includes website hosting for the first 12 months after launch. Any additional third-party cost outside the approved scope will be discussed with the Client before it is incurred. Work will begin once the initial payment is received. If payments are delayed, work may be paused and resumed once outstanding payments are cleared. The website will be scheduled for go-live upon receipt of the applicable go-live stage payment.",
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
    body: "The Client will provide final requirements, business rules, content, product information, product images, specifications and necessary assets, together with timely feedback and approvals. Extensive data entry or migration of product, project or service information is the Client's responsibility unless specifically included in the approved scope. ArtWorksIT will manage hosting, with the first 12 months after launch included in the project fee. From the second year onwards, hosting and maintenance will be available at ₹35,000 per year. New functionality outside the approved scope will be quoted separately.",
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
      <div data-load-wrap className="crisp-loader-overlay" aria-hidden="true">
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
        <p className="masthead-date">31 August 2026</p>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Proposal For</p>
          <h1 data-hero-heading>
            Hospitality<br className="hero-break-mobile" /> Solutions &amp;<br className="hero-break-desktop" /> Professional<br className="hero-break-mobile" /> Kitchen Products website
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
            <p className="lead">Chef Designs is a hospitality solutions business with expertise across services, consulting and professional kitchen products. The proposed website will bring this complete offering together in one clear and accessible digital presence.</p>
            <p>The website is intended to give Chef Designs a credible digital presence, make its full range of capabilities easier to understand and help potential hospitality clients discover how the company may support their requirements.</p>
            <p>It will also organise and present the professional product range so potential buyers, vendors and businesses can find relevant products, review available information and submit product, sourcing, RFQ or white-label enquiries. Across the website, visitors should be able to understand what Chef Designs does and what they can do next.</p>
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
          <p>We will first understand the business, its audiences and the information they need. That understanding will guide the website structure, navigation, content hierarchy, product presentation and visual design.</p>
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

      <section className="section dark-section" id="website">
        <div className="section-index">03 / The Website</div>
        <div className="section-content website-title">
          <h2>The Website</h2>
          <div className="website-summary">
            <p>The proposed website will serve as the digital presence for the complete Chef Designs business, bringing its hospitality services, consulting capabilities, kitchen solutions and professional products together under one clear website.</p>
            <p>Information will be organised around the needs of different visitors without fragmenting the business. People will be able to enter through a relevant service, project, product or enquiry route while still understanding the wider Chef Designs offering.</p>
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
            <span>Website overview</span>
            <h3 id="system-overview-title">One digital presence for the complete business</h3>
          </div>
          <div className="operations-layer">
            <div className="operations-label">
              <span>Business</span>
              <strong>Chef Designs</strong>
              <p>One complete hospitality offering</p>
            </div>
            <div className="website-flow">
              <div className="flow-node flow-customer">
                <span>01</span>
                <strong>Chef Designs</strong>
                <p>Hospitality services, consulting and products</p>
              </div>
              <div className="flow-core">
                <span>Website</span>
                <strong>Complete digital presence</strong>
              </div>
              <div className="flow-branches">
                <div className="flow-node">
                  <span>02</span>
                  <strong>Services &amp; Consulting</strong>
                  <p>Hospitality capabilities</p>
                </div>
                <div className="flow-node">
                  <span>03</span>
                  <strong>Products</strong>
                  <p>Catalogue &amp; discovery</p>
                </div>
                <div className="flow-node">
                  <span>04</span>
                  <strong>Projects &amp; Experience</strong>
                  <p>Relevant work &amp; capabilities</p>
                </div>
                <div className="flow-node">
                  <span>05</span>
                  <strong>Product Enquiries &amp; RFQs</strong>
                  <p>Requirements sent to the team</p>
                </div>
                <div className="flow-node">
                  <span>06</span>
                  <strong>Trade &amp; White-Label</strong>
                  <p>Business enquiries</p>
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
            <p className="boundary-lead">The proposed scope is a corporate website for the complete Chef Designs business, with a structured product catalogue and enquiry functionality. Product and RFQ forms will capture relevant requirements and route them to the Chef Designs team for further discussion. The following are outside the proposed scope:</p>
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
            <p>The proposed payment structure consists of three milestones. Website hosting for the first 12 months after launch is included in this fee. The annual hosting and maintenance fee of ₹35,000 applies only after the first 12 months and is not included in the project total.</p>
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
            <a className="download-link" href="/chef-designs-website-proposal.pdf" download="Chef-Designs-Website-Proposal.pdf" aria-label="Download the Chef Designs website proposal as a PDF">
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
