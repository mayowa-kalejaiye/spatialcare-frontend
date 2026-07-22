import styles from "./Emergency.module.css";
import Link from "next/link";

const emergencies = [
  { icon: "🖤", title: "Heart Attack", desc: "Nearest cardiac care unit" },
  { icon: "🧠", title: "Stroke", desc: "Stroke-ready facilities" },
  { icon: "🤱", title: "Labour", desc: "Available maternity beds" },
  { icon: "🚑", title: "Accident / Trauma", desc: "Trauma & A&E units" },
  { icon: "🩸", title: "Blood Transfusion", desc: "Blood banks nearby" },
  { icon: "🐍", title: "Snakebite", desc: "Antivenom stock verified" },
  { icon: "💨", title: "Breathing Difficulty", desc: "Respiratory emergency" },
  { icon: "⚠️", title: "Poisoning", desc: "Toxicology centres" },
];

export default function Emergency() {
  return (
    <section className="section" id="emergency">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Emergency routing for every situation</h2>
          <p className="section-subtitle">
            In a crisis, every second counts. SpatialCare routes you to the right facility instantly.
          </p>
        </div>

        <div className={styles.grid}>
          {emergencies.map((e, i) => (
            <div key={e.title} className={styles.card} id={`emergency-${i}`}>
              <div className={styles.icon}>{e.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{e.title}</h3>
                <p className={styles.cardDesc}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "48px" }}>
          <Link href="/facilities" className="btn btn-secondary" style={{ padding: "12px 32px" }}>
            Route me to a hospital
          </Link>
        </div>
      </div>
    </section>
  );
}
