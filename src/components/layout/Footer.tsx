import styles from "./Footer.module.css";

const links = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Product: ["Find Doctors", "Hospitals", "Pharmacies", "Telemedicine"],
  Resources: ["Patient Rights", "Health Articles", "Emergency Guide", "Help Center"],
  Contact: ["Support", "Contact Us", "Twitter/X", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L20.66 7v10L12 22l-8.66-5V7L12 2z" fill="#D8B4FE"/>
                <path d="M12 4.31L18.66 8.1v7.79L12 19.69l-6.66-3.8V8.1L12 4.31z" fill="white"/>
                <circle cx="12" cy="12" r="3" fill="#A855F7"/>
              </svg>
            </div>
            <span className={styles.logoText}>SpatialCare</span>
          </a>
          <p className={styles.brandDesc}>
            Connecting you to the best healthcare options around you. Discover free appointments, verified hospitals, and fast emergency routing, completely free.
          </p>
          <div className={styles.companyBadge}>
            <span className={styles.dot}></span>
            Company ID
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksGrid}>
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>{category}</h3>
              <ul className={styles.linkList}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; 2026 SpatialCare, a product of Spatial Care Inc.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>X</a>
            <a href="#" className={styles.social}>In</a>
            <a href="#" className={styles.social}>Fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
