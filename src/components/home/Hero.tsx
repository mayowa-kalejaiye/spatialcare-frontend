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
          if (Array.isArray(data)) setLgasList(data);
        })
        .catch(err => console.error(err));
      
      setSelectedLga("");
      setSelectedWard("");
      setWardsList([]);
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
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        {/* Left Floating Icon */}
        <div className={styles.floatLeft} aria-hidden="true">
          <div className={styles.iconCircle} style={{ background: "var(--primary-100)" }}>
            <span style={{ fontSize: "40px" }}>🩺</span>
          </div>
        </div>

        {/* Right Floating Icon */}
        <div className={styles.floatRight} aria-hidden="true">
          <div className={styles.iconCircle} style={{ background: "var(--secondary-light)" }}>
            <span style={{ fontSize: "40px" }}>✚</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Find Healthcare,{" "}
          <span className={styles.headlineHighlight}>Fast.</span>
          <span className={styles.crossIcon} aria-hidden="true">✚</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          Discover verified doctors, clinics, and hospitals near you. Compare options and book appointments in minutes.
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
          <button className="btn btn-primary" style={{ padding: "12px 32px" }} onClick={handleSearch}>Search</button>
        </div>

        {/* Avatars */}
        <div className={styles.trusted}>
          <div className={styles.avatars}>
            <div className={styles.avatar} style={{ background: "#FCA5A5" }}>👩🏽</div>
            <div className={styles.avatar} style={{ background: "#93C5FD", zIndex: 2 }}>👨🏿</div>
            <div className={styles.avatar} style={{ background: "#FCD34D", zIndex: 3 }}>👩🏾</div>
            <div className={styles.avatar} style={{ background: "#86EFAC", zIndex: 4 }}>👨🏽</div>
            <div className={styles.avatar} style={{ background: "#D8B4FE", zIndex: 5 }}>👩🏿</div>
          </div>
          <span className={styles.trustedText}>Trusted by over 4M+ users</span>
        </div>
      </div>
    </section>
  );
}
