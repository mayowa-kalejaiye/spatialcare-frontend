import styles from "./Hospitals.module.css";

const hospitals = [
  {
    name: "Lagos University Teaching Hospital",
    location: "Idi-Araba, Lagos",
    rating: 4.8,
    reviews: 1204,
    distance: "1.2 miles away",
    open: true,
    specialties: ["General Practice", "Cardiology", "Neurology"],
    imageBg: "#D1D5DB", // placeholder color
    badge: "Featured",
    premium: true,
  },
  {
    name: "National Hospital Abuja",
    location: "Central Business District, Abuja",
    rating: 4.6,
    reviews: 892,
    distance: "2.4 miles away",
    open: true,
    specialties: ["General Practice", "Oncology", "Maternity"],
    imageBg: "#E5E7EB",
    badge: "Verified",
    premium: false,
  },
  {
    name: "St. Nicholas Hospital",
    location: "Lagos Island, Lagos",
    rating: 4.9,
    reviews: 2341,
    distance: "0.8 miles away",
    open: false,
    specialties: ["Dermatology", "Eye Care", "Psychiatry"],
    imageBg: "#F3F4F6",
    badge: "Featured",
    premium: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={styles.star}
          style={{ color: s <= Math.floor(rating) ? "#F59E0B" : "#D1D5DB" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Hospitals() {
  return (
    <section className="section" id="hospitals">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label" style={{ color: "#3B82F6", textAlign: "left" }}>Verified Facilities</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>Verified hospitals near you</h2>
          </div>
          <button className={styles.dropdownBtn}>
            Sort By
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.grid}>
          {hospitals.map((h, i) => (
            <article key={h.name} className={styles.card} id={`hospital-${i}`}>
              <div className={styles.cardImage} style={{ background: h.imageBg }}>
                <div className={styles.imageOverlay}>
                  <span className={styles.badgeLeft}>{h.badge}</span>
                  <button className={styles.heartBtn}>♡</button>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{h.name}</h3>
                  {h.premium && <span className={styles.premiumBadge}>Premium Service</span>}
                </div>

                <div className={styles.cardLocation}>
                  {h.distance} · {h.location}
                </div>

                <div className={styles.cardRating}>
                  <StarRating rating={h.rating} />
                  <span className={styles.ratingValue}>{h.rating}</span>
                  <span className={styles.reviewCount}>({h.reviews.toLocaleString()} reviews)</span>
                  <span className={styles.ratingText}>- Excellent</span>
                </div>

                <div className={styles.specialties}>
                  <span className={`${styles.specialty} ${h.open ? styles.specialtyGreen : styles.specialtyRed}`}>
                    {h.open ? "Open Now" : "Closed"}
                  </span>
                  {h.specialties.map((s) => (
                    <span key={s} className={styles.specialty}>{s}</span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a href="#" className={`btn btn-primary ${styles.bookBtn}`} style={{ background: "var(--primary-100)", color: "var(--primary-dark)" }}>
                    See Details
                  </a>
                  <button className={styles.phoneBtn}>
                    📞
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
