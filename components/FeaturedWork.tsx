import Link from "next/link";

const work = [
  {
    number: "01",
    category: "TECHNICAL WRITING",
    title: "10 Things Every Beginner Web Developer Should Learn",
    description:
      "A beginner-friendly article covering HTML, CSS, JavaScript, Git, APIs, responsive design, debugging, deployment, databases, and project building.",
    tags: ["Technical Writing", "Education", "Web Development"],
    href: "/work/web-development",
  },
  {
    number: "02",
    category: "SOCIAL MEDIA",
    title: "30 Social Media Content Ideas for a Small Business",
    description:
      "A practical guide covering educational, promotional, storytelling, engagement, customer-focused posts, and calls to action.",
    tags: ["Content Strategy", "Social Media", "Business"],
    href: "/work/social-media-content",
  },
  {
    number: "03",
    category: "HISTORICAL WRITING",
    title: "The Mali Empire and the Rise of Mansa Musa",
    description:
      "A documentary-style historical story exploring Mali's trade networks, political power, scholarship, and Mansa Musa's famous pilgrimage.",
    tags: ["Research", "History", "Documentary"],
    href: "/work/mali-empire",
  },
  {
    number: "04",
    category: "HISTORICAL WRITING",
    title: "Great Zimbabwe: Who Really Built This Ancient City?",
    description:
      "An accessible historical piece exploring Great Zimbabwe, its monumental stone architecture, and the evidence surrounding its builders.",
    tags: ["Research", "African History", "Storytelling"],
    href: "/work/great-zimbabwe",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="work-section">
      <div className="work-heading">
        <div>
          <p className="section-label-text">03 — SELECTED WORK</p>

          <h2>
            A few things
            <br />
            I&apos;ve <em>written.</em>
          </h2>
        </div>

        <p>
          A selection of writing samples demonstrating my approach to
          research, storytelling, technical subjects, and content creation.
        </p>
      </div>

      <div className="work-grid">
        {work.map((item) => (
          <article className="work-card" key={item.number}>
            <div className="work-top">
              <span>{item.number}</span>
              <span>{item.category}</span>
            </div>

            <h3>{item.title}</h3>

            <p className="work-description">{item.description}</p>

            <div className="work-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <Link href={item.href} className="work-link">
              Read project
              <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}