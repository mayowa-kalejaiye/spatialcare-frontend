import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Hospitals from "@/components/Hospitals";
import Rights from "@/components/Rights";
import Emergency from "@/components/Emergency";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <Categories />
      <Hospitals />
      <Rights />
      <Emergency />
      <Testimonials />
    </main>
  );
}
