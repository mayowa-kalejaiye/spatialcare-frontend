"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.css";

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  disabled?: boolean;
}

export default function CustomSelect({ options, value, onChange, placeholder, disabled = false }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button 
        type="button"
        className={styles.trigger}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={value ? "" : styles.triggerPlaceholder}>
          {value || placeholder}
        </span>
        <svg 
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && !disabled && (
        <div className={styles.dropdown}>
          {options.length === 0 ? (
            <div className={styles.option} style={{ color: "var(--gray-400)" }}>No options available</div>
          ) : (
            options.map((opt) => (
              <div 
                key={opt}
                className={`${styles.option} ${value === opt ? styles.optionSelected : ""}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
