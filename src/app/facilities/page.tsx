import Hospitals from "@/components/facilities/Hospitals";
import { Suspense } from "react";

export default function FacilitiesPage() {
  return (
    <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
      <Suspense fallback={<div style={{ padding: "100px", textAlign: "center" }}>Loading Facilities...</div>}>
        <Hospitals />
      </Suspense>
    </main>
  );
}
