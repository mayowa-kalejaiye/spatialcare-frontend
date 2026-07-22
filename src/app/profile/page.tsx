import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        
        {/* Profile Header */}
        <section className={styles.profileHeader}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>CM</div>
          </div>
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>Chizaram Mayowa Musa</h1>
            <p className={styles.userEmail}>chizaram.musa@example.com</p>
            <p className={styles.userPhone}>+234 800 123 4567</p>
          </div>
          <button className={`btn btn-outline-primary ${styles.editBtn}`}>Edit Profile</button>
        </section>

        {/* Dashboard Grid */}
        <div className={styles.dashboardGrid}>
          {/* Card 1: Appointments */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} style={{ background: "var(--primary-50)", color: "var(--primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Upcoming Appointments</h2>
            </div>
            <div className={styles.emptyState}>
              <p>No upcoming appointments.</p>
              <button className="btn btn-primary" style={{ marginTop: "12px", padding: "8px 16px" }}>Book Now</button>
            </div>
          </div>

          {/* Card 2: Saved Facilities */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} style={{ background: "var(--secondary-light)", color: "var(--secondary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Saved Facilities</h2>
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <div>
                  <strong>Lagos University Teaching Hospital</strong>
                  <p>1.2 miles away</p>
                </div>
                <button className={styles.iconBtn}>→</button>
              </li>
              <li className={styles.listItem}>
                <div>
                  <strong>St. Nicholas Hospital</strong>
                  <p>0.8 miles away</p>
                </div>
                <button className={styles.iconBtn}>→</button>
              </li>
            </ul>
          </div>

          {/* Card 3: Report History */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} style={{ background: "#E0F2FE", color: "#0284C7" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className={styles.cardTitle}>My Reports</h2>
            </div>
            <div className={styles.emptyState}>
              <p>You haven't filed any issue reports.</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <section className={styles.settingsSection}>
          <h2 className={styles.settingsTitle}>Settings & Preferences</h2>
          <div className={styles.settingsList}>
            <button className={styles.settingsItem}>
              <span>Personal Information</span>
              <span>→</span>
            </button>
            <button className={styles.settingsItem}>
              <span>Language</span>
              <span>English</span>
            </button>
            <button className={styles.settingsItem}>
              <span>Notification Preferences</span>
              <span>→</span>
            </button>
            <button className={`${styles.settingsItem} ${styles.logoutBtn}`}>
              <span>Log Out</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
