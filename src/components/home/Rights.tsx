"use client";
import Link from "next/link";
import styles from "./Rights.module.css";
import { motion } from "framer-motion";

const counters = [
  { value: "8,464", label: "Verified PHC Facilities", bgColor: "#B28CF7" }, 
  { value: "37", label: "Covered States & FCT", bgColor: "#FA86AA" }, 
  { value: "774", label: "Accessible LGAs", bgColor: "#089063" }, 
  { value: "100%", label: "Completely Free", bgColor: "#A7BD18" }, 
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
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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

          <Link href="/about" className="btn btn-primary" style={{ marginTop: "32px" }}>
            Learn Your Rights
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.countersGrid}>
            {counters.map((c, i) => (
              <motion.div 
                key={c.label} 
                className={styles.counterCard} 
                id={`counter-${i}`} 
                style={{ background: c.bgColor }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className={styles.counterValue} style={{ color: "#FFFFFF" }}>{c.value}</div>
                <div className={styles.counterLabel}>{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
