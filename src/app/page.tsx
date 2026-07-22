import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import Categories from "@/components/home/Categories";
import Rights from "@/components/home/Rights";
import Emergency from "@/components/home/Emergency";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <Categories />
      <Rights />
      <Emergency />
      <Testimonials />
    </main>
  );
}
