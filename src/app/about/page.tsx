import styles from "./About.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main className="main-content pt-20">
        
        {/* Hero Section */}
        <section className={styles.aboutHero}>
          <h1 className={styles.heroTitle}>
            Bridging the gap to <br />
            <span className={styles.heroHighlight}>quality healthcare.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            SpatialCare is on a mission to ensure every Nigerian can easily discover, verify, and access the free health services guaranteed to them.
          </p>
        </section>

        {/* Expressive Zig-Zag Image Section */}
        <section className={styles.zigZagSection}>
          
          {/* Row 1 */}
          <div className={styles.row}>
            <div className={styles.textContent}>
              <span className={styles.eyebrow}>Discover Care</span>
              <h2 className={styles.title}>Find equipped facilities in your immediate area</h2>
              <p className={styles.description}>
                Using our advanced spatial mapping, we instantly pinpoint BHCPF-accredited hospitals and clinics around you. Never travel far for essential services again.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="/images/steps/step1.jpg" alt="Search Your Location" className={styles.mainImage} />
              <img src="/images/steps/badge1.png" alt="Location Badge" className={`${styles.floatingBadge} ${styles.badgeTopLeft}`} />
            </div>
          </div>

          {/* Row 2 (Reverse) */}
          <div className={styles.rowReverse}>
            <div className={styles.textContent}>
              <span className={styles.eyebrow}>Verify Quality</span>
              <h2 className={styles.title}>Compare and verify services before you go</h2>
              <p className={styles.description}>
                Not all facilities offer the same care. Our platform gives you real-time visibility into available treatments, free services, and community ratings so you can make informed decisions.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="/images/steps/step2.jpg" alt="Verify and Compare" className={styles.mainImage} />
              <img src="/images/steps/badge2.png" alt="Verification Badge" className={`${styles.floatingBadge} ${styles.badgeBottomRight}`} />
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.row}>
            <div className={styles.textContent}>
              <span className={styles.eyebrow}>Instant Access</span>
              <h2 className={styles.title}>Navigate and receive the care you deserve</h2>
              <p className={styles.description}>
                From routine checkups to emergency routing, we connect you directly with the right healthcare professionals. Health access is a right, and we're here to help you claim it.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="/images/steps/step3.jpg" alt="Navigate to Care" className={styles.mainImage} />
              <img src="/images/steps/badge3.jpg" alt="Care Badge" className={`${styles.floatingBadge} ${styles.badgeTopRight}`} />
            </div>
          </div>

        </section>

        {/* Vision / Mission Statement */}
        <section className={styles.vision}>
          <div className={styles.visionBgImages}>
            <img src="/images/categories/emergency.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/maternal.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/malaria.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/vaccination.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/blood_bank.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/child_health.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/mental_health.svg" alt="" className={styles.bgImage} />
            <img src="/images/categories/tuberculosis.svg" alt="" className={styles.bgImage} />
          </div>
          
          <div className={styles.visionContent}>
            <h2 className={styles.visionTitle}>Our Commitment</h2>
            <p className={styles.visionText}>
              "We believe that healthcare shouldn't be a privilege for the few, but a fundamental right for all. SpatialCare is built to empower communities with knowledge, access, and support."
            </p>
            <div style={{ marginTop: "40px" }}>
              <Link href="/facilities" className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "16px" }}>
                Find Free Care Near You
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
