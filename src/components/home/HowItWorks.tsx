import styles from "./HowItWorks.module.css";

const steps = [
  {
    image: "/images/steps/step1.jpg",
    badge: "/images/steps/badge1.png",
    badgeColor: "#3B82F6",
    title: "Search Your Location",
    description: "Enter your address, LGA, or state. Or allow GPS for instant nearby results. SpatialCare finds all accredited facilities within your area.",
  },
  {
    image: "/images/steps/step2.jpg",
    badge: "/images/steps/badge2.png",
    badgeColor: "#A855F7",
    title: "Verify & Compare",
    description: "See government-verified facilities, available free services, real-time bed counts, ratings, and opening hours all in one place.",
  },
  {
    image: "/images/steps/step3.jpg",
    badge: "/images/steps/badge3.jpg",
    badgeColor: "#F472B6",
    title: "Navigate & Receive Care",
    description: "Get instant directions, call the facility directly, or use emergency routing to reach the right care at the right time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <span 
            className="section-label" 
            style={{ 
              color: "#3B82F6", 
              backgroundColor: "#EFF6FF", 
              padding: "6px 16px", 
              borderRadius: "999px", 
              fontSize: "12px", 
              fontWeight: 700, 
              letterSpacing: "0.05em", 
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "16px"
            }}
          >
            How SpatialCare Works
          </span>
          <h2 className="section-title">Healthcare help in 3 steps</h2>
          <p className="section-subtitle">
            From search to care in under 2 minutes designed for every<br />Nigerian, in every situation.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.stepCard} id={`step-${i + 1}`}>
              <img src={step.badge} alt={`Step ${i + 1} Badge`} className={styles.badgeImg} />
              <div className={styles.imageWrapper}>
                <img src={step.image} alt={step.title} className={styles.stepImage} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
