"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./EmergencyModal.module.css";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    lga: "",
    ward: "",
    facility_name: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would POST this to the actual emergency endpoint
      // await fetch('/api/emergency', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      console.log("Emergency Payload:", formData);
      
      // Simulate API call
      await new Promise(r => setTimeout(r, 1000));
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ message: "", lga: "", ward: "", facility_name: "" });
      }, 2000);
    } catch (error) {
      console.error("Emergency routing failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Report Corruption / Illegal Fees
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: '#059669' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Report Received</h3>
              <p style={{ fontSize: '14px', color: '#4B5563' }}>Thank you. We will investigate this facility immediately and take necessary action.</p>
            </div>
          ) : (
            <>
              <p className={styles.desc}>
                Healthcare under BHCPF is 100% free. If a facility is demanding payment for covered services, please report them immediately.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>What happened?</label>
                  <input 
                    type="text" 
                    placeholder="e.g. They asked me to pay 5000 Naira for registration" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Local Government Area (LGA)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. AMAC" 
                    required 
                    value={formData.lga}
                    onChange={(e) => setFormData({...formData, lga: e.target.value})}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Ward</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Wuse" 
                    required 
                    value={formData.ward}
                    onChange={(e) => setFormData({...formData, ward: e.target.value})}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Specific Facility (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Wuse District Hospital" 
                    value={formData.facility_name}
                    onChange={(e) => setFormData({...formData, facility_name: e.target.value})}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </button>
              </form>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>Or speak directly to our anti-corruption unit:</p>
                <a href="tel:08002427343" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 'bold', color: '#059669', textDecoration: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  0800-BHCPF-HELP
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
