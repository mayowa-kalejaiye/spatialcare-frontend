"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ReportModal.module.css";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.alertIcon}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Report a Charge or Issue
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.desc}>
            It is <strong>strictly illegal</strong> for BHCPF accredited facilities to charge you for covered primary healthcare services.
          </p>

          <div className={styles.hotlineBox}>
            <div className={styles.hotlineLabel}>OFFICIAL HOTLINE</div>
            <div className={styles.hotlineValue}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.phoneIcon}>
                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
               </svg>
               07007001111
            </div>
            <p className={styles.hotlineSub}>Call toll-free to report any illegal charges immediately.</p>
          </div>

          <div className={styles.divider}>
            <span>or report online</span>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Facility Name</label>
              <input type="text" placeholder="Which PHC?" />
            </div>
            <div className={styles.formGroup}>
              <label>What happened?</label>
              <textarea placeholder="Describe the issue..." rows={4}></textarea>
            </div>
            <button type="button" className={styles.submitBtn}>
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
