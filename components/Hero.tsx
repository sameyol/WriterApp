import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">YOUTUBE SCRIPTWRITER & CONTENT WRITER</p>

        <h1>
          Stories that capture <em>attention.</em>
          <br />
          Content that gets results.
        </h1>

        <p className="hero-description">
          I create engaging, research-driven scripts, articles, SEO content, and social media content for creators, businesses, and brands.
        </p>

        <div className="hero-buttons">
          <Link href="#work" className="primary-button">
            View My Work
          </Link>

          <Link href="#contact" className="secondary-button">
            Hire Me
          </Link>
        </div>
      </div>

      <div className="hero-note">
        <p>WRITING NOTE</p>

        <blockquote>
          “Good writing doesn&apos;t just deliver information. It makes the
          reader want to keep reading.”
        </blockquote>

        <span>— Samuel</span>
      </div>
    </section>
  );
}