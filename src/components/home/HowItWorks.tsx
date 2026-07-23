"use client";
import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";

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
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div 
              key={step.title} 
              className={styles.stepCard} 
              id={`step-${i + 1}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            >
              <img src={step.badge} alt={`Step ${i + 1} Badge`} className={styles.badgeImg} />
              <div className={styles.imageWrapper}>
                <img src={step.image} alt={step.title} className={styles.stepImage} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
