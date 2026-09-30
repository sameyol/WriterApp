import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">WRITER & CONTENT CREATOR</p>

        <h1>
          Words that <em>inform,</em>
          <br />
          connect & inspire.
        </h1>

        <p className="hero-description">
          I create clear, engaging, and well-researched content for
          businesses, brands, publications, and audiences that value
          great writing.
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