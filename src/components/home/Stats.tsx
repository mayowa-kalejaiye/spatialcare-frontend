"use client";
import styles from "./Stats.module.css";
import { motion } from "framer-motion";

const stats = [
  { value: "8.4k+", label: "Qualified Doctors" },
  { value: "36", label: "States" },
  { value: "37M+", label: "Patients Served" },
  { value: "520+", label: "Partner Hospitals" },
];

export default function Stats() {
  return (
    <section className={styles.stats} id="stats">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className={styles.statCard} 
              id={`stat-${i}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
