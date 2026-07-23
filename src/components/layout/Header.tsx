"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReportModal from "../ui/ReportModal";
import EmergencyModal from "../ui/EmergencyModal";

const navLinks = [
  { label: "Find Care", href: "/facilities" },
  { label: "Ask AI", href: "/chat" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and past the header height
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${!isVisible ? styles.hidden : ""}`}>
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
          <span className={styles.logoText}>SpatialCare</span>
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
          <button onClick={() => setIsEmergencyOpen(true)} className={styles.emergencyBtn}>
            Emergency
          </button>
          
          <button className={styles.iconBtn} aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className={styles.notificationDot}></span>
          </button>

          <Link href="/profile" className={styles.profileDropdown}>
            <div className={styles.avatar}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
      <EmergencyModal isOpen={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
    </header>
  );
}
