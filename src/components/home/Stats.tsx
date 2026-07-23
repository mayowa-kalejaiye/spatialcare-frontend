import styles from "./Stats.module.css";

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
            <div key={stat.label} className={styles.statCard} id={`stat-${i}`}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
