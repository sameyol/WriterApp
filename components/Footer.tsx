import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link href="/" className="logo">
          Sameyol<span> Writes</span>
        </Link>

        <p>
          Writer, researcher, and content creator.
        </p>
      </div>

      <div className="footer-links">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#work">Writing</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <a href="#" className="back-to-top">
        Back to top
        <FiArrowUp size={16} />
      </a>

      <div className="copyright">
        © {new Date().getFullYear()} Sameyol. All rights reserved.
      </div>
    </footer>
  );
}
