import styles from "./HowItWorks.module.css";

const steps = [
  {
    imageBg: "#FEE2E2",
    icon: "🗺️",
    title: "Select Your Location",
    description: "Tell us your location. We'll instantly show you the best doctors, clinics, and hospitals in your area.",
  },
  {
    imageBg: "#DBEAFE",
    icon: "❤️",
    title: "Find a Doctor",
    description: "Browse verified profiles, read reviews, and compare consultation fees to find the perfect doctor.",
  },
  {
    imageBg: "#FEF3C7",
    icon: "📍",
    title: "Manage & Receive Care",
    description: "Book appointments instantly online, manage your health records securely, and get care when you need it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <span className="section-label" style={{ color: "#3B82F6" }}>How it works</span>
          <h2 className="section-title">Healthcare help in 3 steps</h2>
          <p className="section-subtitle">
            From search to appointment — we&apos;ve made finding quality healthcare as easy as possible, at zero cost to you.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.stepCard} id={`step-${i + 1}`}>
              <div className={styles.imagePlaceholder} style={{ background: step.imageBg }}>
                <span className={styles.imageIcon}>{step.icon}</span>
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
