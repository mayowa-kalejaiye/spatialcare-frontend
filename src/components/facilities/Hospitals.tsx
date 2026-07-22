"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./Hospitals.module.css";

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

const DIVERSE_PROMPTS = [
  { label: "Is antenatal care free here?", getPrompt: (f: string) => `Is antenatal care free at ${f}?` },
  { label: "What services are covered?", getPrompt: (f: string) => `What services does BHCPF cover at ${f}?` },
  { label: "Are immunizations free?", getPrompt: (f: string) => `Do they offer free child immunizations at ${f}?` },
  { label: "Is emergency care covered?", getPrompt: (f: string) => `Is emergency care covered at ${f}?` },
  { label: "Free malaria treatment?", getPrompt: (f: string) => `Can I get malaria treatment for free at ${f}?` },
  { label: "Family planning available?", getPrompt: (f: string) => `Are family planning services available at ${f}?` }
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
  const searchParams = useSearchParams();

  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);

  const [states, setStates] = useState<string[]>([]);
  const [lgas, setLgas] = useState<string[]>([]);
  const [wards, setWards] = useState<string[]>([]);

  // Initialize with URL params if available, otherwise default fct for state
  const [selectedState, setSelectedState] = useState(searchParams.get("state") || "fct"); 
  const [selectedLga, setSelectedLga] = useState(searchParams.get("lga") || "");
  const [selectedWard, setSelectedWard] = useState(searchParams.get("ward") || "");

  const [searchQuery, setSearchQuery] = useState("");

  // Fetch states
  useEffect(() => {
    fetch("/api/locations/states")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setStates(data);
      })
      .catch(err => console.error("Error fetching states:", err));
  }, []);

  // Fetch LGAs
  useEffect(() => {
    if (selectedState) {
      fetch(`/api/locations/lgas?state=${selectedState}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setLgas(data);
        })
        .catch(err => console.error("Error fetching LGAs:", err));

      // Reset dependent filters
      setSelectedLga("");
      setSelectedWard("");
      setWards([]);
    }
  }, [selectedState]);

  // Fetch Wards
  useEffect(() => {
    if (selectedState && selectedLga) {
      fetch(`/api/locations/wards?state=${selectedState}&lga=${selectedLga}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setWards(data);
        })
        .catch(err => console.error("Error fetching Wards:", err));

      setSelectedWard("");
    }
  }, [selectedState, selectedLga]);

  // Fetch Facilities
  useEffect(() => {
    setLoading(true);
    let url = `/api/facilities/?state=${selectedState}&limit=10&offset=0`;
    if (selectedLga) url += `&lga=${selectedLga}`;
    if (selectedWard) url += `&ward=${selectedWard}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.facilities) {
          const shuffledImages = [...AVAILABLE_IMAGES].sort(() => 0.5 - Math.random());
          const withImages = data.facilities.map((f: Facility, i: number) => ({
            ...f,
            displayImage: shuffledImages[i % shuffledImages.length]
          }));
          setFacilities(withImages);
        } else {
          setFacilities([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching facilities:", err);
        setLoading(false);
      });
  }, [selectedState, selectedLga, selectedWard]);

  const filteredFacilities = facilities.filter(f =>
    f.facility_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section" id="hospitals">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h2 className="section-title" style={{ textAlign: "left" }}>Nearest Facilities</h2>
            <p className={styles.subHeading}>Explore the nearest verified hospitals near you.</p>
          </div>

          <div className={styles.controlsArea}>
            <div className={styles.searchBar}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search facilities..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.filtersWrapper}>
              <select
                className={styles.filterSelect}
                value={selectedState}
                onChange={e => setSelectedState(e.target.value)}
              >
                <option value="" disabled>Select State</option>
                <option value="fct">FCT</option>
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <select
                className={styles.filterSelect}
                value={selectedLga}
                onChange={e => setSelectedLga(e.target.value)}
                disabled={!selectedState || lgas.length === 0}
              >
                <option value="">All LGAs</option>
                {lgas.map(l => <option key={l} value={l}>{l}</option>)}
              </select>

              <select
                className={styles.filterSelect}
                value={selectedWard}
                onChange={e => setSelectedWard(e.target.value)}
                disabled={!selectedLga || wards.length === 0}
              >
                <option value="">All Wards</option>
                {wards.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={styles.loadingState}>Loading facilities...</div>
        ) : filteredFacilities.length === 0 ? (
          <div className={styles.loadingState}>No facilities found. Try adjusting your filters.</div>
        ) : (
          <div className={styles.grid}>
            {filteredFacilities.map((h, i) => (
              <article key={h.id} className={styles.card} id={`hospital-${i}`}>
                <div 
                  className={styles.cardImage} 
                  style={{ 
                    backgroundImage: `url(${h.displayImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={styles.imageOverlay}>
                    <span className={styles.badgeLeft}>Verified</span>
                    <button className={styles.heartBtn}>♡</button>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardName}>{h.facility_name}</h3>
                  </div>

                  <div className={styles.cardLocation}>
                    {h.ward && `${h.ward}, `}{h.lga}, {h.state}
                  </div>

                  <div className={styles.cardRating}>
                    <StarRating rating={4.5} />
                    <span className={styles.ratingValue}>4.5</span>
                    <span className={styles.reviewCount}>(Verified)</span>
                  </div>

                  <div className={styles.specialties}>
                    <span className={`${styles.specialty} ${styles.specialtyGreen}`}>
                      Open Now
                    </span>
                    <span className={styles.specialty}>General Practice</span>
                  </div>

                  <div className={styles.askAIPills}>
                    <div className={styles.aiHeader}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"></path>
                        <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      <span>Ask AI</span>
                    </div>
                    <div className={styles.pillContainer}>
                      <Link 
                        href={`/chat?state=${encodeURIComponent(h.state)}&lga=${encodeURIComponent(h.lga)}&ward=${encodeURIComponent(h.ward || '')}&prompt=${encodeURIComponent(DIVERSE_PROMPTS[i % DIVERSE_PROMPTS.length].getPrompt(h.facility_name))}`}
                        className={styles.aiPill}
                      >
                        {DIVERSE_PROMPTS[i % DIVERSE_PROMPTS.length].label}
                      </Link>
                      <Link 
                        href={`/chat?state=${encodeURIComponent(h.state)}&lga=${encodeURIComponent(h.lga)}&ward=${encodeURIComponent(h.ward || '')}&prompt=${encodeURIComponent(DIVERSE_PROMPTS[(i + 3) % DIVERSE_PROMPTS.length].getPrompt(h.facility_name))}`}
                        className={styles.aiPill}
                      >
                        {DIVERSE_PROMPTS[(i + 3) % DIVERSE_PROMPTS.length].label}
                      </Link>
                    </div>
                  </div>

                  <div className={styles.actions}>
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
