"use client";
import { useState, useEffect } from "react";
import styles from "./Coverage.module.css";
import { Shield, Loader2, AlertCircle, Info, Stethoscope, Baby, Heart, Activity } from "lucide-react";

interface Benefit {
  id: number;
  service: string;
  category: string;
  level: string;
  details: string;
  limits: string | null;
  access_point: string;
}

export default function CoveragePage() {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/benefits/")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch coverage data");
        return res.json();
      })
      .then(data => {
        if (data.benefits && Array.isArray(data.benefits)) {
          setBenefits(data.benefits);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch(err => {
        console.error(err);
        setError("Could not load coverage information at this time.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Group benefits by category
  const categories = benefits.reduce((acc, benefit) => {
    if (!acc[benefit.category]) {
      acc[benefit.category] = [];
    }
    acc[benefit.category].push(benefit);
    return acc;
  }, {} as Record<string, Benefit[]>);

  const getCategoryIcon = (category: string) => {
    const c = category.toLowerCase();
    if (c.includes("paediatric") || c.includes("child")) return <Baby className={styles.icon} />;
    if (c.includes("maternal") || c.includes("women")) return <Heart className={styles.icon} />;
    if (c.includes("surgery") || c.includes("consultation")) return <Stethoscope className={styles.icon} />;
    return <Activity className={styles.icon} />;
  };

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>BHCPF Coverage</h1>
        <p className={styles.subtitle}>
          Understand exactly what health services, treatments, and procedures are available to you completely free of charge under the Basic Health Care Provision Fund.
        </p>
      </div>

      <div className={styles.content}>
        {loading ? (
          <div className={styles.loadingState}>
            <Loader2 size={40} className="spin" color="var(--primary)" />
            <p>Loading coverage details...</p>
          </div>
        ) : error ? (
          <div className={styles.errorState}>
            <AlertCircle size={40} color="var(--secondary)" />
            <p>{error}</p>
          </div>
        ) : (
          Object.entries(categories).map(([category, items]) => (
            <section key={category} className={styles.categoryGroup}>
              <h2 className={styles.categoryTitle}>
                <div className={styles.iconWrapper}>
                  {getCategoryIcon(category)}
                </div>
                {category}
              </h2>
              
              <div className={styles.grid}>
                {items.map(item => (
                  <article key={item.id} className={styles.card}>
                    <h3 className={styles.serviceName}>{item.service}</h3>
                    
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgePrimary}`}>
                        {item.access_point}
                      </span>
                      <span className={`${styles.badge} ${styles.badgeSecondary}`}>
                        {item.level} Level
                      </span>
                    </div>

                    <p className={styles.details}>{item.details}</p>

                    {item.limits && (
                      <div className={styles.limits}>
                        <AlertCircle size={18} className={styles.limitsIcon} />
                        <span>{item.limits}</span>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
