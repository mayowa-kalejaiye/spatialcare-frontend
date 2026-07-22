import styles from "./Categories.module.css";

const categories = [
  { name: "Emergency Care", count: "48 hospitals", color: "#F3F4F6", icon: "🚑" },
  { name: "Primary Care", count: "124 doctors", color: "#E0F2FE", icon: "🩺" },
  { name: "HIV/AIDS", count: "36 specialists", color: "#FEE2E2", icon: "🎗️" },
  { name: "Infectious diseases", count: "215 doctors", color: "#DCFCE7", icon: "🦠" },
  { name: "Pharmacy", count: "380 stores", color: "#F3E8FF", icon: "💊" },
  { name: "Blood Bank", count: "89 clinics", color: "#FFE4E6", icon: "🩸" },
  { name: "Hospital/Clinic", count: "77 centers", color: "#E0E7FF", icon: "🏥" },
  { name: "Cardiology", count: "67 surgeons", color: "#FCE7F3", icon: "🫀" },
  { name: "Optician Care", count: "58 clinics", color: "#E0F2FE", icon: "👁️" },
  { name: "Dentistry", count: "93 doctors", color: "#FCE7F3", icon: "🦷" },
];

export default function Categories() {
  return (
    <section className="section" id="categories" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label" style={{ color: "var(--green)" }}>Browse by Category</span>
          <h2 className="section-title">Browse by healthcare category</h2>
          <p className="section-subtitle">
            Find specialists and facilities across every medical discipline — all verified and near you.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <button key={cat.name} className={styles.card} style={{ background: cat.color }} id={`category-${i}`}>
              <div className={styles.info}>
                <div className={styles.name}>{cat.name}</div>
                <div className={styles.count}>{cat.count}</div>
              </div>
              <div className={styles.icon}>{cat.icon}</div>
            </button>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "40px" }}>
          <a href="#" className="btn btn-outline-primary">View All 38 Categories</a>
        </div>
      </div>
    </section>
  );
}
