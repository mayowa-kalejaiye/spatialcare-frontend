"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReportModal from "../ui/ReportModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "/facilities" },
  { label: "Chat", href: "/chat" },
  { label: "Profile", href: "/profile" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="header-logo">
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20.66 7v10L12 22l-8.66-5V7L12 2z" fill="#D8B4FE" />
              <path d="M12 4.31L18.66 8.1v7.79L12 19.69l-6.66-3.8V8.1L12 4.31z" fill="#A855F7" />
              <circle cx="12" cy="12" r="3" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>CareBridge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className={styles.cta}>
          <button className="btn btn-secondary" onClick={() => setIsReportOpen(true)}>Report</button>
        </div>
      </div>

      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </header>
  );
}
