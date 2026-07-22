import styles from "./Emergency.module.css";

const emergencies = [
  { icon: "🖤", title: "Heart Attack", desc: "Cardiac emergencies", color: "#FEE2E2" },
  { icon: "🧠", title: "Stroke", desc: "Neurological emergencies", color: "#FCE7F3" },
  { icon: "👶", title: "Infant", desc: "Pediatric emergencies", color: "#FEF3C7" },
  { icon: "🚑", title: "Accident / Trauma", desc: "Severe injuries", color: "#FFE4E6" },
  { icon: "🩸", title: "Severe Bleeding", desc: "Hemorrhage care", color: "#FEE2E2" },
  { icon: "🐍", title: "Snakebite", desc: "Venomous bites", color: "#DCFCE7" },
  { icon: "🔥", title: "Severe Burns", desc: "Thermal emergencies", color: "#E0F2FE" },
  { icon: "☠️", title: "Poisoning", desc: "Toxicology cases", color: "#F3E8FF" },
];

export default function Emergency() {
  return (
    <section className="section" id="emergency">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Emergency routing for every situation</h2>
          <p className="section-subtitle">
            If you have an emergency, our intelligent routing system connects you to the nearest equipped hospital.
          </p>
        </div>

        <div className={styles.grid}>
          {emergencies.map((e, i) => (
            <div key={e.title} className={styles.card} style={{ background: e.color }} id={`emergency-${i}`}>
              <div className={styles.icon}>{e.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{e.title}</h3>
                <p className={styles.cardDesc}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "48px" }}>
          <button className="btn btn-secondary" style={{ padding: "12px 32px" }}>
            Route me to a hospital
          </button>
        </div>
      </div>
    </section>
  );
}
