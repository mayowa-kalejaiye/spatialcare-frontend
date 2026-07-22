import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "“Your platform is brilliant. We could have spent hours finding a hospital with an incubator. Because of SpatialCare, we found one in minutes. Thank you!”",
    name: "Tosin Ojo",
    time: "Mother of 2",
    color: "#FEE2E2",
    avatarBg: "#EF4444",
    avatarInitial: "TO"
  },
  {
    quote: "“We checked prices for the test across hospitals in our area. The SpatialCare platform showed us a closer hospital with the test at half the price! Completely free saving network!”",
    name: "Oluwakemi A.",
    time: "Mother of two",
    color: "#E0F2FE",
    avatarBg: "#3B82F6",
    avatarInitial: "KC"
  },
  {
    quote: "“I was billed for a free procedure. I checked on the platform and saw it was free! SpatialCare patient advocate helped me get my money back from the hospital.”",
    name: "Ibrahim M.",
    time: "Local Trader",
    color: "#FEF3C7",
    avatarBg: "#F59E0B",
    avatarInitial: "LA"
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-label" style={{ color: "#3B82F6" }}>Testimonials</span>
          <h2 className="section-title">Lives impacted every day</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={styles.card} style={{ background: t.color }} id={`testimonial-${i}`}>
              <div className={styles.quoteIcon} style={{ color: t.avatarBg }}>&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.avatarBg }}>
                  {t.avatarInitial}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.time}>{t.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
