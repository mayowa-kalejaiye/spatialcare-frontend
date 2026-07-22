"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./TopFacilities.module.css";
import cardStyles from "../facilities/Hospitals.module.css";

interface Facility {
  id: number;
  facility_name: string;
  lga: string;
  ward: string;
  state: string;
  google_maps_url: string;
  displayImage?: string;
}

const AVAILABLE_IMAGES = [
  "/images/hospitals/1.jpg",
  "/images/hospitals/2.jpg",
  "/images/hospitals/3.jpg",
  "/images/hospitals/4.jpeg",
  "/images/hospitals/5.jpeg",
  "/images/hospitals/6.jpeg",
  "/images/hospitals/7.jpeg",
  "/images/hospitals/8.jpg",
  "/images/hospitals/9.jpg",
  "/images/hospitals/10.jpg",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={cardStyles.stars}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={cardStyles.star}
          style={{ color: s <= Math.floor(rating) ? "#F59E0B" : "#D1D5DB" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TopFacilities() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/facilities/?state=fct&limit=3&offset=0")
      .then(res => res.json())
      .then(data => {
        if (data && data.facilities) {
          const shuffledImages = [...AVAILABLE_IMAGES].sort(() => 0.5 - Math.random());
          const withImages = data.facilities.map((f: Facility, i: number) => ({
            ...f,
            displayImage: shuffledImages[i % shuffledImages.length]
          }));
          setFacilities(withImages);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.label}>TOP RATED FACILITIES</div>
            <h2 className={styles.title}>Verified hospitals near you</h2>
          </div>
          <Link href="/facilities" className={styles.viewAll}>
            View all <span>→</span>
          </Link>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px" }}>Loading top facilities...</div>
        ) : (
          <div className={cardStyles.grid}>
            {facilities.map((h, i) => (
              <article key={h.id} className={cardStyles.card} id={`top-hospital-${i}`}>
                <div 
                  className={cardStyles.cardImage} 
                  style={{ 
                    backgroundImage: `url(${h.displayImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={cardStyles.imageOverlay}>
                    <span className={cardStyles.badgeLeft}>Verified</span>
                    <button className={cardStyles.heartBtn}>♡</button>
                  </div>
                </div>

                <div className={cardStyles.cardBody}>
                  <div className={cardStyles.cardHeader}>
                    <h3 className={cardStyles.cardName}>{h.facility_name}</h3>
                  </div>

                  <div className={cardStyles.cardLocation}>
                    {h.ward && `${h.ward}, `}{h.lga}, {h.state}
                  </div>

                  <div className={cardStyles.cardRating}>
                    <StarRating rating={4.5} />
                    <span className={cardStyles.ratingValue}>4.5</span>
                    <span className={cardStyles.reviewCount}>(Verified)</span>
                    <span className={cardStyles.ratingText}>- Excellent</span>
                  </div>

                  <div className={cardStyles.specialties}>
                    <span className={`${cardStyles.specialty} ${cardStyles.specialtyGreen}`}>
                      Open Now
                    </span>
                    <span className={cardStyles.specialty}>General Practice</span>
                  </div>

                  <div className={cardStyles.actions}>
                    {h.google_maps_url ? (
                      <a href={h.google_maps_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
                          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                        </svg>
                        Get Directions
                      </a>
                    ) : (
                      <button className="btn" style={{ width: "100%", background: "var(--gray-200)", color: "var(--gray-500)", cursor: "not-allowed", display: "flex", justifyContent: "center" }} disabled>
                        Directions Unavailable
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
