"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo + Name */}
      <Link href="/" className="brand" onClick={closeMenu}>
        <Image
          src="/logo.jpg"
          alt="Samuel Writes Logo"
          width={45}
          height={45}
          priority
          className="brand-logo"
        />

        <span className="brand-name logo">
          Sameyol<span className=""> Writes</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <Link href="#about" onClick={closeMenu}>
          About
        </Link>

        <Link href="#services" onClick={closeMenu}>
          Services
        </Link>

        <Link href="#work" onClick={closeMenu}>
          Writing
        </Link>

        <Link href="#contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          href="#contact"
          className="mobile-contact-button"
          onClick={closeMenu}
        >
          Let&apos;s Work Together
          <FiArrowUpRight size={16} />
        </Link>
      </div>


      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </nav>
  );
}

