import styles from "./Rights.module.css";

const counters = [
  { value: "6,742", label: "Successful referrals", color: "#FBBF24" }, // Yellow
  { value: "5,120", label: "Free consultations", color: "#A855F7" }, // Purple
  { value: "1,883", label: "Legal queries resolved", color: "#60A5FA" }, // Blue
  { value: "4,210", label: "Patient advocates", color: "#F472B6" }, // Pink
];

const features = [
  "No hidden fees, completely free",
  "Confidential and secure",
  "Legal representation included",
  "Available 24/7",
];

export default function Rights() {
  return (
    <section className="section" id="rights" style={{ background: "var(--gray-100)" }}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.badgeLabel}>
            <span className={styles.dot}></span>
            Know Your Rights
          </div>
          <h2 className={styles.title}>
            Your healthcare rights.<br />
            <span className={styles.titleHighlight}>completely free.</span>
          </h2>
          <p className={styles.desc}>
            Every Nigerian deserves access to quality healthcare and the knowledge of their rights. SpatialCare provides free legal health guidance, patient advocacy, and rights education.
          </p>

          <div className={styles.features}>
            {features.map((f) => (
              <div key={f} className={styles.feature}>
                <span className={styles.checkIcon}>✓</span>
                {f}
              </div>
            ))}
          </div>

          <a href="#" className="btn btn-primary" style={{ marginTop: "32px" }}>
            Learn Your Rights
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.countersGrid}>
            {counters.map((c, i) => (
              <div key={c.label} className={styles.counterCard} id={`counter-${i}`}>
                <div className={styles.counterValue} style={{ color: c.color }}>{c.value}</div>
                <div className={styles.counterLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
