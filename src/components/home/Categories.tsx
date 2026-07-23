import styles from "./Categories.module.css";
import Link from "next/link";

const categories = [
  { name: "Emergency Care", count: "2,841 facilities", color: "#FFFFFF", image: "/images/categories/emergency.svg" },
  { name: "Maternal Care", count: "2,841 facilities", color: "#E2E8F0", image: "/images/categories/maternal.svg" },
  { name: "HIV/AIDS", count: "2,841 facilities", color: "#FECDD3", image: "/images/categories/hiv.svg" },
  { name: "Malaria treatment", count: "2,841 facilities", color: "#D1E3D3", image: "/images/categories/malaria.svg" },
  { name: "Vaccination", count: "2,841 facilities", color: "#E0F2FE", image: "/images/categories/vaccination.svg" },
  { name: "Blood bank", count: "2,841 facilities", color: "#F5D0D0", image: "/images/categories/blood_bank.svg" },
  { name: "Diagnostic and lab", count: "2,841 facilities", color: "#E9E1F9", image: "/images/categories/diagnostic.svg" },
  { name: "Mental health", count: "2,841 facilities", color: "#F5DADA", image: "/images/categories/mental_health.svg" },
  { name: "Child health care", count: "2,841 facilities", color: "#D3E0DF", image: "/images/categories/child_health.svg" },
  { name: "Tuberculosis", count: "2,841 facilities", color: "#FCE7F3", image: "/images/categories/tuberculosis.svg" },
];

export default function Categories() {
  return (
    <section className="section" id="categories" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label" style={{ color: "var(--green)" }}>BHCPF COVERAGE</span>
          <h2 className="section-title">100% Free Health Coverage</h2>
          <p className="section-subtitle">
            Explore the key healthcare services and treatments fully covered by the Basic Health Care Provision Fund.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <Link key={cat.name} href="/facilities" className={styles.card} style={{ background: cat.color }} id={`category-${i}`}>
              <div className={styles.info}>
                <div className={styles.name}>{cat.name}</div>
                <div className={styles.count}>{cat.count}</div>
              </div>
              <div className={styles.imageWrapper}>
                <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "40px" }}>
          <Link href="/facilities" className="btn btn-outline-primary">View Full Coverage Details</Link>
        </div>
      </div>
    </section>
  );
}
