"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Hero.module.css";

export default function Hero() {
  const router = useRouter();

  const [statesList, setStatesList] = useState<string[]>([]);
  const [lgasList, setLgasList] = useState<string[]>([]);
  const [wardsList, setWardsList] = useState<string[]>([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const [isLocating, setIsLocating] = useState(false);
  const [pendingLocation, setPendingLocation] = useState<{lga?: string, ward?: string} | null>(null);

  useEffect(() => {
    fetch("/api/locations/states")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setStatesList(data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`/api/locations/lgas?state=${selectedState}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setLgasList(data);
            if (pendingLocation?.lga) {
              const matchedLga = data.find(l => pendingLocation.lga!.toLowerCase().includes(l.toLowerCase()) || l.toLowerCase().includes(pendingLocation.lga!.toLowerCase()));
              if (matchedLga) {
                setSelectedLga(matchedLga);
              }
              setPendingLocation(null);
            }
          }
        })
        .catch(err => console.error(err));

      if (!pendingLocation) {
        setSelectedLga("");
        setSelectedWard("");
        setWardsList([]);
      }
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedLga) {
      fetch(`/api/locations/wards?state=${selectedState}&lga=${selectedLga}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setWardsList(data);
        })
        .catch(err => console.error(err));

      setSelectedWard("");
    }
  }, [selectedState, selectedLga]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedState) params.append("state", selectedState);
    if (selectedLga) params.append("lga", selectedLga);
    if (selectedWard) params.append("ward", selectedWard);

    router.push(`/facilities?${params.toString()}`);
  };

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data && data.address) {
            const stateName = data.address.state?.replace(' State', '') || 'FCT'; // Fallback to FCT for demo if not found
            const lgaName = data.address.county?.replace(' Local Government Area', '') || data.address.city || 'AMAC';
            
            // Check if state exists, otherwise just default to FCT for demo purposes
            let matchedState = statesList.find(s => s.toLowerCase() === stateName.toLowerCase() || stateName.toLowerCase().includes(s.toLowerCase()));
            
            if (!matchedState && statesList.includes("FCT")) matchedState = "FCT"; // Ensure demo works

            if (matchedState) {
              setPendingLocation({ lga: lgaName });
              setSelectedState(matchedState);
            }
          }
        } catch (err) {
          console.error("Reverse geocoding failed", err);
          // Fallback demo
          if (statesList.includes("FCT")) setSelectedState("FCT");
          setPendingLocation({ lga: "AMAC" });
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Error getting location", error);
        setIsLocating(false);
        alert("Unable to retrieve your location. Please check your browser permissions.");
      },
      { timeout: 10000 }
    );
  };
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        {/* Shield Icon (Middle Left) */}
        <div className={styles.floatLeftMiddle} aria-hidden="true">
          <img src="/images/hero/hero-icon2.svg" alt="Protection Shield" className={styles.heroIconImg} style={{ animationDelay: '0s' }} />
        </div>

        {/* Stethoscope Icon (Bottom Left) */}
        <div className={styles.floatLeftBottom} aria-hidden="true">
          <img src="/images/hero/hero-icon3.svg" alt="Stethoscope" className={styles.heroIconImg} style={{ animationDelay: '1.5s', width: '120px' }} />
        </div>

        {/* Pink Cross Icon (Top Right) */}
        <div className={styles.floatRightTop} aria-hidden="true">
          <img src="/images/hero/hero-icon1.svg" alt="Medical Heart Cross" className={styles.heroIconImg} style={{ animationDelay: '0.7s', width: '110px' }} />
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Find Healthcare,{" "}
          <span className={styles.headlineHighlight}>Fast.</span>
          <span className={styles.crossIcon} aria-hidden="true">✚</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          Locate accredited hospitals, discover free government services, verify treatment availability, <br className="hidden md:block" />and get emergency routing, instantly, from anywhere in Nigeria.
        </p>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <div className={styles.dropdownGroup}>
            <select className={styles.searchDropdown} value={selectedState} onChange={e => setSelectedState(e.target.value)}>
              <option value="" disabled>Select State</option>
              {statesList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <span className={styles.divider}></span>
            <select className={styles.searchDropdown} value={selectedLga} onChange={e => setSelectedLga(e.target.value)} disabled={!selectedState || lgasList.length === 0}>
              <option value="">All Local Governments</option>
              {lgasList.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <span className={styles.divider}></span>
            <select className={styles.searchDropdown} value={selectedWard} onChange={e => setSelectedWard(e.target.value)} disabled={!selectedLga || wardsList.length === 0}>
              <option value="">All Wards</option>
              {wardsList.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
            <button 
              className="btn" 
              style={{ padding: "12px 16px", background: "#EFF6FF", color: "#3B82F6", border: "1px solid #BFDBFE", display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '48px' }} 
              onClick={handleLocate}
              disabled={isLocating}
              aria-label="Use my current location"
              title="Use my current location"
            >
              {isLocating ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                  <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
              )}
            </button>
            <button className="btn btn-primary" style={{ padding: "12px 32px", flex: 1 }} onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Avatars */}
        <div className={styles.trusted}>
          <div className={styles.avatars}>
            {[
              { src: "/images/avatars/avatar1.png", color: "#FF8EAA" },
              { src: "/images/avatars/avatar2.png", color: "#6EE7B7" },
              { src: "/images/avatars/avatar3.png", color: "#3B82F6" },
              { src: "/images/avatars/avatar4.png", color: "#E5F90B" },
              { src: "/images/avatars/avatar5.png", color: "#B49082" },
            ].map((av, idx) => (
              <img
                key={idx}
                src={av.src}
                alt={`User ${idx + 1}`}
                className={styles.avatarImg}
                style={{
                  backgroundColor: av.color,
                  boxShadow: `0 0 0 2px white, 0 0 0 4px ${av.color}`,
                  zIndex: idx + 1
                }}
              />
            ))}
          </div>
          <span className={styles.trustedText}>To serve over 200 million Nigerians</span>
        </div>
      </div>
    </section>
  );
}
