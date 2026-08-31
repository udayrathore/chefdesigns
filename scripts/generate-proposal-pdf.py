#!/usr/bin/env python3
"""Generate the Chef Designs proposal as a print-native PDF.

This document is intentionally composed with ReportLab and does not render or
depend on the website's HTML/CSS.
"""

from pathlib import Path
from shutil import copyfile
from xml.sax.saxutils import escape

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "chef-designs-website-proposal.pdf"
PUBLIC_OUTPUT = ROOT / "public" / "chef-designs-website-proposal.pdf"
HERO_IMAGE = ROOT / "public" / "chef-designs-bar-interior.avif"
AGENCY_LOGO = ROOT / "public" / "artworksit-logo.png"
SIGNATURE = ROOT / "public" / "uday-rathore-signature.png"

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
TOP = 23 * mm
BOTTOM = 18 * mm

INK = colors.HexColor("#15191F")
BLUE = colors.HexColor("#315F8F")
BLUE_LIGHT = colors.HexColor("#DCE7F1")
CREAM = colors.HexColor("#F5F2EC")
WHITE = colors.HexColor("#FFFEFA")
MUTED = colors.HexColor("#66707B")
LINE = colors.HexColor("#D9D5CD")
BROWN = colors.HexColor("#4A3D2E")


pdfmetrics.registerFont(TTFont("Proposal", "/usr/share/fonts/TTF/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("Proposal-Bold", "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf"))


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="DocBody", fontName="Proposal", fontSize=9.2, leading=14.2,
    textColor=INK, spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="Lead", parent=styles["DocBody"], fontSize=12.2, leading=18,
    textColor=INK, spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="SectionLabel", fontName="Proposal-Bold", fontSize=7.3, leading=9,
    textColor=BLUE, tracking=1.4, spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="SectionTitle", fontName="Proposal-Bold", fontSize=27, leading=30,
    textColor=INK, spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="Subhead", fontName="Proposal-Bold", fontSize=14, leading=18,
    textColor=INK, spaceBefore=3, spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="CardTitle", fontName="Proposal-Bold", fontSize=10.3, leading=13,
    textColor=INK, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="Small", fontName="Proposal", fontSize=7.7, leading=11.3,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="SmallBold", fontName="Proposal-Bold", fontSize=7.7, leading=10,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="TinyBlue", fontName="Proposal-Bold", fontSize=6.7, leading=8,
    textColor=BLUE, tracking=0.8,
))
styles.add(ParagraphStyle(
    name="TermTitle", fontName="Proposal-Bold", fontSize=10.2, leading=13,
    textColor=INK, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="TermBody", fontName="Proposal", fontSize=8.4, leading=12.4,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="CoverKicker", fontName="Proposal-Bold", fontSize=8, leading=10,
    textColor=colors.HexColor("#F2D9BD"), tracking=1.8,
))
styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Proposal-Bold", fontSize=30, leading=33,
    textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="CoverMetaLabel", fontName="Proposal-Bold", fontSize=6.4, leading=8,
    textColor=colors.HexColor("#D7C8B8"), tracking=0.8,
))
styles.add(ParagraphStyle(
    name="CoverMetaValue", fontName="Proposal-Bold", fontSize=8.2, leading=10,
    textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="ClosingTitle", fontName="Proposal-Bold", fontSize=29, leading=32,
    textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="ClosingBody", fontName="Proposal", fontSize=10, leading=15,
    textColor=colors.HexColor("#D5D9DE"),
))


STAGES = [
    {
        "number": "01", "date": "10 - 16 Sep 2026", "title": "Research", "duration": "1 week",
        "paragraphs": [
            "We will study Chef Designs' ideal clientele, competitors and the broader market in which the company operates.",
            "This will help us understand how similar businesses position themselves, what works within the category and what opportunities exist for the proposed website.",
        ],
        "deliverable": "Research findings and proposed positioning direction.",
    },
    {
        "number": "02", "date": "17 - 23 Sep 2026", "title": "Wireframing & User Experience", "duration": "1 week",
        "paragraphs": [
            "We will define the sitemap, page structure, wireframes, user flows and key user journeys.",
            "This will help establish how different audiences should navigate the proposed website and how the service and product sides of the business should work together.",
        ],
        "deliverable": "Proposed sitemap, wireframes and user-flow definitions.",
    },
    {
        "number": "03", "date": "24 Sep - 7 Oct 2026", "title": "Visual Design", "duration": "2 weeks",
        "paragraphs": [
            "Based on the proposed structure and wireframes, we will develop the visual direction and interface design in Figma.",
            "This will cover the proposed website's typography, layout, visual hierarchy, imagery, product presentation and responsive behaviour.",
            "The project includes up to four consolidated rounds of design revisions.",
        ],
        "deliverable": "High-fidelity responsive interface designs in Figma.",
    },
    {
        "number": "04", "date": "8 Oct - 10 Nov 2026", "title": "Development & Testing", "duration": "4 weeks",
        "paragraphs": [
            "Once the proposed designs are confirmed for development, we will proceed with responsive website development, implementation of the product catalogue and enquiry workflows, and the proposed CMS functionality.",
            "The proposed website will be deployed to a staging environment for User Acceptance Testing before launch.",
        ],
        "deliverable": "Responsive proposed website on a staging environment for testing.",
    },
]

SCOPES = [
    (
        "01", "Hospitality & Consulting",
        ["The proposed website will showcase Chef Designs' expertise across hospitality interiors, back-of-house planning, kitchen consulting, project execution and related hospitality services.",
         "Visitors will be able to understand individual services, explore the company's capabilities and view relevant projects."],
    ),
    (
        "02", "Kitchen & Hospitality Products",
        ["A dedicated product catalogue will showcase professional kitchen equipment, crockery, boards and other hospitality products.",
         "Products will be organised into clear categories, with individual product pages containing relevant imagery, specifications and product information.",
         "The catalogue will be structured to accommodate new products and categories as the business grows."],
    ),
    (
        "03", "Enquiries & RFQs",
        ["The proposed website is not an e-commerce website. It will not include cart, checkout or online payment functionality.",
         "Visitors will be able to select products they are interested in and submit an RFQ or enquiry to the Chef Designs team.",
         "The team can then respond with relevant pricing, availability and recommendations."],
    ),
    (
        "04", "Trade & White-Label Opportunities",
        ["The proposed website will provide a clear pathway for businesses with product sourcing, trade requirements or white-label opportunities.",
         "Visitors will be able to submit an enquiry and connect directly with the Chef Designs team."],
    ),
    (
        "05", "A Single Platform for the Complete Business",
        ["The proposed website will serve as one cohesive digital presence for the complete Chef Designs business.",
         "It will bring the full range of Chef Designs' capabilities together within one clear information architecture.",
         "Visitors will be able to enter through the service, product or requirement most relevant to them while still understanding the broader scope of the business."],
    ),
]

BOUNDARIES = [
    "Shopping cart", "Checkout", "Online payments", "Automated ordering",
    "Inventory management", "Customer accounts", "E-commerce order management",
]

SUPPORT = [
    "The proposed scope includes one month of post-launch bug-fix support.",
    "Bugs are issues where delivered functionality deviates from the proposed design or proposed scope.",
    "New features, enhancements or additional development are outside the proposed scope and will be scoped separately.",
    "ArtWorksIT proposes to recommend, configure and manage the hosting infrastructure based on the proposed website's load, requirements and assets. The appropriate server environment will be assessed as part of the implementation.",
]

TERMS = [
    ("Project Deliverables & Code Ownership", "ArtWorksIT assures that all code and design components created for the Client's platform are original and tailored to the project's requirements. Code and documentation will be versioned and securely managed through GitHub, providing Client access to code versions and updates as needed. Upon full payment, the Client will have ownership of the custom website or application code, design files and project-specific deliverables created by ArtWorksIT, excluding third-party software, libraries, frameworks, fonts, plugins, stock assets and other components subject to their respective licences. ArtWorksIT reserves the right to showcase the completed project in its portfolio and marketing materials unless otherwise agreed upon in writing."),
    ("Confidentiality & Data Security", "Both parties agree to keep all shared information confidential and will not disclose it to third parties without prior written consent. This provision will remain effective after the project's completion."),
    ("Client Responsibilities & Project Scope", "The Client is responsible for providing all necessary project details, business rules, content, vendor information and timely feedback required for the project. The Client will provide timely access to relevant stakeholders for product decisions, approvals and clarification of workflows. Delays in requirements, content, approvals, feedback or other Client dependencies may result in corresponding changes to the project timeline."),
    ("Payment Terms & Financial Conditions", "All payments are due Net 7 days from the invoice date, and all prices are exclusive of GST. The total project fee excludes costs for external services that may be required. Work will begin once the initial payment is received. If there are delays in payments, work may be paused temporarily and resumed once outstanding payments are cleared. The platform will be scheduled for go-live upon receipt of the applicable go-live stage payment."),
    ("Termination, Dispute Resolution & Governing Law", "Either party may terminate the agreement in the event of a material breach by providing written notice. If terminated, Client agrees to compensate ArtWorksIT for services rendered and any applicable expenses. Disputes will first be addressed through good-faith negotiations. If unresolved, both parties consent to submit to the exclusive jurisdiction of the courts in Bangalore. This Agreement is governed by and construed under the laws of India, with Bangalore courts having exclusive jurisdiction."),
    ("Modifications & Entire Agreement", "This document contains the full understanding between the parties and supersedes previous agreements. Any modifications must be in writing and signed by both parties."),
    ("Assumptions", "The Client is responsible for providing the final requirements, business rules, content guidelines and necessary assets. Data entry and migration of extensive product, project or service data will be the responsibility of the Client unless specifically included in the proposed scope. Hosting and infrastructure management will be defined as part of the proposed implementation and commercial arrangement. Functionality not explicitly included in the proposed scope may be considered for a subsequent phase."),
]


def p(text, style="DocBody"):
    return Paragraph(escape(text), styles[style])


def section_header(number, title):
    return [
        Paragraph(f"{number} / {escape(title).upper()}", styles["SectionLabel"]),
        Paragraph(escape(title), styles["SectionTitle"]),
        Table([[""]], colWidths=[PAGE_W - 2 * MARGIN_X], rowHeights=[0.5],
              style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), LINE)])),
        Spacer(1, 6 * mm),
    ]


def info_table(items):
    data = [[Paragraph(label.upper(), styles["TinyBlue"]), Paragraph(escape(value), styles["SmallBold"])] for label, value in items]
    table = Table(data, colWidths=[48 * mm, 105 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CREAM),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def phase_card(stage):
    body = [
        Paragraph(escape(stage["title"]), styles["Subhead"]),
        Paragraph(f'{escape(stage["date"])} &nbsp;&nbsp;|&nbsp;&nbsp; {escape(stage["duration"])}', styles["TinyBlue"]),
        Spacer(1, 3 * mm),
    ]
    body.extend(p(text) for text in stage["paragraphs"])
    body.extend([
        Spacer(1, 2 * mm),
        Paragraph("DELIVERABLE", styles["TinyBlue"]),
        Paragraph(escape(stage["deliverable"]), styles["SmallBold"]),
    ])
    table = Table([[Paragraph(stage["number"], styles["SectionLabel"]), body]], colWidths=[14 * mm, 139 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CREAM),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
        ("LINEAFTER", (0, 0), (0, -1), 0.6, LINE),
    ]))
    return KeepTogether([table, Spacer(1, 5 * mm)])


def scope_card(number, title, paragraphs):
    body = [Paragraph(escape(title), styles["CardTitle"])]
    body.extend(p(text, "Small") for text in paragraphs)
    table = Table([[Paragraph(number, styles["TinyBlue"]), body]], colWidths=[13 * mm, 140 * mm])
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEABOVE", (0, 0), (-1, 0), 0.6, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return KeepTogether(table)


def term_card(index, title, body):
    content = [Paragraph(escape(title), styles["TermTitle"]), p(body, "TermBody")]
    table = Table([[Paragraph(f"{index:02d}", styles["TinyBlue"]), content]], colWidths=[13 * mm, 140 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CREAM),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEABOVE", (0, 0), (-1, 0), 0.6, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return KeepTogether([table, Spacer(1, 3 * mm)])


def cover_page(canvas, doc):
    canvas.saveState()
    image = PILImage.open(HERO_IMAGE).convert("RGB")
    iw, ih = image.size
    scale = max(PAGE_W / iw, PAGE_H / ih)
    draw_w, draw_h = iw * scale, ih * scale
    canvas.drawImage(ImageReader(image), (PAGE_W - draw_w) / 2, (PAGE_H - draw_h) / 2,
                     width=draw_w, height=draw_h, mask="auto")
    canvas.setFillColor(BROWN)
    canvas.setFillAlpha(0.58)
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setFillAlpha(1)
    canvas.setStrokeColor(colors.Color(1, 1, 1, alpha=0.18))
    for x in (MARGIN_X, PAGE_W / 2, PAGE_W - MARGIN_X):
        canvas.line(x, 0, x, PAGE_H)
    canvas.restoreState()


def content_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(WHITE)
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN_X, PAGE_H - 14 * mm, PAGE_W - MARGIN_X, PAGE_H - 14 * mm)
    canvas.setFont("Proposal-Bold", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN_X, PAGE_H - 10.2 * mm, "CHEF DESIGNS  /  WEBSITE PROPOSAL")
    canvas.setFont("Proposal", 7)
    canvas.drawRightString(PAGE_W - MARGIN_X, PAGE_H - 10.2 * mm, "31 AUGUST 2026")
    canvas.line(MARGIN_X, 12 * mm, PAGE_W - MARGIN_X, 12 * mm)
    canvas.drawString(MARGIN_X, 7.5 * mm, "PREPARED BY ARTWORKSIT")
    canvas.drawRightString(PAGE_W - MARGIN_X, 7.5 * mm, f"{doc.page - 1:02d}")
    canvas.restoreState()


def closing_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setStrokeColor(colors.HexColor("#30363D"))
    canvas.line(MARGIN_X, PAGE_H - 14 * mm, PAGE_W - MARGIN_X, PAGE_H - 14 * mm)
    canvas.setFillColor(colors.HexColor("#AAB3BC"))
    canvas.setFont("Proposal-Bold", 6.8)
    canvas.drawString(MARGIN_X, PAGE_H - 10.2 * mm, "CHEF DESIGNS  /  WEBSITE PROPOSAL")
    canvas.restoreState()


def schedule_table():
    weeks = ["10 Sep", "17 Sep", "24 Sep", "1 Oct", "8 Oct", "15 Oct", "22 Oct", "29 Oct"]
    tracks = [
        ("Research", 1, 1),
        ("Wireframing", 2, 1),
        ("Visual Design", 3, 2),
        ("Development & Testing", 5, 4),
    ]
    data = [[Paragraph("PHASE", styles["TinyBlue"])] + [Paragraph(w, styles["TinyBlue"]) for w in weeks]]
    for name, start, span in tracks:
        data.append([Paragraph(escape(name), styles["SmallBold"])] + ["" for _ in weeks])
    table = Table(data, colWidths=[39 * mm] + [14.25 * mm] * 8, rowHeights=[9 * mm] + [10 * mm] * 4)
    commands = [
        ("GRID", (0, 0), (-1, -1), 0.4, LINE),
        ("BACKGROUND", (0, 0), (-1, 0), CREAM),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ]
    shades = [colors.HexColor("#A8BED2"), colors.HexColor("#96785E"), colors.HexColor("#A99C57"), BLUE]
    for row, (_, start, span) in enumerate(tracks, start=1):
        commands.append(("BACKGROUND", (start, row), (start + span - 1, row), shades[row - 1]))
    table.setStyle(TableStyle(commands))
    return table


def build_story():
    story = []

    # Cover
    story.extend([
        Spacer(1, 26 * mm),
        Paragraph("CHEF DESIGNS", styles["CoverMetaValue"]),
        Spacer(1, 52 * mm),
        Paragraph("PROPOSED", styles["CoverKicker"]),
        Spacer(1, 5 * mm),
        Paragraph("Hospitality Solutions &amp;<br/>Professional Kitchen Products", styles["CoverTitle"]),
        Spacer(1, 58 * mm),
    ])
    cover_meta = [
        [Paragraph("PREPARED BY", styles["CoverMetaLabel"]), Paragraph("PROJECT START", styles["CoverMetaLabel"])],
        [Paragraph("ArtWorksIT", styles["CoverMetaValue"]), Paragraph("10 September 2026", styles["CoverMetaValue"])],
        [Paragraph("PROJECT COMPLETION", styles["CoverMetaLabel"]), Paragraph("PROJECT TIMELINE", styles["CoverMetaLabel"])],
        [Paragraph("10 November 2026", styles["CoverMetaValue"]), Paragraph("2 months", styles["CoverMetaValue"])],
    ]
    meta_table = Table(cover_meta, colWidths=[76.5 * mm, 76.5 * mm], rowHeights=[5 * mm, 10 * mm, 5 * mm, 10 * mm])
    meta_table.setStyle(TableStyle([
        ("LINEABOVE", (0, 0), (-1, 0), 0.8, colors.HexColor("#D7C8B8")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([meta_table, NextPageTemplate("Content"), PageBreak()])

    # Objective
    story.extend(section_header("01", "Project Objective"))
    story.extend([
        p("Chef Designs is a hospitality-focused company working across hotel interiors, back-of-house setup, consulting, kitchen solutions and the manufacture and sale of professional kitchen products.", "Lead"),
        p("The proposed website will bring these capabilities together under one umbrella website, allowing Chef Designs to showcase its expertise to hospitality businesses while also presenting its product range to vendors and businesses interested in sourcing and white-labelling these products."),
        p("The proposed website will serve two primary audiences: hospitality businesses looking for Chef Designs' services and expertise, and vendors and businesses interested in sourcing or white-labelling Chef Designs' products."),
        Spacer(1, 7 * mm),
        info_table([
            ("Client contact", "Vishal Sharma"),
            ("Project start", "10 September 2026"),
            ("Project completion", "10 November 2026"),
            ("Project timeline", "2 months"),
        ]),
        Spacer(1, 8 * mm),
        Paragraph("THE PROPOSAL AT A GLANCE", styles["SectionLabel"]),
        p("A single responsive platform will unite hospitality services, projects, professional kitchen products, RFQs and trade enquiries. The experience will present Chef Designs as a comprehensive hospitality partner while giving each audience a clear path to the information most relevant to them."),
        PageBreak(),
    ])

    # Timeline
    story.extend(section_header("02", "Project Scope & Timelines"))
    story.extend([
        p("We propose a structured process that brings the service and product sides of Chef Designs together within one clear, responsive website experience.", "Lead"),
        schedule_table(),
        Spacer(1, 4 * mm),
        p("The proposed timeline covers research in Week 1, wireframing in Week 2, visual design in Weeks 3 to 4, and development and testing in Weeks 5 to 8.", "Small"),
        Spacer(1, 8 * mm),
    ])
    story.extend(phase_card(stage) for stage in STAGES[:2])
    story.append(PageBreak())
    story.extend(section_header("02", "Project Phases - Continued"))
    story.extend(phase_card(stage) for stage in STAGES[2:])
    story.extend([
        Spacer(1, 4 * mm),
        info_table([
            ("Research", "1 week"),
            ("Wireframing & UX", "1 week"),
            ("Visual design", "2 weeks"),
            ("Development & testing", "4 weeks"),
        ]),
        PageBreak(),
    ])

    # Website scope
    story.extend(section_header("03", "The Website"))
    story.extend([
        p("The proposed website will serve as the digital presence for the entire Chef Designs business, bringing its complete range of hospitality solutions, consulting services, interior expertise, kitchen solutions and professional products under one cohesive platform.", "Lead"),
        p("The website will present Chef Designs as a comprehensive hospitality partner rather than separating the business into distinct services."),
        Spacer(1, 5 * mm),
    ])
    story.extend(scope_card(*item) for item in SCOPES[:3])
    story.append(PageBreak())
    story.extend(section_header("03", "Website Scope - Continued"))
    story.extend(scope_card(*item) for item in SCOPES[3:])
    story.extend([
        Spacer(1, 7 * mm),
        Paragraph("SYSTEM OVERVIEW", styles["SectionLabel"]),
        Paragraph("One platform for the complete business", styles["Subhead"]),
    ])
    system = Table([
        [Paragraph("VISITORS &amp; BUSINESSES", styles["SmallBold"]), Paragraph("CHEF DESIGNS", styles["SmallBold"]), Paragraph("SERVICES &amp; PRODUCTS", styles["SmallBold"])],
        [Paragraph("Enter by service, product or requirement", styles["Small"]), Paragraph("Complete digital presence", styles["Small"]), Paragraph("Projects, catalogue, RFQs and trade", styles["Small"])],
    ], colWidths=[51 * mm] * 3)
    system.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CREAM),
        ("BOX", (0, 0), (-1, -1), 0.8, BLUE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([system, PageBreak()])

    # Boundaries and stack
    story.extend(section_header("04", "Scope Boundaries"))
    story.extend([
        p("The proposed website is primarily intended as a corporate and product catalogue website with enquiry-generation capabilities. The RFQ functionality is intended to capture enquiries and route them to the Chef Designs team for further discussion.", "Lead"),
        Paragraph("THE FOLLOWING ARE OUTSIDE THE PROPOSED SCOPE", styles["SectionLabel"]),
    ])
    boundary_list = ListFlowable(
        [ListItem(p(item, "DocBody"), leftIndent=6) for item in BOUNDARIES],
        bulletType="bullet", bulletColor=BLUE, leftIndent=18, bulletFontName="Proposal-Bold",
    )
    story.extend([
        boundary_list,
        Spacer(1, 10 * mm),
        Paragraph("05 / PROPOSED TECH STACK", styles["SectionLabel"]),
        Paragraph("Proposed Tech Stack", styles["Subhead"]),
        info_table([
            ("01", "Laravel"),
            ("02", "TailwindCSS"),
            ("03", "GSAP"),
            ("04", "Supporting JavaScript technologies"),
        ]),
        PageBreak(),
    ])

    # Commercials and support
    story.extend(section_header("06", "Pricing & Milestones"))
    story.extend([
        p("The total proposed project fee is ₹3,50,000 + GST.", "Lead"),
        p("The proposed payment structure consists of three milestones."),
        Spacer(1, 4 * mm),
    ])
    pricing = Table([
        [Paragraph("MILESTONE", styles["TinyBlue"]), Paragraph("TIMELINE", styles["TinyBlue"]), Paragraph("PAYMENT", styles["TinyBlue"])],
        [p("Initiation", "SmallBold"), p("10 September 2026", "Small"), p("₹1,15,500 (33%)", "SmallBold")],
        [p("Design Handoff", "SmallBold"), p("Following completion of visual design", "Small"), p("₹1,15,500 (33%)", "SmallBold")],
        [p("Go-Live", "SmallBold"), p("10 November 2026", "Small"), p("₹1,19,000 (34%)", "SmallBold")],
    ], colWidths=[43 * mm, 67 * mm, 43 * mm])
    pricing.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_LIGHT),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (-1, 0), (-1, -1), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.extend([
        pricing,
        Spacer(1, 12 * mm),
        Paragraph("07 / SUPPORT &amp; MAINTENANCE", styles["SectionLabel"]),
        Paragraph("Support &amp; Maintenance", styles["Subhead"]),
    ])
    support_rows = []
    for index, item in enumerate(SUPPORT, start=1):
        support_rows.append([Paragraph(f"{index:02d}", styles["TinyBlue"]), p(item, "Small")])
    support_table = Table(support_rows, colWidths=[13 * mm, 140 * mm])
    support_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEABOVE", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.extend([support_table, PageBreak()])

    # Terms
    story.extend(section_header("08", "Terms & Assumptions"))
    story.append(p("The following terms, assumptions and commercial conditions form part of this proposal.", "Lead"))
    story.append(Spacer(1, 2 * mm))
    for index, (title, body) in enumerate(TERMS, start=1):
        if index == 5:
            story.append(PageBreak())
            story.extend(section_header("08", "Terms & Assumptions - Continued"))
        story.append(term_card(index, title, body))

    # Closing
    story.extend([NextPageTemplate("Closing"), PageBreak(), Spacer(1, 30 * mm)])
    story.extend([
        Paragraph("THANK YOU", styles["CoverKicker"]),
        Spacer(1, 7 * mm),
        Paragraph("Ready to build one digital home for the complete Chef Designs business.", styles["ClosingTitle"]),
        Spacer(1, 12 * mm),
        Paragraph("This proposal has been prepared by ArtWorksIT for Chef Designs.", styles["ClosingBody"]),
        Spacer(1, 34 * mm),
    ])
    agency = Image(str(AGENCY_LOGO), width=22 * mm, height=22 * mm)
    signature = Image(str(SIGNATURE), width=48 * mm, height=26.3 * mm)
    closing_info = Table([
        [agency, signature],
        [Paragraph("<b>ArtWorksIT</b><br/><font color='#AAB3BC'>artworksit.com</font>", styles["ClosingBody"]),
         Paragraph("<font color='#77A5D2'>PREPARED BY</font><br/><b>Uday Rathore</b><br/><font color='#AAB3BC'>+91 87927 45204</font>", styles["ClosingBody"])],
    ], colWidths=[76.5 * mm, 76.5 * mm])
    closing_info.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
        ("LINEABOVE", (0, 0), (-1, 0), 0.6, colors.HexColor("#3A424A")),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(closing_info)
    return story


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    frame = Frame(MARGIN_X, BOTTOM, PAGE_W - 2 * MARGIN_X, PAGE_H - TOP - BOTTOM, id="main")
    doc = BaseDocTemplate(
        str(OUTPUT), pagesize=A4, leftMargin=MARGIN_X, rightMargin=MARGIN_X,
        topMargin=TOP, bottomMargin=BOTTOM,
        title="Chef Designs Website Proposal", author="ArtWorksIT",
        subject="Hospitality Solutions and Professional Kitchen Products website proposal",
    )
    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=[frame], onPage=cover_page),
        PageTemplate(id="Content", frames=[frame], onPage=content_page),
        PageTemplate(id="Closing", frames=[frame], onPage=closing_page),
    ])
    doc.build(build_story())
    copyfile(OUTPUT, PUBLIC_OUTPUT)
    print(f"Created {OUTPUT}")
    print(f"Copied  {PUBLIC_OUTPUT}")


if __name__ == "__main__":
    main()
