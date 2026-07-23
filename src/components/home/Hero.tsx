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
          <button className="btn btn-primary" style={{ padding: "12px 32px" }} onClick={handleSearch}>Search</button>
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
