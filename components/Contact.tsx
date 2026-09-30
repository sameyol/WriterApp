import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <p className="section-label-text">05 — CONTACT</p>

        <h2>
          Have a story
          <br />
          <em>worth telling?</em>
        </h2>

        <p className="contact-description">
          Tell me about your project, your goals, and what you need written.
          I&apos;d be happy to discuss how I can help.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:sameyolresource@gmail.com" className="contact-link">
          <FiMail size={21} />

          <span>sameyolresource@gmail.com</span>

          <FiArrowUpRight size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/sameyolresources/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiLinkedin size={21} />

          <span>LinkedIn</span>

          <FiArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}