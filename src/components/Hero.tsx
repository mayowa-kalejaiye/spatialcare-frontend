"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        {/* Left Floating Icon */}
        <div className={styles.floatLeft} aria-hidden="true">
          <div className={styles.iconCircle} style={{ background: "var(--primary-100)" }}>
            <span style={{ fontSize: "40px" }}>🩺</span>
          </div>
        </div>

        {/* Right Floating Icon */}
        <div className={styles.floatRight} aria-hidden="true">
          <div className={styles.iconCircle} style={{ background: "var(--secondary-light)" }}>
            <span style={{ fontSize: "40px" }}>✚</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Find Healthcare,{" "}
          <span className={styles.headlineHighlight}>Fast.</span>
          <span className={styles.crossIcon} aria-hidden="true">✚</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          Discover verified doctors, clinics, and hospitals near you. Compare options and book appointments in minutes.
        </p>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <div className={styles.dropdownGroup}>
            <select className={styles.searchDropdown} defaultValue="">
              <option value="" disabled>Select State</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja (FCT)</option>
              <option value="kano">Kano</option>
            </select>
            <span className={styles.divider}></span>
            <select className={styles.searchDropdown} defaultValue="">
              <option value="" disabled>Local Government</option>
              <option value="ikeja">Ikeja</option>
              <option value="eti-osa">Eti-Osa</option>
              <option value="kano-municipal">Kano Municipal</option>
            </select>
            <span className={styles.divider}></span>
            <select className={styles.searchDropdown} defaultValue="">
              <option value="" disabled>Select Ward</option>
              <option value="ward1">Ward 1</option>
              <option value="ward2">Ward 2</option>
              <option value="ward3">Ward 3</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ padding: "12px 32px" }}>Search</button>
        </div>

        {/* Avatars */}
        <div className={styles.trusted}>
          <div className={styles.avatars}>
            <div className={styles.avatar} style={{ background: "#FCA5A5" }}>👩🏽</div>
            <div className={styles.avatar} style={{ background: "#93C5FD", zIndex: 2 }}>👨🏿</div>
            <div className={styles.avatar} style={{ background: "#FCD34D", zIndex: 3 }}>👩🏾</div>
            <div className={styles.avatar} style={{ background: "#86EFAC", zIndex: 4 }}>👨🏽</div>
            <div className={styles.avatar} style={{ background: "#D8B4FE", zIndex: 5 }}>👩🏿</div>
          </div>
          <span className={styles.trustedText}>Trusted by over 4M+ users</span>
        </div>
      </div>
    </section>
  );
}
